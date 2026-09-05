---
title: "Compendium Unlock Index"
description: "Unlock conditions and troubleshooting for all Cast Files, Additional Scenes, and Lore entries in Password b0.85"
toc: true
---

The b0.85 Compendium contains three fixed sections:

::: {.compendium-summary-table .table-responsive}

| Section | Entries | Contents |
|---|---:|---|
| Cast Files | 16 | Character profiles |
| Additional Scenes | 9 | Replayable story scenes |
| Lore | 12 | Zodiac-medal entries |
| **Total** | **37** | — |

:::

The Compendium button appears on the **main menu** after the first ending is completed. It is not available from the normal in-game navigation menu.

Locked entries remain in their original positions and display `?????`, so a missing item can be identified by its section and list order.

::: {.callout-important}
## Unlocks are persistent, but the display can lag behind

Cast Files, Additional Scenes, and Lore remain unlocked permanently, but the Compendium does not refresh every new entry while the game remains open.

A newly earned entry may therefore remain `?????` even after it has been saved. Simply closing and reopening the Compendium is not guaranteed to refresh it.

If an entry still displays `?????`, restart the game before checking its collection requirements.
:::

## Cast Files

### Unlock index

::: {.compendium-cast-table .table-responsive .table-scroll-medium}

| Order | Cast File | Tracked requirement | Main unlock route |
|---:|---|---|---|
| 1 | Dave | `persistent.dave_lore` | D14 A/B flashback about Dave's father |
| 2 | Tyson | `persistent.tyson_lore` | Tyson Route, D15 A/B |
| 3 | Roswell | `persistent.roswell_lore` | Roswell Route, D18 A/B |
| 4 | Orlando | `persistent.orlando_lore` | D15 meeting; Route requirement depends on Oswin's state |
| 5 | Hoss | `persistent.hoss_lore` | Optional D3 conversation, with an optional D8 fallback |
| 6 | Sal | `persistent.sal_lore` | Successful D10 password scene, or Sal Route fallback on D15 |
| 7 | Dean | `persistent.dean_lore` | Dean Route, D11 A/B |
| 8 | Benson | `persistent.benson_lore` | Late Path A sequence |
| 9 | Thanatos | `persistent.thanatos_lore` | Late Path A time-loop sequence |
| 10 | Thanatos - Part 2 | `persistent.true_end` | Complete the full Path P sequence |
| 11 | Memphis | `persistent.memphis_lore` | Path C meeting on D13 |
| 12 | Dominic | `persistent.dominic_lore` | Late Path A meeting |
| 13 | Jack | `persistent.jack_lore` | Same meeting as Dominic |
| 14 | Florencia | `persistent.florencia_lore` | Path D, G, A, or B ending scene |
| 15 | David | `persistent.david_lore` | Same D14 A/B flashback as Dave |
| 16 | Hoyt | `persistent.hoyt_lore` | Same D14 A/B flashback as Dave and David |

:::

### Dave, David, and Hoyt

All three files unlock during the same D14 A/B flashback sequence.

No character route or affection condition is required once that flashback is reached.

### Orlando

Orlando's Cast File has two different D15 conditions:

::: {.oswin-state-table .table-responsive}

| Oswin state | Unlock condition |
|---|---|
| Oswin alive | Orlando Route required |
| Oswin dead | Unlocks during the common meeting on any character route |

:::

The in-game locked hint only mentions Orlando Route progression, so it does not reveal the second method.

### Hoss

The earliest unlock is an optional D3 conversation:

```text
Message...? → Hoss
```

Because the D4 partner choice has not yet occurred, this method does not require the Hoss Route.

An optional D8 hidden-library discovery can also unlock the file. This alternative does not require the Hoss Route, although the player must have opened the relevant library branch.

### Sal

The successful D10 password scene unlocks Sal's Cast File on any character Route.

On the Sal Route, failing that password does not permanently lose the file. A D15 Sal conversation provides another unlock opportunity.

### Thanatos and Thanatos - Part 2

The normal Thanatos file unlocks during the late Path A time-loop material. An incomplete twelve-medal check also provides another opportunity, although the earlier Path A scene normally unlocks it first.

`Thanatos - Part 2` unlocks after the full Path P sequence is completed.

### Dominic and Jack

Dominic and Jack unlock consecutively during the same late Path A meeting. Jack has no separate dedicated unlock scene.

### Florencia

Florencia has several alternative unlock points:

- Path D ending on D14;
- Path G ending;
- Path A ending sequence;
- Path B ending sequence.

The earliest unlock point is the Path D ending. Path C, E, and F do not unlock the file.

<details>
<summary><strong>Oswin is not listed</strong></summary>

b0.85 has no Cast File entry for Oswin. Even after the relevant late Path A scenes, no additional slot appears in the Compendium, so the visible total remains 16. This is not a missing collectible.
</details>

## Additional Scenes

### Fixed order and requirements

::: {.additional-scenes-table .table-responsive .table-scroll-compact}

| Order | Additional Scene | Unlock requirement |
|---:|---|---|
| 1 | Dave's Demise | `persistent.Day23APrime` |
| 2 | Roswell's Attempt | `persistent.Day23APrime` |
| 3 | Tyson Epilogue | Complete Path P and unlock Tyson's Cast File |
| 4 | Dean Epilogue | Complete Tyson Epilogue and unlock Dean's Cast File |
| 5 | Orlando Epilogue | Complete Dean Epilogue and unlock Orlando's Cast File |
| 6 | Sal Epilogue | Complete Orlando Epilogue and unlock Sal's Cast File |
| 7 | Hoss Epilogue | Complete Sal Epilogue and unlock Hoss's Cast File |
| 8 | Dave Epilogue | Complete Hoss Epilogue |
| 9 | Roswell Epilogue | Complete Dave Epilogue |

:::

### Dave's Demise and Roswell's Attempt

The first two scenes share the same persistent condition and normally become available together.

They do not form part of the seven-scene Epilogue completion chain, and neither must be completed to unlock the other.

### Epilogue dependency chain

The seven Epilogues unlock in one fixed sequence:

```text
Tyson
→ Dean
→ Orlando
→ Sal
→ Hoss
→ Dave
→ Roswell
```

The first five character Epilogues use the following additional Cast File checks:

| Epilogue | Cast File required |
|---|---|
| Tyson Epilogue | Tyson |
| Dean Epilogue | Dean |
| Orlando Epilogue | Orlando |
| Sal Epilogue | Sal |
| Hoss Epilogue | Hoss |
| Dave Epilogue | None |
| Roswell Epilogue | None |

Only Tyson Epilogue directly requires completion of Path P. Each later scene requires the preceding Epilogue to have been played through.

### Play each Epilogue almost to the end

The game counts an Epilogue as completed only near the end of its replay.

Using **End Replay** too early prevents the next scene from unlocking. Merely opening an Epilogue, or watching only part of it, is not enough to advance the chain.

Even a fully completed Epilogue may not make the next scene appear until the game is restarted. If the next entry still displays `?????`, restart first; replay the previous Epilogue only if it remains locked afterward.

::: {.callout-warning}
## Epilogue chain stuck on `?????`

Check these points in order:

1. Did the previous Epilogue reach its actual ending rather than exit through **End Replay**?
2. For Dean through Hoss, is the corresponding Cast File unlocked?
3. Has Tyson Epilogue been made available by completing Path P and unlocking Tyson's file?
4. Has the game been restarted since the latest entry was unlocked or Epilogue was completed?
5. Is the persistent data from an older installation or incomplete device transfer?
:::

## Lore

The Lore section contains the twelve zodiac entries in traditional order:

:::: {.pw-lore-columns}

::: {.compendium-lore-table .table-responsive}

| Order | Lore | Persistent flag |
|---:|---|---|
| 1 | Aries | `persistent.aries` |
| 2 | Taurus | `persistent.taurus` |
| 3 | Gemini | `persistent.gemini` |
| 4 | Cancer | `persistent.cancer` |
| 5 | Leo | `persistent.leo` |
| 6 | Virgo | `persistent.virgo` |

:::

::: {.compendium-lore-table .table-responsive}

| Order | Lore | Persistent flag |
|---:|---|---|
| 7 | Libra | `persistent.libra` |
| 8 | Scorpio | `persistent.scorpio` |
| 9 | Sagittarius | `persistent.sagittarius` |
| 10 | Capricorn | `persistent.capricorn` |
| 11 | Aquarius | `persistent.aquarius` |
| 12 | Pisces | `persistent.pisces` |

:::

::::

Each Lore entry uses the same saved record as its corresponding medal. The final twelve-medal check after Path A counts those same records.

There is no separate Lore collection system and no additional per-medal Route or Path requirement in the Compendium definition.

Lore may remain locked on screen even when a newly earned medal already counts toward the Path P check. If it is still locked after restarting the game, the medal was probably not formally recorded.

For collection locations and an optimized route order, see [Twelve-Medal Collection Guide](medals.md). For how medal progress is saved and refreshed, see [Medal Persistence and Final Check](../mechanics/medal-persistence.md).
