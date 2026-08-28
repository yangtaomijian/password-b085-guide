---
title: "Legacy Password Archive"
description: "Accepted D7 alternatives and the retired D11 Vault sequence in Password b0.7"
toc: true
---

Two password systems from *Password* b0.7 are no longer available during normal b0.85 play:

- the three accepted D7 Vault inputs in b0.7;
- the optional D11 `METEMPSYCHOSIS` sequence.

::: {.callout-warning}
## Not usable in b0.85

`PEACEKEEPER` and `ARBITER` are not accepted D7 inputs in b0.85, and the optional D11 Vault can no longer be entered or completed during normal play.

For the current password checks, see [Tiered Password Hints](../guide/password-hints.md).
:::

## D7 accepted inputs in b0.7

The b0.7 Vault accepted three different words on D7. All three passed the input validation, played the successful-entry response, and opened a dedicated warning scene.

They did not, however, have the same effect on the following day.

::: {.table-responsive .table-scroll-medium}
| D7 input | Story effect in b0.7 | Immediate warning | Main-story result |
|---|---|---|---|
| `PEACEKEEPER` | Accepted non-progressing alternative | Orlando being shot | Cannot continue past D8 |
| `ARBITER` | Accepted non-progressing alternative | Dean and Tyson fighting over the gun | Cannot continue past D8 |
| Current D7 answer | Advances the main story | Benson's death warning | Satisfies the requirement to continue past D8 |
:::

The older alternatives were therefore not invalid entries: the Vault accepted them and opened their warning scenes. They did not advance the story because only the current answer allows the player to continue past D8.

Entering either older alternative still leads into the Benson Bad Ending timeline.

## How the old hint structure worked

The b0.7 puzzle was more indirect than the current D7 check, but the game did not require a fixed three-step order.

A normal D7 failure leads into a Bad Ending that supplies clues for both older alternatives. The player can then enter either `PEACEKEEPER` or `ARBITER` directly; the game does not require one to be completed before the other.

Both accepted alternatives later converge on the same investigation sequence. That shared sequence provides the clue for the answer that actually continues the story past D8.

The sequence works like this:

```text
ordinary D7 failure
→ clues for two accepted alternatives

either accepted alternative
→ shared investigation branch
→ clue for the answer that continues the story
```

Older guides may arrange the three words in a recommended discovery order, but the game did not enforce that order.

## Trauma images and Gallery unlocks

Each accepted D7 input immediately displays a different warning image:

::: {.trauma-warning-table .table-responsive}
| Input | Warning image shown |
|---|---|
| `PEACEKEEPER` | Orlando being shot |
| `ARBITER` | Dean and Tyson fighting over the gun |
| Current D7 answer | Benson's death warning |
:::

In normal play, displaying one of these images unlocks its Gallery entry.

The b0.7 alternatives therefore provided a direct shortcut to the Orlando and Dean/Tyson Trauma images. That shortcut no longer works in b0.85 because the two words are no longer accepted. The unavoidable D8 Bad Ending can still display the older Trauma images during its normal failure sequence.

For the current Gallery structure, see [CG Gallery Completion Index](../collectibles/gallery.md).

## D11 optional Vault

b0.7 also contained a non-mandatory D11 Vault sequence using `METEMPSYCHOSIS`.

Unlike the four major password checks, this input was not required to continue the story. It functioned as a hidden alternate-text and laboratory branch.

### When the option appeared

The normal entry required both of the following states:

```renpy
persistent.metempsychosis_check == True
BensonAround == True
```

The option becomes available after the relevant Oswin-alive D11 laboratory sequence has already been completed once. On a later eligible run through the A/B-side D11 material, the player can receive an additional choice:

```text
Visit the Vault.
Stay here.
```

`Visit the Vault.` opens the password input. `Stay here.` continues without using it.

Because the condition is persistent, it is shared across save slots and character Routes. Starting a new game does not by itself restore the first-time state.

### Hint and successful input

The word is shown in the earlier laboratory material, so the later input is intended as a memory or timeline-recognition check rather than a mandatory puzzle.

A successful entry records `METEMPSYCHOSIS = True` for the current playthrough; it is not shared across saves.

It changes the D11 laboratory sequence and several later conditional dialogue passages. It does not directly change:

- the selected character Route or the current lettered Path;
- medal completion;
- the final ending outcome.

## D11 legacy content in b0.85

b0.85 still mentions this word in the story and retains a small amount of conditional dialogue related to `METEMPSYCHOSIS`. During normal D11 play, the matching Vault input and its successful scene are no longer available.

These are story traces from the older sequence, not a hidden password in the current build. A normal b0.85 playthrough uses the dialogue for a run that never completed the retired input.

## Path P password

b0.7 did not contain the current standalone input near the end of Path P. b0.85 adds that mandatory interaction after the existing Path A ending and twelve-medal transition into Path P.

Current hints for that input belong to [Tiered Password Hints](../guide/password-hints.md). Its broader version context is covered in [Major Changes in b0.85](b085-changes.md).

## Related pages

- [Tiered Password Hints](../guide/password-hints.md)
- [Legacy Mechanics Archive](legacy-mechanics.md)
- [Legacy Route Archive](legacy-routes.md)
- [Major Changes in b0.85](b085-changes.md)
