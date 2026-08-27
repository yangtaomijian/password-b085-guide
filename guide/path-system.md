---
title: "字母线系统"
description: "Password b0.85 中 Path A—G 与 Path P 的基本分支关系"
toc: true
---

《Password》中存在两套彼此独立、但会相互影响的路线系统：

- **角色线**在 D4 选择搭档后确定，包括 Dean、Tyson、Roswell、Orlando、Hoss 和 Sal；
- **字母线**主要由 D8 的选择，以及 D10、D17 的密码检定和后续剧情状态决定。

选择某条角色线，并不等于自动进入某条字母线。角色线主要决定同行角色和具体剧情，字母线则决定后半段主线的发展方向。

两套系统的整体区别见[剧情线路总览](route-overview.md)。

::: {.callout-warning}
## 路线剧透

本页会直接说明 Path A—G 和 Path P 的进入逻辑，但不会公开密码答案。
更早、只与特定角色线或前置条件有关的坏结局不在这里逐一展开。
:::

在正常进入 Path A—D 的分流前，遗漏更早的金库要求会在 D8 触发 `BAD END: BENSON`。这是独立失败结局，不属于 Path A—G。

## 基础分流：Path A—D

D8 的 **Support Benson** 与 **Reveal Oz** 是字母线的第一个主要分歧。该选择会影响 Oswin 是否早死；D10 的密码检定则决定流程继续留在共同的 Path A/B 剧情，还是转入 Path C/D 剧情。

除 Sal 线外，常规对应关系如下：

| D8 选择 | 含义 | D10 检定 | 基础字母线 |
|---|---|---|---|
| **Support Benson** | 继续隐瞒 Oswin | 成功 | Path A |
| **Reveal Oz** | 向众人揭露 Oswin | 成功 | Path B |
| **Support Benson** | 继续隐瞒 Oswin | 失败 | Path C |
| **Reveal Oz** | 向众人揭露 Oswin | 失败 | Path D |

概括来说：

- Path A 和 Path C 来自 Oswin 没有早死的一侧；
- Path B 和 Path D 来自 Oswin 早死的一侧；
- D10 检定成功会让流程留在共同的 Path A/B 剧情；
- 非 Sal 线在 D10 放弃检定，通常会转入 Path C/D 剧情。

D8 的选择会先锁定后续方向，但不会立刻改变画面或存档中显示的字母线；具体字母线要到之后的事件中才会确定。

### Sal 线的特殊情况

Sal 线在 D10 放弃密码检定后，不会进入 Path C 或 Path D，而是根据此前 Oswin 的状态继续留在 Path A/B 剧情。

这一豁免**不等于通过了密码检定**。正确完成检定仍然关系到画廊收集：成功分支会显示 Sal 的金库 CG，并同时显示一张归入死亡画廊的图像；Sal 的其他画廊内容则通过角色线正常推进获得，不依赖这次检定。

## 后续分流：Path E—G

处于常规 Path C/D 剧情的流程会进入 D14 救援事件。最终结果还取决于 Sal 是否活着抵达磨坊，以及玩家在 **Save Benson.** 与 **Save Sal.** 之间的选择。

因此，从 Path C 一侧开始的流程最终可能结束为 Path C、Path D 或 Path E；从 Path D 一侧开始的流程最终可能结束为 Path D 或 Path E，但无法回到 Path C，因为 Oswin 的早期死亡无法逆转。

当 Sal 活着抵达 D14 磨坊事件时，主要结果如下：

| 起始方向 | D14 选择 | 最终结果 |
|---|---|---|
| Path C 一侧 | **Save Benson.** | 保持 Path C |
| Path C 一侧 | **Save Sal.** | 改判为 Path D |
| Path D 一侧 | **Save Sal.** | 保持 Path D |
| Path D 一侧 | **Save Benson.** | 进入 Path E |

在 Path C 一侧选择救 Sal，会导致 Benson 死亡，随后 Oswin 自尽，因此流程会从 Path C 改判为 Path D。其他若干终止性的死亡状态组合则会进入 Path E。

Path E 是以全员死亡为结果、且具有多个入口的终止字母线，并不对应某一个无条件成立的单独选项；具体入口取决于流程进入 D14 时已经形成的角色生死状态。

Path A 和 Path B 则会继续推进到 D17 的密码检定。

::: {.d17-path-table .table-responsive}

| 当前字母线 | D17 检定成功 | D17 检定失败（非 Tyson 线） |
|---|---|---|
| Path A | 保持 Path A | D19 发生灾难，D20 按 Oswin 存活状态归为 Path F |
| Path B | 保持 Path B | D19 发生灾难，D20 按 Oswin 死亡状态归为 Path G |

:::

密码实际输入发生在 D17；失败的主要后果在 D19 出现，游戏再于 D20 根据 Oswin 是否存活，将流程归为 Path F 或 Path G。

### Path F/G 内的提前坏结局

D17 检定失败后，并不会立刻出现“独自离开”的坏结局。流程会先经历 D19 灾难并在 D20 被归入 Path F 或 Path G，随后 D21 才会出现 **Stay.** 与 **Leave.** 的选择。

选择 **Leave.** 会使 Dave 独自离开队伍，并进入 `BAD END: DOMINIC`。这是已经进入 F/G 流程后的提前终止分支，不是 D17 当场生成的独立字母线。与正常的 Path F、Path G 结局不同，该分支不会提供 **Resonate?**。

### Tyson 线的特殊情况

Tyson 线即使在 D17 输错密码或选择放弃，也不会最终转入 Path F 或 Path G，而是保留此前已经形成的 Path A/B 方向。

这一保护同样**不等于完成了密码检定**。D17 的输入和失败场景本身不会被跳过；真正的保护发生在后续剧情中：D18 会揭示高频声音的来源，Tyson 随后改在 Dave 的房间睡觉，从而避免 D19 的灾难。

该保护不要求额外好感度、恋爱状态、存活标记或附加选项。Tyson 线仍然可能因为更早的 D10 失败进入 Path C/D；它只豁免 D17 失败所导致的 F/G 分流。

<details>
<summary><strong>Sal 线与 Tyson 线的豁免有何不同？</strong></summary>

两种角色线豁免都会阻止密码检定失败后的常规字母线分流，但都不会把密码判定为成功。

::: {.path-exception-comparison-table .table-responsive .table-scroll-wide}

| | Sal 线的 D10 检定 | Tyson 线的 D17 检定 |
|---|---|---|
| 豁免生效时点 | 选择 **Give up** 后立即进入 Sal 专属失败分支；D11 会再次检查安全结果 | 不在 D17 失败场景中生效；保护在 D19 末尾才应用 |
| 是否视为密码成功 | 否 | 否 |
| 失败场景 | Sal 会进入角色线专属的金库场景 | 与其他角色线使用同一个 D17 失败场景 |
| 被阻止的灾难 | D11 灾难及常规 Path C/D 分流 | D19 灾难及后续 Path F/G 分流 |
| 字母线显示 | 存档可能暂时显示 `Path C`，但剧情仍在共同的 Path A/B 流程中 | 已形成的 `Path A` 或 `Path B` 显示保持一致 |
| 可能错过的成功限定内容 | 成功预警场景及相关画廊内容 | 成功预警及相关密码专属对白 |
| 变得无法进入的剧情分支 | 真正的 Path C/D/E 剧情与结局 | Path F/G 剧情与结局 |
| 是否仍可能进入其他字母线分流 | 之后 D17 检定失败时，Sal 线仍可进入 Path F/G | 更早的 D10 检定失败时，Tyson 线仍可进入 Path C/D |

:::

两种豁免都不会把密码失败变成成功，因此仍可能错过只在成功时出现的对白或画廊内容。
</details>

## Path P

Path P 不是前期可以单独选择的路线，而是完成 Path A 主干后的最终收集分支。

进入 Path P 需要：

1. 一直保持在 Path A；
2. 完成 Path A 主结局，并在 `PATH A: END` 之后到达最终奖牌检定；
3. 游戏中已经记录全部十二枚奖牌。

如果奖牌不足十二枚，流程会在普通 Path A 结局后结束；集齐十二枚后，剧情会继续进入后续时间线段落，并将当前字母线设为 `P`。

脚本和界面支持 `Path P` 这一名称，但游戏没有正式说明字母 P 的完整含义，因此不应把它直接扩写成某个未经确认的官方全称。

具体收集方法见[十二枚奖牌收集指南](../collectibles/medals.md)。

## 各字母线简表

::: {.path-summary-table .table-responsive}

| 字母线 | 核心进入条件 |
|---|---|
| **Path A** | Oswin 没有早死；留在 D10 安全侧；通过 D17 检定或受到 Tyson 线保护，避免 F/G 分流 |
| **Path B** | Oswin 早死；留在 D10 安全侧；通过 D17 检定或受到 Tyson 线保护，避免 F/G 分流 |
| **Path C** | Oswin 没有早死；非 Sal 线在 D10 检定失败 |
| **Path D** | 非 Sal 线进入 D10 失败侧，且 Oswin 已死亡；Path C 还可能在 D14 被改判为 Path D |
| **Path E** | 从常规 C/D 剧情进入 D14 的若干终止性死亡状态组合，结果为全员死亡 |
| **Path F** | 从 Path A 方向出发；非 Tyson 线在 D17 检定失败；D19 灾难发生时 Oswin 存活 |
| **Path G** | 从 Path B 方向出发；非 Tyson 线在 D17 检定失败；D19 灾难发生时 Oswin 已死亡 |
| **Path P** | 完成 Path A 主干，并在最终奖牌检定时已集齐十二枚奖牌 |

:::

## 相关页面

- [剧情线路总览](route-overview.md)
- [密码分级提示](password-hints.md)
- [十二枚奖牌收集指南](../collectibles/medals.md)
