---
title: "Vault Input and Password Checks"
description: "Vault input rules, day restrictions, failure results, and Route exceptions in Password b0.85"
toc: true
---

Most Vault inputs in *Password* b0.85 follow the same rules. This page explains how entries are handled, what happens on different days, and the Route exceptions that are easy to misread, without revealing the four main answers.

The final Path P password and the D1 coffee-cup name use separate rules. For progressive clues, see [Tiered Password Hints](../guide/password-hints.md).

## How input is recognized

For ordinary Vault passwords, the game:

- ignores capitalization;
- removes spaces before and after the entry;
- preserves spaces and punctuation inside the entry, so the spelling still needs to be exact.

For example, `example`, `EXAMPLE`, and `Example` are equivalent. Changing an internal space or punctuation produces a different entry.

## Day checks and failure results

The game checks both the entered word and the current day. The player can see four kinds of result:

::: {.password-result-table .table-responsive .table-scroll-compact}

| Input | Result in game |
|---|---|
| Correct password for the current day | Shows the matching warning or vision, then returns to the story |
| Valid password for another day | Shows either a wrong-day hint or the ordinary error response, depending on the day |
| Empty input | Shows that day's empty-input response |
| Unrecognized input | Shows that day's wrong-password response |

:::

Passing a password check usually records only that stage's successful result. Later Route, survival, and story choices can still change the final lettered Path; see [Lettered Path System](../guide/path-system.md).

## Main input stages

The story has four main password checks. The first group appears on D4 or D6 depending on the character Route.

::: {.password-check-stages-table .table-responsive .table-scroll-compact}

| Type | Day | What the player needs to know |
|---|---:|---|
| Hidden Easter input | D1 | Not required for normal progression |
| No accepted answer | D2 | Input is available, but nothing is correct on this day |
| Optional Easter input | D3 | A successful entry raises affection for all six characters |
| Main check, group 1 | D4 | Every Route visits; the Roswell Route needs its matching answer |
| Main check, group 1 | D6 | The other five Routes use their matching answers here |
| Main check, group 2 | D7 | b0.85 accepts only the current answer |
| Main check, group 3 | D10 | Normally keeps the run on the A/B side or moves it to C/D; the Sal Route has a failure exception |
| Unusable legacy content | D11 | The story still mentions the word, but there is no normally playable password entry |
| Main check, group 4 | D17 | Failure takes effect later; the Tyson Route has an exception |
| Separate final input | Final Path P sequence | The clue appears immediately beforehand, and wrong answers automatically retry |

:::

D1 and D3 are optional Easter eggs, not progression checks. See [Easter Eggs and Hidden Inputs](../extras/easter-eggs.md) for their effects.

## D4 and D6: match the current Route

Every character Route reaches the D4 Vault. Only the Roswell Route needs its group-one answer at this visit; the other five Routes perform the same group check on D6.

The D6 input does not stop the player from entering another character's valid word. Doing so can display that character's warning, but it does not protect the partner on the current Route, so the current Route's failure still occurs later.

## Sal and Tyson: avoiding the consequence is not a pass

Giving up on D10 during the Sal Route is still a failed check. Sal's Route-specific story prevents the usual D11 disaster and Path C/D diversion, but Gallery completion still requires the correct password: the successful scene displays Sal's Vault CG and a related image filed under another character's Gallery category.

Failing or giving up on D17 during the Tyson Route is also not a pass. Later Tyson Route events prevent the D19 disaster and Path F/G diversion.

These exceptions change the consequences of failure; they do not award the successful scene or its exclusive content. See [Lettered Path System](../guide/path-system.md) for the complete branch logic.

## D7: the current answer works normally

b0.85 accepts only the current D7 answer. Entering it correctly reaches the complete success scene and records the result needed to continue past D8.

The two other words accepted in b0.7 did not advance the main story and are no longer accepted in b0.85. See [Legacy Password Archive](../versions/legacy-passwords.md) for the version change.

## D11: no usable password in b0.85

The D11 story still shows and defines a word from the older sequence, and some later dialogue retains related traces. Normal b0.85 play does not open the matching Vault input or provide a success scene.

D11 therefore has no usable password and is not one of the four main checks. See [Legacy Password Archive](../versions/legacy-passwords.md#d11-optional-vault) for its former entry and effect.

## Related guides

- [Tiered Password Hints](../guide/password-hints.md)
- [Lettered Path System](../guide/path-system.md)
- [Easter Eggs and Hidden Inputs](../extras/easter-eggs.md)
- [Legacy Password Archive](../versions/legacy-passwords.md)
