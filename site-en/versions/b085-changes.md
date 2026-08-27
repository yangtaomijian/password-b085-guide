---
title: "Major Changes in b0.85"
description: "Feature, story-interaction, password, Gallery, and asset changes between Password b0.7 and b0.85"
toc: true
---

If you are moving from an older guide to b0.85, start here for the changes that directly affect play and collection progress.

Detailed legacy passwords, mechanics, and routes have their own archive pages.

::: {.callout-important}
## Comparison scope

The comparison below is limited to **b0.7 and b0.85** and should not be applied to every earlier build. It focuses on normal story access, player choices, passwords, profile-wide unlocks, the Compendium, Gallery structure, replays, and other noticeable story interactions.
:::

## Changes at a glance

::: {.table-responsive .changes-at-a-glance-table}
| Area | Main b0.85 change |
|---|---|
| Compendium | Adds the modern Cast Files, Additional Scenes, and Lore interface |
| Additional content | Adds seven sequentially unlocked Epilogues |
| Legacy branches | Removes the D6 mansion-departure Bad Ending |
| Password systems | Retires two accepted D7 alternatives and the complete D11 optional Vault flow |
| D8 interaction | Replaces Oswin's free-text question system with scripted dialogue |
| Dean-related scenes | Converts several choice-driven scenes into fixed sequences |
| Dean relationship | Changes the D19 threshold and removes the middle-range confirmation choice |
| Path P | Adds a mandatory final input and explicit true-ending persistence |
| Gallery | Reduces registered slots from 104 to 100 |
| CG assets | Redraws two Tyson CGs and removes four older Dean adult CG files |
:::

## Modern Compendium

b0.85 introduces the modern player-accessible Compendium with three sections:

- **CAST FILES**
- **ADDITIONAL SCENES**
- **LORE**

Normal b0.7 play has no feature equivalent to the current Compendium. An unfinished menu stub that cannot be opened normally does not provide the same collection interface.

### Lore and medal tracking

The Lore section contains twelve zodiac entries whose locked states correspond to the twelve persistent medal flags. This gives the player a visible way to identify which medal-related Lore entries remain missing before attempting the Path P collection requirement.

For the exact unlock conditions, see [Compendium Unlock Index](../collectibles/compendium.md) and [Twelve-Medal Collection Guide](../collectibles/medals.md).

### Additional Scenes

b0.85 adds replay entries for two first-run Path A segments:

- `Dave's Demise`
- `Roswell's Attempt`

Both use `persistent.Day23APrime` as their unlock condition. They reuse bounded parts of the original story labels rather than replaying the entire normal Path A sequence.

The persistent first-run behavior itself still exists in normal play; the new feature is the separate replay access.

See [Legacy Mechanics Archive](legacy-mechanics.md) for the exact first-run and replay control flow.

## Seven Epilogues

b0.85 adds seven Epilogue entries to Additional Scenes.

The first becomes available after the true ending has been recorded. Completing one Epilogue unlocks the next, creating a fixed replay chain rather than an automatic continuation of Path P inside the normal story.

For the current order and unlock flags, see [Compendium Unlock Index](../collectibles/compendium.md).

## Removed or replaced legacy systems

### D6 mansion departure

b0.7 allowed the player to choose whether to remain at the mansion near the end of D6:

```text
Stay.
Leave.
```

`Leave.` entered the terminal `BAD END: OZ`.

b0.85 removes the menu and its Bad Ending from normal play. See [Legacy Route Archive](legacy-routes.md).

### D7 accepted alternatives

The b0.7 D7 Vault formally accepted two additional words: `PEACEKEEPER` and `ARBITER`.

Each opened a separate warning scene, but neither set the state required to pass the D8 hard gate.

b0.85 no longer accepts those two alternatives through normal play. The current main-gate answer remains the only usable D7 progression input. In b0.7, they were **accepted non-progressing alternatives**.

See [Legacy Password Archive](legacy-passwords.md).

### D8 Oswin questions

b0.7 contained a repeatable free-text conversation in which the player could type questions for Oswin and receive keyword-matched responses.

b0.85 removes the input loop and keyword engine and replaces the scene with scripted dialogue. Some topics and old state remnants survive, but there is no longer a normal player input interface.

See [Legacy Mechanics Archive](legacy-mechanics.md).

### D11 optional Vault

b0.7 could unlock an optional D11 Vault visit on a later eligible A/B-side run. Successfully entering `METEMPSYCHOSIS` changed the laboratory sequence and later conditional dialogue without changing the character Route, lettered Path, or ending.

b0.85 removes the normal entry and complete success sequence. Only the password string, old state, and some related dialogue remain.

See [Legacy Password Archive](legacy-passwords.md).

### D11 injection decision

b0.7 offered a three-way laboratory decision that could add different amounts of `DavePride`. b0.85 replaces it with the fixed sequence in which Oswin injects Dave and later reveals that the substance was saline.

See [Legacy Mechanics Archive](legacy-mechanics.md) for the original choices and state effects.

## Dean and early-story interaction rewrite

Several b0.7 scenes involving Dean were substantially more menu-driven. b0.85 preserves much of the surrounding narrative but converts a number of those interactions into fixed dialogue.

### D3 Dean or Tyson breakfast choice

Before the D4 character Route selection, b0.7 allowed the player to choose whom to sit beside at breakfast:

```text
Dean
Tyson
```

Choosing Tyson opened a substantial independent mansion-exploration scene.

b0.85 removes the menu and the Tyson branch and follows the Dean mansion-tour sequence automatically.

This is a removed pre-Route scene, not a change to the D4 character Route selection itself.

### D4–D10 Dean interactions

Examples include:

- **D4:** the Dean/Sal confrontation and Dean Route first-aid menus are removed;
- **D5:** the first-meeting flashback is rewritten from several small choices into a linear memory;
- **D6:** the mushroom quiz and the stay/search decision in the forest are removed;
- **D9:** the kiss/change-subject menu is removed;
- **D10:** the repeatable four-suspect question menu is replaced by a fixed investigation scene.

These changes reduce optional exposition and player control and also alter how some Dean affection points are obtained. They do not change the underlying A–G Path structure.

### D19 relationship resolution

The Dean relationship gate changes mechanically:

::: {.d19-result-table .table-responsive .table-scroll-compact}
| Build | D19 result |
|---|---|
| b0.7 | `bearlove >= 20`: relationship automatic; `10–19`: player accepts or rejects; `< 10`: rejection |
| b0.85 | `bearlove >= 10`: relationship automatic; `< 10`: rejection |
:::

b0.85 therefore:

- lowers the automatic relationship threshold from 20 to 10;
- removes the player's confirmation choice in the old 10–19 range;
- automatically assigns Dean as Dave's boyfriend whenever the current value is at least 10.

This is a relationship-control change, not a lettered Path change.

## Path P additions

The core Path P entry structure already existed in b0.7:

```text
PATH A: END
→ check all twelve persistent medal flags
→ currentPath = "P"
→ final sequence
```

b0.85 retains that structure and adds several later integrations.

### Mandatory final input

b0.85 adds a standalone free-text input during Path P. The answer is introduced directly in the surrounding dialogue, and incorrect attempts loop back to the input.

b0.7 has no equivalent input at this point in the sequence.

For progressive current hints, see [Tiered Password Hints](../guide/password-hints.md).

### Keypad interaction

In b0.7, Florencia operates the keypad before Oswin opens the Vault further.

In b0.85, Dave performs the newly added input and triggers the opening interaction himself.

The keypad role moves from **Florencia to Dave**.

### True-ending persistence

Near the final ending, b0.85 writes:

```renpy
persistent.FirstEnding = True
persistent.true_end = True
```

The explicit `true_end` state supports the modern Compendium and the Epilogue unlock chain.

The game does not display a formal `PATH P: END` heading or define `P` as a full word.

## Gallery registration: 104 to 100

The Gallery total changes from 104 slots in b0.7 to 100 in b0.85.

The reduction comes from the following four slot changes:

::: {.gallery-registration-change-table .table-responsive .table-scroll-compact}
| Registration change | Slot difference |
|---|---:|
| `deanlove` removed from the Dean Gallery list | −1 |
| `daveflashlight1` removed from the Dave list but retained under Misc | −1 duplicate |
| `daveflashlight2` removed from the Dave list but retained under Misc | −1 duplicate |
| `daveflashlight3` removed from the Dave list but retained under Misc | −1 duplicate |
| **Total** | **−4** |
:::

The three flashlight images remain available through their Misc registrations. Their removal from the Dave list eliminates duplicate buttons rather than deleting the images.

`deanlove` is not part of the b0.85 Gallery and does not appear during normal play.

The four older Dean adult CGs are **not** the reason for the 104-to-100 change. They were absent from the Gallery lists in both builds.

For the current 100-slot structure, see [CG Gallery Index](../collectibles/gallery.md).

## CG and asset changes

### Tyson CG redraws

Two Tyson-related CGs were fully redrawn between b0.7 and b0.85:

- `tysondrive`
- `tysonmovie`

The newer images change the complete composition, character placement, camera framing, background treatment, line work, and coloring.

The driving CG appears in several D5/D6 Bad Ending aftermath scenes. The movie CG appears during the Tyson Route on D6.

### Four older Dean adult CGs

Four older Dean adult CGs were present in the b0.7 `images/CG` assets and were used by normal D7 and D9 story scenes.

In b0.85:

- the normal story calls are removed;
- the corresponding image definitions are removed;
- the corresponding image files were removed.

These images were not counted in the Gallery total in either build, despite being used in normal b0.7 story flow.

## Save interface

The route-specific save-slot tint and character portrait already existed in b0.7. They are not b0.85 additions.

A visible b0.85 change is the survivor display: generic status boxes are replaced by character-specific alive/dead pixel icons.

The Route portrait still represents the D4 character Route rather than the current lettered Path.

## Other changes

### Tyson's `Stripes` nickname

b0.85 expands Tyson's use of `Stripes` as a recurring nickname for Dave. The dialogue context connects the name to Dave's striped appearance.

This is a dialogue-characterization change rather than a route mechanic.

### D1 `THE END` input

The D1 Easter input `THE END` quits the game in both builds.

Before calling `renpy.quit`, the b0.85 script additionally sets the following values to `False`:

- `persistent.true_end`;
- the persistent Path A–G ending markers.

In b0.7, the game quits without changing those completion records first.

See [Easter Eggs and Hidden Inputs](../extras/easter-eggs.md) for the full instructions. This input can affect ending-completion records.

## Recognizing an older guide

A guide is likely describing b0.7 rather than b0.85 if it instructs the player to:

- choose Dean or Tyson at D3 breakfast;
- leave the mansion on D6;
- enter `PEACEKEEPER` or `ARBITER` on D7;
- type free-form questions for Oswin on D8;
- revisit the Vault on D11 for `METEMPSYCHOSIS`;
- choose who should receive the D11 injection;
- make a D19 Dean relationship decision in the 10–19 affection range;
- unlock a 104-slot Gallery.

Use the current b0.85 guides for route, password, Compendium, and collection requirements.

## Related pages

- [Route and Path Overview](../guide/route-overview.md)
- [Tiered Password Hints](../guide/password-hints.md)
- [Compendium Unlock Index](../collectibles/compendium.md)
- [Legacy Route Archive](legacy-routes.md)
- [Legacy Password Archive](legacy-passwords.md)
- [Legacy Mechanics Archive](legacy-mechanics.md)
