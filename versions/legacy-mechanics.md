---
title: "旧版本机制档案"
description: "Password b0.7 中 Path A 的持久状态、D8 Oswin 自由问答，以及后来被移除或重组的机制"
toc: true
---

本页记录 *Password* b0.7 中存在、并在 b0.85 被移除、替换或重新组织的若干机制。

主要包括：

- Path A 后段只在首次正常流程完整播放的 `persistent` 控制机制；
- b0.85 中对应的 Additional Scenes 回放；
- b0.7 的 D8 Oswin 自由文字问答；
- b0.85 删除的 D11 实验室选择。

::: {.callout-warning}
## 源码残留不等于当前仍可使用

旧变量、label、密码字符串或条件判断仍留在源码中，并不能证明相应机制在 b0.85 仍然可用。

一个当前可玩的入口至少还需要：

1. 正常剧情或界面入口；
2. 可到达的目标 label；
3. 正常流程能够写入的状态；
4. 当前界面或剧情仍会读取该状态。

本页中的若干旧机制只留下了部分代码，并不存在完整可玩的当前路径。
:::

## Path A 首次流程 gate

b0.7 与 b0.85 都使用 `persistent.Day23APrime` 来区分 Path A 后段的第一次正常流程与之后的重复流程。

这是跨存档共享的 `persistent` 变量，而不是普通存档变量。它会在不同角色线和存档槽之间共享。

### 第一次正常流程

真实控制流是：

```text
进入 Path A 后段
→ 播放第一段 Dave 剧情
→ 继续进入 Roswell 段落
→ 写入 persistent.Day23APrime = True
→ 在同一次流程中立即继续进入 Day23A_Prime
```

因此，第一次流程并不会在写入 persistent 后结束。后面的 `Day23A_Prime` 内容会直接接在同一次长流程后继续播放。

**Dave's Demise** 与 **Roswell's Attempt** 这两个名称，是 b0.85 的 Additional Scenes 界面后来赋予两段旧剧情的标题。它们在 b0.7 中并不是两个独立菜单选择。

### 之后的正常流程

后续再次进入符合条件的 Path A 后段时：

```text
播放共同开场
→ persistent.Day23APrime 已为 True
→ 直接跳转至 Day23A_Prime
```

第一次流程中的两段内容会被跳过。

单纯开始 New Game 不会重置这个 persistent。只有重置或删除游戏的 persistent data，才会恢复默认的首次流程状态。

### 读取旧存档

结果取决于存档位置：

- 读取在 persistent dispatcher **之前**保存的存档时，游戏会重新读取当前跨存档共享的状态，因此可能直接跳过首次段落；
- 读取已经位于首次段落**内部**的存档时，该次流程早已通过 dispatcher，可以从保存位置继续。

因此，普通存档槽并不是一份完全独立的首次解锁状态副本。

## b0.85 的 Additional Scenes

b0.85 在 Compendium 的 **Additional Scenes** 中加入了两个对应条目：

1. `Dave's Demise`
2. `Roswell's Attempt`

两项都使用：

`persistent.Day23APrime` 作为解锁条件，因此通常会一起解锁。当前列表位置和解锁排查见[图鉴解锁索引](../collectibles/compendium.md)。

### 回放只是有边界的剧情片段

两个条目复用了原有剧情 label，但并不等同于重新播放完整的正常 Path A 流程。

`Dave's Demise`：

- 在 replay 中绕过正常的 persistent 跳过逻辑；
- 强制设置进入目标段所需的状态；
- 在正常流程转入 Roswell 段落之前结束。

`Roswell's Attempt`：

- 直接从 Roswell 段落开始；
- 在正常流程写入 persistent 以及继续进入 `Day23A_Prime` 之前结束。

这些 replay 仍可能显示已注册的 Gallery 图片，也会执行其回放范围内的变量赋值。因此，它们更准确地说是**从原剧情 label 中截取出的带边界回放段落**，而不是独立视频，也不是对整个正常流程的完整复制。

## D8 Oswin 自由文字问答

b0.7 在 D8 有一段正常可达的 Oswin 对话，玩家可以自行输入问题。

它的结构是一个由菜单控制的自由文字循环：

```text
Question.
→ 输入问题
→ 按关键词匹配
→ 显示回应
→ 返回问题菜单

Stay Silent.
→ 退出问答
```

提问次数没有固定上限。空输入会被单独处理；连续三次没有匹配到任何回应后，游戏会显示帮助提示，并重置未匹配次数。

### 这段问答会影响什么

旧系统会写入三个普通变量：

::: {.table-responsive}
| 变量 | 作用 |
|---|---|
| `OzPast1` | 记录一项家族历史信息 |
| `OzPast2` | 记录故事或兔子相关信息 |
| `OzWrong` | 记录未匹配输入次数 |
:::

它不会直接设置：

- 角色线或字母线；
- 奖牌；
- 主要结局；
- 主金库密码成功状态。

因此，这段问答不是通关所必需的机制。

但 `OzPast1` 和 `OzPast2` 会在之后若干天的对白中被读取，所以部分回答会改变后续文本。

## 旧 parser 如何识别输入

这套系统通常不要求玩家逐字输入某个固定完整句子。

它会：

1. 把输入转换为小写；
2. 删除一组固定 ASCII 标点；
3. 检查若干组必需关键词；
4. 接受同一组中的任意同义词；
5. 对单词使用完整 token 匹配；
6. 对多词短语使用文字 substring 匹配。

所有必需关键词组都需要命中，但各组之间通常不要求固定顺序。额外单词多数情况下不会妨碍匹配。

### 重要边界

::: {.table-responsive .table-scroll-compact}
| 输入特征 | 实际行为 |
|---|---|
| 大小写 | 会统一转为小写，因此不敏感 |
| 开头或结尾空格 | 源码不会主动 trim，但许多输入仍可匹配 |
| 常见 ASCII 标点 | 固定列表内的标点会被移除 |
| 撇号和连字符 | 不在该删除列表中 |
| Unicode 标点 | 不会被统一处理 |
| 多个连续空格 | 可能破坏多词 substring |
| 关键词组顺序 | 通常不作强制要求 |
| 旧清单中的 `/` | 只是编辑分隔符，没有 parser 含义 |
:::

源码按分支出现顺序进行判断。较早出现的宽泛条件可能会先拦截输入，使后面的更具体分支无法触发。

## 兔子回应的状态变化

兔子相关互动依赖普通变量状态，但第二次输入并不要求精确写成 `what rabbit`。

玩家先触发兔子、野兔或故事相关回应后，可能写入 `OzPast2`。之后再次输入兔子相关内容，便会因为状态已经改变而得到后续版本的回应。

关键是此前已经写入的普通变量，而不是必须按固定顺序输入两条完整句子。

## 可以直接尝试的对话

下面的句子适合玩家直接输入。它们只是可靠示例，并不是每个话题唯一允许的写法。

大小写不影响结果。每次只输入一句，并保留 `hidden camera` 等短语中的空格。

部分例句会显得较简略或不完全符合自然英语，这是因为这种写法能更稳定地命中旧版关键词系统。

<details>
<summary><strong>展开可尝试的对话表</strong></summary>

<div class="table-responsive table-scroll-wide oswin-dialogue-table">

| 话题 | 可以尝试的输入 | Oswin 可能谈到的内容 |
|---|---|---|
| Dave 与 Oswin | `who am i` · `who are you` | 两人的身份以及 Dave 当前的处境 |
| 家庭 | `can i call you dad` · `did you want a family` | Oswin 对家庭和父职的看法 |
| 友好互动 | `can i hug you` · `can i tickle you` · `can i thank you` | 较轻松或私人化的回应 |
| 小玩笑 | `boop snoot` · `am i a good boy` | 简短角色反应 |
| 故事 | `story` · `can you tell me a story` | Oswin 的故事及相关背景 |
| 兔子后续 | `rabbit` | 之后再次询问可能得到不同回应 |
| 偏好 | `tea or coffee which do you like better` | Oswin 对饮品的偏好 |
| 一般彩蛋 | `what is love` · `got any grapes` · `do you like waffles` · `buhi` | 玩笑和引用类回应 |
| 凶手 | `who want to kill us` · `who try to kill us` | 目前威胁众人的对象 |
| 毒药 | `poison` · `did you poison dean` · `you know how to poison` | 中毒事件及 Oswin 对毒物的了解 |
| 手枪 | `gun` · `where gun` · `who has gun` · `who hide gun` | 手枪的位置、持有者和藏匿情况 |
| 匕首 | `dagger` · `where did you get dagger` | 匕首及其来源 |
| 紧急方案 | `call police` · `what if we die` | 报警、死亡以及众人的处境 |
| 监控 | `hidden camera` · `is camera still working` · `soundproof` | 摄像头、盲区、记录与隔音 |
| 信任 | `can i trust hoss` · `can i trust dean` · `can i trust you` · `can you trust me` | Dave 或 Oswin 是否信任某人 |
| Oswin 的家人 | `are you roswell's father` · `who is your brother` · `what is your sister's name` | Oswin 的亲属以及他与 Roswell 的关系 |
| 科学与研究 | `why you become a doctor` · `what is morphic resonance` · `mycology` · `you know deathcaps` | 医学、真菌、实验和形态共振 |
| Benson | `benson` · `where is benson` · `benson old job` · `benson and vault` | Benson 的身份、经历、位置与金库关系 |
| 金库 | `vault` · `who used vault` · `can you open vault` | 金库的用途和使用者 |
| 森林 | `forest` · `someone else in woods` · `cabin in woods` · `what mushrooms in woods` | 宅邸周边森林、其他居民、木屋和蘑菇 |
| 隐藏区域 | `hidden room` · `hidden path` · `safest room` | 宅邸附近的秘密或安全地点 |
| 实验室 | `where lab` · `where study` · `how you program` | Oswin 的实验室和技术工作 |
| 奖牌 | `medals` · `where medals` · `how many medals are there` · `who hid medals` | 奖牌数量、位置和放置者 |
| Hoss 的记录 | `hoss list` · `marked` | Hoss 的清单和被标记的奖牌 |
| 其他角色 | `did you meet my friends` · `have you met hoss` · `what did tyson do` | Oswin 对 Dave 同伴的了解 |

</div>

部分话题有不止一种回应，少数回答也会受到此前提问状态影响。

这张表不是完整输入总表，但其中每一句都用于实际尝试，而不是单纯描述 parser 内部规则。旧清单中重复、无法稳定触发或会进入错误回应的项目没有继续收录。

</details>

## b0.85 如何替代这段机制

b0.85 删除了 D8 自由输入引擎，并用固定剧情对白替代原场景。

这并不意味着所有旧主题和所有旧文本都被完全删除：

- 固定对白复用了部分旧话题；
- 某些旧普通变量和后续条件判断仍留在源码；
- 但正常输入菜单、`renpy.input` 循环、关键词引擎和旧回应 labels 已不再向玩家开放。

目前没有证据表明整套旧问答被系统性迁移到 Cast Files、Lore 或 Additional Scenes。

## D11 实验室选择

b0.7 的 Oswin 存活 D11 实验室流程还有一个独立的三选一决定：

::: {.table-responsive}
| b0.7 选择 | 立即效果 |
|---|---|
| `Inject me.` | 不增加 `DavePride` |
| `Inject him.` | `DavePride += 1` |
| `Don't inject.` | `DavePride += 2` |
:::

这与[旧版本密码档案](legacy-passwords.md)中的 D11 可选金库不是同一机制。

b0.85 删除了这个菜单。当前剧情固定为 Oswin 从背后给 Dave 注射，之后再说明注射物其实是生理盐水。

这项改动：

- 删除了一次正常玩家选择；
- 删除了两种可能的 `DavePride` 增量；
- 固定了实验室段落的事件顺序与结果。

它不会直接设置角色线、字母线或结局。

## 相关页面

- [旧版本密码档案](legacy-passwords.md)
- [旧版本线路档案](legacy-routes.md)
- [b0.85 版本主要变化](b085-changes.md)
