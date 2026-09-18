(() => {
  "use strict";

  const root = document.querySelector("#gallery-locator-root");

  if (!root) {
    return;
  }

  const setupIndexToggle = () => {
    const index = document.querySelector("#gallery-trigger-index");
    const oldHeader = index?.querySelector(":scope > .callout-header");
    const body = index?.querySelector(":scope > .callout-collapse");
    if (!oldHeader || !body) return;

    // Keep Quarto's collapse target and use a native keyboard-accessible button.
    const header = document.createElement("button");
    for (const { name, value } of oldHeader.attributes) {
      header.setAttribute(name, value);
    }
    header.type = "button";
    header.append(...oldHeader.childNodes);
    oldHeader.replaceWith(header);
    const title = header.querySelector(".callout-title-container");
    const titleCopy = title.cloneNode(true);
    titleCopy.querySelectorAll(".screen-reader-only").forEach((node) => node.remove());
    const closedTitle = titleCopy.textContent.trim();
    const action = document.createElement("span");
    action.className = "gallery-index-action";
    action.setAttribute("aria-hidden", "true");
    header.append(action);

    const navigation = document.querySelector("#quarto-header");
    const updateOffset = () => {
      const bottom = Math.max(0, navigation?.getBoundingClientRect().bottom || 0);
      index.style.setProperty("--gallery-index-top", `${bottom}px`);
      return bottom;
    };
    let pendingFrame = 0;
    const scheduleOffset = () => {
      if (pendingFrame) return;
      pendingFrame = requestAnimationFrame(() => {
        pendingFrame = 0;
        updateOffset();
        if (navigation?.getAnimations().some((animation) => animation.playState === "running")) {
          scheduleOffset();
        }
      });
    };
    window.addEventListener("scroll", scheduleOffset, { passive: true });
    window.addEventListener("resize", scheduleOffset);
    if (navigation) {
      new ResizeObserver(scheduleOffset).observe(navigation);
      navigation.addEventListener("transitionrun", scheduleOffset);
      navigation.addEventListener("transitionend", scheduleOffset);
    }

    const setExpanded = (expanded) => {
      index.classList.toggle("gallery-index-open", expanded);
      title.textContent = expanded ? "完整索引" : closedTitle;
      action.textContent = expanded ? "收起" : "展开";
      header.setAttribute("aria-label", expanded ? "收起完整索引" : "展开完整索引");
      updateOffset();
    };
    let returnToHeader = false;
    body.addEventListener("show.bs.collapse", () => setExpanded(true));
    body.addEventListener("hide.bs.collapse", () => {
      returnToHeader = index.getBoundingClientRect().top < updateOffset();
    });
    body.addEventListener("hidden.bs.collapse", () => {
      setExpanded(false);
      if (returnToHeader) {
        window.scrollBy({
          top: index.getBoundingClientRect().top - (navigation?.offsetHeight || 0) - 8,
          behavior: "instant"
        });
        header.focus({ preventScroll: true });
      }
      returnToHeader = false;
    });
    setExpanded(body.classList.contains("show"));
  };
  setupIndexToggle();

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

  const normalizeGalleryFlag = (value) => {
    const normalized = normalizeText(value).toLowerCase();

    if (["yes", "是"].includes(normalized)) {
      return true;
    }

    if (["no", "否"].includes(normalized)) {
      return false;
    }

    return null;
  };

  const positionKey = (tab, row, column) =>
    `${tab.toLowerCase()}:${row}:${column}`;

  const readGallery = (selector) => {
    const grid = document.querySelector(selector);

    if (!grid) {
      throw new Error(`找不到画廊表格容器：${selector}`);
    }

    const tab = grid.dataset.galleryTab;

    if (!Object.hasOwn(EXPECTED_COUNTS, tab)) {
      throw new Error(`画廊页签值无效：${tab || "未设置"}`);
    }

    const table = grid.querySelector("table");

    if (!table) {
      throw new Error(`${tab} 画廊表格不存在`);
    }

    table.querySelectorAll("tbody tr").forEach((rowElement) => {
      const cells = Array.from(rowElement.cells);
      const row = Number.parseInt(
        normalizeText(cells[0]?.textContent || ""),
        10
      );

      if (!Number.isInteger(row)) {
        throw new Error(`${tab} 画廊存在无法读取的行号`);
      }

      if (cells.length !== 5) {
        throw new Error(`${tab} 第 ${row} 行不是四列 CG 数据`);
      }

      cells.slice(1).forEach((cellElement, index) => {
        const column = index + 1;
        const nameElement = cellElement.querySelector("code");
        const metadataElement = cellElement.querySelector("small");

        if (!nameElement || !metadataElement) {
          throw new Error(
            `${tab} 第 ${row} 行第 ${column} 列数据不完整`
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
          throw new Error(`坐标表中存在重复 CG 名称：${cgName}`);
        }

        if (recordsByPosition.has(positionKey(tab, row, column))) {
          throw new Error(
            `坐标表中存在重复位置：${tab} 第 ${row} 行第 ${column} 列`
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

  const showReadError = (error, message = "画廊数据读取异常") => {
    console.error("Gallery locator data error:", error);
    root.innerHTML = "";

    const panel = document.createElement("section");
    panel.className = "gallery-locator gallery-locator-error";

    const heading = document.createElement("h2");
    heading.textContent = "CG 画廊定位器";

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
        `预期 Memories 72、Trauma 28、合计 100；实际 ` +
        `Memories ${counts.Memories}、Trauma ${counts.Trauma}、` +
        `合计 ${records.length}`
      )
    );
    return;
  }

  const readTriggerDetails = () => {
    const triggerIndex = document.querySelector("#gallery-trigger-index");

    if (!triggerIndex) {
      throw new Error("找不到完整触发索引：#gallery-trigger-index");
    }

    const details = [];
    const groups = triggerIndex.querySelectorAll(".gallery-trigger-group");

    groups.forEach((group) => {
      const category = normalizeText(group.dataset.category || "");
      const table = group.querySelector("table");

      if (!category || !table) {
        throw new Error("完整触发索引存在缺少分类或表格的分组");
      }

      table.querySelectorAll("tbody tr").forEach((detailRowElement) => {
        const cells = Array.from(detailRowElement.cells);

        if (cells.length !== 4) {
          throw new Error(`${category} 触发索引存在非四列表格记录`);
        }

        const cgName = normalizeText(
          cells[0].querySelector("code")?.textContent || ""
        );
        const galleryFlag = normalizeGalleryFlag(
          cells[1].textContent || ""
        );

        if (galleryFlag === false) {
          return;
        }

        if (galleryFlag === null) {
          throw new Error(`${category} 触发索引存在无效的画廊标记`);
        }

        if (!cgName) {
          throw new Error(`${category} 触发索引存在缺少 CG 名称的记录`);
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
      throw new Error("找不到不在画廊索引：#gallery-non-gallery-index");
    }

    return Array.from(table.querySelectorAll("tbody tr")).map(
      (detailRowElement) => {
        const cells = Array.from(detailRowElement.cells);

        if (cells.length !== 4) {
          throw new Error("不在画廊索引存在非四列表格记录");
        }

        const cgName = normalizeText(
          cells[0].querySelector("code")?.textContent || ""
        );
        const galleryFlag = normalizeGalleryFlag(
          cells[1].textContent || ""
        );
        const triggerText = normalizeText(
          cells[2].innerText || cells[2].textContent || ""
        );
        const triggerCodes = Array.from(cells[2].querySelectorAll("code"))
          .map((code) => normalizeText(code.textContent || ""))
          .filter(Boolean);
        const context = normalizeText(
          cells[3].innerText || cells[3].textContent || ""
        );

        if (!cgName || galleryFlag !== false) {
          throw new Error("不在画廊索引存在无效的 ID 或画廊标记");
        }

        return {
          cgName,
          category: "不在画廊",
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
        throw new Error(`完整触发索引存在重复 CG 名称：${detail.cgName}`);
      }

      detailsByName.set(detail.cgName, detail);
    });

    nonGalleryDetails.forEach((detail) => {
      if (
        recordsByName.has(detail.cgName) ||
        nonGalleryDetailsByName.has(detail.cgName)
      ) {
        throw new Error(`不在画廊索引存在重复 CG 名称：${detail.cgName}`);
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
        `详细索引应与坐标表一一对应 100 条；实际详细记录 ` +
        `${details.length}、唯一名称 ${detailsByName.size}、` +
        `缺失 [${missingNames.join(", ") || "无"}]、` +
        `多出 [${extraNames.join(", ") || "无"}]`
      );
    }

    if (
      nonGalleryDetails.length !== 4 ||
      nonGalleryDetailsByName.size !== 4
    ) {
      throw new Error(
        `预期 4 条不在画廊记录；实际记录 ` +
        `${nonGalleryDetails.length} 条、唯一名称 ` +
        `${nonGalleryDetailsByName.size} 个`
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
        `${record.tab} 第${record.row}行第${record.column}列`,
        `第${record.row}行第${record.column}列`
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
        "不在画廊"
      ].join(" ").toLowerCase();
      nonGalleryRecords.push(record);
    });

    searchRecords.push(...records, ...nonGalleryRecords);

    ensureTriggerTableScrollers();
    ensureNonGalleryTableScroller();
    console.info("Gallery locator data linked: 100 张画廊 CG + 4 条非画廊记录");
  } catch (error) {
    showReadError(error, "画廊数据连接异常");
    return;
  }

  root.innerHTML = `
    <section class="gallery-locator" aria-labelledby="gallery-locator-title">
      <header class="gallery-locator-header">
        <h2 id="gallery-locator-title">CG 画廊定位器</h2>
        <p>可按游戏内页签和行列定位，也可搜索 CG 名称、日期、剧情线索或角色分类。</p>
        <p class="gallery-locator-count">已载入 100 张画廊 CG</p>
      </header>

      <fieldset class="gallery-locator-section gallery-locator-exact">
        <legend>精确位置定位</legend>
        <div class="gallery-locator-controls">
          <label for="gallery-locator-tab">页签</label>
          <select id="gallery-locator-tab">
            <option value="Memories">Memories</option>
            <option value="Trauma">Trauma</option>
          </select>

          <label for="gallery-locator-row">行</label>
          <select id="gallery-locator-row"></select>

          <label for="gallery-locator-column">列</label>
          <select id="gallery-locator-column">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button type="button" id="gallery-locator-go">查看详情</button>
        </div>
        <div class="gallery-location-output">
          <div class="gallery-location-status" aria-live="polite"></div>
          <div class="gallery-location-detail" aria-live="polite"></div>
        </div>
      </fieldset>

      <fieldset class="gallery-locator-section gallery-locator-search">
        <legend>画廊搜索</legend>
        <label for="gallery-locator-query">搜索 CG 名称、日期、剧情线索、角色分类或行列</label>
        <div class="gallery-locator-search-row">
          <input
            id="gallery-locator-query"
            type="search"
            placeholder="例如：Hoss、D8、Memories 第6行第4列"
            autocomplete="off"
          >
          <button type="button" id="gallery-locator-clear">清除</button>
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
        record.inGallery ? "画廊位置" : "画廊状态",
        record.inGallery
          ? `${record.tab} · 第 ${record.row} 行第 ${record.column} 列`
          : "不在画廊"
      ),
      createDetailField("分类", record.category),
      createDetailField("最早出现", record.triggerText)
    ];

    if (!record.inGallery && record.triggerCodes.length > 0) {
      detailFields.push(
        createDetailField(
          "脚本位置",
          record.triggerCodes.join(" / ")
        )
      );
    }

    detailFields.push(
      createDetailField(
        "剧情线索",
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
      cellElement?.classList.remove("gallery-cell-match");
    });
  };

  const clearTargetHighlight = () => {
    if (!currentTarget) {
      return;
    }

    currentTarget.cellElement.classList.remove("gallery-cell-target");

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

    const statusMessage =
      `${record.tab} · 第 ${record.row} 行第 ${record.column} 列 · ` +
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
      locationStatusElement.textContent = "没有找到对应位置的 CG";
      return;
    }

    locateRecord(record, { mode: "location" });
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
      `不在画廊 · ${record.cgName}`;
    renderDetail(record, searchDetailElement);
    replaceUrl({ includeLocation: false, includeQuery: true });
  };

  const matchReasonFor = (record, rawQuery, positionRecord) => {
    const query = rawQuery.trim().toLowerCase();
    const includesQuery = (value) =>
      normalizeText(value || "").toLowerCase().includes(query);

    if (includesQuery(record.cgName)) {
      return "匹配字段：CG 名称";
    }

    if (positionRecord === record) {
      return `匹配字段：画廊行列 · ${record.tab} 第${record.row}行第${record.column}列`;
    }

    const scriptLabels = Array.from(new Set([
      record.scriptLabel,
      ...record.triggerCodes.slice(1)
    ].filter(Boolean)));
    const matchedLabel = scriptLabels.find(includesQuery);

    if (matchedLabel) {
      return `匹配字段：脚本标签 · ${matchedLabel}`;
    }

    const scriptFile = record.triggerCodes[0] || "";

    if (includesQuery(scriptFile)) {
      return `匹配字段：脚本文件 · ${scriptFile}`;
    }

    if (
      includesQuery(record.triggerText) ||
      includesQuery(record.metadata) ||
      includesQuery(record.date)
    ) {
      return `匹配字段：出现日期 · ${record.triggerText}`;
    }

    if (includesQuery(record.category)) {
      return `匹配字段：分类 · ${record.category}`;
    }

    if (includesQuery(record.context)) {
      return "匹配字段：剧情线索";
    }

    if (!record.inGallery) {
      return "匹配字段：画廊状态 · 不在画廊";
    }

    return `匹配字段：画廊行列 · ${record.tab} 第${record.row}行第${record.column}列`;
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
        ? `${record.tab} · 第 ${record.row} 行第 ${record.column} 列`
        : "不在画廊";

      const matchReason = document.createElement("span");
      matchReason.className = "gallery-result-match";
      matchReason.textContent = matchReasonFor(
        record,
        rawQuery,
        positionRecord
      );

      const category = document.createElement("span");
      category.className = "gallery-result-category";
      category.textContent = `分类：${record.category}`;

      const trigger = document.createElement("span");
      trigger.className = "gallery-result-trigger";
      trigger.textContent = `最早出现：${record.triggerText}`;

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
      /^(?:(memories|trauma)\s*)?(?:第?\s*(\d+)\s*行\s*第?\s*(\d+)\s*列|(\d+)\s*(?:[-/]\s*|\s+)(\d+))$/i
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
      : searchRecords.filter((record) => record.searchText.includes(query));

    currentResults.forEach(({ cellElement }) => {
      cellElement?.classList.add("gallery-cell-match");
    });
    renderSearchResults(currentResults, rawQuery, positionRecord);

    if (currentResults.length === 0) {
      searchStatusElement.textContent =
        `没有找到与“${rawQuery}”匹配的 CG。`;
      searchDetailElement.replaceChildren();
    } else {
      const resultType = currentResults.every(
        (record) => record.inGallery
      )
        ? "画廊 CG"
        : "图片记录";
      searchStatusElement.textContent =
        `找到 ${currentResults.length} 条匹配的${resultType}。`;

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
})();
