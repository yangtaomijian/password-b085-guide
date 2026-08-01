(() => {
  "use strict";

  const initialize = () => {
    const root = document.querySelector("#gallery-locator-root");

    if (
      !root ||
      root.dataset.galleryLocatorInitialized === "true"
    ) {
      return;
    }

    root.dataset.galleryLocatorInitialized = "true";

  const EXPECTED_COUNTS = {
    Memories: 72,
    Trauma: 28
  };
  const DEBOUNCE_DELAY = 150;
  const records = [];
  const nonGalleryRecords = [];
  const searchRecords = [];
  const recordsByPosition = new Map();
  const recordsByName = new Map();

  const normalizeText = (value) =>
    value.replace(/\s+/g, " ").trim();

  const positionKey = (tab, row, column) =>
    `${tab.toLowerCase()}:${row}:${column}`;

  const readGallery = (selector) => {
    const grid = document.querySelector(selector);

    if (!grid) {
      throw new Error(`Gallery table container not found: ${selector}`);
    }

    const tab = grid.dataset.galleryTab;

    if (!Object.hasOwn(EXPECTED_COUNTS, tab)) {
      throw new Error(`Invalid Gallery tab: ${tab || "not set"}`);
    }

    const table = grid.querySelector("table");

    if (!table) {
      throw new Error(`${tab} Gallery table not found`);
    }

    table.querySelectorAll("tbody tr").forEach((rowElement) => {
      const cells = Array.from(rowElement.cells);
      const row = Number.parseInt(
        normalizeText(cells[0]?.textContent || ""),
        10
      );

      if (!Number.isInteger(row)) {
        throw new Error(`${tab} Gallery contains an unreadable row number`);
      }

      if (cells.length !== 5) {
        throw new Error(`${tab} row ${row} does not contain four CG cells`);
      }

      cells.slice(1).forEach((cellElement, index) => {
        const column = index + 1;
        const nameElement = cellElement.querySelector("code");
        const metadataElement = cellElement.querySelector("small");

        if (!nameElement || !metadataElement) {
          throw new Error(
            `${tab} row ${row}, column ${column} is incomplete`
          );
        }

        const cgName = normalizeText(nameElement.textContent);
        const metadata = normalizeText(metadataElement.textContent);
        const scriptElement = metadataElement.querySelector("code");
        const scriptLabel = normalizeText(
          scriptElement?.textContent || ""
        );
        const date = normalizeText(metadata.split("·")[0] || "");
        const id = `gallery-${tab.toLowerCase()}-r${row}-c${column}`;
        const record = {
          tab,
          row,
          column,
          cgName,
          metadata,
          date,
          scriptLabel,
          cellElement
        };

        if (recordsByName.has(cgName)) {
          throw new Error(`Duplicate CG name in coordinate tables: ${cgName}`);
        }

        if (recordsByPosition.has(positionKey(tab, row, column))) {
          throw new Error(
            `Duplicate coordinate: ${tab} row ${row}, column ${column}`
          );
        }

        cellElement.dataset.galleryTab = tab;
        cellElement.dataset.galleryRow = String(row);
        cellElement.dataset.galleryColumn = String(column);
        cellElement.dataset.galleryName = cgName;
        cellElement.id = id;

        records.push(record);
        recordsByPosition.set(positionKey(tab, row, column), record);
        recordsByName.set(cgName, record);
      });
    });
  };

  const showReadError = (error, message = "Unable to read Gallery data") => {
    console.error("Gallery locator data error:", error);
    root.innerHTML = "";

    const panel = document.createElement("section");
    panel.className = "gallery-locator gallery-locator-error";

    const heading = document.createElement("h2");
    heading.textContent = "CG Gallery Locator";

    const status = document.createElement("div");
    status.className = "gallery-locator-status";
    status.setAttribute("aria-live", "polite");
    status.textContent = message;

    panel.append(heading, status);
    root.append(panel);
  };

  try {
    readGallery("#gallery-memories");
    readGallery("#gallery-trauma");
  } catch (error) {
    showReadError(error);
    return;
  }

  const counts = records.reduce((result, record) => {
    result[record.tab] += 1;
    return result;
  }, { Memories: 0, Trauma: 0 });

  if (
    counts.Memories !== EXPECTED_COUNTS.Memories ||
    counts.Trauma !== EXPECTED_COUNTS.Trauma ||
    records.length !== 100
  ) {
    showReadError(
      new Error(
        `Expected Memories 72, Trauma 28, total 100; found ` +
        `Memories ${counts.Memories}, Trauma ${counts.Trauma}, ` +
        `total ${records.length}`
      )
    );
    return;
  }

  const readTriggerDetails = () => {
    const triggerIndex = document.querySelector("#gallery-trigger-index");

    if (!triggerIndex) {
      throw new Error("Complete trigger index not found: #gallery-trigger-index");
    }

    const details = [];
    const groups = triggerIndex.querySelectorAll(".gallery-trigger-group");

    groups.forEach((group) => {
      const category = normalizeText(group.dataset.category || "");
      const table = group.querySelector("table");

      if (!category || !table) {
        throw new Error("A trigger-index group is missing its category or table");
      }

      table.querySelectorAll("tbody tr").forEach((detailRowElement) => {
        const cells = Array.from(detailRowElement.cells);

        if (cells.length !== 4) {
          throw new Error(`${category} trigger-index row does not have four cells`);
        }

        const cgName = normalizeText(
          cells[0].querySelector("code")?.textContent || ""
        );
        const galleryFlag = normalizeText(cells[1].textContent || "");

        if (galleryFlag !== "Yes") {
          return;
        }

        if (!cgName) {
          throw new Error(`${category} trigger-index row is missing its CG name`);
        }

        const triggerText = normalizeText(
          cells[2].innerText || cells[2].textContent || ""
        );
        const triggerCodes = Array.from(cells[2].querySelectorAll("code"))
          .map((code) => normalizeText(code.textContent || ""))
          .filter(Boolean);
        const context = normalizeText(
          cells[3].innerText || cells[3].textContent || ""
        );

        details.push({
          cgName,
          category,
          galleryFlag,
          triggerText,
          triggerCodes,
          context,
          detailRowElement
        });
      });
    });

    return details;
  };

  const readNonGalleryDetails = () => {
    const index = document.querySelector("#gallery-non-gallery-index");
    const table = index?.querySelector("table");

    if (!index || !table) {
      throw new Error(
        "Non-Gallery index not found: #gallery-non-gallery-index"
      );
    }

    return Array.from(table.querySelectorAll("tbody tr")).map(
      (detailRowElement) => {
        const cells = Array.from(detailRowElement.cells);

        if (cells.length !== 4) {
          throw new Error(
            "A non-Gallery index row does not have four cells"
          );
        }

        const cgName = normalizeText(
          cells[0].querySelector("code")?.textContent || ""
        );
        const galleryFlag = normalizeText(cells[1].textContent || "");
        const triggerText = normalizeText(
          cells[2].innerText || cells[2].textContent || ""
        );
        const triggerCodes = Array.from(
          cells[2].querySelectorAll("code")
        )
          .map((code) => normalizeText(code.textContent || ""))
          .filter(Boolean);
        const context = normalizeText(
          cells[3].innerText || cells[3].textContent || ""
        );

        if (!cgName || galleryFlag !== "No") {
          throw new Error(
            "A non-Gallery index row has an invalid ID or Gallery flag"
          );
        }

        return {
          cgName,
          category: "Non-Gallery",
          galleryFlag,
          triggerText,
          triggerCodes,
          context,
          detailRowElement
        };
      }
    );
  };

  const ensureTriggerTableScrollers = () => {
    document.querySelectorAll(
      "#gallery-trigger-index .gallery-trigger-group table"
    ).forEach((table) => {
      if (table.parentElement?.classList.contains(
        "gallery-trigger-table-scroll"
      )) {
        return;
      }

      const scroller = document.createElement("div");
      scroller.className = "gallery-trigger-table-scroll";
      table.before(scroller);
      scroller.append(table);
    });
  };

  const ensureNonGalleryTableScroller = () => {
    const table = document.querySelector(
      "#gallery-non-gallery-index table"
    );

    if (
      !table ||
      table.parentElement?.classList.contains(
        "gallery-non-gallery-table-scroll"
      )
    ) {
      return;
    }

    const scroller = document.createElement("div");
    scroller.className = "gallery-non-gallery-table-scroll";
    table.before(scroller);
    scroller.append(table);
  };

  try {
    const details = readTriggerDetails();
    const nonGalleryDetails = readNonGalleryDetails();
    const detailsByName = new Map();
    const nonGalleryDetailsByName = new Map();

    details.forEach((detail) => {
      if (detailsByName.has(detail.cgName)) {
        throw new Error(`Duplicate CG name in trigger index: ${detail.cgName}`);
      }

      detailsByName.set(detail.cgName, detail);
    });

    nonGalleryDetails.forEach((detail) => {
      if (
        recordsByName.has(detail.cgName) ||
        nonGalleryDetailsByName.has(detail.cgName)
      ) {
        throw new Error(
          `Duplicate non-Gallery CG name: ${detail.cgName}`
        );
      }

      nonGalleryDetailsByName.set(detail.cgName, detail);
    });

    const missingNames = records
      .filter((record) => !detailsByName.has(record.cgName))
      .map((record) => record.cgName);
    const extraNames = details
      .filter((detail) => !recordsByName.has(detail.cgName))
      .map((detail) => detail.cgName);

    if (
      details.length !== 100 ||
      detailsByName.size !== 100 ||
      missingNames.length > 0 ||
      extraNames.length > 0
    ) {
      throw new Error(
        `The trigger index should match all 100 coordinate entries; found ` +
        `${details.length} details and ${detailsByName.size} unique names; ` +
        `missing [${missingNames.join(", ") || "none"}]; ` +
        `extra [${extraNames.join(", ") || "none"}]`
      );
    }

    if (
      nonGalleryDetails.length !== 4 ||
      nonGalleryDetailsByName.size !== 4
    ) {
      throw new Error(
        `Expected 4 non-Gallery records; found ` +
        `${nonGalleryDetails.length} rows and ` +
        `${nonGalleryDetailsByName.size} unique names`
      );
    }

    records.forEach((record) => {
      Object.assign(record, detailsByName.get(record.cgName));
      record.inGallery = true;
      record.searchText = [
        record.cgName,
        record.metadata,
        record.date,
        record.scriptLabel,
        record.triggerText,
        ...record.triggerCodes,
        record.context,
        record.category,
        record.tab,
        String(record.row),
        String(record.column),
        `${record.tab} ${record.row} ${record.column}`,
        `${record.tab} row ${record.row} column ${record.column}`,
        `row ${record.row} column ${record.column}`,
        `${record.tab} r${record.row} c${record.column}`,
        `r${record.row} c${record.column}`
      ].join(" ").toLowerCase();
    });

    nonGalleryDetails.forEach((detail) => {
      const record = {
        ...detail,
        inGallery: false,
        tab: null,
        row: null,
        column: null,
        cellElement: null,
        metadata: "",
        date: "",
        scriptLabel: detail.triggerCodes[1] || ""
      };

      record.searchText = [
        record.cgName,
        record.triggerText,
        ...record.triggerCodes,
        record.context,
        record.category,
        record.galleryFlag,
        "not in gallery"
      ].join(" ").toLowerCase();
      nonGalleryRecords.push(record);
    });

    searchRecords.push(...records, ...nonGalleryRecords);

    ensureTriggerTableScrollers();
    ensureNonGalleryTableScroller();
    console.info("Gallery locator data linked: 100 Gallery + 4 non-Gallery");
  } catch (error) {
    showReadError(error, "Unable to link Gallery data");
    return;
  }

  root.innerHTML = `
    <section class="gallery-locator" aria-labelledby="gallery-locator-title">
      <header class="gallery-locator-header">
        <h2 id="gallery-locator-title">CG Gallery Locator</h2>
        <p>Locate a CG by its in-game tab and grid position, or search by CG ID, trigger, context, or category.</p>
        <p class="gallery-locator-count">100 Gallery CGs loaded</p>
      </header>

      <fieldset class="gallery-locator-section gallery-locator-exact">
        <legend>Locate by position</legend>
        <div class="gallery-locator-controls">
          <label for="gallery-locator-tab">Tab</label>
          <select id="gallery-locator-tab">
            <option value="Memories">Memories</option>
            <option value="Trauma">Trauma</option>
          </select>

          <label for="gallery-locator-row">Row</label>
          <select id="gallery-locator-row"></select>

          <label for="gallery-locator-column">Column</label>
          <select id="gallery-locator-column">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button type="button" id="gallery-locator-go">Locate CG</button>
        </div>
        <div class="gallery-location-output">
          <div class="gallery-location-status" aria-live="polite"></div>
          <div class="gallery-location-detail" aria-live="polite"></div>
        </div>
      </fieldset>

      <fieldset class="gallery-locator-section gallery-locator-search">
        <legend>Search the Gallery</legend>
        <label for="gallery-locator-query">Search by CG ID, trigger location, context, category, or grid position</label>
        <div class="gallery-locator-search-row">
          <input
            id="gallery-locator-query"
            type="search"
            placeholder="For example: HossLibraryDiscovery or Memories row 6 column 4"
            autocomplete="off"
          >
          <button type="button" id="gallery-locator-clear">Clear</button>
        </div>
        <div class="gallery-search-status" aria-live="polite"></div>
        <div class="gallery-search-results"></div>
        <div class="gallery-search-detail" aria-live="polite"></div>
      </fieldset>
    </section>
  `;

  const tabSelect = root.querySelector("#gallery-locator-tab");
  const rowSelect = root.querySelector("#gallery-locator-row");
  const columnSelect = root.querySelector("#gallery-locator-column");
  const locateButton = root.querySelector("#gallery-locator-go");
  const searchInput = root.querySelector("#gallery-locator-query");
  const clearButton = root.querySelector("#gallery-locator-clear");
  const resultsElement = root.querySelector(
    ".gallery-search-results"
  );
  const locationStatusElement = root.querySelector(
    ".gallery-location-status"
  );
  const locationDetailElement = root.querySelector(
    ".gallery-location-detail"
  );
  const searchStatusElement = root.querySelector(
    ".gallery-search-status"
  );
  const searchDetailElement = root.querySelector(
    ".gallery-search-detail"
  );
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );
  let debounceTimer;
  let currentTarget = null;
  let currentMode = null;
  let currentResults = [];

  const rowsForTab = (tab) =>
    Array.from(
      new Set(
        records
          .filter((record) => record.tab === tab)
          .map((record) => record.row)
      )
    ).sort((left, right) => left - right);

  const populateRows = (tab, preferredRow = 1) => {
    const rows = rowsForTab(tab);
    rowSelect.replaceChildren();

    rows.forEach((row) => {
      const option = document.createElement("option");
      option.value = String(row);
      option.textContent = String(row);
      rowSelect.append(option);
    });

    rowSelect.value = rows.includes(preferredRow)
      ? String(preferredRow)
      : String(rows[0]);
  };

  const clearLocationOutput = () => {
    locationStatusElement.replaceChildren();
    locationDetailElement.replaceChildren();
  };

  const clearSearchOutput = () => {
    searchStatusElement.replaceChildren();
    resultsElement.replaceChildren();
    searchDetailElement.replaceChildren();
  };

  const createDetailField = (label, value, className = "") => {
    const field = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    if (className) {
      field.className = className;
    }

    term.textContent = label;
    description.textContent = value;
    field.append(term, description);
    return field;
  };

  const renderDetail = (record, targetElement) => {
    const card = document.createElement("section");
    card.className = "gallery-detail-card";

    const heading = document.createElement("h3");
    heading.textContent = record.cgName;

    const fields = document.createElement("dl");
    fields.className = "gallery-detail-grid";
    const detailFields = [
      createDetailField(
        record.inGallery ? "Gallery position" : "Gallery status",
        record.inGallery
          ? `${record.tab} · row ${record.row}, column ${record.column}`
          : "Not in Gallery"
      ),
      createDetailField("Category", record.category),
      createDetailField("Earliest normal trigger", record.triggerText)
    ];

    if (!record.inGallery && record.triggerCodes.length > 0) {
      detailFields.push(
        createDetailField(
          "Script location",
          record.triggerCodes.join(" / ")
        )
      );
    }

    detailFields.push(
      createDetailField(
        "In-game context",
        record.context,
        "gallery-detail-context"
      )
    );
    fields.append(...detailFields);

    card.append(heading, fields);
    targetElement.replaceChildren(card);
  };

  const clearMatchHighlights = () => {
    records.forEach(({ cellElement }) => {
      cellElement.classList.remove("gallery-cell-match");
    });
  };

  const clearTargetHighlight = () => {
    if (!currentTarget) {
      return;
    }

    currentTarget.cellElement.classList.remove("gallery-cell-target");

    if (
      currentTarget.cellElement.dataset.galleryTemporaryTabindex === "true"
    ) {
      currentTarget.cellElement.removeAttribute("tabindex");
      delete currentTarget.cellElement.dataset.galleryTemporaryTabindex;
    }

    currentTarget = null;
    currentMode = null;
  };

  const replaceUrl = ({
    includeLocation = true,
    includeQuery = true
  } = {}) => {
    const url = new URL(window.location.href);
    const query = searchInput.value.trim();

    if (includeLocation) {
      url.searchParams.set("tab", tabSelect.value.toLowerCase());
      url.searchParams.set("row", rowSelect.value);
      url.searchParams.set("col", columnSelect.value);
    } else {
      ["tab", "row", "col"].forEach((parameter) => {
        url.searchParams.delete(parameter);
      });
    }

    if (includeQuery && query) {
      url.searchParams.set("q", query);
    } else {
      url.searchParams.delete("q");
    }

    window.history.replaceState(null, "", url);
  };

  const locateRecord = (record, {
    updateUrl = true,
    mode = "location"
  } = {}) => {
    if (mode === "search") {
      clearLocationOutput();
    } else {
      clearSearchOutput();
      clearMatchHighlights();
      currentResults = [];
    }

    clearTargetHighlight();
    currentTarget = record;
    currentMode = mode;
    record.cellElement.classList.add("gallery-cell-target");

    if (!record.cellElement.hasAttribute("tabindex")) {
      record.cellElement.setAttribute("tabindex", "-1");
      record.cellElement.dataset.galleryTemporaryTabindex = "true";
    }

    record.cellElement.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "center",
      inline: "nearest"
    });
    record.cellElement.focus({ preventScroll: true });

    const statusMessage =
      `${record.tab} · row ${record.row}, column ${record.column} · ` +
      record.cgName;

    if (mode === "search") {
      searchStatusElement.textContent = statusMessage;
      renderDetail(record, searchDetailElement);
    } else {
      locationStatusElement.textContent = statusMessage;
      renderDetail(record, locationDetailElement);
    }

    if (updateUrl) {
      replaceUrl({
        includeLocation: true,
        includeQuery: mode === "search"
      });
    }
  };

  const selectSearchRecord = (record) => {
    if (record.inGallery) {
      tabSelect.value = record.tab;
      populateRows(record.tab, record.row);
      columnSelect.value = String(record.column);
      locateRecord(record, { mode: "search" });
      return;
    }

    clearLocationOutput();
    clearMatchHighlights();
    clearTargetHighlight();
    currentMode = "search";
    searchStatusElement.textContent =
      `Not in Gallery · ${record.cgName}`;
    renderDetail(record, searchDetailElement);
    replaceUrl({ includeLocation: false, includeQuery: true });
  };

  const locateSelected = () => {
    const record = recordsByPosition.get(
      positionKey(
        tabSelect.value,
        Number.parseInt(rowSelect.value, 10),
        Number.parseInt(columnSelect.value, 10)
      )
    );

    if (!record) {
      clearLocationOutput();
      locationStatusElement.textContent = "No CG was found at that position.";
      return;
    }

    locateRecord(record, { mode: "location" });
  };

  const matchReasonFor = (record, rawQuery, positionRecord) => {
    const query = rawQuery.trim().toLowerCase();
    const includesQuery = (value) =>
      normalizeText(value || "").toLowerCase().includes(query);

    if (includesQuery(record.cgName)) {
      return "Matched field: CG ID";
    }

    if (positionRecord === record) {
      return `Matched field: Gallery position · ${record.tab} row ${record.row}, column ${record.column}`;
    }

    const scriptLabels = Array.from(new Set([
      record.scriptLabel,
      ...record.triggerCodes.slice(1)
    ].filter(Boolean)));
    const matchedLabel = scriptLabels.find(includesQuery);

    if (matchedLabel) {
      return `Matched field: script label · ${matchedLabel}`;
    }

    const scriptFile = record.triggerCodes[0] || "";

    if (includesQuery(scriptFile)) {
      return `Matched field: script file · ${scriptFile}`;
    }

    if (
      includesQuery(record.triggerText) ||
      includesQuery(record.metadata) ||
      includesQuery(record.date)
    ) {
      return `Matched field: trigger location · ${record.triggerText}`;
    }

    if (includesQuery(record.category)) {
      return `Matched field: category · ${record.category}`;
    }

    if (includesQuery(record.context)) {
      return "Matched field: in-game context";
    }

    if (!record.inGallery) {
      return "Matched field: Gallery status · Not in Gallery";
    }

    return `Matched field: Gallery position · ${record.tab} row ${record.row}, column ${record.column}`;
  };

  const renderSearchResults = (matches, rawQuery, positionRecord) => {
    resultsElement.replaceChildren();

    matches.forEach((record) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-locator-result";

      const name = document.createElement("strong");
      name.textContent = record.cgName;

      const position = document.createElement("span");
      position.className = "gallery-result-position";
      position.textContent = record.inGallery
        ? `${record.tab} · row ${record.row}, column ${record.column}`
        : "Not in Gallery";

      const matchReason = document.createElement("span");
      matchReason.className = "gallery-result-match";
      matchReason.textContent = matchReasonFor(
        record,
        rawQuery,
        positionRecord
      );

      const category = document.createElement("span");
      category.className = "gallery-result-category";
      category.textContent = `Category: ${record.category}`;

      const trigger = document.createElement("span");
      trigger.className = "gallery-result-trigger";
      trigger.textContent = `Earliest normal trigger: ${record.triggerText}`;

      const context = document.createElement("span");
      context.className = "gallery-result-context";
      context.textContent = record.context;

      button.append(
        name,
        position,
        matchReason,
        category,
        trigger,
        context
      );
      button.addEventListener("click", () => {
        selectSearchRecord(record);
      });
      resultsElement.append(button);
    });
  };

  const parsePositionQuery = (value) => {
    const match = value.trim().match(
      /^(?:(memories|trauma)\s*)?(?:row\s*(\d+)\s*(?:,\s*)?(?:column|col)\s*(\d+)|(\d+)\s*(?:[-/]\s*|\s+)(\d+))$/i
    );

    if (!match) {
      return null;
    }

    const explicitTab = match[1]?.toLowerCase();
    const tab = explicitTab === "memories"
      ? "Memories"
      : explicitTab === "trauma"
        ? "Trauma"
        : tabSelect.value;
    const row = Number.parseInt(match[2] || match[4], 10);
    const column = Number.parseInt(match[3] || match[5], 10);

    if (
      !rowsForTab(tab).includes(row) ||
      ![1, 2, 3, 4].includes(column)
    ) {
      return null;
    }

    return recordsByPosition.get(positionKey(tab, row, column)) || null;
  };

  const applySearch = ({ updateUrl = true } = {}) => {
    const rawQuery = searchInput.value.trim();
    const query = rawQuery.toLowerCase();
    clearMatchHighlights();

    if (!query) {
      currentResults = [];
      clearSearchOutput();

      if (updateUrl) {
        replaceUrl({
          includeLocation: currentMode === "location",
          includeQuery: false
        });
      }

      return currentResults;
    }

    clearLocationOutput();
    clearTargetHighlight();
    const positionRecord = parsePositionQuery(rawQuery);
    currentResults = positionRecord
      ? [positionRecord]
      : searchRecords.filter((record) =>
          record.searchText.includes(query)
        );

    currentResults.forEach(({ cellElement }) => {
      cellElement?.classList.add("gallery-cell-match");
    });
    renderSearchResults(currentResults, rawQuery, positionRecord);

    if (currentResults.length === 0) {
      searchStatusElement.textContent =
        `No Gallery CGs match “${rawQuery}”.`;
      searchDetailElement.replaceChildren();
    } else {
      const resultType = currentResults.every(
        (record) => record.inGallery
      )
        ? "Gallery CG"
        : "image record";
      searchStatusElement.textContent =
        `${currentResults.length} matching ${resultType}` +
        `${currentResults.length === 1 ? "" : "s"} found.`;

      if (currentResults.length === 1) {
        renderDetail(currentResults[0], searchDetailElement);
      } else {
        searchDetailElement.replaceChildren();
      }
    }

    if (updateUrl) {
      replaceUrl({ includeLocation: false, includeQuery: true });
    }

    return currentResults;
  };

  const clearSearchOnly = () => {
    window.clearTimeout(debounceTimer);
    searchInput.value = "";
    clearMatchHighlights();
    currentResults = [];
    clearSearchOutput();

    if (currentMode === "search") {
      clearTargetHighlight();
    }

    replaceUrl({
      includeLocation: currentMode === "location",
      includeQuery: false
    });
  };

  const clearAll = () => {
    window.clearTimeout(debounceTimer);
    searchInput.value = "";
    clearMatchHighlights();
    clearTargetHighlight();
    currentResults = [];
    clearSearchOutput();
    clearLocationOutput();
    tabSelect.value = "Memories";
    populateRows("Memories", 1);
    columnSelect.value = "1";

    const url = new URL(window.location.href);
    ["tab", "row", "col", "q"].forEach((parameter) => {
      url.searchParams.delete(parameter);
    });
    window.history.replaceState(null, "", url);
  };

  tabSelect.addEventListener("change", () => {
    populateRows(tabSelect.value, 1);
  });
  locateButton.addEventListener("click", locateSelected);
  clearButton.addEventListener("click", clearAll);

  searchInput.addEventListener("input", () => {
    window.clearTimeout(debounceTimer);

    if (searchInput.value.trim()) {
      clearLocationOutput();
      clearTargetHighlight();
    }

    debounceTimer = window.setTimeout(() => {
      applySearch();
    }, DEBOUNCE_DELAY);
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      clearSearchOnly();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      window.clearTimeout(debounceTimer);
      const matches = applySearch();

      if (matches.length > 0) {
        selectSearchRecord(matches[0]);
      }
    }
  });

  populateRows("Memories", 1);

  const parameters = new URLSearchParams(window.location.search);
  const requestedTab = parameters.get("tab")?.toLowerCase();
  const tab = requestedTab === "trauma" ? "Trauma" : "Memories";
  const availableRows = rowsForTab(tab);
  const requestedRow = Number.parseInt(parameters.get("row") || "1", 10);
  const requestedColumn = Number.parseInt(
    parameters.get("col") || "1",
    10
  );
  const row = availableRows.includes(requestedRow) ? requestedRow : 1;
  const column = [1, 2, 3, 4].includes(requestedColumn)
    ? requestedColumn
    : 1;
  const initialQuery = parameters.get("q") || "";
  const hasLocationParameters = ["tab", "row", "col"].every(
    (parameter) => parameters.has(parameter)
  );
  const hasValidLocationParameters =
    hasLocationParameters &&
    ["memories", "trauma"].includes(requestedTab) &&
    availableRows.includes(requestedRow) &&
    [1, 2, 3, 4].includes(requestedColumn);

  tabSelect.value = tab;
  populateRows(tab, row);
  columnSelect.value = String(column);
  searchInput.value = initialQuery;

  const initialRecord = hasValidLocationParameters
    ? recordsByPosition.get(
        positionKey(tab, row, column)
      )
    : null;

  if (initialQuery.trim()) {
    const initialResults = applySearch({ updateUrl: false });

    if (initialRecord && initialResults.includes(initialRecord)) {
      tabSelect.value = initialRecord.tab;
      populateRows(initialRecord.tab, initialRecord.row);
      columnSelect.value = String(initialRecord.column);
      locateRecord(initialRecord, {
        updateUrl: false,
        mode: "search"
      });
    }
  } else if (initialRecord) {
    locateRecord(initialRecord, {
      updateUrl: false,
      mode: "location"
    });
  }

  window.addEventListener("pageshow", () => {
    if (searchInput.value.trim()) {
      return;
    }

    const quartoSearchMark = document.querySelector("main mark");
    const recoveredQuery = normalizeText(
      quartoSearchMark?.textContent || ""
    );

    if (recoveredQuery) {
      searchInput.value = recoveredQuery;
      applySearch();
    }
  }, { once: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, {
      once: true
    });
  } else {
    initialize();
  }
})();
