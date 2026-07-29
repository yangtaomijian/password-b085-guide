---
title: "Compendium 解锁索引"
description: "Password b0.85 Cast Files、Additional Scenes 与 Lore 的解锁条件和查漏方法"
toc: true
---

《Password》b0.85 的 Compendium 固定分为三个部分：

| 部分 | 数量 | 内容 |
|---|---:|---|
| Cast Files | 16 | 角色档案 |
| Additional Scenes | 9 | 可直接启动的附加回放 |
| Lore | 12 | 十二枚星座奖牌的说明 |
| **合计** | **37** | — |

未解锁条目不会从界面中消失，而是继续占据固定位置，并显示为 `?????`。因此，玩家可以根据所属部分和顺序直接定位缺失条目。

所有 Compendium 条目都依赖 `persistent` 持久变量，能够跨普通存档和周目累计。

::: {.callout-important}
## 三类条目的区别

- **Cast Files：**在特定剧情节点写入角色档案变量；
- **Additional Scenes：**满足前置条件后开放回放按钮，部分回放还必须按固定顺序完成；
- **Lore：**直接读取十二枚奖牌的持久变量，与 Path P 的奖牌检定完全共用同一套状态。
:::

## Cast Files

### 游戏内顺序与解锁条件

| 顺序 | 档案 | 解锁变量 | 主要解锁条件 |
|---:|---|---|---|
| 1 | Dave | `persistent.dave_lore` | D14 A／B 公共剧情，Dave 回忆父亲死亡当日 |
| 2 | Tyson | `persistent.tyson_lore` | Tyson 线 D15，谈及父亲和成长经历 |
| 3 | Roswell | `persistent.roswell_lore` | Roswell 线 D18，Roswell 表白并透露自己的身体状况 |
| 4 | Orlando | `persistent.orlando_lore` | D15 Memphis／Noble 家族说明场景 |
| 5 | Hoss | `persistent.hoss_lore` | 最早可在 D3 选择与 Hoss 交谈时解锁 |
| 6 | Sal | `persistent.sal_lore` | Sal 线 D10 或 D15，讲述 Abi 的经历 |
| 7 | Dean | `persistent.dean_lore` | Dean 线 D11，讲述前男友和校园欺凌经历 |
| 8 | Benson | `persistent.benson_lore` | Path A Redux 后段，Benson 替 Roswell 挡枪 |
| 9 | Thanatos | `persistent.thanatos_lore` | D23 A Redux；奖牌不足时 D24 另有补写入口 |
| 10 | Thanatos – Part 2 | `persistent.true_end` | 收齐十二枚奖牌并完成完整 Path P |
| 11 | Memphis | `persistent.memphis_lore` | Path C D13，Oswin 说明 Memphis Noble 的身份 |
| 12 | Dominic | `persistent.dominic_lore` | Path A Redux 中 Dominic 与 Jack 提出交易 |
| 13 | Jack | `persistent.jack_lore` | 与 Dominic 在同一段剧情中同时解锁 |
| 14 | Florencia | `persistent.florencia_lore` | Path D、G、A 或 B 的任一对应后期场景 |
| 15 | David | `persistent.david_lore` | 与 Dave 档案相同的 D14 父亲死亡回忆 |
| 16 | Hoyt | `persistent.hoyt_lore` | D14 回忆中，Hoyt 向 Dave 告知父亲死亡 |

### Dave、David 与 Hoyt

这三个档案都在 D14 A／B 的同一段公共回忆中解锁。

正常完整观看该段剧情时，玩家会连续获得：

1. Hoyt；
2. Dave；
3. David。

它们不要求特定角色线或好感度。

### Orlando

Orlando 档案在 D15 有两套入口。

| D15 状态 | 解锁条件 |
|---|---|
| Oswin 存活 | 要求当前为 Orlando 角色线 |
| Oswin 已死 | 不限角色线，在 Benson 的公共说明场景中解锁 |

Oswin 已死版本中，角色线判断只改变 Dave 是否已经了解 Orlando 的家族背景。真正的档案写入位于角色线判断之外。

因此，在该分支中，即使玩家选择的是 Dean、Tyson、Roswell、Hoss 或 Sal，也会解锁 Orlando 档案。

### Hoss

Hoss 档案的游戏内提示并不完全准确。

最早的解锁方法是：

- D3 清晨选择与 Hoss 交谈；
- 听他讲述真人秀 `Clearwater` 和宅邸的往事。

此时 D4 的角色线尚未选择，因此**不要求进入 Hoss 路线**。

D8 隐藏图书馆剧情中还会再次写入 Hoss 档案。该写入也位于 Hoss 路线和好感度亲吻判断之前，可以作为补充入口。

### Sal

Sal 档案有两个互补入口，均要求 Sal 角色线：

| 条件 | 解锁时间 |
|---|---|
| D10 正确输入第三个关键密码 | D10，Sal 讲述 Abi 的经历 |
| D10 没有正确输入该密码 | D15，由后续谈话补充讲述并解锁 |

因此，正常完成 Sal 角色线时，档案不会因为 D10 密码检定失败而永久错过。

### Thanatos

Thanatos 档案主要在 D23 A Redux 的时间循环剧情中解锁。

另有一个补写入口：

- 到达 D24 End of Time；
- 奖牌不足十二枚；
- Thanatos 提示玩家仍有内容尚未发现。

正常情况下，玩家在此前的 D23 Redux 已经获得该档案。

### Thanatos – Part 2

该条目并不是普通结局奖励，而是直接读取：

```renpy
persistent.true_end
```

需要：

1. 收齐十二枚奖牌；
2. 通过 Path A 的最终检定；
3. 进入完整 Prime／Path P 流程；
4. 推进至最终海滩结局。

只有真正完成 True End 后才会解锁。

### Dominic 与 Jack

Dominic 和 Jack 在 Path A Redux 的同一段剧情中同时解锁。

当 Dominic 前来提出交易，Dave 明确指出两人的关系后，游戏连续写入：

```renpy
persistent.dominic_lore = True
persistent.jack_lore = True
```

Jack 没有另一段独立的专属解锁剧情。

### Oswin 为什么不在 Cast Files 中？

代码中存在：

```renpy
persistent.oswin_lore
```

D23 A Redux 中也确实会将其设为 `True`。

但是，Compendium 中的 Oswin 条目被注释掉，没有实际显示在界面中。

因此：

- 当前游戏内只有 16 个可见 Cast Files；
- Oswin 不占据其中任何一个槽位；
- 即使 `persistent.oswin_lore == True`，玩家也不会看到 Oswin 档案；
- 查漏时不应把 Oswin 计入 Cast Files 总数。

## Additional Scenes

Additional Scenes 不是文字档案。解锁后，点击按钮会通过 Ren'Py `Replay()` 启动对应的剧情回放。

### 游戏内顺序

| 顺序 | 场景 | 回放标签 | 解锁条件 |
|---:|---|---|---|
| 1 | Dave's Demise | `Day23AStart` | `persistent.Day23APrime` |
| 2 | Roswell's Attempt | `Day23A_R` | `persistent.Day23APrime` |
| 3 | Tyson Epilogue | `Tyson_Encore` | True End，并已解锁 Tyson 档案 |
| 4 | Dean Epilogue | `Dean_Encore` | 完成 Tyson Epilogue，并已解锁 Dean 档案 |
| 5 | Orlando Epilogue | `Orlando_Encore` | 完成 Dean Epilogue，并已解锁 Orlando 档案 |
| 6 | Sal Epilogue | `Sal_Encore` | 完成 Orlando Epilogue，并已解锁 Sal 档案 |
| 7 | Hoss Epilogue | `Hoss_Encore` | 完成 Sal Epilogue，并已解锁 Hoss 档案 |
| 8 | Dave Epilogue | `Dave_Encore` | 完成 Hoss Epilogue |
| 9 | Roswell Epilogue | `Roswell_Encore` | 完成 Dave Epilogue |

### Dave's Demise 与 Roswell's Attempt

前两项共享同一个解锁变量：

```renpy
persistent.Day23APrime
```

因此，它们正常情况下会同时开放，不是两个需要分别收集的独立条件。

如果一项已经开放、另一项仍然显示为 `?????`，更可能是版本或持久数据异常。

### Epilogue 的固定顺序

七段 Epilogue 按上表顺序线性解锁，不能跳过。前五段还要求对应角色的 Cast File；Dave 和 Roswell Epilogue 不再检查额外档案。

### 必须完整播放回放

解锁下一项所需的完成变量，不是在点击回放按钮时立即写入，而是在对应回放接近结尾时设置。

| 回放 | 完成变量 |
|---|---|
| Tyson Epilogue | `persistent.Tyson_Encore_Complete` |
| Dean Epilogue | `persistent.Dean_Encore_Complete` |
| Orlando Epilogue | `persistent.Orlando_Encore_Complete` |
| Sal Epilogue | `persistent.Sal_Encore_Complete` |
| Hoss Epilogue | `persistent.Hoss_Encore_Complete` |
| Dave Epilogue | `persistent.Dave_Encore_Complete` |
| Roswell Epilogue | `persistent.Roswell_Encore_Complete` |

如果玩家在回放中途退出，完成变量可能尚未写入，下一项也就不会开放。

::: {.callout-warning}
## True End 后仍然卡在 `?????`

优先检查：

1. 上一个 Epilogue 是否真正播放到结尾；
2. 当前角色对应的 Cast File 是否已经解锁；
3. 是否只是点击过回放，但在完成变量写入前退出；
4. 是否正在使用旧版本或迁移后的异常持久数据。
:::

## Lore

Lore 共十二项，按照标准黄道顺序排列：

| 顺序 | Lore | 解锁变量 |
|---:|---|---|
| 1 | 白羊座 Aries | `persistent.aries` |
| 2 | 金牛座 Taurus | `persistent.taurus` |
| 3 | 双子座 Gemini | `persistent.gemini` |
| 4 | 巨蟹座 Cancer | `persistent.cancer` |
| 5 | 狮子座 Leo | `persistent.leo` |
| 6 | 处女座 Virgo | `persistent.virgo` |
| 7 | 天秤座 Libra | `persistent.libra` |
| 8 | 天蝎座 Scorpio | `persistent.scorpio` |
| 9 | 射手座 Sagittarius | `persistent.sagittarius` |
| 10 | 摩羯座 Capricorn | `persistent.capricorn` |
| 11 | 水瓶座 Aquarius | `persistent.aquarius` |
| 12 | 双鱼座 Pisces | `persistent.pisces` |

这些变量与十二枚奖牌完全一一对应。

### 与 Path P 的关系

Compendium Lore 和 Path P 读取的是**同一组持久变量**。

关系可以直接概括为：

- 某个 `persistent.xxx == True`：对应 Lore 解锁；
- 十二个奖牌变量全部为 `True`：Path P 检定通过；
- 不存在另一套独立的 Lore 收集状态；
- 不存在 Lore 已解锁但 Path P 不承认该奖牌的正常设计。

因此，Lore 缺哪一项，就表示 Path P 检定也缺对应奖牌。

详细奖牌路线见[十二枚奖牌收集指南](medals.md)。

## 相关页面

- [十二枚奖牌收集指南](medals.md)
- [奖牌持久化与最终检定](../mechanics/medal-persistence.md)
- [CG 画廊查漏索引](gallery.md)
- [字母线系统](../guide/path-system.md)
