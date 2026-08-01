---
title: "Vault Password Check Mechanics"
description: "How Password b0.85 normalizes Vault input, matches dates, dispatches results, and handles the D7 and D11 implementations"
toc: true
---

This page explains the day-based Vault password system in Password b0.85 without revealing the answers to the four main checks.

Most Vault inputs from D1 through D17 use the shared `vaultInput` label. The final keyboard input in the Path P sequence uses a separate `FinalPassword` label, while the D1 coffee-cup name uses its own case-sensitive input.

For progressive clues rather than implementation details, see [Tiered Password Hints](../guide/password-hints.md).

## Input Normalization

The shared Vault input begins with:

```renpy
$ VaultPassword = renpy.input("INPUT PASSWORD")
$ VaultPassword = VaultPassword.strip()
$ VaultPassword = VaultPassword.upper()
```

This means:

- capitalization does not matter;
- leading and trailing whitespace is removed;
- spelling, punctuation, and spaces inside the password must remain exact.

For example, `example`, `EXAMPLE`, and `Example` are equivalent, but changing an internal space or punctuation produces a different string.

## Lookup and Dynamic Dispatch

The dispatcher rebuilds two parallel lists:

- `passwordList`, containing recognized strings;
- `correctDayList`, containing the day assigned to each matching position.

The list index connects each recognized string to its required day. In simplified form:

```renpy
input
→ strip leading and trailing spaces
→ convert to uppercase

recognized input on the correct day
→ jump to vaultPassword<index>

recognized input on the wrong day
→ jump to vaultBadDay<currentDay>

empty input
→ jump to vaultEmpty<currentDay>

unknown input
→ jump to vaultWrong<currentDay>
```

The success destination is built from the first matching position returned by `passwordList.index()`. The shared dispatcher therefore does not need a separate hard-coded input branch for every accepted password.

## Success and Failure Results

A successful `vaultPasswordX` label normally sets a stage-specific flag, displays a warning or vision, and returns to the story. Later Route, survival, and story checks may still determine the final lettered Path; see [Lettered Path System](../guide/path-system.md).

The three failure destinations are distinct even when their visible dialogue overlaps:

::: {.password-result-table .table-responsive .table-scroll-compact}

| Input state | Destination |
|---|---|
| Empty after trimming | `vaultEmpty<currentDay>` |
| Non-empty and unrecognized | `vaultWrong<currentDay>` |
| Recognized but assigned to another day | `vaultBadDay<currentDay>` |

:::

Some days give a special wrong-day hint, while others reuse the ordinary error response. Later checks generally offer a retry or **Give up** choice.

## Main Check Stages

The story has four main password checks, although the first stage is split between D4 and D6.

::: {.password-check-stages-table .table-responsive .table-scroll-compact}

| Type | Day | Function |
|---|---:|---|
| Optional Easter input | D1 | Uses the shared Vault dispatcher |
| No accepted answer | D2 | Opens Vault input, but has no accepted D2 answer |
| Optional Easter input | D3 | Uses the shared Vault dispatcher |
| Main check, stage 1A | D4 | Sets the flag later used by the Roswell Route |
| Main check, stage 1B | D6 | Contains five character-related strings for the other Routes |
| Main check, stage 2 | D7 | Uses the duplicate-index fall-through described below |
| Main check, stage 3 | D10 | Main Path gate, with a Sal Route failure exception |
| Incomplete implementation | D11 | Retains password scaffolding but no usable success path |
| Main check, stage 4 | D17 | Failure consequences occur later, with a Tyson Route exception |
| Separate final input | Path P sequence | Uses `FinalPassword` rather than `vaultInput` |

:::

D1 and D3 are optional Easter eggs rather than progression checks. See [Easter Eggs and Hidden Inputs](../extras/easter-eggs.md) for their effects.

## D4 and D6 Route Boundaries

The first main stage is divided between two dates.

### D4

Every character Route reaches the D4 Vault visit. Its success label does not check whether Roswell is the selected partner, but the resulting flag is later required by the Roswell Route.

### D6

The Roswell Route does not use the normal D6 Vault visit. The other five Routes share one input screen with five recognized strings.

The dispatcher checks the string and day, not the active Route. Entering a valid string associated with another character displays that character's warning and sets that character's success flag. The flag required by the current Route remains unset, so the later failure condition still applies.

## Route-Specific Failure Exceptions

Giving up on D10 during the Sal Route remains a failed check, but Sal's Route-specific branch prevents the ordinary D11 disaster and Path C/D diversion.

Giving up on D17 during the Tyson Route also leaves the success flag unset, but later Tyson Route events prevent the D19 disaster and Path F/G diversion.

These exceptions change the consequences of failure; they do not turn the checks into successes. See [Lettered Path System](../guide/path-system.md) for the complete branch logic.

## D7 Duplicate-Index Fall-Through

The D7 password in b0.85 appears three times in `passwordList`, at indices 8, 9, and 10. All three matching positions are assigned to D7.

Because `passwordList.index()` returns the first match, a correct D7 input resolves to index 8 and jumps to `vaultPassword8`.

The three labels appear consecutively:

```renpy
label vaultPassword8:

label vaultPassword9:

label vaultPassword10:
    # D7 success implementation
```

The first two labels are empty, so execution falls through into the body of `vaultPassword10`. The effective control flow is:

```text
vaultPassword8
→ vaultPassword9
→ vaultPassword10
```

This fall-through is why the current D7 answer still reaches the implemented success scene.

## D11 Incomplete Implementation

D11 retains a recognized string, date mapping, failure handlers, dialogue, and later branches that read a D11 flag. However, the normal story never opens `vaultInput` on D11, and the matching `vaultPassword12` success label does not exist.

D11 therefore has no usable password in b0.85. Its remaining pieces do not affect the four main password checks.
