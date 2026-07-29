---
title: "好感度机制与加点"
description: "Password b0.85 六名角色的好感度变量、剧情阈值、加点选项与特殊情况"
toc: true
---

《Password》为六名主要角色分别设置了独立的隐藏好感度变量。

| 角色 | 变量 |
|---|---|
| Dean | `bearlove` |
| Tyson | `wolflove` |
| Roswell | `boarlove` |
| Orlando | `dragonlove` |
| Hoss | `lionlove` |
| Sal | `croclove` |

这些数值不会直接显示在游戏界面中，而是随着特定选择增加，并在后续剧情中接受阈值检定。

::: {.callout-important}
## 好感度主要影响什么？

好感度通常**不决定能否通关，也不决定字母线**。

它主要影响：

- Dave 的心理描写；
- 角色是否主动安慰、拥抱或亲吻 Dave；
- 部分亲密选项是否出现；
- 后期告白或关系确认文本；
- 少数 CG 是否能够解锁。

其中最需要注意的是 **Hoss 线**：两张画廊 CG 分别要求好感度达到 12 和 20。
:::

## 基本机制

六个好感度变量通常从 0 开始，并通过剧情选择进行加法。

- 好感度只会增加，没有发现正常剧情中的减分项；
- 一次选择通常增加 1 或 2 点；
- 少量彩蛋输入可以同时增加多名角色的好感度；
- 即使不在某名角色的角色线上，部分选择仍然可能增加该角色的数值；

好感度阈值表示具体数值，而不是剧情日期。例如：

`lionlove >= 12`

表示 Hoss 的好感度至少为 12 时，执行对应的额外或替代剧情。

## 阈值总览

| 角色 | 主要阈值 |
|---|---|
| Orlando | 5、7、10、15、18、20 |
| Dean | 5、10、15、17、20 |
| Tyson | 10、15、16、17、18、20 |
| Roswell | 5、10、15、20 |
| Hoss | 5、12、15、16、20 |
| Sal | 8、15、16、20 |

## 各角色的阈值影响

::: {.panel-tabset .character-tabs group="affection-character"}

### Orlando

| 阈值 | 主要影响 |
|---:|---|
| 5 | D9 出现 Orlando 主动关心和安慰 Dave 的文本 |
| 7 | D6 练习接吻后，Dave 会更主动地回吻 |
| 10 | D9 更敏锐地察觉 Dave 的状态；D19 开启较低门槛的关系回应 |
| 15 | D15—D16 中 Dave 更直接地质问 Orlando 对感情的逃避 |
| 18 | D10 夜间出现更主动、更明确的情感亲吻 |
| 20 | D18—D19 进入更完整的牵手、拥抱和告白推进 |

### Dean

| 阈值 | 主要影响 |
|---:|---|
| 5 | D5 热水浴缸场景出现更直接的调情和亲吻选项 |
| 10 | D19 约会后，Dave 对 Dean 的感情回应更加明确 |
| 15 | D9、D15 和 D16 出现更强的情感承认、安全感和亲密心理描写 |
| 17 | D10 后段，Dave 承认自己对 Dean 的感情已经超过普通喜欢 |
| 20 | D18—D19 的约会期待和恋爱表达更加直接 |

### Tyson

| 阈值 | 主要影响 |
|---:|---|
| 10 | 开启安慰拥抱、信任对话和 D19 的感情回应入口 |
| 15 | Dave 开始明确意识到自己对 Tyson 的感情不只是兄弟关系 |
| 16 | D9 与父亲相关的安慰场景更加完整 |
| 17 | Tyson 更直接回应 Dave 对父亲和家庭关系的失落 |
| 18 | D9、D10 和 D16 出现接近表白、身体吸引和更坦诚的文本 |
| 20 | D18—D19 进入最明确的恋爱和身体亲密分支 |

### Roswell

| 阈值 | 主要影响 |
|---:|---|
| 5 | Roswell 开始表现出超出普通朋友关系的暗示 |
| 10 | 对 Dave 的状态更敏感；D19 提供关系或友情回应空间 |
| 15 | D15—D16 出现主动拥抱、安抚和表达喜欢的选项 |
| 20 | D19 更明确地回应 Roswell 的感情和即将离开的现实 |

### Hoss

| 阈值 | 主要影响 |
|---:|---|
| 5 | D6 的相处更像约会，调情文本更加明显 |
| 12 | D8—D9 开启更明确的亲吻和浪漫文本；关系到 `hosskiss` CG |
| 15 | Dave 开始认真确认 Hoss 是否喜欢自己，并出现关系竞争暗示 |
| 16 | D10 Hoss 线出现一次独立的高好感亲吻节点 |
| 20 | D19 进入更完整的关系确认，并关系到 `hosskiss2` CG |

### Sal

| 阈值 | 主要影响 |
|---:|---|
| 8 | Sal 更敏锐地注意到 Dave 的状态，但仍然保持克制 |
| 15 | 开启更完整的创伤对话、拥抱、留宿和暧昧文本 |
| 16 | D11 A／B 中承认自己最近才意识到喜欢某个人 |
| 20 | D19 更明确地承认对 Dave 的感情，并进入更直接的关系分支 |

:::

## Hoss 线的 CG 门槛

### `hosskiss`

D8 隐藏图书馆场景需要同时满足：

- 当前处于 Hoss 角色线；
- `lionlove >= 12`。

满足条件后，Hoss 会询问能否与 Dave 分享另一个秘密，并显示 `hosskiss`。

如果好感度不足，玩家仍然能够继续推进剧情，但不会看到这张 CG。

### `hosskiss2`

D19 Hoss 关系推进需要：

- `lionlove >= 20`；
- 接受 Hoss 提出的关系发展。

之后进入 `HossBoyfriend` 段落，并显示 `hosskiss2`。

因此，全画廊收集时，建议在 Hoss 线中优先确保：

- D8 前达到 12；
- D19 前达到 20。

具体画廊位置见[CG 画廊查漏索引](../collectibles/gallery.md)。

## 共同加点来源

以下输入会同时影响多名角色：

| 时间 | 条件 | 效果 |
|---|---|---:|
| D1 | 奶茶杯名字输入 Dave | 六人各加 1 |
| D1 | 输入特定隐藏司机名 | 六人各加 1 |
| D3 | 输入特定彩蛋密码 | 六人各加 5 |

D1 的两类共通加点来自同一次奶茶杯输入，因此彼此互斥，单次流程不能同时取得。

具体彩蛋输入统一整理在[彩蛋与废弃设定](../extras/easter-eggs.md)，本页不重复公开答案。

此外，在奶茶杯名字环节输入某名主要角色的名字，会使该角色单独增加 1 点。

## 完整加点选项

以下表格记录 b0.85 正常游戏流程中可实际到达、并会增加对应变量的选择或自动节点。仅存在于不可达分支中的代码不计入本表。

同一菜单中列出的多个选项可能彼此互斥。表格用于汇总所有可能的加点节点，不代表单次流程一定可以取得每一行的分数。

普通选项保持游戏中的英文原文，方便与游戏界面对照。

::: {.panel-tabset .character-tabs group="affection-character"}

### Orlando

`dragonlove`

| 时间 | 选择或条件 | 加点 |
|---|---|---:|
| D1 | 奶茶杯输入 `Orlando` | +1 |
| D2 | 选择 `Cherry Pie!` | +1 |
| D3 | 早晨选择 `Orlando` | +1 |
| D4 | Orlando 线选择 `Wind?` | +1 |
| D5 | Orlando 烘焙事件中回答 `Yes.` | +1 |
| D5 | 烘焙回忆中选择 `Cookies` 或 `Brownies` | +1 |
| D5 | 晚餐电影选择 `Comedy` | +1 |
| D6 | 早晨或午前选择 `Orlando` | +1 |
| D6 | 选择 `What was it like?` | +1 |
| D6 | 晚间亲吻事件中，若进入事件时 `dragonlove >= 7`，选择 `Yes.` | +1 |
| D6 | 晚间亲吻事件中，若进入事件时 `dragonlove < 7` | 自动 +1 |
| D7 | 南瓜雕刻选择 `Hug.` | +1 |
| D7 | 南瓜雕刻选择 `Advice.` | +2 |
| D7 | 感情建议选择 `Dean.` | +1 |
| D7 | 感情建议选择 `Roswell.` | +1 |
| D7 | 感情建议选择 `Orlando.` | +2 |
| D9 | 早晨回答 `…Reverse.` | +1 |
| D9 | Orlando 事件选择 `Hold his hand.` | +2 |
| D9 | 夜间选择 `Invite him to stay.` | +1 |
| D9 | 夜间选择 `Reassure him.` | +2 |
| D15 A／B | 选择 `Kiss him.` | +2 |
| D16 A／B | Orlando 事件选择 `Agree.` | +1 |

### Dean

`bearlove`

| 时间 | 选择或条件 | 加点 |
|---|---|---:|
| D1 | 奶茶杯输入 `Dean` | +1 |
| D2 | 探索温室 `Greenhouse.` | +1 |
| D3 | 早晨选择 `Dean` | +1 |
| D4 | Dean 线选择 `Call for help.` | +1 |
| D5 | Dean 森林相关固定加点 | +2 |
| D5 | 晚餐选择 `Get Closer` | +1 |
| D5 | 电影选择 `Comedy` | +2 |
| D5 | 电影选择 `Action` | +1 |
| D5 | 选择 `Hold his hand` | +1 |
| D6 | 若 D5 已与 Dean 接吻，即 `DeanKiss == True`，早晨选择 `Yes` 回吻 | +2 |
| D6 | 午餐选择 `Hold his hand.` | +1 |
| D7 | 感情建议选择 `Dean.` | +3 |
| D7 | 感情建议选择 `Hoss.` | +1 |
| D7 | 感情建议选择 `Sal.` | +2 |
| D9 | 早晨选择 `Dean.` | +1 |
| D15 A／B | 选择 `Go for it.` | +1 |
| D15 A／B | 选择 `Hold off.` | +2 |

### Tyson

`wolflove`

| 时间 | 选择或条件 | 加点 |
|---|---|---:|
| D1 | 奶茶杯输入 `Tyson` | +1 |
| D2 | 选择 `I like how you smell.` | +1 |
| D3 | 早晨选择 `Tyson` | +1 |
| D3 | 午餐选择 `Tyson.` | +1 |
| D3 | 选择 `Chase after Tyson.` | +1 |
| D4 | Tyson 线选择 `Grab his hand.` | +1 |
| D5 | 森林相关选择 `Beating?` | +1 |
| D5 | 晚餐选择 `Tyson` | +1 |
| D5 | 电影选择 `Horror` | +1 |
| D5 | 电影选择 `Comedy` | +1 |
| D5 | 电影选择 `Action` | +1 |
| D5 | 选择 `Do nothing` | +1 |
| D6 | 早晨选择 `I didn't know I was spotting for a bitch.` | +1 |
| D6 | 早晨选择 `Keep going! You can do it!` | +2 |
| D6 | 午餐选择 `You.` | +1 |
| D6 | 午餐选择 `Truth.` | +1 |
| D6 | 午餐选择 `I've got your back too.` | +1 |
| D6 | 午餐选择 `Stay.` | +1 |
| D7 | 感情建议对话选择 `Assist.` | +1 |
| D7 | 选择 `Hug him.` | +1 |
| D7 | 选择 `Hug Tyson.` | +1 |
| D8 | 选择 `Pet him.` | +1 |
| D9 | 早晨选择 `Tyson.` | +1 |
| D15 A／B | 称呼选择 `'Ty'.` | +2 |
| D15 A／B | 称呼选择 `'Tyson'.` | +1 |
| D16 A／B | 选择 `As something more.` | +2 |
| D18 | 选择 `Stay by the door.` | +1 |

### Roswell

`boarlove`

| 时间 | 选择或条件 | 加点 |
|---|---|---:|
| D1 | 奶茶杯输入 `Roswell` | +1 |
| D2 | 探索博物馆 `Museum.` | +1 |
| D3 | 早晨选择 `Roswell` | +1 |
| D3 | 午餐选择 `Roswell.` | +1 |
| D4 | Roswell 线选择 `Nah.` | +1 |
| D4 | 选择 `Sure.` | +1 |
| D4 夜间 | 选择 `Invest` | +2 |
| D4 夜间 | 选择 `Vacation` | +1 |
| D4 夜间 | 选择 `Pay Debts` | +1 |
| D6 | Roswell 邀请 Dave 担任助手时，第一次直接选择 `Okay.`（第二次妥协则无加点） | +1 |
| D6 | 午餐选择 `Lie` | +1 |
| D6 | 若 `boarlove >= 5`，选择 `Kiss him.` | +2 |
| D6 | 若 `boarlove >= 5`，选择 `Hug him.` | +1 |
| D7 | 感情建议选择 `Dean.` | +1 |
| D7 | 感情建议选择 `Roswell.` | +2 |
| D7 | 感情建议选择 `Orlando.` | +1 |
| D9 | 早晨回答 `…Wild.` | +1 |
| D15 A／B | 开头选择 `Agree.` | +1 |
| D16 A／B | 若 `boarlove >= 15`，选择 `I like you.` | +2 |

### Hoss

`lionlove`

| 时间 | 选择或条件 | 加点 |
|---|---|---:|
| D1 | 奶茶杯输入 `Hoss` | +1 |
| D2 | 选择 `Pilates?` | +1 |
| D3 | 早晨选择 `Hoss` | +1 |
| D4 | Hoss 线选择 `Stay.` | +1 |
| D5 | 选择 `You can pick.` | +1 |
| D5 | 选择 `Oh! Thank god you're here!` | +1 |
| D5 | 选择 `Oh no! Not Slimes!` | +1 |
| D5 | 晚餐选择 `Hoss` | +1 |
| D5 | 电影选择 `Action` | +1 |
| D6 | 早晨选择 `Hoss.` | +1 |
| D6 | 午餐选择 `Guys like me?` | +1 |
| D6 | 午餐选择 `Neither.` | +1 |
| D7 | 南瓜雕刻选择 `Good!` | +1 |
| D7 | 感情建议选择 `Roswell.` | +1 |
| D7 | 感情建议选择 `Hoss.` | +2 |
| D7 | 感情建议选择 `Sal.` | +1 |
| D8 | 隐藏图书馆事件中，若进入该段时 `lionlove < 12` | 自动 +2 |
| D8 | 隐藏图书馆选择 `Hold his hand` | +2 |
| D9 | 早晨选择 `Hoss.` | +1 |
| D9 | Hoss 事件选择 `Answer.` | +1 |
| D9 | 夜间选择 `…want you to stay.` | +1 |
| D9 | 夜间选择 `…hope you sleep well.` | +2 |

若 D8 进入隐藏图书馆亲密段时 `lionlove >= 12`，会触发 Hoss 的接吻内容，但不会获得前一项自动 +2。

### Sal

`croclove`

| 时间 | 选择或条件 | 加点 |
|---|---|---:|
| D1 | 奶茶杯输入 `Sal` | +1 |
| D2 | 选择 `Throw towel over.` | +1 |
| D3 | 早晨选择 `Sal` | +1 |
| D4 | Sal 线选择 `Continue searching.` | +1 |
| D5 | 接受 Sal 的游泳邀请，选择 `Yes` | +1 |
| D5 | 选择 `Swim to Sal.` | +1 |
| D5 | 回忆问题选择 `The day we first met.` | +1 |
| D5 | 初遇回忆中被问是否喜欢淋雨时选择 `No` | +1 |
| D5 | 晚餐 Sal 相关固定加点 | +1 |
| D5 | 电影选择 `Comedy` | +1 |
| D5 | 电影选择 `Action` | +2 |
| D6 | 早晨选择 `Sal` | +1 |
| D6 | 午餐选择 `Wait.` | +1 |
| D6 | 午餐选择 `Video games?` | +1 |
| D6 | 午餐选择 `Talk?` | +1 |
| D6 | 午餐选择 `No.` | +1 |
| D7 | 感情建议选择 `Hoss.` | +1 |
| D7 | 感情建议选择 `Sal.` | +2 |
| D7 | 感情建议选择 `Orlando.` | +1 |
| D9 | 早晨回答 `…Skip.` | +1 |
| D9 | Sal 事件选择 `Approach.`，且进入该选择时 `croclove >= 15` | +1 |
| D9 | Sal 事件选择 `Talk.` | +1 |
| D9 | 夜间选择 `…want to cuddle?` | +1 |
| D9 | 夜间选择 `…want to talk more?` | +2 |

:::

## Sal 线的无效加点

D16 A／B 的 Sal 线中，若进入事件时 `croclove >= 15`，选择 `Remain still.` 后会执行：

```renpy
$ croclove + 2
```

但这条语句只计算了 `croclove + 2`，并没有把结果重新赋给变量，因此不会实际改变 Sal 的好感度。

正常的自增写法应当类似：

```renpy
$ croclove += 2
```

因此，该节点不会实际增加 Sal 的好感度；后续结果没有变化并非存档异常。

## 相关页面

- [CG 画廊查漏索引](../collectibles/gallery.md)
- [剧情线路总览](../guide/route-overview.md)
- [字母线系统](../guide/path-system.md)
- [彩蛋与废弃设定](../extras/easter-eggs.md)
