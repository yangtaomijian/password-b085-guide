---
title: "好感度检定与剧情文本差异"
description: "Password b0.85 六名角色的好感度阈值、附加条件、剧情文本差异与 D19 关系结果"
toc: true
---

本页记录六名主要角色的好感度变量在脚本中触发的具体剧情文本与流程差异。

若要查询各项选择如何增加好感度、每个角色有哪些加点节点，请先阅读[好感度机制与加点](affection.md)。

::: {.callout-important}
## 阅读说明

本文记录的是好感度变量触发的**剧情文本与流程差异**，不代表游戏内存在一套公开显示的“关系等级”。

- 所有阈值均为“大于等于”。例如 `bearlove >= 5` 表示数值达到 5 时已经满足条件；
- 好感度达到某个阈值，不会永久开启一种统一状态。只有流程运行到对应的 `if`／`elif` 检定时，才会产生差异；
- 多数检定还依赖当前角色路线、剧情日期、先前选择或其他变量；
- 同一组 `if`／`elif` 分支彼此互斥。高档位成立后，不会再显示较低档位的文本；
- “叙事概括”是对文本功能的归纳，不是脚本中的正式关系阶段名称；
- 本页只记录**好感度阈值造成的差异**。单纯由路线变量、接吻记录或其他剧情变量决定的内容，会在相关位置特别说明。
:::

## 各角色的剧情检定

::: {.panel-tabset .character-tabs group="affection-character"}

### Orlando

变量：`dragonlove`

::: {.affection-difference-table}

| 检定条件 | 主要剧情节点 | 附加条件 | 实际文本或流程差异 |
|---|---|---|---|
| `dragonlove >= 5` | D6 Orlando 晚餐后；D9 早晨 | D6 需进入 Orlando 晚间事件 | D6 会进入 Orlando 以“帮助 Dave 为 Dean 练习”为理由提出的 kissing practice，并显示 `orlandokiss`。低于 5 时不会进入这段练习吻。D9 早晨则进入中等好感安慰分支：Orlando 会主动询问自己能否帮忙，但表达仍较犹豫。 |
| `dragonlove >= 7` | D6 kissing practice | 前提是已经满足 `dragonlove >= 5` 并进入练习吻 | 第一次吻后，Dave 会主动环住 Orlando 并回吻，使场景从单次教学发展成更明确的 make-out。低于 7 时只有第一次练习吻，不会出现 Dave 主动回吻的追加段落。 |
| `dragonlove >= 10` | D9 早晨；D19 Dean 约会失败后的 Orlando 后续 | D9 为最高档安慰分支；D19 需进入 `DeanExplainTyson` 后的 Orlando 厨房剧情 | D9 Orlando 会更强烈地察觉 Dave 接近崩溃，抚摸他的脸，并追问是否有人伤害了他。D19 若未达到 20、但至少达到 10，会出现 `I love you too.`／`Stay quiet.` 菜单，让玩家决定是否回应 Orlando。 |
| `dragonlove >= 15` | D15 A／B 梦境；D16 A／B 起床；D16 Orlando 角色事件 | 相应 Orlando 剧情或 `dragonroute == True` | D15 梦中 Dave 会因 Orlando 不断拿 Dean 当理由而爆发，承认 Orlando 同样使自己快乐，并开始质疑自己是否爱他；D16 起床时，Dave 会把 Orlando 的疏离理解为让自己心碎；D16 角色事件中，Dave 会直接质问 Orlando 为什么总用 Dean 转移话题、逃避严肃交流。 |
| `dragonlove >= 18` | D10 夜间 Orlando 线 | `dragonroute == True` | 两个好感档位都会发生亲吻。达到 18 后，Orlando 会更主动地抚摸 Dave 的脸并直接吻上去，Dave 也更明确地把它理解成真正的情感亲吻；低于 18 时仍会接吻，但 Orlando 会先让 Dave 闭眼，整体更迟疑、更试探。若此前已有 `OrlandoKiss`，文本会回顾 D6 的练习吻。 |
| `dragonlove >= 20` | D18 Orlando 线；D19 Orlando 相关剧情 | 相应 Orlando 路线或 Dean 约会失败后的 Orlando 后续 | D18 Dave 会主动拉住 Orlando、环住其脖子并贴近；D19 Orlando 自身剧情中会增加他对感情与“两全其美”困境的表达。Dean 约会失败后的厨房场景里，Orlando 会明确说出自己爱 Dave，随后自动进入 Orlando 男友分支。 |

:::

#### D19 关系结果

| 条件 | 结果 |
|---|---|
| `dragonlove >= 20` | Dave 自动回应 Orlando，进入 `OrlandoBoyfriend`，并将 `DaveBoyfriend` 设为 `Orlando`。 |
| `10 <= dragonlove < 20` | 出现 `I love you too.`／`Stay quiet.` 菜单，由玩家选择接受或拒绝。 |
| `dragonlove < 10` | 自动进入 Orlando 拒绝分支，不提供恋爱回应选项。 |

::: {.callout-note}
## 叙事概括

Orlando 线的核心并不是单纯增加亲密程度，而是从以 Dean 为借口的练习和撮合，逐渐转向 Dave 看穿 Orlando 的压抑与逃避。

`dragonlove >= 18` 改变的是 D10 亲吻的主动性和情感解释，而不是决定亲吻是否发生；`dragonlove >= 20` 才在 D19 的关键分支中形成自动的恋爱回应。
:::

### Dean

变量：`bearlove`

::: {.affection-difference-table}

| 检定条件 | 主要剧情节点 | 附加条件 | 实际文本或流程差异 |
|---|---|---|---|
| `bearlove >= 5` | D5 Dean 线 hot tub | `bearroute == True`，且电影选择 `Romance` | Dean 会把浪漫电影理解为 Dave 对自己的暗示，显示 `deankiss`，并出现是否亲吻 Dean 的菜单。低于 5 时仍有调情对白，但不会出现正式亲吻选择。需要注意，`deankiss` 在菜单出现前已经显示，因此即使之后选择 `No`，该 CG 也已经被看见。 |
| `bearlove >= 10` | D19 Dean 约会结束 | 进入 Dean date / post-date 流程 | Dave 会明确表示自己同样期待这次约会，并把对 Dean 的感觉描述为接近 love。脚本直接执行 `$ DaveBoyfriend = "Dean"`，随后进入正式恋爱及身体亲密场景。低于 10 时，Dave 会认为约会没有产生足够的 spark，恋爱关系不会成立。 |
| `bearlove >= 15` | D9 早晨；D15 A／B 梦境；D16 A／B 起床 | 相应 Dean 剧情或 `bearroute == True` | D9 Dean 会更认真地区分“单纯为了性”和“与在意的人亲密”；D15 梦中 Dave 会承认自己很喜欢 Dean，并被梦中 Dean 鼓励在现实中询问；D16 起床时，Dave 会将 Dean 的怀抱感受为安全、柔软，并想象每天在这种温暖中醒来。 |
| `bearlove >= 17` | D10 夜间 | `bearroute == True` 且 `MASSACRE == True` | Dave 会在内心承认自己对 Dean 的感情可能已经超过单纯的 liking，并认为二人之后必须认真谈谈。该检定只存在于 MASSACRE 后的特定 Dean 分支，不是普通 D10 Dean 线的通用升级。 |
| `bearlove >= 20` | D18 meeting 后的 Dean 线共眠场景 | `bearroute == True` | Dave 会把 `I appreciate it` 进一步说成 `I appreciate you`，明确期待第二天的约会，并主动亲吻 Dean。二人的互动发展成明显的 make-out，最终因需要休息而停止。 |

:::

#### D19 关系结果

| 条件 | 结果 |
|---|---|
| `bearlove >= 10` | 自动将 `DaveBoyfriend` 设为 `Dean`，进入正式恋爱及后续亲密场景。 |
| `bearlove < 10` | Dave 判断约会没有带来足够的恋爱火花，Dean 关系不会成立。 |

::: {.callout-note}
## 叙事概括

Dean 的早期检定主要围绕身体亲密与约会意愿展开；`bearlove >= 15` 后，Dave 开始把安全感、依赖和喜欢联系到更明确的感情上。

需要注意，D19 的 `bearlove >= 10` 是独立的最终关系判定，不能简单理解为必须依次经过 15、17、20 才能成为男友。
:::

### Tyson

变量：`wolflove`

::: {.affection-difference-table}

| 检定条件 | 主要剧情节点 | 附加条件 | 实际文本或流程差异 |
|---|---|---|---|
| `wolflove >= 10` | D9 早晨；Night9 Tyson 事件；D19 关系判定 | D9 早晨仅在未达到 16 时作为中档分支；Night9 需进入 Tyson 夜间事件 | D9 Dave 会直接请求拥抱，Tyson 会留下安慰他；Night9 Tyson 会说自己信任 Dave，并解释自己为什么对 brushing、狼族身份等话题敏感。D19 若未达到 20、但至少达到 10，会开放 `I love you.`／沉默菜单。 |
| `wolflove >= 15` | D9 夜间；D15 A／B；D16 A／B 起床；D18 Tyson 相关剧情 | 部分位置是 `elif`，达到 18 时会被更高档文本替代 | D9 夜间 Dave 会表示即使留在家中，只要有 Tyson 也会幸福，并把 Tyson 看得比豪宅更重要；D15 梦中会直接说爱 Tyson，现实对话中也险些脱口而出；D16 起床时 Dave 会认为自己可能已经真正爱上 Tyson，并同时产生身体欲望与愧疚；D18 会增加“兄弟／恋人”边界及双方关系矛盾的文本。 |
| `wolflove >= 16` | D9 早晨最高档安慰分支 | 高于 `wolflove >= 10` 的互斥分支 | Dave 会直接说“我想要我爸”，Tyson 更完整地抱住他，并承认 Dave 的父亲对自己而言也近似父亲。该档位比 10 档更直接地进入共同丧父与家庭依赖主题。 |
| `wolflove >= 17` | D9 Tyson 角色事件 | 进入关于 Dave 父亲的深入对话 | Tyson 会更直接地把 Dave 对父亲的思念与自己的处境联系起来，承认自己同样希望得到父亲式的建议。该阈值只增加一小段对白，不是独立的大型情感场景。 |
| `wolflove >= 18` | D9 夜间；D10 Tyson 调查；D16 A／B Tyson 事件 | D9 为高于 15 的互斥档位 | D9 Dave 会近似表白，表示即使与 Tyson 相处会受伤，自己仍喜欢和他在一起；D10 Tyson 会要求 Dave 答应“无论发生什么都要幸福”；D16 相关对话会增加更坦诚的身体吸引、关系焦虑与感情表达。 |
| `wolflove >= 20` | D18 Tyson 相关剧情；D19 Tyson 线 | 相应 Tyson 剧情 | D18 会增加更强烈的凝视、触碰、拥抱和恋爱感心理描写；D19 Dave 会更直接地承认 Tyson 对自己“很特别”，并在最终关系节点自动回应 `I love you too.`，进入男友及身体亲密场景。 |

:::

#### D19 关系结果

| 条件 | 结果 |
|---|---|
| `wolflove >= 20` | Dave 自动说出 `I love you too.`，将 `DaveBoyfriend` 设为 `Tyson`，进入后续亲吻与身体亲密场景。 |
| `10 <= wolflove < 20` | 出现 `I love you.`／`...` 菜单，由玩家决定接受或拒绝。 |
| `wolflove < 10` | 自动进入拒绝分支；Dave 将 Tyson 定位为自己所爱的兄弟，而不是恋人。 |

::: {.callout-note}
## 叙事概括

Tyson 的检定最密集，也最常通过相邻数值区分不同强度的同一场景。

`wolflove >= 10` 是信任与开放的基础，15—18 主要推动 Dave 对“兄弟、依赖、欲望与恋爱”的混乱认识，20 则在 D19 形成自动的恋爱回应。

各阈值并不是严格按剧情阶段逐级升级。例如，D9 早晨的 16 档会直接替代 10 档，而 D9 夜间的 18 档会替代 15 档。
:::

### Roswell

变量：`boarlove`

::: {.affection-difference-table}

| 检定条件 | 主要剧情节点 | 附加条件 | 实际文本或流程差异 |
|---|---|---|---|
| `boarlove >= 5` | D6 lunch；D9 早晨 | D6 需进入 Roswell 午餐事件 | D6 Roswell 会直接表示自己可能希望和 Dave 不只是朋友，并开放 `Kiss him.`、`Hug him.`、`Do nothing.` 菜单。D9 早晨则进入中等好感安慰分支：Roswell 想帮忙，却因不擅长表达而显得笨拙。 |
| `boarlove >= 10` | D9 早晨；D19 Roswell 线 | D9 为高于 5 的互斥档位 | D9 Roswell 会更敏锐地察觉 Dave 的状态，主动坐下并表示愿意帮助、倾听。D19 若未达到 20、但至少达到 10，会提供 Relationship／Friendship 选择空间。 |
| `boarlove >= 15` | D15 A／B 夜间；D16 A／B 起床；D16 Roswell 角色事件 | 相应 Roswell 剧情或 `boarroute == True` | D15 Dave 会主动从背后抱住 Roswell 入睡；D16 起床时会抚摸 Roswell、安抚他的噩梦，并思考这究竟是爱还是深厚友情；D16 角色事件中会开放 `I like you.` 选项，选择后 Roswell 会明显开心，并增加 2 点 `boarlove`。 |
| `boarlove >= 20` | D19 Roswell 线 | 进入 Roswell 最终关系对话 | Dave 会明确承认自己无法接受 Roswell 即将离去，也不愿让关系在真正开始前结束；脚本自动进入 `RoswellBoyfriend` 并设置男友关系。 |

:::

#### D19 关系结果

| 条件 | 结果 |
|---|---|
| `boarlove >= 20` | Dave 自动答应 Roswell，将 `DaveBoyfriend` 设为 `Roswell`。 |
| `10 <= boarlove < 20` | 出现 Relationship／Friendship 菜单，由玩家决定是否建立恋爱关系。 |
| `boarlove < 10` | 自动拒绝恋爱关系，维持朋友定位。 |

::: {.callout-note}
## 叙事概括

Roswell 的阈值数量较少，但功能集中。

5 档已经让 Roswell 的暗恋直接露出并开放亲密选择；15 档开始让 Dave 主动照顾和回应；20 档则把“时间有限”和“关系尚未真正开始”的痛苦推向自动的男友答复。

这里的差异不仅是亲密程度增加，也决定 Dave 是否愿意正视 Roswell 的感情与即将失去他的现实。
:::

### Hoss

变量：`lionlove`

Hoss 有两张亲吻 CG 分别与 `lionlove >= 12` 和 `lionlove >= 20` 关联，因此好感度检定与画廊解锁的关系尤其明显。

这种机制并非 Hoss 独有，Dean、Orlando、Roswell 等角色的部分亲吻 CG 同样会受到好感度、路线条件或先前选择影响。

::: {.affection-difference-table}

| 检定条件 | 主要剧情节点 | 附加条件 | 实际文本或流程差异 |
|---|---|---|---|
| `lionlove >= 5` | D6 pool / lunch | 进入 Hoss 的泳池事件 | Hoss 会把二人的相处称为 date，并更明确地调情，表示自己开始理解 Dean 为什么会看中 Dave。低于 5 时，他只会较轻描淡写地表示“问问也值得”。 |
| `lionlove >= 12` | D8 早晨；D8 Hoss 房间与隐藏 library；D9 早晚相关场景 | library 正式亲吻还要求 `lionroute == True` | D8 早晨 Hoss 会亲 Dave 的脸颊；之后在房间中会主动提起“早上的吻”，并称 Dave 可爱。若当前处于 Hoss 线，隐藏 library 剧情会进一步触发正式亲吻、设置 `HossKiss = True` 并显示 `hosskiss`。D9 的早晚场景也会增加更明显的关心、调情与“想吻你”等文本。 |
| `lionlove >= 15` | D15 A／B；D16 A／B 起床及 Hoss 事件；D18；D19 | 相应 Hoss 剧情或 `lionroute == True` | D15 梦中 Dave 会接近亲吻 Hoss，现实中 Hoss 会亲额头，但提醒 Dave 先处理与 Dean 的关系；D16 Dave 会直接询问 Hoss 是否喜欢自己；D18 Hoss 会暗示若 Dave 与 Dean 不成，仍有其他可能追求他的人；D19 进入中档关系分支并提供 `Try dating.`／`Stay friends.` 菜单。 |
| `lionlove >= 16` | D10 Hoss 调查事件 | **仅在此前已有 `HossKiss == True` 时执行** | Hoss 会更直接地说明，他羡慕 Tyson 能不顾他人眼光地关心 Dave。该阈值只改变少量对白，**不会触发亲吻**。若此前 `HossKiss == False`，D10 的突然强吻由该变量为假触发，与 `lionlove` 是否达到 16 无关。 |
| `lionlove >= 20` | D19 Hoss 线 | 进入 Hoss 最终关系剧情 | 会增加 Hoss 对其他潜在追求者的讨论，并让他更直接地说 Dave 可爱、让自己感觉舒适。最终脚本自动进入 `HossBoyfriend`、设置 `DaveBoyfriend = "Hoss"`，并显示 `hosskiss2`；这一档没有玩家接受／拒绝菜单。 |

:::

#### D19 关系结果

| 条件 | 结果 |
|---|---|
| `lionlove >= 20` | Hoss 自动提出发展关系，剧情直接进入 `HossBoyfriend`，显示 `hosskiss2`。 |
| `15 <= lionlove < 20` | Hoss 表示愿意尝试约会，出现 `Try dating.`／`Stay friends.` 菜单。 |
| `lionlove < 15` | 自动维持朋友关系，不提供约会选择。 |

#### 与亲吻 CG 的关系

| CG | 实际条件 | 说明 |
|---|---|---|
| `hosskiss` | `lionroute == True` 且 `lionlove >= 12` | D8 隐藏 library 中的正式亲吻。 |
| `hosskiss2` | D19 Hoss 线且 `lionlove >= 20` | 自动进入 Hoss 男友分支后显示。 |

具体画廊位置和最早正常显示节点，见[CG 画廊查漏索引](../collectibles/gallery.md)。

::: {.callout-note}
## 叙事概括

Hoss 的 12 档很早就把调情推进到真实亲吻；15 档开始围绕“不能继续把一切当玩笑、必须先厘清 Dean”展开；20 档形成自动恋爱关系。

`lionlove >= 16` 只是 D10 已接吻分支中的小段对白变化，不能视作独立亲吻门槛。
:::

### Sal

::: {.affection-difference-table}

变量：`croclove`

| 检定条件 | 主要剧情节点 | 附加条件 | 实际文本或流程差异 |
|---|---|---|---|
| `croclove >= 8` | D8；D9 早晨 | D9 为低于 15 时的中档分支 | D8 只增加一个非常细微的反应：Dave 与 Sal 短暂对视，Sal 随后移开目光并低声说了些什么。D9 Sal 会较克制地指出 Dave 看起来有心事，并解释自己来查看他的情况。 |
| `croclove >= 15` | D9 早晨及 Sal 事件；Night9；D15 A／B；D16 A／B；D18；D19 | 多处需进入 Sal 路线或对应 Sal 事件 | D9 早晨 Sal 会更直接询问 Dave 在为什么难过；Sal 事件中会更完整地谈到 Abi，且 Dave 选择 `Approach.` 时 Sal 会接受拥抱而不是推开。Night9 无论是否达到 15，Sal 最终都会留宿，并出现 cuddle／talk 相关内容；达到 15 只会让 Dave 更主动说 `Stay.`，并增加 Sal 对 Dave 更柔软、更适合拥抱及自己享受前次共眠的对白。D15—D18 还会增加身体接触、对 Dave“不完美”的喜欢，以及 Sal 不愿背叛 Dean、却对 Dave 产生感情的冲突。D19 进入中档关系分支并开放 Romantic／Platonic 菜单。 |
| `croclove >= 16` | D11 A／B 的 `Day11AB_SDO_Scenario` | 进入相应 SDO 对话 | 被问是否有喜欢的人时，Sal 会承认确实有，而且是最近才意识到、仍在处理中的感情；他没有在这里明说对象是谁。低于 16 时，这一回答被省略。 |
| `croclove >= 20` | D19 Sal 相关剧情 | 进入 Sal 最终关系流程 | Dean 约会冲突后会增加 Sal 受伤后来到 Orlando 与 Dave 所在房间的额外段落；后续 Sal 会直接承认自己对 Dave 有 crush，并询问离开山上后是否愿意约会。脚本自动进入 `SalBoyfriend` 并设置男友关系。 |

:::

#### D19 关系结果

| 条件 | 结果 |
|---|---|
| `croclove >= 20` | Sal 直接承认 crush，Dave 自动接受约会，进入 `SalBoyfriend`。 |
| `15 <= croclove < 20` | Sal 以假设方式讨论二人关系，出现 Romantic／Platonic 菜单。 |
| `croclove < 15` | Sal 强调珍视 Dave 作为亲近朋友，自动进入朋友结局。 |

::: {.callout-note}
## 叙事概括

Sal 的检定围绕“克制、信任与对 Dean 的忠诚冲突”展开。

8 档只有细微关注；15 档才真正打开私人创伤、拥抱、共眠和暧昧，同时让 Sal 开始正面处理“喜欢 Dave 是否等于背叛 Dean”；16 档只是一次较小的承认；20 档则在 D19 让这种感情被明确说成 crush，并自动进入约会关系。
:::

:::

## 六条路线的 D19 最终关系阈值

| 角色 | 自动成为男友 | 中间档：玩家可选择 | 低于中间档 |
|---|---:|---:|---|
| Dean | `bearlove >= 10` | 无中间选择档 | 自动不成立恋爱关系 |
| Orlando | `dragonlove >= 20` | `10 <= dragonlove < 20` | 自动拒绝 |
| Tyson | `wolflove >= 20` | `10 <= wolflove < 20` | 自动拒绝 |
| Roswell | `boarlove >= 20` | `10 <= boarlove < 20` | 自动拒绝 |
| Hoss | `lionlove >= 20` | `15 <= lionlove < 20` | 自动维持朋友关系 |
| Sal | `croclove >= 20` | `15 <= croclove < 20` | 自动维持朋友关系 |

这张表只概括 D19 的最终关系控制流。

各角色在更早日期出现的亲吻、拥抱、梦境或高亲密文本，仍由前文列出的其他阈值、角色路线和剧情变量共同决定。

::: {.callout-warning}
## 不要把阈值理解成固定关系等级

同一个好感度数值在不同日期可能承担完全不同的作用：

- 某些节点只增加几句心理描写；
- 某些节点替换整段安慰或亲密文本；
- 某些节点开放玩家选择；
- 某些节点会自动建立恋爱关系；
- 某些检定还会被更高档位的 `elif` 分支替代。

因此，不能简单把 5、10、15、20 分别理解成统一的“朋友”“暧昧”“恋人”等阶段。
:::

## 相关页面

- [好感度机制与加点](affection.md)
- [CG 画廊查漏索引](../collectibles/gallery.md)
- [剧情线路总览](../guide/route-overview.md)
- [字母线系统](../guide/path-system.md)
- [彩蛋与废弃设定](../extras/easter-eggs.md)