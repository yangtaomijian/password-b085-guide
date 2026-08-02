---
title: "Compendium 解锁索引"
description: "Password b0.85 全部 Cast Files、Additional Scenes 与 Lore 的解锁条件和排错方法"
toc: true
---

《Password》b0.85 的 Compendium 固定分为三个部分：

| 部分 | 数量 | 内容 |
|---|---:|---|
| Cast Files | 16 | 角色档案 |
| Additional Scenes | 9 | 可重复播放的剧情场景 |
| Lore | 12 | 十二枚星座奖牌条目 |
| **合计** | **37** | — |

游戏设置首次结局标记后，Compendium 按钮才会出现在**主菜单**。正常游戏流程中的导航菜单不会提供该入口。

未解锁条目仍会保留在固定位置，并显示为 `?????`，因此可以根据所属部分和列表顺序定位缺失项目。

::: {.callout-important}
## 解锁会持久保存，但界面可能延迟刷新

Cast Files、Additional Scenes 和 Lore 都由持久标记控制，但游戏不会在保持开启的情况下实时刷新所有 Compendium 条目。

因此，新取得的条目即使已经写入持久状态，仍可能暂时显示为 `?????`。只关闭并重新打开 Compendium 也不一定会刷新。

在把缺失条目判断为收集条件问题之前，请先完整重启游戏。
:::

## Cast Files

### 解锁索引

::: {.compendium-cast-table .table-responsive .table-scroll-medium}

| 顺序 | Cast File | 持久条件 | 主要解锁途径 |
|---:|---|---|---|
| 1 | Dave | `persistent.dave_lore` | D14 A/B，关于 Dave 父亲的回忆 |
| 2 | Tyson | `persistent.tyson_lore` | Tyson 线，D15 A/B |
| 3 | Roswell | `persistent.roswell_lore` | Roswell 线，D18 A/B |
| 4 | Orlando | `persistent.orlando_lore` | D15 会议；是否要求 Orlando 线取决于 Oswin 状态 |
| 5 | Hoss | `persistent.hoss_lore` | D3 可选对话，另有 D8 可选补充入口 |
| 6 | Sal | `persistent.sal_lore` | D10 密码成功场景，或 Sal 线 D15 补充入口 |
| 7 | Dean | `persistent.dean_lore` | Dean 线，D11 A/B |
| 8 | Benson | `persistent.benson_lore` | Path A 后期流程 |
| 9 | Thanatos | `persistent.thanatos_lore` | Path A 后期时间循环流程 |
| 10 | Thanatos - Part 2 | `persistent.true_end` | 完整完成 Path P |
| 11 | Memphis | `persistent.memphis_lore` | Path C，D13 与 Memphis 会面 |
| 12 | Dominic | `persistent.dominic_lore` | Path A 后期会面 |
| 13 | Jack | `persistent.jack_lore` | 与 Dominic 同一段会面 |
| 14 | Florencia | `persistent.florencia_lore` | Path D、G、A 或 B 的结局场景 |
| 15 | David | `persistent.david_lore` | 与 Dave 相同的 D14 A/B 回忆 |
| 16 | Hoyt | `persistent.hoyt_lore` | 与 Dave、David 相同的 D14 A/B 回忆 |

:::

### Dave、David 与 Hoyt

三个档案都在 D14 A/B 的同一段回忆中解锁。脚本会先写入 Hoyt，随后写入 Dave 和 David。

到达该回忆后，不要求特定角色线或好感度。

### Orlando

Orlando 档案在 D15 有两种条件：

| Oswin 状态 | 解锁条件 |
|---|---|
| Oswin 存活 | 要求当前为 Orlando 线 |
| Oswin 已死亡 | 任意角色线都会在公共会议中解锁 |

游戏内锁定提示只提到 Orlando 线，因此不会显示第二种方法。

### Hoss

最早的解锁方法是 D3 的可选对话：

```text
Message...? → Hoss
```

此时尚未进行 D4 搭档选择，因此不要求 Hoss 线。

D8 的可选隐藏图书馆剧情还可以再次写入同一标记。该补充入口同样不要求 Hoss 线，但玩家必须进入对应的图书馆分支。

### Sal

D10 正确完成密码检定时，Sal 的 Cast File 会在相关场景中写入，**不要求当前为 Sal 线**。

如果玩家选择 Sal 线但在 D10 没有完成密码，D15 的 Sal 对话还会补写同一标记，因此不会永久错过该档案。

### Thanatos 与 Thanatos - Part 2

普通 Thanatos 档案会在 Path A 后期的时间循环剧情中解锁。十二枚奖牌不足时，最终检定附近还存在一个补写入口，但正常情况下此前的 Path A 场景已经完成写入。

`Thanatos - Part 2` 不使用单独的角色档案变量，而是直接读取完整 Path P 的完成状态。

### Dominic 与 Jack

Dominic 和 Jack 会在 Path A 后期的同一次会面中连续解锁。Jack 没有另一段独立的专属解锁场景。

### Florencia

Florencia 有多个替代解锁点：

- Path D 结局；
- Path G 结局；
- Path A 结局流程；
- Path B 结局流程。

最早可以通过 Path D 结局取得。Path C、E 和 F 没有对应写入。

<details id="oswin-为什么不在-cast-files-中">
<summary><strong>为什么列表中没有 Oswin？</strong></summary>

b0.85 定义了 `persistent.oswin_lore`，并会在 Path A 后期把它设为 `True`，但 Oswin 唯一的 `Cast` 条目已被禁用。

因此：

- Oswin 不占据任何可见 Cast File 槽位；
- 可见总数仍然是 16；
- 即使相关持久标记已经写入，玩家也不会看到 Oswin 档案；
- 被禁用的条目只有简短、未完成的标题内容，并不是完整角色档案。
</details>

## Additional Scenes

### 固定顺序与解锁条件

::: {.additional-scenes-table .table-responsive .table-scroll-compact}

| 顺序 | Additional Scene | 解锁条件 |
|---:|---|---|
| 1 | Dave's Demise | `persistent.Day23APrime` |
| 2 | Roswell's Attempt | `persistent.Day23APrime` |
| 3 | Tyson Epilogue | 完成 Path P，并解锁 Tyson 的 Cast File |
| 4 | Dean Epilogue | 完成 Tyson Epilogue，并解锁 Dean 的 Cast File |
| 5 | Orlando Epilogue | 完成 Dean Epilogue，并解锁 Orlando 的 Cast File |
| 6 | Sal Epilogue | 完成 Orlando Epilogue，并解锁 Sal 的 Cast File |
| 7 | Hoss Epilogue | 完成 Sal Epilogue，并解锁 Hoss 的 Cast File |
| 8 | Dave Epilogue | 完成 Hoss Epilogue |
| 9 | Roswell Epilogue | 完成 Dave Epilogue |

:::

### Dave's Demise 与 Roswell's Attempt

前两个场景共享同一个持久条件，正常情况下会一起开放。

它们不属于后面七段 Epilogue 的完成链，也不需要先完成其中一个才能解锁另一个。

### Epilogue 的固定依赖链

七段 Epilogue 只能按固定顺序解锁：

```text
Tyson
→ Dean
→ Orlando
→ Sal
→ Hoss
→ Dave
→ Roswell
```

前五段角色 Epilogue 还要求相应的 Cast File：

| Epilogue | 需要的 Cast File |
|---|---|
| Tyson Epilogue | Tyson |
| Dean Epilogue | Dean |
| Orlando Epilogue | Orlando |
| Sal Epilogue | Sal |
| Hoss Epilogue | Hoss |
| Dave Epilogue | 无 |
| Roswell Epilogue | 无 |

只有 Tyson Epilogue 会直接检查 Path P 是否已经完成。后面的场景通过前一段 Epilogue 的完成标记间接依赖 Path P。

### 每段 Epilogue 都必须播放到完成节点

用于解锁下一段 Epilogue 的完成标记，会在当前回放接近结尾时才写入。

如果在写入前使用 **End Replay** 退出，完成标记不会生效。仅仅打开回放，或只观看其中一部分，都不足以推进解锁链。

即使已经完整播放，下一项也可能要到重启游戏后才显示。因此，在仅仅因为下一项仍是 `?????` 而重播上一段之前，应先重启游戏。

::: {.callout-warning}
## Epilogue 解锁链卡在 `?????`

请依次检查：

1. 上一段 Epilogue 是否真正播放到结尾，而不是通过 **End Replay** 中途退出；
2. Dean 至 Hoss 的对应 Cast File 是否已经解锁；
3. Tyson Epilogue 是否已经通过“完成 Path P + 解锁 Tyson 档案”获得；
4. 最近一次取得解锁或完成标记后，是否重启过游戏；
5. 持久数据是否来自旧版本安装，或设备迁移是否不完整。
:::

## Lore

Lore 部分包含十二个星座条目，按照传统黄道顺序排列：

::: {.compendium-lore-table .table-responsive .table-scroll-compact}

| 顺序 | Lore | 持久标记 |
|---:|---|---|
| 1 | Aries（白羊座） | `persistent.aries` |
| 2 | Taurus（金牛座） | `persistent.taurus` |
| 3 | Gemini（双子座） | `persistent.gemini` |
| 4 | Cancer（巨蟹座） | `persistent.cancer` |
| 5 | Leo（狮子座） | `persistent.leo` |
| 6 | Virgo（处女座） | `persistent.virgo` |
| 7 | Libra（天秤座） | `persistent.libra` |
| 8 | Scorpio（天蝎座） | `persistent.scorpio` |
| 9 | Sagittarius（射手座） | `persistent.sagittarius` |
| 10 | Capricorn（摩羯座） | `persistent.capricorn` |
| 11 | Aquarius（水瓶座） | `persistent.aquarius` |
| 12 | Pisces（双鱼座） | `persistent.pisces` |

:::

每个 Lore 条目直接读取对应的奖牌持久标记。Path A 结局后的十二枚奖牌检定，统计的也是同一组标记。

因此：

- 不存在独立于奖牌之外的 Lore 收集系统；
- Compendium 定义中不存在额外的角色线或字母线解锁要求；
- 新取得的奖牌即使暂时仍显示为锁定，也可能已经计入 Path P 检定；
- 重启游戏后仍锁定的 Lore，通常说明对应奖牌标记尚未写入。

奖牌位置与推荐收集顺序见[十二枚奖牌收集指南](medals.md)；底层状态和刷新行为见[奖牌持久化与最终检定](../mechanics/medal-persistence.md)。

## 相关页面

- [十二枚奖牌收集指南](medals.md)
- [奖牌持久化与最终检定](../mechanics/medal-persistence.md)
- [字母线系统](../guide/path-system.md)
- [剧情线路总览](../guide/route-overview.md)
