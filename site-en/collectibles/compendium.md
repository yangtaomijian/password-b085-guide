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

The Compendium button appears on the **main menu** after the game has set its first-ending flag. It is not available from the normal in-game navigation menu.

Locked entries remain in their original positions and display `?????`, so a missing item can be identified by its section and list order.

::: {.callout-important}
## Unlocks are persistent, but the display can lag behind

Cast Files, Additional Scenes, and Lore are all tied to persistent flags, but the Compendium does not refresh every unlock while the game remains open.

A newly earned entry may therefore remain `?????` even though its flag is already active. Simply closing and reopening the Compendium is not guaranteed to refresh it.

Restart the game before treating a missing entry as a collection problem.
:::

## Cast Files

### Unlock index

::: {.compendium-cast-table .table-responsive .table-scroll-medium}

| Order | Cast File | Persistent condition | Main unlock route |
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

All three files unlock during the same D14 A/B flashback sequence. Hoyt is written first, followed shortly by Dave and David.

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

An optional D8 hidden-library discovery can write the same flag again. That fallback also does not require the Hoss Route, although the player must have opened the relevant library branch.

### Sal

The successful D10 password scene writes Sal's Cast File on any character route.

On the Sal Route, failing that password does not permanently lose the file. A D15 Sal conversation writes the same flag if the D10 scene did not.

### Thanatos and Thanatos - Part 2

The normal Thanatos file unlocks during the late Path A time-loop material. An incomplete twelve-medal check can also write it as a fallback, although the earlier Path A scene normally does so first.

`Thanatos - Part 2` does not use a separate character-file flag. It is controlled directly by completion of the full Path P sequence.

### Dominic and Jack

Dominic and Jack unlock consecutively during the same late Path A meeting. Jack has no separate dedicated unlock scene.

### Florencia

Florencia has several alternative unlock points:

- Path D ending on D14;
- Path G ending;
- Path A ending sequence;
- Path B ending sequence.

The earliest route is the Path D ending. Path C, E, and F do not contain an equivalent write.

<details>
<summary><strong>Oswin is not listed</strong></summary>

b0.85 defines `persistent.oswin_lore` and sets it during late Path A content, but Oswin's only `Cast` entry is disabled.

As a result:

- Oswin does not occupy a visible Cast File slot;
- the visible total remains 16;
- the disabled entry contains only a short unfinished header rather than a complete profile.
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

Only Tyson Epilogue directly checks completion of Path P. The later scenes depend on it indirectly through the preceding completion flags.

### Play each Epilogue to its completion point

The flag that unlocks the next Epilogue is written near the end of the current replay.

Using **End Replay** before that write skips the completion flag. Merely opening an Epilogue, or watching only part of it, is not enough to advance the chain.

Even a fully completed Epilogue may not make the next scene appear until the game is restarted. Restart before replaying the previous scene solely because the next entry still displays `?????`.

::: {.callout-warning}
## Epilogue chain stuck on `?????`

Check these points in order:

1. Did the previous Epilogue reach its actual ending rather than exit through **End Replay**?
2. For Dean through Hoss, is the corresponding Cast File unlocked?
3. Has Tyson Epilogue been made available by completing Path P and unlocking Tyson's file?
4. Has the game been restarted since the latest unlock or completion flag was earned?
5. Is the persistent data from an older installation or incomplete device transfer?
:::

## Lore

The Lore section contains the twelve zodiac entries in traditional order:

::: {.compendium-lore-table .table-responsive .table-scroll-compact}

| Order | Lore | Persistent flag |
|---:|---|---|
| 1 | Aries | `persistent.aries` |
| 2 | Taurus | `persistent.taurus` |
| 3 | Gemini | `persistent.gemini` |
| 4 | Cancer | `persistent.cancer` |
| 5 | Leo | `persistent.leo` |
| 6 | Virgo | `persistent.virgo` |
| 7 | Libra | `persistent.libra` |
| 8 | Scorpio | `persistent.scorpio` |
| 9 | Sagittarius | `persistent.sagittarius` |
| 10 | Capricorn | `persistent.capricorn` |
| 11 | Aquarius | `persistent.aquarius` |
| 12 | Pisces | `persistent.pisces` |

:::

Each Lore entry uses the corresponding medal flag. The final twelve-medal check after Path A counts the same twelve persistent flags.

There is no separate Lore collection system and no additional per-medal Route or Path requirement in the Compendium definition.

Lore may display an older locked state even when a newly earned medal already counts toward the Path P check. After restarting the game, a still-locked Lore entry is strong evidence that the corresponding medal flag has not been written.

For collection locations and an optimized route order, see [Twelve-Medal Collection Guide](medals.md). For the underlying state and refresh behavior, see [Medal Persistence and Final Check](../mechanics/medal-persistence.md).

## Related guides

- [Twelve-Medal Collection Guide](medals.md)
- [Medal Persistence and Final Check](../mechanics/medal-persistence.md)
- [Lettered Path System](../guide/path-system.md)
- [Route and Path Overview](../guide/route-overview.md)
