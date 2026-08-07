---
title: "Legacy Route Archive"
description: "Removed route branches and route-related differences between Password b0.7 and b0.85"
toc: true
---

This page records route-related differences between *Password* b0.7 and b0.85.

It is intentionally limited to changes that affect normal story reachability, Bad Endings, or the interpretation of character Routes and lettered Paths. Password implementation, replay systems, and broader narrative rewrites are documented on their own pages.

::: {.callout-warning}
## Historical reference only

Do not use this page as a b0.85 walkthrough.

For the current structure, see:

- [Route and Path Overview](../guide/route-overview.md)
- [Lettered Path System](../guide/path-system.md)
:::

## Scope of the archive

The core distinction between a D4 **character Route** and the later **lettered Paths** already existed in b0.7. Much of the A–G and Path P structure also remains recognizable in b0.85.

This archive therefore does not restate every unchanged gate. It focuses on removed branches and on legacy mechanics that can make an older guide misleading.

## D6 mansion departure branch

b0.7 contained a normal D6 choice near the end of the mansion sequence:

```text
Stay.
Leave.
```

Choosing **Stay.** continued to D7; Choosing **Leave.** ended the playthrough in: `BAD END: OZ`.

This was a terminal Bad Ending branch. It did not create another character Route or lettered Path, and it did not return to the normal story.

b0.85 no longer contains the normal reachable D6 mansion-departure menu or the corresponding Bad Ending script.

::: {.d6-result-table .table-responsive .table-scroll-compact}
| Build | D6 result |
|---|---|
| b0.7 | `Stay.` continues; `Leave.` enters `BAD END: OZ` |
| b0.85 | The normal departure choice and reachable ending are absent |
:::

## D7 alternatives and the D8 hard gate

The two older D7 alternatives accepted by b0.7 did not set the state required to pass the D8 hard gate. Both therefore entered the `BAD END: BENSON` timeline rather than creating additional lettered Paths.

For their warning scenes and hint structure, see [Legacy Password Archive](legacy-passwords.md).

::: {.callout-note}
## Two different “Reveal Oz” choices

A legacy D7 failure sequence can contain a choice about revealing Oswin. That Bad Ending choice is separate from the normal D8 **Reveal Oz** decision used by the current lettered Path system.

The Bad Ending version does not write the normal `OzKnown` route state and does not determine Path A or Path B.
:::

## Path A, later reclassification, and Path P

The broad lettered Path topology was not rebuilt from scratch in b0.85.

Both examined builds already contain:

- D10 assignment to the Path A/B or Path C/D side;
- later reclassification between Path letters when survival states are revealed;
- Path E as a terminal classification with more than one possible entry state;
- the later Path F/G split;
- the transition from the Path A ending into Path P after the twelve-medal check.

Path P should therefore not be described as a new b0.85 route.

In both builds, the core transition is:

```text
Path A ending
→ check twelve persistent medal flags
→ all twelve obtained
→ currentPath = "P"
→ final Path P sequence
```

b0.85 changes the later Path P sequence by adding a standalone input and explicit true-ending persistence. Those additions are documented in [Major Changes in b0.85](b085-changes.md).

The source does not display a formal `PATH P: END` title, and it does not formally define the letter `P` as a full word. References to a “prime timeline” make that interpretation plausible, but it should not be presented as an official expanded name.

## Route-adjacent legacy systems

Several removed systems occurred inside route material without changing the lettered Path itself.

::: {.table-responsive .table-scroll-medium}
| Legacy system | Route effect | Primary archive |
|---|---|---|
| D8 Oswin free-text conversation | Changes later dialogue, but does not gate a Route, Path, medal, or ending | [Legacy Mechanics Archive](legacy-mechanics.md) |
| D11 optional Vault | Changes laboratory and later conditional text, but does not assign a Route or Path | [Legacy Password Archive](legacy-passwords.md) |
| Path A first-run scenes | Controlled by a profile-wide persistent flag; later made replayable in Additional Scenes | [Legacy Mechanics Archive](legacy-mechanics.md) |
| D11 injection decision | Changes player agency and `DavePride`, but not the lettered Path | [Legacy Mechanics Archive](legacy-mechanics.md) |
:::

Broader Dean-related interaction changes and the D19 relationship threshold are version-level narrative and relationship changes rather than route-topology changes. They are summarized in [Major Changes in b0.85](b085-changes.md).

## Current references

::: {.table-responsive}
| Topic | Current page |
|---|---|
| Character Routes and overall timeline | [Route and Path Overview](../guide/route-overview.md) |
| Path A–G and Path P conditions | [Lettered Path System](../guide/path-system.md) |
| Legacy D7 and D11 inputs | [Legacy Password Archive](legacy-passwords.md) |
| Retired interaction and replay mechanics | [Legacy Mechanics Archive](legacy-mechanics.md) |
| Consolidated b0.85 changes | [Major Changes in b0.85](b085-changes.md) |
:::
