---
title: "旧版本密码档案"
description: "Password b0.7 及更早版本中已删除的 D7 假密码与 D11 可选密码"
toc: true
---

本页记录 b0.7 及更早版本中已从 b0.85 正常流程删除的 D7 假密码与 D11 可选密码。

::: {.callout-warning}
## 不适用于 b0.85

本页涉及的两个 D7 假密码和 D11 可选密码，均不能按照旧攻略直接用于 b0.85。

b0.85 版本 的有效密码提示见[密码分级提示](../guide/password-hints.md)。
:::

## 旧密码变化总览

| 时间 | 旧版本设计 | b0.85 状态 |
|---|---|---|
| D7 | 一个真密码和两个假密码组成连续解谜链 | 两个假密码剧情删除，只保留唯一有效答案 |
| D11 | 非首次 Path A 可选择前往金库并输入可选密码 | 输入环节删除，变量和密码表仍有残留 |
| Path P | 没有当前的新密码环节 | b0.85 新增一个难度较低的密码 |

## D7 的旧版三密码结构

旧版本的第二个关键密码采用了“一真两假”的设计。

当时有三个输入会被程序识别为密码：

| 密码 | 类型 | 结果 |
|---|---|---|
| `PEACEKEEPER` | 假密码 | 提前显示 Orlando 中枪相关剧情，但无法救下 Benson |
| `ARBITER` | 假密码 | 提前显示 Dean 与 Tyson 抢枪相关剧情，但无法救下 Benson |
| 当前仍有效的答案 | 真密码 | 显示 Benson 死亡预兆，使 Dave 获得救下 Benson 的信息 |

两个假密码虽然会触发专门剧情，却不能使主线继续。玩家最终仍会进入 Bad Ending。

### 旧版解谜顺序

旧版的设计要求玩家逐步从不同失败流程中获得信息：

1. D7 留空或输入普通错误答案；
2. 进入 Benson 死亡的 Bad Ending，并发现 `PEACEKEEPER`；
3. 输入 `PEACEKEEPER`，进入第二段失败剧情并发现 `ARBITER`；
4. 输入 `ARBITER`，进入第三段失败剧情；
5. 结合两段假密码流程中的角色对话，找到真正能够推进主线的密码。

其中：

- 真密码会在 `ARBITER` 对应的 Bad Ending 中由 Roswell 说出；
- 在 `PEACEKEEPER` 对应的 Bad Ending 中，Dean 和 Hoss 会先后强调真密码；
- 单纯留空进入的最初 Bad Ending 中不会直接给出真密码。

因此，旧版 D7 的解谜难度明显高于 b0.85 版本。

## 旧版 Trauma CG 快速解锁

旧版本中，三个密码入口分别对应不同的死亡预兆画面：

| 输入 | 提前显示的主要 Trauma CG |
|---|---|
| 真密码 | Benson 倒地或死亡预兆 |
| `ARBITER` | Dean 与 Tyson 抢夺手枪 |
| `PEACEKEEPER` | Orlando 中枪 |

这使玩家可以通过分别输入三个密码，较快解锁相关 Trauma CG，而不必完整重走所有失败流程。

b0.85 删除两个假密码后：

- 真密码仍然可以看到 Benson 相关 CG；
- `ARBITER` 和 `PEACEKEEPER` 不再触发旧剧情；
- 另外两张 Trauma CG 需要通过对应的正常 Bad Ending 流程解锁。

具体画廊位置见[CG 画廊查漏索引](../collectibles/gallery.md)。

## D7 Bad Ending 中的“揭露 Oswin”

旧版 D7 假密码对应的 Bad Ending 中，Dave 会怀疑 Oswin 与 Benson 的死亡有关，并可能决定是否揭露 Oswin。

这个选择只属于 D7 Bad Ending 内部。

它与正常主线 D8 的“是否向其他人揭露 Oswin”不是同一个分支，也不会直接决定正常存档中的 Path A 或 Path B。

## D11 可选密码

旧版 Path A 的 D11 曾存在一个非强制密码：

```text
METEMPSYCHOSIS
```

它与四个强制关键密码不同：

- 不输入也可以继续主线；
- 输入与否不会改变最终字母线；
- 主要改变当天晚上 Dave 与 Oswin 的部分对话和实验室信息；
- 它更接近隐藏文本入口，而不是通关检定。

### 旧版输入时间

该密码只会出现在：

- 任意角色线；
- Path A；
- 非首次经历该段路线；
- D11 的“前往金库”选项中。

首次游玩 Path A 时，不会出现该选项。

玩家需要先经历 Oswin 从 Dave 背后注射生理盐水的剧情。之后重新进入 Path A 的 D11，Dave 才会由于循环记忆产生感应，并获得前往金库的选择。

### 旧版提示来源

密码会出现在当晚 Oswin 向 Dave 展示的纸张中，因此获取难度相对较低。

输入后会设置：

```renpy
$ METEMPSYCHOSIS = True
```

后续 Oswin 或实验室相关文本再根据这个变量显示不同内容。

## 对后续剧情的影响

由于 b0.85 的正常流程无法再将 `METEMPSYCHOSIS` 设为 `True`，相关后续文本统一进入变量为 `False` 的默认版本。

因此，旧攻略中所说的：

- D11 前往金库；
- 输入可选密码；
- 改变实验室信息；
- 改变当晚 Oswin 对话

均不再是 b0.85 的正常可用流程。 b0.85 版本 的剧情默认为旧版本未成功输入密码的剧情。

## 相关页面

- [密码分级提示](../guide/password-hints.md)
- [密码检定的底层机制](../mechanics/password-checks.md)
- [b0.85 版本主要变化](b085-changes.md)
- [旧版本线路档案](legacy-routes.md)
- [CG 画廊查漏索引](../collectibles/gallery.md)
