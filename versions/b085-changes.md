---
title: "b0.85 版本主要变化"
description: "Password b0.7 与 b0.85 之间经核验的功能、剧情互动、密码、画廊与图片资源变化"
toc: true
---

本页汇总 *Password* b0.7 与 b0.85 之间主要的玩家可感知变化。

内容依据两版源码对照，以及对相关图片资源的定向检查整理。它不是作者发布的官方更新日志，也不会把 b0.7 的结论自动推广到所有更早版本。

旧密码、旧机制和旧线路的详细实现分别收录在独立档案页中，本页只保留适合作为版本总览的内容。

::: {.callout-important}
## 比较范围

本页只比较 **b0.7 与 b0.85**。

收录范围包括：

- 正常剧情可达性；
- 玩家选择；
- 密码与 persistent；
- 图鉴、画廊和回放；
- 明显的剧情互动重写；
- 已经人工确认的图片资源变化。

普通台词润色、代码重构、调试文件和无玩家影响的残留不在本页展开。
:::

## 主要变化一览

::: {.table-responsive}
| 领域 | b0.85 的主要变化 |
|---|---|
| 图鉴 | 新增现代 Cast Files、Additional Scenes 与 Lore 界面 |
| 追加内容 | 新增七段按顺序解锁的 Epilogue |
| 旧线路分支 | 删除 D6 离开宅邸的 Bad Ending |
| 密码系统 | 移除两个 D7 旧替代输入和完整 D11 可选金库流程 |
| D8 互动 | 用固定对白替代 Oswin 自由文字问答 |
| Dean 相关剧情 | 将多段依赖菜单的互动改写为固定流程 |
| Dean 关系判定 | 修改 D19 门槛，并删除旧中间区间的玩家确认 |
| Path P | 新增强制输入与明确的 true-ending persistent |
| 画廊 | 注册槽位从 104 减少到 100 |
| CG 资源 | 重绘两张 Tyson CG，并删除四张旧 Dean 成人 CG 文件 |
:::

## 现代图鉴

b0.85 新增了正常可访问的现代图鉴，包含三个栏目：

- **CAST FILES**
- **ADDITIONAL SCENES**
- **LORE**

b0.7 源码中虽然存在一个名称相近、未完成且正常流程不可访问的旧 hub，但它并不等同于当前图鉴。

### Lore 与奖牌状态

Lore 栏目中的十二个星座条目，会分别读取十二枚奖牌对应的 persistent 状态。

这使玩家可以在尝试 Path P 前，通过图鉴直接判断还有哪些奖牌相关 Lore 没有解锁。

具体条件见：

- [图鉴解锁索引](../collectibles/compendium.md)
- [十二枚奖牌收集攻略](../collectibles/medals.md)

### Additional Scenes

b0.85 为 Path A 第一次完整流程中的两个片段增加了回放入口：

- `Dave's Demise`
- `Roswell's Attempt`

两项都使用 `persistent.Day23APrime` 作为解锁条件。正常剧情中原有的首次流程 gate 仍然存在；b0.85 新增的是独立回放入口，而不是重新创造这两段剧情。

完整时序见[旧版本机制档案](legacy-mechanics.md)。

## 七段 Epilogue

b0.85 在 Additional Scenes 中新增七段 Epilogue。

第一段会在 true ending 被记录后解锁，之后每完成一段再解锁下一段，形成固定的回放链。

它们不是 Path P 正常流程中自动连续播放的后续章节，而是独立的 Additional Scenes 条目。

当前顺序与解锁状态见[图鉴解锁索引](../collectibles/compendium.md)。

## 已删除或替换的旧机制

### D6 离开宅邸

b0.7 在 D6 后段允许玩家选择：

```text
Stay.
Leave.
```

选择 `Leave.` 会进入终止周目的：`BAD END: OZ`。而 b0.85 删除了正常可达的选择菜单和对应 Bad Ending 剧本。

详见[旧版本线路档案](legacy-routes.md)。

### D7 旧替代输入

b0.7 的 D7 金库还会正式接受 `PEACEKEEPER` 和 `ARBITER`。两者都会进入独立预警场景，但都不会写入通过 D8 主门槛所需的状态。

b0.85 已不再通过正常流程接受这两个输入，当前主门槛答案成为唯一可用于推进 D7 的输入。

它们最准确的分类是**可接受但不推进的替代输入**，而不是程序意义上的“假密码”。

详见[旧版本密码档案](legacy-passwords.md)。

### D8 Oswin 问答

b0.7 有一段可重复输入的自由文字问答，玩家可以自行向 Oswin 提问，并由旧关键词系统匹配回应。

b0.85 删除了输入循环和关键词引擎，改为固定剧情对白。

部分旧话题与状态残留仍在源码中，但当前版本不再提供正常的自由输入界面。

详见[旧版本机制档案](legacy-mechanics.md)。

### D11 可选金库

b0.7 在之后符合条件的 A/B 侧流程中，可以开放一个非强制 D11 金库入口。

成功输入 `METEMPSYCHOSIS` 会改变实验室和之后若干条件对白，但不会改变角色线、字母线或结局。

b0.85 删除了正常入口和完整成功实现，只留下密码字符串、处理 label、变量和部分后续读取。

详见[旧版本密码档案](legacy-passwords.md)。

### D11 注射选择

b0.7 的 Oswin 存活实验室剧情，还存在一次会影响 `DavePride` 的三选一决定。

b0.85 将它改为固定流程：Oswin 从背后给 Dave 注射，之后再说明注射物其实是生理盐水。

这项重写删除了玩家选择，也删除了原本可能取得的 `DavePride` 增量。

详见[旧版本机制档案](legacy-mechanics.md)。

## Dean 与前中期互动重写

全局源码对照发现，b0.7 中有多段 Dean 相关剧情更依赖玩家菜单。

b0.85 保留了许多相同的剧情背景，但将多处互动改写为固定对白和固定事件顺序。

### D3 早餐：Dean 或 Tyson

在 D4 正式选择角色线之前，b0.7 会让玩家选择早餐时坐在谁旁边：

```text
Dean
Tyson
```

选择 Tyson 会进入一段独立且篇幅较长的宅邸探索剧情。

b0.85 删除该菜单和 Tyson 分支，固定进入 Dean 的宅邸介绍流程。

这是一段被移除的前置可选剧情，不是 D4 角色线选择本身发生变化。

### D4—D10 的 Dean 互动

已经确认的例子包括：

- **D4：** Dean 与 Sal 冲突中的玩家选择，以及 Dean Route 的 first-aid 分支被删除；
- **D5：** 初次见面回忆从多个小选择改为线性叙述；
- **D6：** 蘑菇问答与迷路后的等待／寻找选择被删除；
- **D9：** kiss／change-subject 菜单被删除；
- **D10：** 可循环询问四名嫌疑人的调查菜单被固定对白替代。

这些改动减少了可选角色信息和玩家控制，也改变了部分 Dean 好感点的获得方式。

它们并没有重新构建 A–G 字母线拓扑。

### D19 关系判定

Dean 的 D19 关系判定发生了明确机制变化：

::: {.table-responsive .table-scroll-compact}
| 版本 | D19 结果 |
|---|---|
| b0.7 | `bearlove >= 20`：自动建立关系；`10–19`：玩家自行接受或拒绝；`< 10`：拒绝 |
| b0.85 | `bearlove >= 10`：自动建立关系；`< 10`：拒绝 |
:::

因此，b0.85：

- 将自动建立关系的门槛从 20 降至 10；
- 删除旧版 10–19 区间中的玩家确认；
- 只要当前 `bearlove >= 10`，就会自动把 Dean 设为 Dave 的男友。

这是关系控制机制变化，不是字母线变化。

## Path P 的新增内容

Path P 的核心入口结构在 b0.7 中已经存在：

```text
PATH A: END
→ 检查十二个 persistent 奖牌标记
→ currentPath = "P"
→ 进入最终流程
```

b0.85 保留该结构，并在 Path P 后段加入新的实现。

### 强制最终输入

b0.85 在 Path P 中新增一次独立自由文字输入。

答案会在此前对白中直接给出定义，错误输入会循环返回输入框。

b0.7 在同一阶段没有对应的玩家输入 label。

当前提示见[密码分级提示](../guide/password-hints.md)。

### 金库键盘操作者变化

b0.7 中，由 Florencia 操作金库键盘，之后 Oswin 再进一步打开金库。

b0.85 中，Dave 完成新增输入，并亲自触发开启互动。因此，金库键盘操作者从 **Florencia 改为 Dave**。

### True-ending persistent

b0.85 在最终结尾附近写入：

```renpy
persistent.FirstEnding = True
persistent.true_end = True
```

其中明确的 `true_end` 状态会被现代图鉴和 Epilogue 解锁链使用。

源码没有显示正式的 `PATH P: END` 标题，也没有正式把字母 `P` 展开为某个完整单词。

## 画廊注册：104 减少到 100

b0.7 的脚本注册了 104 个 Gallery 槽位，b0.85 则注册 100 个。

准确原因是：

::: {.table-responsive .table-scroll-compact}
| 注册变化 | 槽位变化 |
|---|---:|
| `deanlove` 从正常 Dean Gallery 列表中移除 | −1 |
| `daveflashlight1` 从 Dave 列表移除，但仍保留在 Misc | −1 个重复槽位 |
| `daveflashlight2` 从 Dave 列表移除，但仍保留在 Misc | −1 个重复槽位 |
| `daveflashlight3` 从 Dave 列表移除，但仍保留在 Misc | −1 个重复槽位 |
| **合计** | **−4** |
:::

三张 flashlight 图片仍可通过 Misc 注册解锁。它们从 Dave 列表中移除，只是删除重复按钮，并不是删除图片。

`deanlove` 的 image definition 在 b0.85 仍然存在，但已经没有正常剧情调用，也不再注册为 Gallery 条目。唯一保留的显示调用位于不可正常进入的 CG dump 中。

四张旧 Dean 成人 CG **不是** 画廊从 104 减少到 100 的原因。它们在两个版本中都没有被注册进正常 Gallery 数组。

当前 100 格结构见[CG 画廊查漏索引](../collectibles/gallery.md)。

## CG 与资源变化

### 两张 Tyson CG 重绘

以下两张 Tyson 相关 CG 在 b0.7 与 b0.85 之间被完整重绘：

- `tysondrive`
- `tysonmovie`

新版改变了整体构图、人物位置、镜头距离、背景处理和线稿与上色方式。其中 driving CG 会出现在若干 D5/D6 Bad Ending 后续场景；movie CG 位于 Tyson Route 的 D6。

### 四张旧 Dean 成人 CG

b0.7 的 `images/CG` 资源中存在四张旧 Dean 成人 CG，并且它们在 D7 和 D9 的正常剧情中实际显示。

b0.85 中：

- 正常剧情调用被删除；
- 对应 image definitions 被删除；
- 实际 PNG 文件也已从游戏资源中移除。

尽管这些图片在 b0.7 的正常剧情中使用，它们在两个版本中都没有计入 Gallery 总数。

## 存档界面

角色线对应的存档槽颜色与角色头像，在 b0.7 中已经存在，并不是 b0.85 新功能。

b0.85 可以确认的可见变化，是存活状态显示：

- b0.7 使用通用状态框；
- b0.85 改为每名角色独立的 alive/dead 像素图标。

存档槽头像仍然表示 D4 选择的角色线，而不是当前字母线。

## 其他已确认变化

### Tyson 的 `Stripes` 称呼

b0.85 更广泛地让 Tyson 使用 `Stripes` 作为 Dave 的固定昵称。

对白语境明确把该称呼与 Dave 的条纹外貌联系起来。这属于角色对白和称呼习惯变化，不是线路机制。

### D1 `THE END` 输入

D1 彩蛋输入 `THE END` 在两个版本中都会退出游戏。

b0.85 在调用 `renpy.quit` 前，还会把以下状态赋值为 `False`：

- `persistent.true_end`；
- Path A–G 对应的 persistent ending 标记。

b0.7 会直接调用退出，不包含这些赋值。

该行为主要记录在当前[彩蛋与隐藏输入](../extras/easter-eggs.md)中，因为它可能影响结局完成记录。

## 如何识别旧版攻略

如果一份攻略要求玩家：

- D3 早餐选择 Dean 或 Tyson；
- D6 离开宅邸；
- D7 输入 `PEACEKEEPER` 或 `ARBITER`；
- D8 自由向 Oswin 输入问题；
- D11 再次进入金库并输入 `METEMPSYCHOSIS`；
- D11 选择谁接受注射；
- 在 `bearlove` 为 10–19 时自行决定是否与 Dean 建立关系；
- 解锁一个 104 格 Gallery；

那么它很可能描述的是 b0.7，而不是 b0.85。

当前路线、密码、图鉴和收集要求请以 b0.85 页面为准。

## 相关页面

- [角色线与字母线总览](../guide/route-overview.md)
- [密码分级提示](../guide/password-hints.md)
- [图鉴解锁索引](../collectibles/compendium.md)
- [旧版本线路档案](legacy-routes.md)
- [旧版本密码档案](legacy-passwords.md)
- [旧版本机制档案](legacy-mechanics.md)
