---
title: "好感度检定与剧情差异"
description: "Password b0.85 中好感度阈值如何改变对话、亲密场景、选择与 D19 关系结果"
toc: true
---

本页记录《Password》b0.85 中六项好感度变量造成的具体对话、剧情和关系差异。

需要查询加点选项及完整加点清单时，见[好感度机制与加点](affection.md)。

::: {.callout-important}
## 阅读方法

本页只整理由**好感度检定**造成的差异：

- 所有阈值都表示“大于等于”，因此 `bearlove >= 5` 在数值正好为 5 时已经成立；
- 达到某个数值不会永久开启一个统一的关系状态，只有剧情运行到对应的 `if` 或 `elif` 检定时才会产生差异；
- 大多数检定还依赖当前角色线、剧情日期、先前选择或其他剧情标记；
- 同一个 `if`／`elif` 链中的分支彼此互斥，高档分支会替代低档分支；
- 本页聚焦好感度造成的变化。纯角色线条件或纯剧情标记差异，只在理解检定所必需时说明。
:::

## 各角色检定

::: {.panel-tabset .character-tabs group="affection-character"}

### Orlando

::: {.affection-difference-table .table-responsive .table-scroll-large}

| 检定 | 主要剧情位置 | 附加条件 | 对话或剧情效果 |
|---|---|---|---|
| `dragonlove >= 5` | D6 Orlando 晚餐后；D9 早晨 | D6 要求 Orlando 线和 D6 金库状态成功 | D6 中，Orlando 会以帮助 Dave 为 Dean 做准备为由提出接吻练习，并显示 `orlandokiss`。低于 5 时会跳过练习吻。D9 早晨，该阈值选择中档安慰分支：Orlando 会询问自己能否帮忙，但仍显得犹豫。 |
| `dragonlove >= 7` | D6 接吻练习 | 必须已经进入 `>= 5` 的练习场景 | 第一次亲吻后，Dave 会主动把 Orlando 拉近并回吻，随后出现追加选项；选择 `Yes.` 会再增加 1 点。低于 7 时，场景会在第一次练习吻后结束，不会出现 Dave 更主动的回应。 |
| `dragonlove >= 10` | D9 早晨；D19 Orlando 厨房场景 | D9 为最高档安慰分支；D19 要求 Orlando 线，并进入 Dean 约会失败后通往厨房的分支 | D9 中，Orlando 会察觉 Dave 已接近崩溃，触碰他的脸，并追问是否有人伤害了他。D19 中，10—19 会开放 `I love you too.`／`Stay quiet.`，让玩家接受或拒绝 Orlando。 |
| `dragonlove >= 15` | D15 A/B 梦境；D16 A/B 早晨；D16 Orlando 事件 | Orlando 线或相应 Orlando 场景 | D15 梦境中，Dave 会质问 Orlando 为什么总拿 Dean 当借口，并开始怀疑自己是否也爱 Orlando。D16 早晨，Orlando 的情感疏离会被描述为真正令 Dave 痛苦。在角色事件中，Dave 会直接指责 Orlando 把每次严肃谈话都重新引向 Dean。 |
| `dragonlove >= 18` | D10 Orlando 线夜间 | Orlando 线 | 两档都会接吻。达到 18 后，Orlando 会触碰 Dave 的脸并更主动地发起亲吻，Dave 也会把它理解为具有情感意义的吻。低于 18 时，Orlando 会先让 Dave 闭眼，整体更犹豫、更像试探。若已设置 `OrlandoKiss`，场景还会提到 D6 的练习吻。 |
| `dragonlove >= 20` | D18 Orlando 场景；两段 D19 Orlando 场景 | D18 变化还要求 D17 金库状态成功；D19 要求进入相应 Orlando 分支 | D18 中，Dave 会握住 Orlando 的手、把他拉近，并增强场景中的身体亲密。D19 的一段后续中会出现一个较小的相互触碰差异；在之后的厨房告白中，Orlando 会明确说爱 Dave，游戏自动进入 `OrlandoBoyfriend`。 |

:::

#### D19 关系结果

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| 条件 | 结果 |
|---|---|
| `dragonlove >= 20` | Dave 自动接受 Orlando，进入 `OrlandoBoyfriend`，并将 `DaveBoyfriend` 设为 `Orlando`。 |
| `10 <= dragonlove < 20` | 出现 `I love you too.`／`Stay quiet.`，由玩家选择接受或拒绝。 |
| `dragonlove < 10` | 剧情自动进入 Orlando 的拒绝分支，不提供恋爱回应。 |

:::

### Dean

::: {.affection-difference-table .table-responsive .table-scroll-large}

| 检定 | 主要剧情位置 | 附加条件 | 对话或剧情效果 |
|---|---|---|---|
| `bearlove >= 5` | D5 Dean 线热水浴缸 | Dean 线，并选择 D5 电影 `Romance` | Dean 会把电影选择理解为 Dave 可能在向自己暗示，显示 `deankiss`，并进入之后的亲吻确认菜单。低于 5 时仍有调情，但不会出现正式亲吻选择。CG 在确认菜单之前已经显示，因此之后选择 `No` 也不会阻止 Gallery 解锁。 |
| `bearlove >= 10` | D19 Dean 约会结束 | 进入 Dean 约会后的分支 | Dave 会说自己同样期待这次约会，并把感情描述为接近爱。游戏设置 `DaveBoyfriend = "Dean"`，然后进入关系与亲密场景。低于 10 时，Dave 会认为约会没有产生足够的浪漫火花。 |
| `bearlove >= 15` | D9 早晨；D15 A/B 梦境；D16 A/B 早晨 | 相应 Dean 场景 | D9 中，Dean 会区分随意性行为和与重要之人的亲密。D15 梦中，Dave 会承认自己非常喜欢 Dean。D16 早晨，Dean 的拥抱会被描述为安全、柔软，并让 Dave 想要经常这样醒来。 |
| `bearlove >= 17` | D10 夜间 | Dean 线，且 D10 金库状态成功 | Dave 会意识到自己对 Dean 的感情可能已超过普通喜欢，并认为二人之后需要认真谈谈。 |
| `bearlove >= 20` | D18 会后 Dean 场景 | Dean 线，且 D17 金库状态成功 | Dave 会把 `I appreciate it` 改成更私人的 `I appreciate you`，明确期待次日约会，并主动开始更强烈的亲吻，之后才停下来休息。 |

:::

#### D19 关系结果

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| 条件 | 结果 |
|---|---|
| `bearlove >= 10` | 自动将 `DaveBoyfriend` 设为 `Dean`，随后进入关系与亲密场景。 |
| `bearlove < 10` | Dave 判断约会没有产生足够的浪漫火花，关系不会成立。 |

:::

### Tyson

::: {.affection-difference-table .table-responsive .table-scroll-large}

| 检定 | 主要剧情位置 | 附加条件 | 对话或剧情效果 |
|---|---|---|---|
| `wolflove >= 10` | D9 早晨；Night9 Tyson 事件；D19 关系检定 | D9 早晨中，只有未达到 16 时才使用这一中档分支 | Dave 会直接请求拥抱，Tyson 会留下安慰他。Night9 中，Tyson 会进一步解释自己的信任、被梳理毛发时的敏感，以及自己与狼族身份的关系。D19 中，10—19 会开放 `I love you.`／`...`。 |
| `wolflove >= 15` | D9 夜间；D15 A/B；D16 A/B 早晨；D18 Tyson 场景 | 部分位置是会被 18 点分支替代的低档 `elif` | Night9 中，Dave 会说与 Tyson 一起待在家里可能比豪宅更重要。D15 梦中，他会说自己爱 Tyson，醒来后的对话中也几乎说出口。D16 早晨，Dave 开始把这种依恋理解为可能的恋爱，而不仅是兄弟情。D18 进一步增加二人关系究竟属于亲情还是恋爱的冲突。 |
| `wolflove >= 16` | D9 早晨最高档安慰分支 | 替代 10 点早晨分支 | Dave 会直接说自己想要父亲。Tyson 会给出更完整的拥抱，并承认 Dave 的父亲对自己而言也几乎像父亲，使二人共同的失去被明确说出。 |
| `wolflove >= 17` | D9 Tyson 角色事件 | 到达关于 Dave 父亲的对话 | 增加一小段 Tyson 承认自己也希望获得父亲式建议的对白。这只是短小差异，不是独立的大型关系阶段。 |
| `wolflove >= 18` | D9 夜间；D10 Tyson 调查；D16 A/B Tyson 事件 | D9 版本替代 15 点分支 | Night9 中，Dave 会接近告白，并说即使这段关系让自己受伤，仍然想要 Tyson。D10 中，Tyson 会要求 Dave 答应无论发生什么都要保持幸福。D16 事件会加入更直接的身体吸引、关系焦虑和情感开放。 |
| `wolflove >= 20` | D18 Tyson 场景；D19 Tyson 线 | 相应 Tyson 场景 | D18 增加更强烈的注视、触碰、拥抱与恋爱语境。D19 中，Dave 会更直接地称 Tyson 很特别，并自动回应告白，进入 `TysonBoyfriend` 和之后的亲密场景。 |

:::

#### D19 关系结果

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| 条件 | 结果 |
|---|---|
| `wolflove >= 20` | Dave 自动回应 Tyson，将 `DaveBoyfriend` 设为 `Tyson`，并进入关系与亲密场景。 |
| `10 <= wolflove < 20` | 出现 `I love you.`／`...`，由玩家选择接受或保持沉默。 |
| `wolflove < 10` | Dave 自动拒绝恋爱关系，并把 Tyson 描述为自己所爱的兄弟，而不是伴侣。 |

:::

### Roswell

::: {.affection-difference-table .table-responsive .table-scroll-large}

| 检定 | 主要剧情位置 | 附加条件 | 对话或剧情效果 |
|---|---|---|---|
| `boarlove >= 5` | D6 午餐；D9 早晨 | D6 事件要求 Roswell 线 | D6 中，Roswell 会承认自己可能想要不止友情，并开放 `Kiss him.`、`Hug him.`、`Do nothing.`。前两个亲密选项都会显示 `roswellkiss`；`Do nothing.` 会避开该 CG。低于 5 时，Roswell 会自动主动亲吻，CG 仍会显示。D9 中，该阈值选择较尴尬的中档安慰分支。 |
| `boarlove >= 10` | D9 早晨；D19 Roswell 线 | D9 中替代 5 点分支 | Roswell 会更快察觉 Dave 的痛苦，坐到他身边，并表示愿意倾听。D19 中，10—19 会开放 `Relationship`／`Friendship`。 |
| `boarlove >= 15` | D15 A/B 夜间；D16 A/B 早晨；D16 Roswell 事件 | 相应 Roswell 场景 | D15 中，Dave 会主动靠得更近睡觉。D16 早晨，他会在 Roswell 做噩梦后安慰对方，并思考这种亲密究竟是爱还是深厚友情。之后的事件会开放 `I like {i}you{/i}.`；选择后 Roswell 会明显高兴，并再增加 2 点。 |
| `boarlove >= 20` | D19 Roswell 线 | 到达最终关系对话 | Dave 会说自己无法接受 Roswell 在关系真正开始前就离开。游戏自动进入 `RoswellBoyfriend` 并设置男友变量。 |

:::

#### D19 关系结果

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| 条件 | 结果 |
|---|---|
| `boarlove >= 20` | Dave 自动接受 Roswell，并将 `DaveBoyfriend` 设为 `Roswell`。 |
| `10 <= boarlove < 20` | 出现 `Relationship`／`Friendship`，由玩家决定。 |
| `boarlove < 10` | 剧情自动维持友情。 |

:::

### Hoss

Hoss 有两张亲吻 CG 分别受不同好感度结果控制，因此其检定对 Gallery 查漏尤其重要。

::: {.affection-difference-table .table-responsive .table-scroll-large}

| 检定 | 主要剧情位置 | 附加条件 | 对话或剧情效果 |
|---|---|---|---|
| `lionlove >= 5` | D6 泳池和午餐流程 | Hoss 线 | Hoss 会更像把二人相处当作约会，并更公开地调情，包括表示自己更能理解 Dean 为什么喜欢 Dave。低于 5 时回应会更克制。 |
| `lionlove >= 12` | D8 早晨；D8 房间和隐藏图书馆；D9 早晨与夜间 | 正式图书馆亲吻还要求 Hoss 线 | D8 早晨，Hoss 会亲 Dave 的脸颊，之后还会提到这件事。在 Hoss 线隐藏图书馆中，他会设置 `HossKiss = True`、亲吻 Dave 并显示 `hosskiss`。D9 会增加更强的关心、调情和想再次亲吻的内容。图书馆中低于 12 时会跳过亲吻，并改为增加 2 点好感度。 |
| `lionlove >= 15` | D15 A/B；D16 A/B 早晨和 Hoss 事件；D18；D19 | 相应 Hoss 场景 | D15 梦中，Dave 会几乎亲吻 Hoss；醒来后 Hoss 会亲 Dave 的额头，但让他先处理对 Dean 的感情。D16 中，Dave 会直接问 Hoss 是否在恋爱意义上喜欢自己。D18 暗示若 Dean 不追求 Dave，可能还有别人。D19 在未达到 20 时开放 `Try dating.`／`Stay friends.`。 |
| `lionlove >= 16` | D10 Hoss 调查 | 只有已设置 `HossKiss == True` 时才会使用 | 只改变少量关于 Hoss 羡慕 Tyson 能公开关心 Dave 的对白，**不会**触发 D10 亲吻。如果 `HossKiss == False`，D10 的亲吻由另一个独立的 false-flag 分支触发，不取决于好感度是否达到 16。 |
| `lionlove >= 20` | D19 Hoss 线 | 到达最终关系对话 | 增加更直接的关系讨论，并自动进入 `HossBoyfriend`、设置 `DaveBoyfriend = "Hoss"`，同时显示 `hosskiss2`。这一档没有接受或拒绝菜单。 |

:::

#### D19 关系结果

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| 条件 | 结果 |
|---|---|
| `lionlove >= 20` | 剧情自动进入 `HossBoyfriend` 并显示 `hosskiss2`。 |
| `15 <= lionlove < 20` | 出现 `Try dating.`／`Stay friends.`。 |
| `lionlove < 15` | 关系自动维持友情。 |

:::

#### 两张亲吻 CG 的关系

::: {.affection-kiss-table .table-responsive .table-scroll-medium}

| CG | 实际要求 | 含义 |
|---|---|---|
| `hosskiss` | Hoss 线且 `lionlove >= 12` | D8 隐藏图书馆的正式亲吻 |
| `hosskiss2` | D19 Hoss 关系成功 | 20 点时自动获得，或在 15—19 点时通过 `Try dating.` 接受关系后获得 |

:::

具体坐标和最早正常显示位置见[CG Gallery 查漏索引](../collectibles/gallery.md)。

### Sal

::: {.affection-difference-table .table-responsive .table-scroll-large}

| 检定 | 主要剧情位置 | 附加条件 | 对话或剧情效果 |
|---|---|---|---|
| `croclove >= 8` | D8；D9 早晨 | D9 中属于低于 15 时的中档分支 | D8 只增加短暂的对视和克制回应。D9 中，Sal 会注意到 Dave 有心事，并解释自己是来确认他是否安好，但仍保持克制。 |
| `croclove >= 15` | D9 早晨和 Sal 事件；Night9；D15 A/B；D16 A/B；D18；D19 | 多数位置要求 Sal 线或相应 Sal 场景 | Sal 会更直接询问 Dave 为什么难过。D9 角色事件会扩展 Abi 相关对话，`Approach.` 也会成功变成拥抱，而不是被拒绝。无论好感度高低，Sal 在 Night9 都会留下；该阈值改变的是邀请和拥抱相关文本，而不是决定他是否留宿。D15—D18 会增加身体靠近、Sal 对 Dave 缺点的接受，以及爱 Dave 是否等于背叛 Dean 的冲突。D19 在未达到 20 时开放 `Romantic`／`Platonic`。 |
| `croclove >= 16` | D11 A/B Sal 对话 | 到达相应对话 | 当被问是否喜欢某人时，Sal 会承认确实如此，并说这种感情是最近才意识到、仍难以处理的。他不会在此处说明对象。低于 16 时会省略这段简短回答。 |
| `croclove >= 20` | D19 Sal 流程 | 到达最终关系流程 | 增加受伤的 Sal 抵达相关场景，之后 Sal 会明确把自己的感情称为 crush，并询问离开山上后是否愿意约会。游戏自动进入 `SalBoyfriend` 并设置男友变量。 |

:::

#### D19 关系结果

::: {.affection-outcome-table .table-responsive .table-scroll-wide}

| 条件 | 结果 |
|---|---|
| `croclove >= 20` | Sal 明确承认 crush，Dave 自动接受，剧情进入 `SalBoyfriend`。 |
| `15 <= croclove < 20` | 出现 `Romantic`／`Platonic`。 |
| `croclove < 15` | Sal 强调亲密友情，剧情自动维持柏拉图关系。 |

:::

:::

::: {.callout-warning}
## 不要把数值理解成固定关系等级

同一个好感度数值在不同位置可能承担完全不同的作用：

- 某次检定可能只增加几句内心描写；
- 某次检定可能替换整段安慰或亲密剧情；
- 某次检定可能开放玩家选择；
- 某次检定可能自动建立关系；
- 更高的 `if` 或 `elif` 分支还可能替代较低分支。

游戏不会把 5、10、15 和 20 视为统一的“朋友”“暗恋”或“伴侣”等固定阶段。
:::

## 相关页面

- [好感度机制与加点](affection.md)
- [CG Gallery 查漏索引](../collectibles/gallery.md)
- [剧情线路总览](../guide/route-overview.md)
- [字母线系统](../guide/path-system.md)
