---
title: "Affection System and Point Guide"
description: "Hidden affection variables, thresholds, relationship checks, and all reachable point gains in Password b0.85"
toc: true
---

Password b0.85 tracks a separate hidden affection value for each of the six main character routes.

| Character | Internal variable |
|---|---|
| Dean | `bearlove` |
| Tyson | `wolflove` |
| Roswell | `boarlove` |
| Orlando | `dragonlove` |
| Hoss | `lionlove` |
| Sal | `croclove` |

These values are not displayed as an in-game meter. They begin at 0 in a new game, increase through specific choices or automatic story nodes, and are checked later for text variations, intimate options, several CGs, and the D19 relationship outcome.

::: {.callout-important}
## What affection does—and does not—control

Affection can affect:

- internal narration and short dialogue variations;
- hugs, kisses, and other intimate options;
- kiss or relationship flags;
- several Gallery CGs;
- whether a D19 relationship is automatic, optional, or unavailable.

No lettered Path, Vault-password result, survival check, medal check, or Path P condition directly reads any of the six affection variables.
:::

## Core behavior

- All six values are ordinary story-save variables, not persistent data.
- Loading an older save restores the affection values stored in that save.
- Normal reachable flow contains no affection deductions.
- Choices outside the current character route can still award points.
- D5 movie choices and the D7 family-subject menu can award points to several characters, but each menu still allows only one selection.
- Path C contains one important exception: the Sal pool sequence directly sets Sal's affection to 0.

All threshold checks use `>=`. Ranges such as `15 <= lionlove < 20` are shorthand for an `if >= 20` branch followed by an `elif >= 15` branch.

## Threshold overview

| Character | Affection thresholds |
|---|---|
| Orlando | 5, 7, 10, 15, 18, 20 |
| Dean | 5, 10, 15, 17, 20 |
| Tyson | 10, 15, 16, 17, 18, 20 |
| Roswell | 5, 10, 15, 20 |
| Hoss | 5, 12, 15, 16, 20 |
| Sal | 8, 15, 16, 20 |

## D19 relationship outcomes

D19 does not compare all six characters and choose the highest value. The current character route determines which affection value is checked.


::: {.affection-d19-summary-table .table-responsive .table-scroll-large}

| Character | Automatic at | Choice range | Choice | Below range |
|---|---:|---:|---|---|
| Dean | `bearlove >= 10` | None | None | Relationship automatically fails |
| Orlando | `dragonlove >= 20` | `10 <= dragonlove < 20` | `I love you too.` / `Stay quiet.` | Automatic rejection |
| Tyson | `wolflove >= 20` | `10 <= wolflove < 20` | `I love you.` / `...` | Automatic rejection |
| Roswell | `boarlove >= 20` | `10 <= boarlove < 20` | `Relationship` / `Friendship` | Automatic friendship result |
| Hoss | `lionlove >= 20` | `15 <= lionlove < 20` | `Try dating.` / `Stay friends.` | Automatic friends result |
| Sal | `croclove >= 20` | `15 <= croclove < 20` | `Romantic` / `Platonic` | Automatic friends result |

:::

`DaveBoyfriend` is assigned only after the automatic high branch or a player-accepted middle branch. Dean is the only route without a middle choice range.

## Hoss threshold planning

Hoss is the character for whom point planning matters most because two Gallery images sit behind different D8 and D19 outcomes.

### D8 `hosskiss`

Without any D1 cup-affection result or the D3 hidden shared bonus, the highest reachable value before the D8 hidden-library check is **13**. The threshold of 12 is therefore achievable through ordinary visible choices alone.

If Hoss enters the library below 12:

1. the D8 kiss and `hosskiss` do not occur;
2. the low branch awards 2 points;
3. the later `Hold his hand` choice can award another 2 points.

Those later gains help with D19, but they occur after the D8 check and cannot repair the missed CG in that run.

### D19 `hosskiss2`

Under the same restriction—no D1 cup-affection result and no D3 hidden shared bonus—the maximum by D19 is **19**. That still opens the `Try dating.` / `Stay friends.` menu, but it cannot trigger the automatic 20-point relationship.

Using the D1 `Hoss` cup-name point raises that ordinary maximum to exactly 20. Hidden shared bonuses provide additional margin but are not required for the D8 kiss.

## Shared and cross-character gains

::: {.affection-shared-gains-table .table-responsive .table-scroll-compact}

| Source | Gain | Input rule |
|---|---:|---|
| D1 shared-affection cup answer | All six characters +1 | Same cup input as every other D1 answer; trims spaces but is case-sensitive |
| D1 hidden driver-name answer | All six characters +1 | Same mutually exclusive cup input |
| D1 exact main-character name | Matching character +1 | Exact title-case spelling after trimming spaces |
| D3 hidden shared-affection input | All six characters +5 | Trims spaces and converts the input to uppercase |

:::

The D1 options share one input field, so only one D1 branch can apply in a single run. The D3 bonus is independent.

Visible ordinary menus can also affect several characters:

- one D5 movie choice can award points to multiple characters;
- one D7 family-subject choice can award points to multiple characters.

The individual writes are listed in the character tables below.

## Complete point inventory

The tables list all 126 reachable point gains in normal play, plus each character's D1 exact-name point. Replay-only and unreachable gains are excluded.

Exact menu strings are preserved for comparison with the game. Rows from the same mutually exclusive menu are not simultaneously obtainable.

::: {.panel-tabset .character-tabs group="affection-character"}

### Orlando

`dragonlove`

::: {.affection-point-table .affection-orlando-table .table-responsive .table-scroll-large}

| Day | Choice / condition | Requirement | Points |
|---|---|---|---:|
| D1 | Enter `Orlando` as the cup name | Exact capitalization after trimming spaces | +1 |
| D2 | `Cherry Pie!` | — | +1 |
| D3 | `Orlando` | D3 message recipient | +1 |
| D4 | `Wind?` | Orlando Route | +1 |
| D5 | `Yes.` | Orlando Route | +1 |
| D5 | `Cookies` | Orlando Route; D5 Orlando dessert | +1 |
| D5 | `Brownies` | Orlando Route; D5 Orlando dessert | +1 |
| D5 | `Comedy` | mutually exclusive D5 movie choice | +1 |
| D6 | `Orlando` | Sal or Orlando Route | +1 |
| D6 | `What was it like?` | Orlando Route | +1 |
| D6 | `Yes.` | Orlando Route; successful D6 Vault state; Orlando affection at least 7; D6 Orlando follow-up yes/no | +1 |
| D6 | automatic after the first practice kiss in the lower `< 7` branch | Orlando Route; successful D6 Vault state; Orlando affection 5–6 | +1 |
| D7 | `Hug.` | Orlando Route; D7 Orlando response | +1 |
| D7 | `Advice.` | Orlando Route; D7 Orlando response | +2 |
| D7 | `Stay.` → `Dean.` | mutually exclusive D7 family-subject choice | +1 |
| D7 | `Stay.` → `Roswell.` | mutually exclusive D7 family-subject choice | +1 |
| D7 | `Stay.` → `Orlando.` | mutually exclusive D7 family-subject choice | +2 |
| D9 | `...Reverse.` | Roswell Route, Orlando Route, or Sal Route; D9 Uno final-card menu | +1 |
| D9 | `Hold his hand.` | Orlando Route | +2 |
| D9 | `Invite him to stay.` | Orlando Route; Night9 Orlando menu | +1 |
| D9 | `Reassure him.` | Orlando Route; Night9 Orlando menu | +2 |
| D15 | `Kiss him.` | Orlando Route; Path A or B | +2 |
| D16 | `Agree.` | Orlando Route; Path A or B; Orlando affection at least 15 | +1 |

:::

### Dean

`bearlove`

::: {.affection-point-table .affection-dean-table .table-responsive .table-scroll-large}

| Day | Choice / condition | Requirement | Points |
|---|---|---|---:|
| D1 | Enter `Dean` as the cup name | Exact capitalization after trimming spaces | +1 |
| D2 | `Greenhouse.` — automatic on entering the room | — | +1 |
| D3 | `Dean` | D3 message recipient | +1 |
| D4 | `Call for help.` | Dean Route | +1 |
| D5 | automatic during the Dean Route morning scene | Dean Route | +2 |
| D5 | `Dean` → `Get Closer` | Dean Route | +1 |
| D5 | `Comedy` | mutually exclusive D5 movie choice | +2 |
| D5 | `Action` | mutually exclusive D5 movie choice | +1 |
| D5 | `Romance` → `Hold his hand` | Dean Route; mutually exclusive D5 movie choice | +1 |
| D6 | `Dean.` → `Yes` | Dean Route; kissed Dean on D5; choose Dean during the D6 check-in | +2 |
| D6 | `Hold his hand.` | Dean Route | +1 |
| D7 | `Stay.` → `Dean.` | mutually exclusive D7 family-subject choice | +3 |
| D7 | `Stay.` → `Hoss.` | mutually exclusive D7 family-subject choice | +1 |
| D7 | `Stay.` → `Sal.` | mutually exclusive D7 family-subject choice | +2 |
| D9 | `Dean.` | Dean Route, Hoss Route, or Tyson Route; D9 morning companion menu | +1 |
| D15 | `Go for it.` | Dean Route; Path A or B; D15 Dean response | +1 |
| D15 | `Hold off.` | Dean Route; Path A or B; D15 Dean response | +2 |

:::

### Tyson

`wolflove`

::: {.affection-point-table .affection-tyson-table .table-responsive .table-scroll-large}

| Day | Choice / condition | Requirement | Points |
|---|---|---|---:|
| D1 | Enter `Tyson` as the cup name | Exact capitalization after trimming spaces | +1 |
| D2 | `I like how you smell.` | — | +1 |
| D3 | `Tyson` | D3 message recipient | +1 |
| D3 | `Tyson.` | D3 lunch companion | +1 |
| D3 | `Tyson.` → `Chase after Tyson.` | — | +1 |
| D4 | `Grab his hand.` | Tyson Route | +1 |
| D5 | `Beating?` | Tyson Route | +1 |
| D5 | `Tyson` | Tyson Route | +1 |
| D5 | `Horror` | mutually exclusive D5 movie choice | +1 |
| D5 | `Comedy` | mutually exclusive D5 movie choice | +1 |
| D5 | `Action` | mutually exclusive D5 movie choice | +1 |
| D5 | `Romance` | Tyson Route; mutually exclusive D5 movie choice | +1 |
| D6 | `Tyson.` → `I didn't know I was spotting for a bitch.` | Hoss or Tyson Route; D6 Tyson encouragement | +1 |
| D6 | `Tyson.` → `Keep going! You can do it!` | Hoss or Tyson Route; D6 Tyson encouragement | +2 |
| D6 | `You.` | Tyson Route | +1 |
| D6 | `Stop Tyson.` → `Save Tyson.` → `Truth.` | Tyson Route; successful D6 Vault state; nested Tyson rescue choices | +1 |
| D6 | `Stop Tyson.` → `Save Tyson.` → `I've got your back too.` | Tyson Route; successful D6 Vault state; nested Tyson rescue choices | +1 |
| D6 | `Stop Tyson.` → `Save Tyson.` → `Stay.` | Tyson Route; successful D6 Vault state; nested Tyson rescue choices | +1 |
| D7 | `Assist.` | Tyson Route | +1 |
| D7 | `Follow Tyson.` → `Hug him.` | Tyson Route | +1 |
| D7 | `Follow Tyson.` → `Hug Tyson.` | Tyson Route | +1 |
| D8 | `Pet him.` | Tyson Route | +1 |
| D9 | `Tyson.` | Dean Route, Hoss Route, or Tyson Route; D9 morning companion menu | +1 |
| D15 | `'Ty'.` | Tyson Route; Path A or B; D15 Tyson name choice | +2 |
| D15 | `'Tyson'.` | Tyson Route; Path A or B; D15 Tyson name choice | +1 |
| D16 | `As something more.` | Tyson Route; Path A or B; Tyson affection at least 18 | +2 |
| D18 | `Stay by the door.` | Tyson Route | +1 |

:::

### Roswell

`boarlove`

::: {.affection-point-table .affection-roswell-table .table-responsive .table-scroll-large}

| Day | Choice / condition | Requirement | Points |
|---|---|---|---:|
| D1 | Enter `Roswell` as the cup name | Exact capitalization after trimming spaces | +1 |
| D2 | `Museum.` — automatic on entering the room | — | +1 |
| D3 | `Roswell` | D3 message recipient | +1 |
| D3 | `Roswell.` | D3 lunch companion | +1 |
| D4 | `Nah.` | Roswell Route | +1 |
| D4 | `Sure.` | — | +1 |
| D4 | `Invest` | Roswell Route; D4 Roswell investment choice | +2 |
| D4 | `Vacation` | Roswell Route; D4 Roswell investment choice | +1 |
| D4 | `Pay Debts` | Roswell Route; D4 Roswell investment choice | +1 |
| D6 | `Okay.` | Roswell Route | +1 |
| D6 | `Lie` | Roswell Route | +1 |
| D6 | `Kiss him.` | Roswell Route; Roswell affection at least 5; D6 Roswell response | +2 |
| D6 | `Hug him.` | Roswell Route; Roswell affection at least 5; D6 Roswell response | +1 |
| D7 | `Stay.` → `Dean.` | mutually exclusive D7 family-subject choice | +1 |
| D7 | `Stay.` → `Roswell.` | mutually exclusive D7 family-subject choice | +2 |
| D7 | `Stay.` → `Orlando.` | mutually exclusive D7 family-subject choice | +1 |
| D9 | `...Wild.` | Roswell Route, Orlando Route, or Sal Route; D9 Uno final-card menu | +1 |
| D15 | `Agree.` | Roswell Route; Path A or B | +1 |
| D16 | `I like you.` | Roswell Route; Path A or B; Roswell affection at least 15 | +2 |

:::

### Hoss

`lionlove`

::: {.affection-point-table .table-responsive .table-scroll-large}

| Day | Choice / condition | Requirement | Points |
|---|---|---|---:|
| D1 | Enter `Hoss` as the cup name | Exact capitalization after trimming spaces | +1 |
| D2 | `Pilates?` | — | +1 |
| D3 | `Hoss` | D3 message recipient | +1 |
| D4 | `Stay.` | Hoss Route | +1 |
| D5 | `You can pick.` | Hoss Route | +1 |
| D5 | `Oh! Thank god you're here!` | Hoss Route; D5 Hoss threat response | +1 |
| D5 | `Oh no! Not Slimes!` | Hoss Route; D5 Hoss threat response | +1 |
| D5 | `Hoss` | Hoss Route | +1 |
| D5 | `Action` | mutually exclusive D5 movie choice | +1 |
| D6 | `Hoss.` | Hoss or Tyson Route | +1 |
| D6 | `Guys like me?` | Hoss Route | +1 |
| D6 | `Neither.` | Hoss Route | +1 |
| D7 | `Good!` | Hoss Route | +1 |
| D7 | `Stay.` → `Roswell.` | mutually exclusive D7 family-subject choice | +1 |
| D7 | `Stay.` → `Hoss.` | mutually exclusive D7 family-subject choice | +2 |
| D7 | `Stay.` → `Sal.` | mutually exclusive D7 family-subject choice | +1 |
| D8 | automatic in the hidden library when the D8 kiss threshold is not met | Hoss Route; Hoss affection below 12 | +2 |
| D8 | `Hold his hand` | Hoss Route | +2 |
| D9 | `Hoss.` | Dean Route, Hoss Route, or Tyson Route; D9 morning companion menu | +1 |
| D9 | `Answer.` | Hoss Route | +1 |
| D9 | `...want you to stay.` | Hoss Route; Night9 Hoss menu | +1 |
| D9 | `...hope you sleep well.` | Hoss Route; Night9 Hoss menu | +2 |

:::

### Sal

`croclove`

::: {.affection-point-table .affection-sal-table .table-responsive .table-scroll-large}

| Day | Choice / condition | Requirement | Points |
|---|---|---|---:|
| D1 | Enter `Sal` as the cup name | Exact capitalization after trimming spaces | +1 |
| D2 | `Throw towel over.` | — | +1 |
| D3 | `Sal` | D3 message recipient | +1 |
| D4 | `Continue searching.` | Sal Route | +1 |
| D5 | `Yes` | Sal Route | +1 |
| D5 | `Swim to Sal.` | Sal Route | +1 |
| D5 | `The day we first met.` | Sal Route | +1 |
| D5 | `No` | Sal Route | +1 |
| D5 | automatic after choosing `Sal` at dinner | Sal Route | +1 |
| D5 | `Comedy` | mutually exclusive D5 movie choice | +1 |
| D5 | `Action` | mutually exclusive D5 movie choice | +2 |
| D6 | `Sal` | Sal or Orlando Route | +1 |
| D6 | `Wait.` | Sal Route | +1 |
| D6 | `Video games?` | Sal Route; D6 Sal activity | +1 |
| D6 | `Talk?` | Sal Route; D6 Sal activity | +1 |
| D6 | `No.` | Sal Route | +1 |
| D7 | `Stay.` → `Hoss.` | mutually exclusive D7 family-subject choice | +1 |
| D7 | `Stay.` → `Sal.` | mutually exclusive D7 family-subject choice | +2 |
| D7 | `Stay.` → `Orlando.` | mutually exclusive D7 family-subject choice | +1 |
| D9 | `...Skip.` | Roswell Route, Orlando Route, or Sal Route; D9 Uno final-card menu | +1 |
| D9 | `Approach.` | Sal Route; Sal affection at least 15; D9 Sal comfort menu | +1 |
| D9 | `Talk.` | Sal Route; D9 Sal comfort menu | +1 |
| D9 | `...want to cuddle?` | Sal Route; Night9 Sal menu | +1 |
| D9 | `...want to talk more?` | Sal Route; Night9 Sal menu | +2 |

:::

:::

## Sal-specific behavior in b0.85

### Path C resets Sal's value

During the Path C Sal pool sequence, the game executes:

```renpy
$ croclove = 0
```

This is a direct overwrite rather than a deduction. It removes all Sal affection accumulated earlier in that save.

The other five affection values have no comparable reset during normal play.

### D16 `Remain still.` awards no points

On the Sal Route, the D16 high-affection menu contains:

```renpy
$ croclove + 2
```

This evaluates the expression and discards the result. It does not assign anything back to `croclove`, so `Remain still.` awards **0 points** in b0.85.

There is no later replacement increment before the D19 relationship check. A run can therefore finish two points below what the line visually appears intended to award.

::: {.callout-warning}
## b0.85 no-op expression

Do not count `Remain still.` as a +2 choice when planning Sal's D19 result. In b0.85, the expression does not change `croclove`.
:::

## Related guides

- [CG Gallery Completion Index](../collectibles/gallery.md)
- [Route and Path Overview](../guide/route-overview.md)
- [Lettered Path System](../guide/path-system.md)
