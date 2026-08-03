---
title: "Legacy Password Archive"
description: "Accepted D7 alternatives and the retired D11 Vault sequence in Password b0.7"
toc: true
---

This page documents password mechanics that were present in *Password* b0.7 but are no longer usable through the normal b0.85 story flow.

It focuses on two legacy systems:

- the three accepted D7 Vault inputs in b0.7;
- the optional D11 `METEMPSYCHOSIS` sequence.

This is a historical archive, not a password guide for the current version.

::: {.callout-warning}
## Not usable in b0.85

`PEACEKEEPER` and `ARBITER` are not accepted D7 inputs in b0.85, and the D11 optional Vault no longer has a normal story entry or complete success implementation.

For the current password checks, see [Tiered Password Hints](../guide/password-hints.md).
:::

## D7 accepted inputs in b0.7

The b0.7 Vault accepted three different words on D7. All three passed the input validation, played the successful-entry response, and opened a dedicated warning scene.

They did not, however, have the same effect on the following day.

::: {.table-responsive .table-scroll-medium}
| D7 input | Technical role in b0.7 | Immediate warning | Main-story result |
|---|---|---|---|
| `PEACEKEEPER` | Accepted non-progressing alternative | Orlando being shot | Does not satisfy the D8 hard gate |
| `ARBITER` | Accepted non-progressing alternative | Dean and Tyson fighting over the gun | Does not satisfy the D8 hard gate |
| Current D7 answer | Main-gate answer | Benson's death warning | Sets the state required to continue past the D8 hard gate |
:::

The older alternatives are therefore not “invalid passwords” in the programmatic sense. The Vault deliberately accepted them and set separate flags. They were non-progressing because D8 checks only whether the current main-gate answer was entered.

Entering either older alternative still leads into the Benson Bad Ending timeline.

## How the old hint structure worked

The b0.7 puzzle was more indirect than the current D7 check, but it was not a mechanically enforced three-step chain.

A normal D7 failure leads into a Bad Ending that supplies clues for both older alternatives. The player can then enter either `PEACEKEEPER` or `ARBITER` directly; the game does not require one to be completed before the other.

Both accepted alternatives later converge on the same investigation sequence. That shared sequence provides the clue for the answer that actually satisfies the D8 gate.

The safest summary is therefore:

```text
ordinary D7 failure
→ clues for two accepted alternatives

either accepted alternative
→ shared investigation branch
→ clue for the main-gate answer
```

## Trauma images and Gallery unlocks

Each accepted D7 input immediately displays a different warning image:

::: {.table-responsive}
| Input | Warning image shown |
|---|---|
| `PEACEKEEPER` | Orlando being shot |
| `ARBITER` | Dean and Tyson fighting over the gun |
| Current D7 answer | Benson's death warning |
:::

These image IDs are registered in the Gallery through Ren'Py's seen-image unlock system. In normal play, displaying one of these images satisfies its Gallery unlock condition.

The b0.7 alternatives therefore provided a direct shortcut to the Orlando and Dean/Tyson Trauma images. That shortcut no longer works in b0.85 because the two words are no longer accepted. The current D8 hard Bad Ending can still display the older Trauma images through its normal failure sequence.

For the current Gallery structure, see [CG Gallery Index](../collectibles/gallery.md).

## D11 optional Vault

b0.7 also contained a non-mandatory D11 Vault sequence using `METEMPSYCHOSIS`.

Unlike the four major password checks, this input was not required to continue the story. It functioned as a hidden alternate-text and laboratory branch.

### When the option appeared

The normal entry required both of the following states:

```renpy
persistent.metempsychosis_check == True
BensonAround == True
```

The persistent flag becomes available after the relevant Oswin-alive D11 laboratory sequence has already been completed once. On a later eligible run through the A/B-side D11 material, the player can receive an additional choice:

```text
Visit the Vault.
Stay here.
```

`Visit the Vault.` opens the password input. `Stay here.` continues without using it.

Because the condition is persistent, it is shared across save slots and character Routes. Starting a new game does not by itself restore the first-time state.

### Hint and successful input

The word is shown in the earlier laboratory material, so the later input is intended as a memory or timeline-recognition check rather than a mandatory puzzle.

A successful entry sets `METEMPSYCHOSIS = True`. This is an ordinary playthrough variable, not another persistent completion flag.

It changes the D11 laboratory sequence and several later conditional dialogue passages. It does not directly change:

- the selected character Route or the current lettered Path;
- medal completion;
- the final ending classification.

## D11 remnants in b0.85

b0.85 retains several pieces of the old implementation:

- the recognized password string and its D11 date mapping;
- D11 wrong-input and empty-input handlers;
- the `METEMPSYCHOSIS` variable;
- later dialogue conditions that still read the variable.

The current build no longer contains the complete playable path into that system:

- the normal D11 story does not open `vaultInput`;
- the old success label is absent;
- normal b0.85 story code does not set `METEMPSYCHOSIS = True`;
- the persistent setup used by the old entry is no longer completed through the normal flow.

The most accurate classification is therefore an **incomplete legacy remnant**, not a currently hidden password.

In a normal playthrough created in b0.85, the surviving conditional passages use the default `False` version.

## Path P password

b0.7 did not contain the current standalone input near the end of Path P. b0.85 adds that mandatory interaction after the existing Path A ending and twelve-medal transition into Path P.

Current hints for that input belong to [Tiered Password Hints](../guide/password-hints.md). Its broader version context is covered in [Major Changes in b0.85](b085-changes.md).

## Related pages

- [Tiered Password Hints](../guide/password-hints.md)
- [Legacy Mechanics Archive](legacy-mechanics.md)
- [Legacy Route Archive](legacy-routes.md)
- [Major Changes in b0.85](b085-changes.md)
