---
title: "Affection Checks and Story Differences"
description: "How affection thresholds change dialogue, intimacy scenes, choices, and D19 relationship outcomes in Password b0.85"
toc: true
---

This page records the specific dialogue, story, and relationship differences produced by the six affection variables in Password b0.85.

For the choices that award points and the complete point inventory, see [Affection System and Point Guide](affection.md).

::: {.callout-important}
## How to read this page

This page covers differences caused by **affection checks**:

- every threshold uses “greater than or equal to,” so `bearlove >= 5` is already satisfied at exactly 5;
- reaching a number does not permanently activate one universal relationship state—the difference appears only when the story reaches that specific `if` or `elif` check;
- most checks also depend on the current character route, story date, earlier choices, or other story flags;
- branches in one `if` / `elif` chain are mutually exclusive, so a higher branch replaces the lower one;
- this page focuses on differences caused by affection. Route-only or story-flag-only differences are mentioned only where they are necessary to understand the check.
:::

## Character-specific checks

::: {.panel-tabset .character-tabs group="affection-character"}

### Orlando

::: {.affection-difference-table .table-responsive .table-scroll-large}

| Check | Main story locations | Additional conditions | Dialogue or story effect |
|---|---|---|---|
| `dragonlove >= 5` | D6 after Orlando's dinner; D9 morning | D6 requires the Orlando Route and the successful D6 Vault state | On D6, Orlando proposes kissing practice under the pretext of helping Dave prepare for Dean, and `orlandokiss` is displayed. Below 5, the practice scene is skipped. On D9 morning, this threshold selects the middle comfort branch: Orlando asks whether he can help, but remains hesitant. |
| `dragonlove >= 7` | D6 kissing practice | The `>= 5` practice scene must already be active | After the first kiss, Dave actively pulls Orlando closer and kisses back. A follow-up choice appears; choosing `Yes.` awards another point. Below 7, the scene ends after the first practice kiss without Dave's more active response. |
| `dragonlove >= 10` | D9 morning; D19 Orlando kitchen scene | D9 is the highest comfort branch; D19 requires the Orlando Route and the failed Dean-date outcome that leads into the kitchen scene | On D9, Orlando recognizes that Dave is close to breaking down, touches his face, and presses him to say whether someone hurt him. On D19, values from 10 through 19 expose `I love you too.` / `Stay quiet.`, allowing the player to accept or reject Orlando. |
| `dragonlove >= 15` | D15 A/B dream; D16 A/B morning; D16 Orlando event | Orlando Route or the corresponding Orlando scene | In the D15 dream, Dave challenges Orlando for continually using Dean as an excuse and starts questioning whether he loves Orlando too. On D16 morning, Orlando's emotional distance is framed as genuinely painful. In the character event, Dave directly confronts Orlando for diverting every serious conversation back toward Dean. |
| `dragonlove >= 18` | D10 night on the Orlando Route | Orlando Route | Both branches still contain a kiss. At 18 or more, Orlando touches Dave's face and initiates more directly, and Dave interprets it as an emotionally meaningful kiss. Below 18, Orlando first asks Dave to close his eyes and the moment is more hesitant and experimental. If `OrlandoKiss` is already set, the scene also refers back to the D6 practice kiss. |
| `dragonlove >= 20` | D18 Orlando scene; two D19 Orlando scenes | The D18 variation also requires the successful D17 Vault state; D19 requires the relevant Orlando branches | On D18, Dave takes Orlando's hand, pulls him closer, and increases the physical intimacy of the scene. One D19 follow-up contains a small reciprocal-touch variation. In the later kitchen confession, Orlando explicitly says he loves Dave and the game automatically enters `OrlandoBoyfriend`. |

:::

#### D19 relationship outcome

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| Condition | Result |
|---|---|
| `dragonlove >= 20` | Dave automatically accepts Orlando, enters `OrlandoBoyfriend`, and sets `DaveBoyfriend` to `Orlando`. |
| `10 <= dragonlove < 20` | `I love you too.` / `Stay quiet.` appears, allowing the player to accept or reject. |
| `dragonlove < 10` | The story automatically follows Orlando's rejection branch without offering a romantic response. |

:::

### Dean

::: {.affection-difference-table .table-responsive .table-scroll-large}

| Check | Main story locations | Additional conditions | Dialogue or story effect |
|---|---|---|---|
| `bearlove >= 5` | D5 Dean Route hot tub | Dean Route and the D5 `Romance` movie choice | Dean treats the movie choice as a possible signal from Dave, `deankiss` is displayed, and the later kiss-confirmation menu is reached. Below 5, the scene still contains flirting but not the formal kiss choice. The CG appears before the confirmation menu, so choosing `No` afterward does not prevent its Gallery unlock. |
| `bearlove >= 10` | End of the D19 Dean date | Reach the Dean post-date branch | Dave says that he also looked forward to the date and frames his feelings as close to love. The game sets `DaveBoyfriend = "Dean"` and continues into the relationship and intimate scene. Below 10, Dave concludes that the date did not create enough romantic chemistry. |
| `bearlove >= 15` | D9 morning; D15 A/B dream; D16 A/B morning | Corresponding Dean scenes | On D9, Dean distinguishes casual sex from intimacy with someone important. In the D15 dream, Dave admits how strongly he likes Dean. On D16 morning, Dean's embrace is associated with safety, softness, and wanting to wake up that way regularly. |
| `bearlove >= 17` | D10 night | Dean Route and the successful D10 Vault state | Dave realizes that his feelings may have grown beyond ordinary liking and thinks that the two of them will need a serious conversation. |
| `bearlove >= 20` | D18 post-meeting Dean scene | Dean Route and the successful D17 Vault state | Dave changes `I appreciate it` into the more personal `I appreciate you`, explicitly anticipates the next day's date, and initiates a stronger kissing sequence before they stop to rest. |

:::

#### D19 relationship outcome

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| Condition | Result |
|---|---|
| `bearlove >= 10` | `DaveBoyfriend` is automatically set to `Dean`, followed by the relationship and intimate scene. |
| `bearlove < 10` | Dave decides that the date did not produce enough romantic chemistry, and the relationship does not form. |

:::

### Tyson

::: {.affection-difference-table .table-responsive .table-scroll-large}

| Check | Main story locations | Additional conditions | Dialogue or story effect |
|---|---|---|---|
| `wolflove >= 10` | D9 morning; Night9 Tyson event; D19 relationship check | On D9 morning, this is the middle branch when 16 is not reached | Dave directly asks for a hug, and Tyson stays to comfort him. During Night9, Tyson explains more of his trust, grooming sensitivity, and relationship to his wolf identity. On D19, values from 10 through 19 expose `I love you.` / `...`. |
| `wolflove >= 15` | D9 night; D15 A/B; D16 A/B morning; D18 Tyson scenes | Some locations are lower `elif` branches replaced by the 18-point version | On Night9, Dave says that being at home with Tyson could matter more than the mansion. In the D15 dream, he says that he loves Tyson, and in the waking conversation he nearly says it aloud. On D16 morning, Dave begins framing the attachment as possible romantic love rather than only brotherhood. D18 adds further conflict around whether their bond is familial or romantic. |
| `wolflove >= 16` | Highest D9 morning comfort branch | Replaces the 10-point morning branch | Dave directly says that he wants his father. Tyson gives a fuller embrace and acknowledges that Dave's father was almost a father to him as well, making their shared loss explicit. |
| `wolflove >= 17` | D9 Tyson character event | Reach the conversation about Dave's father | Adds one short acknowledgment that Tyson also wishes he could receive fatherly advice. This is a small dialogue variation, not a separate major relationship stage. |
| `wolflove >= 18` | D9 night; D10 Tyson investigation; D16 A/B Tyson event | The D9 version replaces the 15-point branch | On Night9, Dave comes close to a confession and says that he still wants Tyson even when the relationship hurts. On D10, Tyson asks Dave to promise that he will remain happy regardless of what happens. The D16 event adds more direct physical attraction, relationship anxiety, and emotional openness. |
| `wolflove >= 20` | D18 Tyson scenes; D19 Tyson Route | Corresponding Tyson scenes | D18 adds stronger gaze, touch, hugging, and romantic framing. On D19, Dave more directly calls Tyson special and automatically answers the confession, entering `TysonBoyfriend` and the later intimate scene. |

:::

#### D19 relationship outcome

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| Condition | Result |
|---|---|
| `wolflove >= 20` | Dave automatically responds to Tyson, sets `DaveBoyfriend` to `Tyson`, and continues into the relationship and intimate scene. |
| `10 <= wolflove < 20` | `I love you.` / `...` appears, allowing the player to accept or remain silent. |
| `wolflove < 10` | Dave automatically rejects a romantic relationship and describes Tyson as a brother he loves rather than a partner. |

:::

### Roswell

::: {.affection-difference-table .table-responsive .table-scroll-large}

| Check | Main story locations | Additional conditions | Dialogue or story effect |
|---|---|---|---|
| `boarlove >= 5` | D6 lunch; D9 morning | Roswell Route for the D6 event | On D6, Roswell admits that he may want more than friendship and opens `Kiss him.`, `Hug him.`, and `Do nothing.`. Both affectionate choices show `roswellkiss`; `Do nothing.` avoids it. Below 5, Roswell initiates automatically and the kiss CG still appears. On D9, this threshold selects the middle, more awkward comfort branch. |
| `boarlove >= 10` | D9 morning; D19 Roswell Route | On D9, replaces the 5-point branch | Roswell more quickly recognizes Dave's distress, sits with him, and offers to listen. On D19, values from 10 through 19 expose `Relationship` / `Friendship`. |
| `boarlove >= 15` | D15 A/B night; D16 A/B morning; D16 Roswell event | Corresponding Roswell scenes | Dave initiates closer sleep contact on D15. On D16 morning, he comforts Roswell after the nightmare and questions whether their closeness is love or deep friendship. The later event exposes `I like {i}you{/i}.`; choosing it visibly pleases Roswell and awards 2 more points. |
| `boarlove >= 20` | D19 Roswell Route | Reach the final Roswell relationship conversation | Dave says that he cannot accept Roswell leaving before their relationship has truly begun. The game automatically enters `RoswellBoyfriend` and sets the boyfriend variable. |

:::

#### D19 relationship outcome

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| Condition | Result |
|---|---|
| `boarlove >= 20` | Dave automatically accepts Roswell and sets `DaveBoyfriend` to `Roswell`. |
| `10 <= boarlove < 20` | `Relationship` / `Friendship` appears, allowing the player to decide. |
| `boarlove < 10` | The story automatically keeps the relationship as friendship. |

:::

### Hoss

Hoss has two kiss CGs tied to different affection outcomes, making his checks especially relevant to Gallery completion.

::: {.affection-difference-table .table-responsive .table-scroll-large}

| Check | Main story locations | Additional conditions | Dialogue or story effect |
|---|---|---|---|
| `lionlove >= 5` | D6 pool and lunch sequence | Hoss Route | Hoss treats the time together more like a date and flirts more openly, including saying that he better understands why Dean is interested in Dave. Below 5, his response is more restrained. |
| `lionlove >= 12` | D8 morning; D8 room and hidden library; D9 morning and night | The formal library kiss requires the Hoss Route | Hoss gives Dave a cheek kiss on D8 morning and later refers back to it. In the hidden-library scene on the Hoss Route, he sets `HossKiss = True`, kisses Dave, and displays `hosskiss`. D9 adds stronger concern, flirting, and references to wanting another kiss. Below 12 in the library, the kiss is skipped and the game instead awards 2 affection points. |
| `lionlove >= 15` | D15 A/B; D16 A/B morning and Hoss event; D18; D19 | Corresponding Hoss scenes | In the D15 dream, Dave nearly kisses Hoss. In waking conversation, Hoss gives a forehead kiss but tells Dave to resolve his feelings for Dean. On D16, Dave directly asks whether Hoss likes him romantically. D18 hints that someone else could pursue Dave if Dean does not. D19 exposes `Try dating.` / `Stay friends.` when 20 is not reached. |
| `lionlove >= 16` | D10 Hoss investigation | Only when `HossKiss == True` already | Changes only a small set of lines about Hoss envying Tyson's willingness to care for Dave openly. It does **not** trigger the D10 kiss. If `HossKiss == False`, that kiss occurs through the separate false-flag branch regardless of whether affection has reached 16. |
| `lionlove >= 20` | D19 Hoss Route | Reach the final Hoss relationship conversation | Adds more direct relationship discussion and automatically enters `HossBoyfriend`, sets `DaveBoyfriend = "Hoss"`, and displays `hosskiss2`. No acceptance or rejection menu appears at this level. |

:::

#### D19 relationship outcome

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| Condition | Result |
|---|---|
| `lionlove >= 20` | The story automatically enters `HossBoyfriend` and displays `hosskiss2`. |
| `15 <= lionlove < 20` | `Try dating.` / `Stay friends.` appears. |
| `lionlove < 15` | The relationship automatically remains friendship. |

:::

#### Kiss CG relationship

::: {.affection-kiss-table .table-responsive .table-scroll-medium}

| CG | Actual requirement | Meaning |
|---|---|---|
| `hosskiss` | Hoss Route and `lionlove >= 12` | Formal D8 hidden-library kiss |
| `hosskiss2` | Successful D19 Hoss relationship | Automatic at 20, or accepted through `Try dating.` at 15–19 |

:::

For coordinates and the earliest normal display locations, see [CG Gallery Completion Index](../collectibles/gallery.md).

### Sal

::: {.affection-difference-table .table-responsive .table-scroll-large}

| Check | Main story locations | Additional conditions | Dialogue or story effect |
|---|---|---|---|
| `croclove >= 8` | D8; D9 morning | On D9, this is the middle branch below 15 | D8 adds only a brief glance and muted response. On D9, Sal notices that Dave is troubled and explains that he came to check on him, but remains restrained. |
| `croclove >= 15` | D9 morning and Sal event; Night9; D15 A/B; D16 A/B; D18; D19 | Most locations require the Sal Route or the corresponding Sal scene | Sal asks more directly what is upsetting Dave. The D9 character scene expands the Abi discussion, and `Approach.` succeeds as a hug instead of being rejected. Sal stays on Night9 at both high and low affection; this threshold changes the invitation and cuddle-related text rather than determining whether he remains. D15–D18 adds greater physical closeness, Sal's affection for Dave despite his imperfections, and conflict over whether loving Dave would betray Dean. D19 exposes `Romantic` / `Platonic` when 20 is not reached. |
| `croclove >= 16` | D11 A/B Sal dialogue | Reach the relevant conversation | When asked whether he likes someone, Sal admits that he does and that the feeling is recent and still difficult to process. He does not identify the person here. Below 16, this short answer is omitted. |
| `croclove >= 20` | D19 Sal sequence | Reach the final Sal relationship flow | Adds the injured-Sal arrival material and later has Sal explicitly call his feelings a crush and ask about dating after leaving the mountain. The game automatically enters `SalBoyfriend` and sets the boyfriend variable. |

:::

#### D19 relationship outcome

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| Condition | Result |
|---|---|
| `croclove >= 20` | Sal directly admits his crush, Dave automatically accepts, and the story enters `SalBoyfriend`. |
| `15 <= croclove < 20` | `Romantic` / `Platonic` appears. |
| `croclove < 15` | Sal emphasizes close friendship, and the story automatically remains platonic. |

:::

:::

::: {.callout-warning}
## Do not interpret the numbers as fixed relationship ranks

The same affection value can serve very different purposes at different points:

- one check may add only a few lines of internal narration;
- another may replace an entire comfort or intimacy scene;
- another may expose a player choice;
- another may automatically establish a relationship;
- a higher `if` or `elif` branch may replace a lower one.

The game does not treat 5, 10, 15, and 20 as universal stages such as “friend,” “crush,” or “partner.”
:::

## Related guides

- [Affection System and Point Guide](affection.md)
- [CG Gallery Completion Index](../collectibles/gallery.md)
- [Route and Path Overview](../guide/route-overview.md)
- [Lettered Path System](../guide/path-system.md)
