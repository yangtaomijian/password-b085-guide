---
title: "奖牌持久化与最终检定"
description: "Password b0.85 如何保存奖牌进度、更新 Compendium，并在 Path A 结尾检查十二枚奖牌"
toc: true
---

十二枚星座奖牌并不保存在某一个普通剧情存档中。游戏会为每枚奖牌分别记录一个 Ren'Py `persistent` 持久标记，使收集进度可以跨角色线、字母线和周目保留。

最终奖牌检定也不会检查当前存档槽中是否存在十二件物品，而是在 `PATH A: END` 之后重新统计同一组十二个持久标记。

::: {.callout-important}
## 三个不同阶段

奖牌收集包含三个彼此不同的层次：

1. **剧情发现：**奖牌在故事中出现，或被角色找到；
2. **持久解锁：**游戏把对应的 `persistent.<medal>` 标记设为 `True`；
3. **最终检定：**Path A 结局重新统计十二个持久标记。

只有第二步完成后，该奖牌才会永久计入最终检定所使用的收集状态。
:::

## 奖牌进度如何保存

游戏为十二枚星座奖牌分别定义了一个布尔型持久变量：

```renpy
default persistent.aries = False
default persistent.taurus = False
default persistent.gemini = False
default persistent.cancer = False
default persistent.leo = False
default persistent.virgo = False
default persistent.libra = False
default persistent.scorpio = False
default persistent.sagittarius = False
default persistent.capricorn = False
default persistent.aquarius = False
default persistent.pisces = False
```

推进到对应剧情节点时，游戏会把某个标记改为 `True`，例如：

```renpy
$ persistent.aries = True
```

b0.85 没有用于重置十二枚奖牌标记的游戏内选项，也没有剧情分支会把这些标记重新设为 `False`。读取普通剧情存档只会恢复该存档中的故事状态，不会回滚奖牌进度。

实际效果是：

- 奖牌可以分散在不同角色线和字母线中收集；
- 读取较早的普通存档不会恢复该存档建立时的旧奖牌状态；
- 不需要在一个周目中取得全部十二枚奖牌；
- 最终完成 Path A 时，可以使用此前其他周目已经取得的奖牌。

取得奖牌后，建议让当前场景完整结束，并建立一个普通存档，再切换流程或退出游戏。

## 找到奖牌不一定已经完成解锁

部分奖牌会先在故事中出现，之后才写入持久标记。

最明显的例子是：

- **Aquarius（水瓶座）：**D4 在树篱迷宫中被找到，但要到 D16 的 A/B 奖牌盘点场景才写入；
- **Taurus（金牛座）：**D7 在巨型南瓜下方被找到，同样要到 D16 的 A/B 奖牌盘点场景才写入。

因此，玩家可能清楚记得自己已经看过这两枚奖牌，但对应的持久标记仍然是 `False`。

相对而言，Pisces、Cancer 和 Capricorn 会在各自 D9 角色线场景中写入，即使其准确星座身份要到之后才得到确认。

具体发现位置和写入节点见[十二枚奖牌收集指南](../collectibles/medals.md)。

## 为什么同一枚奖牌有多个写入位置

重复写入不代表存在多枚同名奖牌。它们通常用于兼容不同剧情分支，或在后续确认场景中再次保证状态已经写入。

Pisces、Cancer 和 Capricorn 会在对应角色线的 D9 场景中首次写入，并可能在 D16 的 Path A/B 奖牌盘点场景中再次写入。后一次只是冗余确认，不是第二枚收集品，也不是额外要求。

Virgo 和 Sagittarius 也会在多个互斥的关系结局分支中重复写入：

- 任意一个有效的 Path A 结局分支都会取得 Virgo；
- 任意一个有效的 Path B 结局分支都会取得 Sagittarius。

玩家不需要为了同一枚奖牌完成六种关系结局。

## 最终十二枚奖牌检定如何工作

在 `PATH A: END` 之后，游戏会先把临时计数器重置为 0：

```renpy
$ MedalsFound = 0
```

随后依次检查十二个奖牌持久标记。每发现一个值为 `True` 的标记，就把计数器增加 1：

```renpy
if persistent.aries == True:
    $ MedalsFound += 1
```

十二个标记检查完毕后：

- 少于十二枚：当前 Path A 结局后的流程结束，不进入 Path P；
- 十二枚全部已记录：剧情继续进入 Path P 最终流程。

`MedalsFound` 不是奖牌的永久收集记录，只是每次最终检定运行时临时重新计算的总数。

真正保存收集状态的是：

```text
persistent.aries
...
persistent.pisces
```

::: {.callout-note}
## 检定只在 Path A 结局后运行

游戏不会持续监控玩家何时取得第十二枚奖牌。

如果第一次完成 Path A 时奖牌尚未收齐，之后在其他流程中补齐缺失奖牌，并不会自动重新打开最终剧情。玩家必须再次完成 Path A，让十二枚奖牌检定重新运行。
:::

## Compendium 与奖牌进度

Compendium 中的十二个星座 Lore 使用的也是同一组奖牌持久标记，因此其底层状态与 Path P 最终检定一致。

不过，当前游戏会话中新取得的奖牌，可能要到重启游戏后才会在 Compendium 中显示解锁。完整的访问条件和刷新行为见[Compendium 解锁索引](../collectibles/compendium.md)。

## 游戏不会重置哪些奖牌数据

b0.85 没有清除全部十二枚奖牌标记的游戏内选项。

D1 的隐藏密码 `THE END` 会重置若干结局记录，包括 `True End` 标记和 Path A—G 的结局标记，但**不会**清除十二枚星座奖牌的收集状态。

删除普通剧情存档同样不会撤销奖牌记录。只有清除整个持久数据、未完整迁移用户数据，或更换设备时遗漏相关文件，才可能导致奖牌进度丢失。

## 奖牌进度排错

如果最终检定仍然报告奖牌不完整，请依次检查：

1. 每枚奖牌是否真正到达持久写入节点，而不只是看过首次发现场景；
2. 重启游戏后，Compendium 的星座 Lore 中是否仍有锁定条目；
3. 十二个标记全部写入后，是否重新完成了一次 Path A；
4. 如果在不同设备之间迁移进度，持久数据是否与普通存档一起完整转移。

最快收集顺序和十二枚奖牌的位置见[十二枚奖牌收集指南](../collectibles/medals.md)。

## 相关页面

- [十二枚奖牌收集指南](../collectibles/medals.md)
- [字母线系统](../guide/path-system.md)
- [剧情线路总览](../guide/route-overview.md)
- [Compendium 解锁索引](../collectibles/compendium.md)
