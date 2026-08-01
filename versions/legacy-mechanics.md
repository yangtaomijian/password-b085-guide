---
title: "旧版本机制档案"
description: "Password b0.7 及更早版本中的一次性剧情、Oswin 问答与失效代码残留"
toc: true
---

本页归档 b0.7 及更早版本中已经被 b0.85 删除、替换或重新组织的机制，重点包括 Path A 一次性剧情与 D8 Oswin 自由问答。

::: {.callout-warning}
## 旧版内容不等于当前入口

某个变量、标签、图片名或注释仍然存在于代码中，并不表示玩家仍然可以在 b0.85 正常触发对应内容。

判断当前版本是否可用时，需要同时确认：

1. 是否存在正常剧情入口；
2. 是否存在有效跳转标签；
3. 对应变量能否在正常流程中被写入；
4. 内容是否仍被当前界面调用。
:::

## Path A 的一次性剧情

在 b0.7 及更早版本中，Path A 后段有两段特殊剧情：

- Dave's Demise；
- Roswell's Attempt。

这两段剧情并不是每次进入 Path A 都会重复出现，而是受到全局持久状态控制。

### 一次性状态

相关状态使用：`persistent.Day23APrime` 进行记录。

由于它属于 `persistent` 持久数据，而不是普通存档变量，因此其作用范围是整个游戏用户数据，而不是某一个存档槽。

旧版流程可以概括为：

```text
首次进入对应的 Path A 后段
→ 播放 Dave's Demise 与 Roswell's Attempt
→ 写入 persistent.Day23APrime
→ 后续周目进入替代版本
```

因此，这两段剧情具有以下特点：

- 全角色线共用同一份完成状态；
- 不是每条角色线都能各看一次；
- 普通读档不会像重置局部剧情变量一样重置该状态；
- 后续再次进入 Path A 时，游戏可能直接跳过首次版本。

这也是过去社区攻略中经常提醒玩家提前保留存档的原因。

## b0.85 的处理方式

b0.85 将它们加入了 Compendium 的 Additional Scenes：

1. Dave's Demise；
2. Roswell's Attempt。

两项仍然读取：`persistent.Day23APrime`

但解锁后可以从 Compendium 反复启动，不再只能依赖首次流程观看。

因此，b0.85 的变化可以理解为：

```text
旧版：全局只在正常流程中出现一次
→
b0.85：正常流程仍保留状态差异，同时开放回放入口
```

详细条件见[Compendium 解锁索引](../collectibles/compendium.md)。

## D8 Oswin 自由问答

b0.7 及更早版本的 D8 晚上存在一段自由问答。玩家可以自行输入关键词或问题，与 Oswin 讨论角色、宅邸、凶手、奖牌和世界观信息。

这部分主要用于补充背景设定和隐藏对话，没有发现它会直接改变：

- 字母线；
- 角色线；
- 奖牌收集状态；
- 主要结局；
- 四个关键密码检定。

因此，即使没有完成问答，也不会因此无法通关。

### 输入规则

根据现有旧资料整理：

- 输入不区分英文字母大小写；
- 标点符号通常可以省略；
- 单词之间的空格不能省略；
- 下表中的 `/` 表示可以替换或分别尝试的表达；
- `rabbit` 和 `what rabbit` 必须按顺序输入；
- 部分关键词可能存在其他未记录的表达方式；
- 下列英文保留旧资料中的原始写法，不主动改写为更自然的英语。

现有整理可能并未覆盖所有可识别输入，仅作为旧版内容参考。

### 基础交互

::: {.legacy-basic-interaction-table .table-responsive .table-scroll-medium}

| 主题 | 可尝试的输入 |
|---|---|
| 询问身份 | `who am i`、`who are you` |
| 家庭关系 | `can i call you dad`、`did you want a family` |
| 身体互动 | `can i hug`、`can i tickle`、`thank you` |
| 碰鼻子 | `boop snoot` |
| 自我评价 | `am i a good boy` |
| 故事 | `story`、`do you like story`、`can you tell me a story` |
| 饮品偏好 | `tea or coffee which do you like better` |
| 人生答案 | `life answer` |
| 所在位置 | `where` |
| 兔子连续问答 | 先输入 `rabbit`，再输入 `what rabbit` |

:::

### 闲聊与彩蛋

::: {.legacy-chat-easter-egg-table .table-responsive .table-scroll-large}

| 主题 | 可尝试的输入 |
|---|---|
| 爱是什么 | `what is love` |
| 鸭子歌彩蛋 | `got any grapes` |
| 食物偏好 | `do you like waffles`、`you enjoy pizza`、`do you like bacon`、`melon` |
| 猪叫彩蛋 | `buhi` |
| 童话 | `hansel and Gretel` |
| 直接询问密码 | `can i know password` |
| 询问配对偏好 | `your otp` |
| 侮辱性输入 | `lemon whore` |

:::

### 凶手与动机

可以询问谁试图杀死众人，以及各角色可能产生杀意的原因：

```text
who want to kill us
who try to kill us
```

针对六名主要角色，还可以分别输入：

```text
why hoss want to kill us
why tyson want to kill us
why dean want to kill us
why sal want to kill us
why orlando want to kill us
why roswell want to kill us
```

其他相关输入包括：

```text
who control sal by using hypnos
poison
did you poison dean
you know how to poison
spying us
```

### 凶器与危险处理

与枪支相关的输入包括：

```text
gun
where gun
who has gun
who hide gun
did you have gun
```

与匕首相关的输入包括：

```text
dagger
where did you get dagger
```

还可以询问报警与死亡后的处理：

```text
call police
what if we die
```

### 监控与隔音

与宅邸监控有关的关键词包括：

```text
hiddencamera
is camera still working
did camera have blind spot
did camera have record
range of camera
sound proof
```

### 信任关系

玩家可以询问自己是否能够信任某名角色：

```text
can i trust hoss
can i trust tyson
can i trust dean
can i trust sal
can i trust orlando
can i trust roswell
can i trust you
can i trust benson
```

也可以反过来询问 Oswin 是否信任 Dave 或其他角色：

```text
can you trust me
can you trust hoss
can you trust tyson
can you trust dean
can you trust sal
can you trust orlando
can you trust roswell
can you trust benson
```

### Oswin 的身世与科学研究

与 Oswin 和 Roswell 的家庭关系有关：

```text
are you roswell's father
are you roswell's uncle
who is your brother
what is your brother's name
what is your sister's name
what happened in your brother
what happened in your sister
```

与 Oswin 的职业及研究有关：

```text
why you become a doctor
morphic resonance
mycology
you know deathcaps
trial survivor
```

这些输入涉及 Oswin 成为医生的原因、真菌学、死帽菇、实验幸存者和形态共振等基础世界观设定。

### Benson

关于 Benson 的一般信息：

```text
benson
benson creepy
benson old job
how old is benson
benson is not just a butler
```

关于 Benson 的来源和所在位置：

```text
where is benson
benson comes from
```

关于 Benson 与宅邸、金库及工作人员身份：

```text
benson and vault
staff benson
```

### 金库

与金库有关的输入包括：

```text
vault
who used vault
can you open vault
why give inside vault
okay open vault
```

这些问题主要用于询问金库的用途、使用者和 Oswin 是否能够打开金库。

### 森林

与宅邸周边森林有关：

```text
woods
forest
someone else in woods
what is living in woods
what mushrooms in woods
how big woods
cabin in woods
```

这些输入涉及森林中的其他人、生物、蘑菇、范围和小屋。

### 隐藏区域

可以询问宅邸内外是否存在秘密空间：

```text
where hidden
hidden room
hidden path
something hidden
safest room
```

### 实验室

与 Oswin 的实验室和编程工作有关：

```text
where study
where lab
how you program
```

### 奖牌

与奖牌数量、位置和隐藏者有关：

```text
medals
half medals
what find all medals
where medals
how many medals are there
who hid medals
```

还可以输入：

```text
list
hoss list
marked
```

这些内容与 Hoss 的清单、奖牌标记及全收集后的结果有关。

### Oswin 是否见过其他角色

一般询问：

```text
did you meet my friends
```

也可以分别询问：

```text
have you meet hoss
have you meet tyson
have you meet dean
have you meet sal
have you meet orlando
have you meet roswell
```

或询问各角色曾经做过什么：

```text
what did hoss do
what did tyson do
what did dean do
what did sal do
what did orlando do
what did roswell do
```

### b0.85 状态

b0.85 已删除整个 D8 自由问答环节。

因此：

-  b0.85 版本 无法通过正常流程进入该输入界面；
- 上述内容不能作为 b0.85 的路线步骤；
- 这些关键词仅用于保存旧版隐藏文本和世界观资料；

本节部分可识别关键词参考并核对自 [Gamemale 旧版攻略帖](https://www.gamemale.com/forum.php?mod=viewthread&tid=108485&highlight=password)，并特别感谢 `@xiaoxiaokis` 的补充。

## Oswin Cast File 残留

代码中仍存在 `persistent.oswin_lore` 及对应写入点，但 Compendium 中的 Oswin 条目已被注释，当前没有可见档案内容。详细说明见[Compendium 解锁索引](../collectibles/compendium.md#cast-files-代码中遗留了-oswin-的档案)。

## 相关页面

- [b0.85 版本主要变化](b085-changes.md)
- [旧版本密码档案](legacy-passwords.md)
- [旧版本线路档案](legacy-routes.md)
- [密码检定的底层机制](../mechanics/password-checks.md)
- [Compendium 解锁索引](../collectibles/compendium.md)
- [CG 画廊查漏索引](../collectibles/gallery.md)
