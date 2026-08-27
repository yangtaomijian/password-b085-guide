---
title: "后记解锁索引"
description: "Password b0.85 全部角色档案、追加场景与背景资料的解锁条件和排错方法"
toc: true
---

《Password》b0.85 的后记固定分为三个部分：

::: {.compendium-summary-table .table-responsive}

| 部分 | 数量 | 内容 |
|---|---:|---|
| 角色档案 | 16 | 角色资料 |
| 追加场景 | 9 | 可重复播放的剧情场景 |
| 背景资料 | 12 | 十二枚星座奖牌条目 |
| **合计** | **37** | — |

:::

游戏设置首次结局标记后，后记按钮才会出现在**主菜单**。正常游戏流程中的导航菜单不会提供该入口。

未解锁条目仍会保留在固定位置，并显示为 `?????`，因此可以根据所属部分和列表顺序定位缺失项目。

::: {.callout-important}
## 解锁会持久保存，但界面可能延迟刷新

角色档案、追加场景和背景资料都由持久标记控制，但游戏不会在保持开启的情况下实时刷新所有后记条目。

因此，新取得的条目即使已经写入持久状态，仍可能暂时显示为 `?????`。只关闭并重新打开后记也不一定会刷新。

在把缺失条目判断为收集条件问题之前，请先完整重启游戏。
:::

## 角色档案

### 解锁索引

::: {.compendium-cast-table .table-responsive .table-scroll-medium}

| 顺序 | 角色档案 | 记录条件 | 主要解锁途径 |
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

三个档案都会在 D14 A/B 的同一段回忆中解锁。

到达该回忆后，不要求特定角色线或好感度。

### Orlando

Orlando 档案在 D15 有两种条件：

::: {.oswin-state-table .table-responsive}

| Oswin 状态 | 解锁条件 |
|---|---|
| Oswin 存活 | 要求当前为 Orlando 线 |
| Oswin 已死亡 | 任意角色线都会在公共会议中解锁 |

:::

游戏内锁定提示只提到 Orlando 线，因此不会显示第二种方法。

### Hoss

最早的解锁方法是 D3 的可选对话：

```text
Message...? → Hoss
```

此时尚未进行 D4 搭档选择，因此不要求 Hoss 线。

D8 的可选隐藏图书馆剧情也能解锁同一档案。该补充方法同样不要求 Hoss 线，但玩家必须进入对应的图书馆分支。

### Sal

D10 正确完成密码检定时，相关场景会解锁 Sal 的角色档案，**不要求当前为 Sal 线**。

如果玩家选择 Sal 线但在 D10 没有完成密码，D15 的 Sal 对话仍会补充解锁，因此不会永久错过该档案。

### Thanatos 与 Thanatos - Part 2

普通 Thanatos 档案会在 Path A 后期的时间循环剧情中解锁。十二枚奖牌不足时，最终检定附近还有一次补充解锁机会，但正常情况下此前已经取得。

`Thanatos - Part 2` 会在完整完成 Path P 后解锁。

### Dominic 与 Jack

Dominic 和 Jack 会在 Path A 后期的同一次会面中连续解锁。Jack 没有另一段独立的专属解锁场景。

### Florencia

Florencia 有多个替代解锁点：

- Path D 结局；
- Path G 结局；
- Path A 结局流程；
- Path B 结局流程。

最早可以通过 Path D 结局取得。Path C、E 和 F 不会解锁该档案。

<details id="oswin-为什么不在-cast-files-中">
<summary><strong>为什么列表中没有 Oswin？</strong></summary>

b0.85 的角色档案列表没有可见的 Oswin 条目。即使 Path A 后期已经记录了与他有关的进度，后记中也不会出现新的档案槽位，因此可见总数始终是 16。这不是漏收项目。
</details>

## 追加场景

### 固定顺序与解锁条件

::: {.additional-scenes-table .table-responsive .table-scroll-compact}

| 顺序 | 追加场景 | 解锁条件 |
|---:|---|---|
| 1 | Dave's Demise | `persistent.Day23APrime` |
| 2 | Roswell's Attempt | `persistent.Day23APrime` |
| 3 | Tyson Epilogue（后日谈） | 完成 Path P，并解锁 Tyson 的角色档案 |
| 4 | Dean Epilogue（后日谈） | 完成 Tyson 后日谈，并解锁 Dean 的角色档案 |
| 5 | Orlando Epilogue（后日谈） | 完成 Dean 后日谈，并解锁 Orlando 的角色档案 |
| 6 | Sal Epilogue（后日谈） | 完成 Orlando 后日谈，并解锁 Sal 的角色档案 |
| 7 | Hoss Epilogue（后日谈） | 完成 Sal 后日谈，并解锁 Hoss 的角色档案 |
| 8 | Dave Epilogue（后日谈） | 完成 Hoss 后日谈 |
| 9 | Roswell Epilogue（后日谈） | 完成 Dave 后日谈 |

:::

### Dave's Demise 与 Roswell's Attempt

前两个场景共享同一个持久条件，正常情况下会一起开放。

它们不属于后面七段后日谈的完成链，也不需要先完成其中一个才能解锁另一个。

### 后日谈的固定依赖链

七段后日谈只能按固定顺序解锁：

```text
Tyson
→ Dean
→ Orlando
→ Sal
→ Hoss
→ Dave
→ Roswell
```

前五段角色后日谈还要求相应的角色档案：

| 后日谈 | 需要的角色档案 |
|---|---|
| Tyson 后日谈 | Tyson |
| Dean 后日谈 | Dean |
| Orlando 后日谈 | Orlando |
| Sal 后日谈 | Sal |
| Hoss 后日谈 | Hoss |
| Dave 后日谈 | 无 |
| Roswell 后日谈 | 无 |

只有 Tyson 后日谈会直接要求完成 Path P；后面的场景则要求上一段后日谈已经完整播放。

### 每段后日谈都必须接近播放完毕

游戏只会在当前回放接近结尾时，才把这一段计为完成。

如果过早使用 **End Replay（结束回放）** 退出，下一段不会解锁。仅仅打开回放，或只观看其中一部分，都不足以推进解锁链。

即使已经完整播放，下一项也可能要到重启游戏后才显示。因此，在仅仅因为下一项仍是 `?????` 而重播上一段之前，应先重启游戏。

::: {.callout-warning}
## 后日谈解锁链卡在 `?????`

请依次检查：

1. 上一段后日谈是否真正播放到结尾，而不是通过 **End Replay** 中途退出；
2. Dean 至 Hoss 的对应角色档案是否已经解锁；
3. Tyson 后日谈是否已经通过“完成 Path P + 解锁 Tyson 档案”获得；
4. 最近一次取得解锁或完成标记后，是否重启过游戏；
5. 持久数据是否来自旧版本安装，或设备迁移是否不完整。
:::

## 背景资料

背景资料部分包含十二个星座条目，按照传统黄道顺序排列：

::: {.compendium-lore-table .table-responsive .table-scroll-compact}

| 顺序 | 星座 | 持久标记 |
|---:|---|---|
| 1 | 白羊座 | `persistent.aries` |
| 2 | 金牛座 | `persistent.taurus` |
| 3 | 双子座 | `persistent.gemini` |
| 4 | 巨蟹座 | `persistent.cancer` |
| 5 | 狮子座 | `persistent.leo` |
| 6 | 处女座 | `persistent.virgo` |
| 7 | 天秤座 | `persistent.libra` |
| 8 | 天蝎座 | `persistent.scorpio` |
| 9 | 射手座 | `persistent.sagittarius` |
| 10 | 摩羯座 | `persistent.capricorn` |
| 11 | 水瓶座 | `persistent.aquarius` |
| 12 | 双鱼座 | `persistent.pisces` |

:::

每个背景资料条目直接读取对应的奖牌持久标记。Path A 结局后的十二枚奖牌检定，统计的也是同一组标记。

因此：

- 不存在独立于奖牌之外的背景资料收集系统；
- 后记中不存在额外的角色线或字母线解锁要求；
- 新取得的奖牌即使暂时仍显示为锁定，也可能已经计入 Path P 检定；
- 重启游戏后仍锁定的背景资料，通常说明对应奖牌标记尚未写入。

奖牌位置与推荐收集顺序见[十二枚奖牌收集指南](medals.md)；记录方式和刷新行为见[奖牌持久化与最终检定](../mechanics/medal-persistence.md)。

## 相关页面

- [十二枚奖牌收集指南](medals.md)
- [奖牌持久化与最终检定](../mechanics/medal-persistence.md)
- [字母线系统](../guide/path-system.md)
- [剧情线路总览](../guide/route-overview.md)
