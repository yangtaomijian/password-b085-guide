---
title: "彩蛋与隐藏输入"
description: "Password b0.85 的可选金库输入、D1 咖啡杯姓名、隐藏司机与蛇夫座说明"
toc: true
---

本页整理《Password》b0.85 中仍可正常触发的可选输入和彩蛋。它们都不是进入任何字母线或 Path P 的必要条件。

## D1—D3 金库彩蛋

前三次金库访问中包含两个可选输入，以及一个没有可接受答案的日期。

::: {.easter-vault-table .table-responsive .table-scroll-compact}

| 日期 | 输入 | 效果 |
|---:|---|---|
| D1 | `THE END` | 清除已记录的结局标记，然后退出游戏 |
| D2 | — | b0.85 中没有任何输入会被接受为 D2 正确密码 |
| D3 | `THE LOVERS` | 六名主要角色的好感度各增加 5 |

:::

### 输入规则

这些金库输入不区分大小写，并会删除首尾空格。答案内部的空格必须保留，而且每个输入只能在指定日期生效。

例如，D3 输入 `the lovers` 可以触发彩蛋，但 `THELOVERS` 不会。

### `THE END`

在 D1 金库中输入 `THE END`，会清除已保存的 `True End` 标记和 Path A—G 结局标记，然后关闭游戏。

它不会清除十二枚星座奖牌，因此只有在确实想重置这些结局记录时才应使用。

### D2 没有正确密码

D2 仍然会打开金库输入界面，但该日期没有任何答案会被判定为正确。

输入属于其他日期的已登记密码时，可能会得到不同的失败反馈，但不会进入 D2 成功分支。

### `THE LOVERS`

D3 输入 `THE LOVERS` 会让六名主要角色的好感度各增加 5。

这是正常 b0.85 流程中单次同时提高六项好感度幅度最大的事件。

后续阈值和角色专属检定见[好感度机制与加点](../mechanics/affection.md)。

## D1 咖啡杯姓名彩蛋

D1 开头，Roswell 会让 Dave 输入咖啡杯上写着的名字。答案可能改变杯面对白、增加好感度，或替换之后把众人送往宅邸的司机。

与金库输入不同，杯名**区分大小写**。首尾空格会被删除，但下列拼写必须保持准确：

```text
Dave Dean Tyson Roswell Orlando Hoss Sal
Chase
Civ Rem
Wilson Timber Zylus
```

例如，`Dave` 可以触发专属回应，而 `dave` 和 `DAVE` 会进入通用分支。

### Dave 与六名主要角色

输入 `Dave` 会触发专属回应，并让六名主要角色的好感度各增加 1。

输入某名主要角色的姓名，则触发该角色的专属回应，并只增加对应角色的好感度：

| 输入 | 好感度效果 |
|---|---|
| `Dean` | Dean `+1` |
| `Tyson` | Tyson `+1` |
| `Roswell` | Roswell `+1` |
| `Orlando` | Orlando `+1` |
| `Hoss` | Hoss `+1` |
| `Sal` | Sal `+1` |

这些姓名不会替换司机。

### `Chase`

`Chase` 是对 *[Echo](https://echoproject.itch.io/echo)* 水獭主角 Chase 的引用。

Roswell 会说这个名字听起来像属于一只水獭，随后补充说也可能适合一只狗。

该输入不会改变好感度或司机。

### `Civ`

输入 `Civ` 会触发一段简短的 `Civ`／`shiv` 对话，Roswell 随后评论这个名字听起来很有音乐感。

Civ Valian 在鸣谢中负责 **Sound Design/Composition**。该输入不会改变好感度或司机。

### `Rem`

输入 `Rem` 后，Dave 会发现饮料几乎全是水。Roswell 会紧张地猜测这也许是“含咖啡因的水”。

Rem 在鸣谢中列为 **Diamond Patron**。该输入不会改变好感度或司机。

## 隐藏司机姓名

`Wilson`、`Timber` 和 `Zylus` 会在 D1 后续剧情中替换默认司机。

司机场景开始时，这三个姓名都会让六名主要角色的好感度各增加 1；该加点不会在杯面对白阶段立即发生。

### `Wilson`

Wilson 的杯子上布满细小线条和文字，看起来像论文或思维导图。饮料本身仍是普通咖啡。

之后的司机会替换为狐狸 Wilson。Roswell 把他比作亡者摆渡人 Charon，Hoss 则指出名牌上明明写着 Wilson。抵达宅邸后，他使用普通告别对白。

### `Timber`

Timber 的杯底周围画着许多圆圈，可能组成一只熊。Roswell 认为，也许有人想把咖啡做得像 Hoss 喜欢的奶茶。

之后的司机会替换为体型异常高大的熊 Timber。众人会对他的身材作出反应，Dean 也明显表现出竞争心。抵达宅邸后，Timber 会私下提醒 Dave 照顾好自己。

Timber 在鸣谢中列为 **Diamond Patron**。

### `Zylus`

输入 `Zylus` 时，杯面阶段仍使用通用回应，但后续司机判断会识别该姓名。

之后的司机会替换为带有巨大鹿角和明显长牙的 Zylus。相关对白主要围绕他的牙齿，以及鹿角在驾驶座附近造成的不便。抵达宅邸后，他使用普通告别对白。

Zylus 在鸣谢中列为 **Diamond Patron**。

### 特殊输入汇总

::: {.easter-special-input-table .table-responsive .table-scroll-compact}

| 输入 | 杯面专属回应 | 好感度效果 | 司机 | 其他说明 |
|---|---|---|---|---|
| `Dave` | 有 | 六人各 `+1` | 默认司机 | Dave 姓名回应 |
| 六名主要角色姓名 | 有 | 对应角色 `+1` | 默认司机 | 只影响一名角色 |
| `Chase` | 有 | 无 | 默认司机 | *Echo* 引用 |
| `Civ` | 有 | 无 | 默认司机 | Civ Valian 引用 |
| `Rem` | 有 | 无 | 默认司机 | 鸣谢中的 Diamond Patron |
| `Wilson` | 有 | 司机判断时六人各 `+1` | Wilson | 隐藏司机 |
| `Timber` | 有 | 司机判断时六人各 `+1` | Timber | 鸣谢中的 Diamond Patron |
| `Zylus` | 无，使用通用回应 | 司机判断时六人各 `+1` | Zylus | 鸣谢中的 Diamond Patron |

:::

### 其他姓名

任何其他非空输入都会使用通用杯面回应，包括 `Oswin`、`Benson` 等之后登场的角色姓名。

## 已知密码在错误日期输入时的反馈

金库能够识别部分属于其他日期的密码，但错误日期的反馈会随剧情阶段变化。

::: {.easter-wrong-day-table .table-responsive .table-scroll-compact}

| 输入日期 | 错误日期反馈 |
|---:|---|
| D1 | 使用普通错误回应 |
| D2 | 出现停顿和近似正确的点击声 |
| D3 | 显示 `PASSWORD INVALID FOR CURRENT DATE`，并暗示答案属于其他日期 |
| D4 | 使用相同的当前日期警告 |
| D6 | 会区分“已知密码”和“当天需要的密码” |
| D7 以后 | 通常把错误日期密码合并到普通错误回应 |

:::

这只会改变反馈内容。密码仍然只能在其指定日期生效。

需要查询可接受密码的提示时，见[密码分级提示](../guide/password-hints.md)；共用调度器和三类失败结果见[密码检定的底层机制](../mechanics/password-checks.md)。

## 蛇夫座与十二枚奖牌上限

Path A 后期对白会提到 **Ophiuchus（蛇夫座）**，它有时被视为第十三个黄道星座。

但在 b0.85 中，它只是剧情引用，不是可收集奖牌：

- Compendium 只有十二个 Lore 条目；
- Path P 最终检定只统计十二枚标准黄道奖牌；
- 不存在蛇夫座奖牌；
- 也不存在需要额外输入的第十三枚奖牌密码。

完整收集规则见[十二枚奖牌收集指南](../collectibles/medals.md)和[奖牌持久化与最终检定](../mechanics/medal-persistence.md)。

## 相关页面

- [密码分级提示](../guide/password-hints.md)
- [密码检定的底层机制](../mechanics/password-checks.md)
- [好感度机制与加点](../mechanics/affection.md)
- [十二枚奖牌收集指南](../collectibles/medals.md)
- [奖牌持久化与最终检定](../mechanics/medal-persistence.md)
