---
title: "奖牌持久化与最终检定"
description: "Password b0.85 奖牌的跨周目记录、代码写入节点与 Path P 判定机制"
toc: true
---

《Password》的十二枚奖牌并不是保存在某一个普通存档中的物品，而是通过 Ren'Py 的 `persistent` 持久变量进行全局记录。

因此，玩家可以在不同角色线、不同字母线和不同周目中分别收集奖牌，最后再回到 Path A 完成十二枚奖牌的最终检定。

::: {.callout-important}
## 核心结论

奖牌收集具有三个不同层次：

1. **剧情发现：**角色在故事中找到或提到某枚奖牌；
2. **代码写入：**脚本执行 `persistent.xxx = True`；
3. **最终检定：**Path A 结尾重新统计十二个持久变量。

只有第二步真正执行后，该奖牌才会被游戏视为已经收集。
:::

## 奖牌如何保存

游戏为十二枚奖牌分别定义了一个布尔型持久变量：

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

当玩家推进到对应的代码节点时，游戏会将其中一个变量改为 `True`。例如：

```renpy
$ persistent.aries = True
```

`persistent` 数据独立于普通剧情存档，因此：

- 在一个周目中获得的奖牌可以被另一个周目读取；
- 不需要在同一条角色线中收齐十二枚；
- 读取较早的普通存档不会自动撤销后来获得的奖牌；
- 删除某一个普通存档通常不会删除已经写入的奖牌；
- 更换设备、删除持久数据或更换存档目录时，奖牌记录可能丢失。

## “发现奖牌”不等于“已经写入”

部分奖牌在剧情中被发现时，代码并不会立即设置对应的持久变量。

最典型的是：

- **Aquarius／水瓶座：**剧情来源是树篱迷宫（hedge maze），但实际在 D16 奖牌盘点时写入；
- **Taurus／金牛座：**剧情来源是温室巨型南瓜（giant pumpkin），但同样在 D16 盘点时写入。

因此，玩家可能已经看过角色找到奖牌的剧情，但如果没有继续推进到 D16 的整理和确认场景，这两枚奖牌仍可能保持为 `False`。

这也是“明明拿到了奖牌，最终却提示没有收齐”的常见原因。

完整写入节点见[十二枚奖牌收集指南](../collectibles/medals.md)。

## 为什么同一枚奖牌有多个写入点

部分奖牌会在多个脚本位置重复执行相同的持久变量写入。

这并不代表存在多枚同名奖牌，而是为了兼容：

- 不同角色线；
- Oswin 或其他角色的不同存活状态；
- 不同剧情分支；
- 后续的补写场景；
- 同一路线的多个结尾版本。

只要任意一个写入点被实际执行，该奖牌就会进入全局收集状态。

### 路线内即时写入与 D16 补写

以下三枚奖牌通常可以在对应角色线的 D9 直接写入：

| 奖牌 | 角色线 |
|---|---|
| Pisces／双鱼座 | Dean |
| Capricorn／摩羯座 | Sal |
| Cancer／巨蟹座 | Roswell |

如果相关角色线标记成立，D16 的奖牌盘点场景还会再次写入对应变量。

因此，D16 的代码属于路线兼容和冗余确认，不表示玩家需要分别获得两次。

### 多角色结尾兼容

Virgo 和 Sagittarius 各有多个写入位置：

- **Virgo／处女座：**位于 Path A 后段；
- **Sagittarius／射手座：**位于 Path B 结尾。

多个位置分别服务于六条角色线的不同结尾分支。玩家只要经过其中任意一个有效分支即可，不需要把六条角色线全部完成一遍。

## 最终检定如何工作

Path A 结尾进行奖牌检定时，游戏首先将临时计数器重置为 0：

```renpy
$ MedalsFound = 0
```

随后依次检查十二个奖牌变量。每发现一个值为 `True` 的变量，就将计数器增加 1：

```renpy
if persistent.aries == True:
    $ MedalsFound += 1
```

十二枚奖牌全部检查完毕后：

- `MedalsFound < 12`：奖牌不完整，返回普通 Path A 结局；
- 十二枚全部为 `True`：通过完整奖牌检定，继续进入 Path P 时间线相关剧情。

因此，`MedalsFound` **不是奖牌的永久存档本体**。它只是每次最终检定时临时生成的统计结果。

真正保存收集状态的是：

```text
persistent.aries
……
persistent.pisces
```

如果游戏报告奖牌不足，通常意味着至少有一个持久变量仍然是 `False`，而不是 `MedalsFound` 计数器发生了丢失。

## 与 Compendium Lore 的关系

Compendium 的十二个星座 Lore 条目直接读取同一组奖牌持久变量。

例如：

- `persistent.aries == True`：Aries Lore 解锁；
- `persistent.aquarius == True`：Aquarius Lore 解锁；
- `persistent.pisces == True`：Pisces Lore 解锁。

因此，**Compendium 的星座 Lore 解锁机制与 Path P 的奖牌检定使用的是同一套底层状态。**

两者的区别只在于用途：

- Compendium 分别显示每一枚奖牌；
- Path P 将十二个变量重新统计，并要求全部为 `True`。

如果某枚星座 Lore 仍然锁定，通常也意味着该奖牌尚未真正写入持久变量。

## 旧存档中的 Aries 异常

Aries 通常在普通 Path A 的 D23 房间调查场景写入。

如果旧存档或版本迁移造成以下不一致状态：

```renpy
persistent.Day23APrime == True
persistent.aries == False
```

游戏可能直接进入 Prime 版本的 D23，从而跳过普通 D23 中写入 Aries 的场景。

这是较特殊的旧存档兼容问题，不属于正常新存档流程。

具体收集顺序、角色线要求和常见漏项见[十二枚奖牌收集指南](../collectibles/medals.md)。

## 相关页面

- [十二枚奖牌收集指南](../collectibles/medals.md)
- [字母线系统](../guide/path-system.md)
- [Compendium 解锁索引](../collectibles/compendium.md)
