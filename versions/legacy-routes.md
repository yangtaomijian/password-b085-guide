---
title: "旧版本线路档案"
description: "Password b0.7 与 b0.85 之间已移除的线路分支，以及与角色线和字母线有关的历史差异"
toc: true
---

本页记录 *Password* b0.7 与 b0.85 之间和线路有关的差异。

内容只保留会影响正常剧情可达性、Bad Ending，或容易导致玩家误解角色线与字母线关系的变化。密码实现、回放机制和更广泛的剧情互动改写均放在各自的档案页中。

::: {.callout-warning}
## 仅供历史参考

不要把本页当作 b0.85 的当前通关流程。

当前结构见：

- [角色线与字母线总览](../guide/route-overview.md)
- [字母线系统](../guide/path-system.md)
:::

## 本页范围

D4 的**角色线**与之后的**字母线**之间的区别，在 b0.7 中已经存在。A–G 与 Path P 的大部分核心结构，在 b0.85 中也仍然可以辨认。

因此，本页不会重新讲解所有没有变化的判定条件，而只记录：

- 已被移除的可达分支；
- 旧密码对失败时间线的影响；
- 容易让旧攻略误导当前玩家的路线相关机制。

## D6 离开宅邸分支

b0.7 在 D6 宅邸流程后段存在一个正常可达的选择：

```text
Stay.
Leave.
```

选择 **Stay.** 会继续进入 D7；选择 **Leave.** 会直接进入：`BAD END: OZ`。

这是一个终止周目的 Bad Ending。它不会开启新的角色线或字母线，也不会再回到正常主线。

b0.85 已删除正常可达的 D6 离开宅邸菜单，以及对应的 Bad Ending 剧本。

::: {.table-responsive .table-scroll-compact}
| 版本 | D6 结果 |
|---|---|
| b0.7 | `Stay.` 继续；`Leave.` 进入 `BAD END: OZ` |
| b0.85 | 正常流程中不再存在该选择和对应结局 |
:::

## D7 替代输入与 D8 主门槛

b0.7 在 D7 接受的两个旧替代输入，都不会写入通过 D8 主门槛所需的状态。

因此，两者的路线结果都是：

```text
旧替代输入被接受
→ 显示预警场景
→ 进入 D8 失败时间线
→ BAD END: BENSON
```

它们不会形成额外的字母线，只会改变进入同一主要 Bad Ending 之前看到的内容。

两个输入的具体作用、预警图片和旧版提示结构见[旧版本密码档案](legacy-passwords.md)。

::: {.callout-note}
## 两个不同的 “Reveal Oz”

旧版 D7 失败时间线中也可能出现是否揭露 Oswin 的选择，但它和正常 D8 用于字母线判断的 **Reveal Oz** 不是同一个分支。

Bad Ending 中的版本不会写入正常流程使用的 `OzKnown` 状态，也不会决定 Path A 或 Path B。
:::

## Path A、后续重分类与 Path P

b0.85 并没有从头重建字母线系统。

在本次核验的两个版本中，以下核心结构都已经存在：

- D10 将当前状态划入 Path A/B 或 Path C/D 一侧；
- 之后根据角色存活状态在字母之间重新分类；
- Path E 可以由不止一种状态进入，并作为终止分类；
- 后段存在 Path F/G 分流；
- Path A 结局后检查十二枚奖牌，并在满足条件时进入 Path P。

因此，Path P 不能被描述为 b0.85 才新增的路线。

两个版本中的核心转移都是：

```text
PATH A: END
→ 检查十二个 persistent 奖牌标记
→ 十二枚全部取得
→ currentPath = "P"
→ 进入最终 Path P 流程
```

b0.85 在后续 Path P 中新增了独立输入，并加入明确的 true-ending persistent。相关变化见[b0.85 版本主要变化](b085-changes.md)。

源码没有显示正式的 `PATH P: END` 标题，也没有正式把字母 `P` 展开成某个完整单词。剧情中的 “prime timeline” 使 `P = Prime` 成为很合理的解释，但不应写成官方正式全称。

## 与线路相邻的旧机制

下列机制发生在线路剧情内部，但本身不会改变字母线：

::: {.table-responsive .table-scroll-medium}
| 旧机制 | 对线路的实际影响 | 主要档案 |
|---|---|---|
| D8 Oswin 自由文字问答 | 会改变之后的部分对白，但不决定角色线、字母线、奖牌或结局 | [旧版本机制档案](legacy-mechanics.md) |
| D11 可选金库 | 会改变实验室与之后的条件文本，但不分配角色线或字母线 | [旧版本密码档案](legacy-passwords.md) |
| Path A 首次流程 | 由跨存档共享的  `persistent` 变量控制；b0.85 后来加入 Additional Scenes 回放 | [旧版本机制档案](legacy-mechanics.md) |
| D11 注射选择 | 会改变玩家控制和 `DavePride`，但不改变字母线 | [旧版本机制档案](legacy-mechanics.md) |
:::

Dean 相关互动改写以及 D19 关系门槛变化，属于版本级剧情和关系机制变化，而不是字母线拓扑变化。它们统一收录在[b0.85 版本主要变化](b085-changes.md)。

## 当前版本参考

::: {.table-responsive}
| 主题 | 当前页面 |
|---|---|
| 角色线和整体时间线 | [角色线与字母线总览](../guide/route-overview.md) |
| 旧 D7 与 D11 输入 | [旧版本密码档案](legacy-passwords.md) |
| 已退役互动和回放机制 | [旧版本机制档案](legacy-mechanics.md) |
| b0.85 综合变化 | [b0.85 版本主要变化](b085-changes.md) |
:::
