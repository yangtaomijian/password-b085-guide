---
title: "CG 画廊查漏索引"
description: "Password b0.85 Memories 与 Trauma 画廊的排列顺序、最早正常触发节点与剧情上下文"
toc: true
---

本页用于定位《Password》b0.85 画廊中尚未解锁的 CG。

画廊共有两个页签：

- **Memories：**72 张角色与其他剧情 CG；
- **Trauma：**28 张死亡与创伤 CG。

合计共 100 张，对应画廊中的 `Gallery Completion: seen / total` 统计。

::: {.callout-important}
## 使用方法

游戏内画廊每行有四个格子，按照**从左到右、从上到下**排列。

例如：

- Memories 第 6 行第 4 列对应 `hosskiss`；
- Memories 第 12 行第 1 列对应 `davebrushtyson`；
- Trauma 第 4 行第 3 列对应 `metempsychosis`。

排列表中每个 CG 名称下方显示最早正常触发节点的简写；页面下方的完整触发索引进一步提供脚本文件、行号和附近剧情文本。部分 CG 会在多个分支重复出现，因此所列节点不一定是唯一解锁方式。
:::

## 解锁机制

画廊按钮由 Ren'Py Gallery 的 `unlock_image()` 判断对应图片是否曾被显示。玩家在正常流程中实际看到相应的 `scene` 或 `show` 图片后，该图片会被 Ren'Py 记录为 seen，并解锁对应画廊按钮。

`persistent._seen_images` 在本作脚本中主要用于额外统计 `Gallery Completion`，不构成另一套独立的画廊解锁条件。画廊记录属于 `persistent` 数据，不依附于某一个普通存档。

因此：

- 不需要在看到 CG 后继续游玩到当天结束；
- 读取其他存档通常不会取消已经解锁的 CG；
- 删除某个普通存档通常也不会清除画廊；
- 仅在脚本或游戏文件中存在、但剧情从未实际显示的图片，不会自动计入已解锁数量。

::: {.callout-note}
## 表格中的技术标签

`Day10Morning2`、`Day11ABMeeting`、`FinalPassword` 等名称是游戏脚本标签，用于准确定位触发节点，玩家游戏内是看不到具体名称的。

- 下表列出当前脚本正常流程中按剧情日期最早的一个显示位置。同一天若存在多个路线或分支，只列其中一个最早代表位置。
- “上下文”提供图片首次显示前后的脚本文本，用于辅助确认剧情位置；它不一定完整列出进入该分支所需的全部前置条件。
- 脚本中的角色简称包括：`mc`＝Dave，`bear`＝Dean，`wolf`＝Tyson，`boar`＝Roswell，`dragon`＝Orlando，`lion`＝Hoss，`croc`＝Sal，`oz`＝Oswin，`rat`＝Thanatos。

:::

<div id="gallery-locator-root"></div>

## Memories

::: {.gallery-grid .gallery-coordinate-table #gallery-memories data-gallery-tab="Memories"}

| 行 | 列 1 | 列 2 | 列 3 | 列 4 |
|---:|---|---|---|---|
| 1 | `daveshower`<br><small>D2 · `startday2`</small> | `davepancakes`<br><small>D10 · `Day10Morning2`</small> | `daveoutside`<br><small>D10 · `DaveDay10Morning`</small> | `daveoutsidewithdean`<br><small>D10 · `DaveDay10Morning`</small> |
| 2 | `daveoutsidewithhoss`<br><small>D10 · `DaveDay10MorningwithHoss`</small> | `daveoutsidewithorlando`<br><small>D10 · `DaveDay10Morning`</small> | `daveoutsidewithroswell`<br><small>D10 · `DaveDay10Morning`</small> | `daveoutsidewithsal`<br><small>D10 · `DaveDay10Morning`</small> |
| 3 | `daveoutsidewithtyson`<br><small>D10 · `DaveDay10Morning`</small> | `daveoutsidewithoswin`<br><small>D12AB · `Day12ABAfterWalkies`</small> | `daviddeath1`<br><small>D14AB · `Day14ABDavidFlashback`</small> | `daviddeath2`<br><small>D14AB · `Day14ABDavidFlashback`</small> |
| 4 | `daviddeath3`<br><small>D14AB · `Day14ABDavidFlashback`</small> | `davecry`<br><small>D14AB · `Day14ABDavidFlashback`</small> | `davecry2`<br><small>D14AB · `Day14ABDavidFlashback`</small> | `davecry3`<br><small>D14AB · `Day14ABDavidFlashback`</small> |
| 5 | `deanhottub`<br><small>D5 · `Day5Dinner`</small> | `deankiss`<br><small>D5 · `Day5Dinner`</small> | `deandate1`<br><small>D19 · `DeanDate`</small> | `deandate2`<br><small>D19 · `DeanDate`</small> |
| 6 | `deandate3`<br><small>D19 · `DeanDate`</small> | `deandate4`<br><small>D19 · `DeanDate`</small> | `hosspool`<br><small>D6 · `day6lunch`</small> | `hosskiss`<br><small>D8 · `HossLibraryDiscovery`</small> |
| 7 | `hossfamilyphoto`<br><small>D18 · `RoswellDay18RouteStuff`</small> | `hosskiss2`<br><small>D19 · `HossBoyfriend`</small> | `orlandogaming`<br><small>D6 · `day6lunch`</small> | `orlandokiss`<br><small>D6 · `orlandoday6dinner`</small> |
| 8 | `orlandopostdate1`<br><small>D19 · `DeanExplainTyson`</small> | `orlandopostdate2`<br><small>D19 · `DeanExplainTyson`</small> | `orlandopostdate3`<br><small>D19 · `OrlandoBoyfriend`</small> | `roswellvault`<br><small>D4 · `Night4`</small> |
| 9 | `roswellkiss`<br><small>D6 · `day6lunch`</small> | `slumberparty`<br><small>D9 · `Night9Roswell`</small> | `roswelloutside`<br><small>D18 · `OrlandoDay18RouteStuff`</small> | `roswelloutside2`<br><small>D18 · `OrlandoDay18RouteStuff`</small> |
| 10 | `roswelloutside3`<br><small>D18 · `OrlandoDay18RouteStuff`</small> | `ozhugroswell`<br><small>D23A_Redux · `Day23A_R`</small> | `saltable`<br><small>D6 · `day6lunch`</small> | `salvault`<br><small>D10 · `vaultPassword11`</small> |
| 11 | `tysondrive`<br><small>D5 · `RoswellFailedSave`</small> | `tysonmovie`<br><small>D6 · `day6lunch`</small> | `tysongrabdave`<br><small>D6 · `day6lunch`</small> | `daveshowerwithtyson`<br><small>D9 · `Night9Tyson`</small> |
| 12 | `davebrushtyson`<br><small>D9 · `Night9Tyson`</small> | `tysonkiss1`<br><small>D19 · `DeanPostDate`</small> | `tysonkiss2`<br><small>D19 · `DeanPostDate`</small> | `ozmeet`<br><small>D8 · `Day8Oz`</small> |
| 13 | `labrat1`<br><small>D11 A/B · `Day11ABMeeting`</small> | `labrat2`<br><small>D11 A/B · `Day11ABMeeting`</small> | `thanatosdesk`<br><small>D11 A/B · `Day11ABMeeting`</small> | `thanatosdesk2`<br><small>D11 A/B · `Day11ABMeeting`</small> |
| 14 | `thanatosdesk3`<br><small>D11 A/B · `Day11ABMeeting`</small> | `bensonthanatosgun`<br><small>D13CD · `Day13DMeeting`</small> | `hammondfamilyphoto`<br><small>D22 A/B · `Day22ABThanatos1`</small> | `envelopephoto1`<br><small>D23 A/B · `Day23AStart`</small> |
| 15 | `envelopephoto2`<br><small>D23 A/B · `Day23AStart`</small> | `daveflashlight1`<br><small>D24 A/B · `Day24BStart`</small> | `daveflashlight2`<br><small>D24 A/B · `Day24BStart`</small> | `daveflashlight3`<br><small>D24 A/B · `Day24BStart`</small> |
| 16 | `roswellmastermind1`<br><small>D23F · `Day23FStart`</small> | `roswellmastermind2`<br><small>D23F · `Day23FStart`</small> | `thanatosfire`<br><small>D25B · `Day25BStart`</small> | `daveletter`<br><small>D24A Redux · `RoswellsGoodbye`</small> |
| 17 | `godofdeath1`<br><small>D24A Redux · `EndofTime`</small> | `godofdeath2`<br><small>D24A Redux · `EndofTime`</small> | `theelixir`<br><small>D24A Redux · `FinalPassword`</small> | `tysonhospital1`<br><small>D24A Redux · `FinalPassword`</small> |
| 18 | `davetysonbed`<br><small>D24A Redux · `FinalPassword`</small> | `trainfriends`<br><small>D24A Redux · `beachtime`</small> | `dragonbeartrain`<br><small>D24A Redux · `beachtime`</small> | `daveorlandotalk`<br><small>D24A Redux · `beachtime`</small> |

:::

## Trauma

::: {.gallery-grid .gallery-coordinate-table #gallery-trauma data-gallery-tab="Trauma"}

| 行 | 列 1 | 列 2 | 列 3 | 列 4 |
|---:|---|---|---|---|
| 1 | `discovery`<br><small>D4 · `vaultPassword2`</small> | `tysondead`<br><small>D6 · `vaultPassword3`</small> | `deandying`<br><small>D6 · `vaultPassword4`</small> | `deandead`<br><small>D6 · `vaultPassword4`</small> |
| 2 | `hossdead`<br><small>D6 · `vaultPassword5`</small> | `saldead`<br><small>D6 · `vaultPassword6`</small> | `orlandofailed`<br><small>D6 · `vaultPassword7`</small> | `bensondead`<br><small>D7 · `vaultPassword10`</small> |
| 3 | `deantysonfight`<br><small>D8 · `day8morning`</small> | `orlandoshot`<br><small>D8 · `day8morning`</small> | `salrampage`<br><small>D10 · `vaultPassword11`</small> | `saldeadpool`<br><small>D12 C/D · `Day12CDMorning`</small> |
| 4 | `saldeadpooloswin`<br><small>D12 C/D · `Day12CDMorning`</small> | `ozdead`<br><small>D11 A/B · `Day11ABMeeting`</small> | `metempsychosis`<br><small>D11 A/B · `Day11ABMeeting`</small> | `werewolf`<br><small>D17AB · `vaultPassword13`</small> |
| 5 | `davedying1`<br><small>D24 A/B · `Day24AStart`</small> | `davedying2`<br><small>D24 A/B · `Day24AStart`</small> | `davedying3`<br><small>D24 A/B · `DaveDies`</small> | `davedying4`<br><small>D24 A/B · `DaveDies`</small> |
| 6 | `davedying5`<br><small>D24 A/B · `DaveDies`</small> | `davedying6`<br><small>D24 A/B · `DaveDies`</small> | `davedead1`<br><small>D24 A/B · `DaveDies`</small> | `davedead2`<br><small>D24 A/B · `DaveDies`</small> |
| 7 | `davedead3`<br><small>D24 A/B · `DaveDies`</small> | `davedead4`<br><small>D23F · `Day23FStart`</small> | `davedead5`<br><small>D23F · `Day23FStart`</small> | `davedead6`<br><small>D24 A/B · `DaveDies`</small> |

:::

## CG 解锁触发索引 {#cg-unlock-index}

上方的 Memories 与 Trauma 表格用于确认画廊中的行列位置和 CG 文件名；由于玩家无法在游戏流程中看到文件名，本节进一步列出每张对应文件名 CG 在正常游戏流程中的最早显示节点及附近剧情文本。

:::: {#gallery-trigger-index .callout-note collapse="true"}

## 展开完整触发索引

::: {.gallery-trigger-group data-category="Dave"}

### Dave

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `daveshower` | 是 | `Day 2.rpy:21` / `startday2` | "My muscles felt sore, maybe just from being in an unfamiliar bed, but given I had my own shower, what better time to test it out?" / "Once I was under the water, I realized how gross I felt." |
| `davepancakes` | 是 | `Day 10.rpy:600` / `Day10Morning2` | "A fond smile found its way on my face as I recalled the dream I had. While I couldn't do bacon and eggs, I could do the next best thing." / "Sure, I'd been through this dance once while we're here, so another time wouldn't hurt." |
| `daveoutside` | 是 | `Day 10.rpy:289` / `DaveDay10Morning` | "He was bounding up the stairs before I could get another word in. My eyes were trained on the pocket he'd concealed something in. I wondered what it could've been, and what he'd been up to." / "The morning was crisp and fresh as I stood looking out at the horizon. Perhaps it was the mountain air that made everything seem so alive." |
| `daveoutsidewithdean` | 是 | `Day 10.rpy:303` / `DaveDay10Morning` | "It was much the same as staying here and risking nothing bad happening. If talking to Oswin had meant anything, and seeing things in the vault, the threat seemed real enough." / "Which only left one real option, and that was to face this head on." |
| `daveoutsidewithhoss` | 是 | `Day 10.rpy:514` / `DaveDay10MorningwithHoss` | "Hoss and I stood outside, leaning over the railing that ran around the outside of the deck." / lion "So... What's got you out of bed this early? For someone that spends a lot of time in bed, I half assumed I'd be running into Sal this morning." |
| `daveoutsidewithorlando` | 是 | `Day 10.rpy:430` / `DaveDay10Morning` | "It was reassuring to know that Roswell was willing to give me a hand here. I wasn't a detective, and I could only dream of piecing things together." / "Roswell though? He was clever. Between the two of us, I felt like we'd have a better chance of laying to rest my worries by finding the cause of it all." |
| `daveoutsidewithroswell` | 是 | `Day 10.rpy:384` / `DaveDay10Morning` | "Still... I could rely on him to help me out and that was good for my morale. Just knowing I wasn't in this alone was something I needed to be reassured of this morning." / "Even in the worst case scenario, I still trusted Ty." |
| `daveoutsidewithsal` | 是 | `Day 10.rpy:471` / `DaveDay10Morning` | "I sighed, wondering if I'd said something again. Maybe he was just tired, or maybe it was my own tiredness catching up to me." / "It was quickly getting to the point that I would be willing to settle for a cup of tea if it meant we could just sit down and talk. I felt hanging out and playing games wouldn't be the most appropriate thing to do here." |
| `daveoutsidewithtyson` | 是 | `Day 10.rpy:336` / `DaveDay10Morning` | "Against the slight chill of the morning air, I could feel the heat rushing first to my cheeks and then to other areas of my body. That was the sign I should head inside and find a distraction." / "As much as I contemplated heading upstairs to find something to do, or browse my phone, I decided on coffee and headed for the kitchen." |
| `daveoutsidewithoswin` | 是 | `Day12AB.rpy:1407` / `Day12ABAfterWalkies` | "Dean was talking to Orlando about something in hushed voices near the front of the train where Benson was occasionally adding his thoughts on the matter." / "Once again I found myself outside, not hungry and just wanting to be asleep again. " |
| `daviddeath1` | 是 | `Day14AB.rpy:839` / `Day14ABDavidFlashback` | "He said all he needed to say and before I knew it I was leaning on the mailbox watching as his car pulled out of the driveway and disappeared down the street." / "The night went as well as it could have up to a point. Tyson and I played games, ate dinner, and then just lounged around waiting until dad got back. Chances were that we'd be up until the early hours of the morning but I was keen to see him again." |
| `daviddeath2` | 是 | `Day14AB.rpy:841` / `Day14ABDavidFlashback` | "It was late, not nearly late enough but the flashing red and blue lights clued me in to dad coming home." / "I was excited." |
| `daviddeath3` | 是 | `Day14AB.rpy:843` / `Day14ABDavidFlashback` | "I was excited." / "I threw open the door to greet him home, but normally he'd switch the lights off before coming inside. I told myself he'd just forgotten, and that he was just eager to get back inside to see me again." |
| `davecry` | 是 | `Day14AB.rpy:865` / `Day14ABDavidFlashback` | mc "It's not fair!" / "I knew they were staring but I didn't care. I wanted to scream louder but I just couldn't." |
| `davecry2` | 是 | `Day14AB.rpy:870` / `Day14ABDavidFlashback` | "It was like a dam burst, and my face became wet with every tear I hadn't shed since he'd died. " / "If there was a moment that I wanted to die, it would've been then. If only for the hope that I'd be able to see him again." |
| `davecry3` | 是 | `Day14AB.rpy:875` / `Day14ABDavidFlashback` | "Tyson pulled me quickly to him and hugged me tight. It didn't stop the crying, but it gave me something to cling to, almost to the point I was threatening to pull out his fur." / "It must've hurt, but he didn't move, instead just supporting me in this awkward hug he'd put us in." |

:::

::: {.gallery-trigger-group data-category="Dean"}

### Dean

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `deanhottub` | 是 | `Day 5.rpy:2302` / `Day5Dinner` | "Once they were on, I turned around and saw Dean watching me from the corner of his eye with a sly grin." / mc "Peeking?" |
| `deankiss` | 是 | `Day 5.rpy:2356` / `Day5Dinner` | mc "A message? Like what?" / bear "A bear like me, a hyena like you... Maybe you wanted me to be a bit more physically forward?" |
| `deandate1` | 是 | `Day 19.rpy:4829` / `DeanDate` | dragon "Ah yes, right this way gentlemen!" / mc "What... is happening?" |
| `deandate2` | 是 | `Day 19.rpy:4838` / `DeanDate` | bear "You don't think Orlando makes good food?" / mc "He does! I'm just... a little confused?" |
| `deandate3` | 是 | `Day 19.rpy:4855` / `DeanDate` | bear "Nope! Unless Sal's helping with the dishes, Orlando seemed intent on doing it all himself." / mc "What are the others even doing? We're kinda hogging the dining room, having a nice dinner..." |
| `deandate4` | 是 | `Day 19.rpy:4870` / `DeanDate` | mc "As far as I know it's mostly my family that has the pronounced teeth, but it's still cute!" / bear "I'm glad you like it! Sorry it took me all day, but I'd say it's worth it." |

:::

::: {.gallery-trigger-group data-category="Hoss"}

### Hoss

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `hosspool` | 是 | `Day 6.rpy:2962` / `day6lunch` | "It was a sunny enough day and Hoss seemed to already be here, lounging about in a chair with his clothes neatly folded off to the side." / mc "Oh, hey Hoss. Were you uh... What are you wearing?" |
| `hosskiss` | 是 | `Day 8.rpy:3905` / `HossLibraryDiscovery` | "That same hand slid up to cup my cheek, rubbing softly with his thumb. I gulped, my heart starting to race as he eased himself closer." / mc "Hoss..." |
| `hossfamilyphoto` | 是 | `Day 18.rpy:2895` / `RoswellDay18RouteStuff` | "I chuckled, but it quickly devolved into a whine." / lion "That's why I'm scared of letting them down, Dave. Those two are like... what Tyson is to you, if that makes sense." |
| `hosskiss2` | 是 | `Day 19.rpy:2603` / `HossBoyfriend` | mc "I think... I'd like that." / lion "Yeah?" |

:::

::: {.gallery-trigger-group data-category="Orlando"}

### Orlando

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `orlandogaming` | 是 | `Day 6.rpy:5073` / `day6lunch` | "We left Orlando's room and got settled in the rec room in front of the large screen with a game." / "Much like in the past we cuddled up together." |
| `orlandokiss` | 是 | `Day 6.rpy:5585` / `orlandoday6dinner` | mc "I-I... uh... um..." / "Orlando gently tipped me back so that I was laying back on the bed, with him coming up beside the bed so my lap was in his." |
| `orlandopostdate1` | 是 | `Day 19.rpy:5793` / `DeanExplainTyson` | "Dean looked me over before giving me a single nod." / "Then he was gone, wandering inside and closing the door quietly behind him. Turning away from the door I looked out to the forest, then up at the evening sky, whining to no one in particular." |
| `orlandopostdate2` | 是 | `Day 19.rpy:5797` / `DeanExplainTyson` | "A few minutes passed before I wandered back inside, heading through the dining room to the last place I saw Orlando. There wasn't any indication things had changed from when Dean and I got up from the table, and I wondered for a moment if he'd moved on." / "When I wandered into the kitchen Orlando was there crying, hand shaking as he struggled to shovel the ice-cream in front of him into his mouth." |
| `orlandopostdate3` | 是 | `Day 19.rpy:5847` / `OrlandoBoyfriend` | "I reached over and tried to wiped what tears were left on his cheek and he just laughed." / dragon "I'll be okay. But um... What did you want to happen now?" |

:::

::: {.gallery-trigger-group data-category="Roswell"}

### Roswell

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `roswellvault` | 是 | `Day 4.rpy:1630` / `Night4` | mc "Think you might have something?" / boar "Maybe." |
| `roswellkiss` | 是 | `Day 6.rpy:1713` / `day6lunch` | "The more my mind lingered on it..." / "Kiss him.": |
| `slumberparty` | 是 | `Day 9.rpy:5327` / `Night9Roswell` | mc "Did you deliberately hide things in your clothes or just...?" / boar "Oh, no. Just where they ended up. But they're all new packets, so no need to worry about that." |
| `roswelloutside` | 是 | `Day 18.rpy:2178` / `OrlandoDay18RouteStuff` | boar "Tell me, Dave. Just... reassure me that..." / "He trailed off with a sigh, falling quiet for nearly a minute before I asked further." |
| `roswelloutside2` | 是 | `Day 18.rpy:2191` / `OrlandoDay18RouteStuff` | mc "What did you want to ask me? Is it... bad?" / boar "Dave, would you be my boyfriend?" |
| `roswelloutside3` | 是 | `Day 18.rpy:2218` / `OrlandoDay18RouteStuff` | boar "So what little time I have left now, I'm spending how I want. Or as close to as I can, given the circumstances." / mc "How... long exactly do we have?" |
| `ozhugroswell` | 是 | `Day23A_Redux.rpy:568` / `Day23A_R` | boar "Okay? What?" / oz "Do you remember when Thanatos woke up? What he did?" |

:::

::: {.gallery-trigger-group data-category="Sal"}

### Sal

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `saltable` | 是 | `Day 6.rpy:4611` / `day6lunch` | "After how this morning went, I was unsure if I should leave him unsupervised in there, but he emerged soon after with a couple of glasses and a pitcher of water." / "We sat at the corner of the table, so we were sort of facing one another but Sal didn't seem all that keen on talking despite us getting here." |
| `salvault` | 是 | `Day 10.rpy:4882` / `vaultPassword11` | "My head hurt, almost like a stabbing pain coming from deep within." / "I didn't understand, what had I just seen?" |

:::

::: {.gallery-trigger-group data-category="Tyson"}

### Tyson

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `tysondrive` | 是 | `Day 5.rpy:3261` / `RoswellFailedSave` | wolf "Hey." / mc "Oh, hey Ty." |
| `tysonmovie` | 是 | `Day 6.rpy:3786` / `day6lunch` | mc "So what are we watching?" / wolf "Don't know. Doesn't matter anyway." |
| `tysongrabdave` | 是 | `Day 6.rpy:3930` / `day6lunch` | wolf "The hell?" / wolf "Let go!" |
| `daveshowerwithtyson` | 是 | `Day 9.rpy:4899` / `Night9Tyson` | mc "Ty?" / "My heart began to race, feeling him up close like this." |
| `davebrushtyson` | 是 | `Day 9.rpy:4964` / `Night9Tyson` | wolf "Brush me." / mc "Oh, right. Sure. But then my turn after?" |
| `tysonkiss1` | 是 | `Day 19.rpy:5344` / `DeanPostDate` | wolf "I'm a fuckin' queer, alright!?" / wolf "I... uh..." |
| `tysonkiss2` | 是 | `Day 19.rpy:5351` / `DeanPostDate` | "He pulled me to him, our noses touching but it was enough to stop me laughing. Not that it did anything to get rid of the smile on my face." / wolf "Don't you dare fucking laugh." |

:::

::: {.gallery-trigger-group data-category="Death/Trauma"}

### Death/Trauma

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `discovery` | 是 | `Day 4.rpy:1596` / `vaultPassword2` | "There was a moment's pause before the LED panel flashed vividly." / "Suddenly, thoughts filled my head..." |
| `tysondead` | 是 | `Day 6.rpy:350` / `vaultPassword3` | "But then a picture began to form in my mind." / mc "The hell? Tyson?" |
| `deandying` | 是 | `Day 6.rpy:376` / `vaultPassword4` | "There was a moment's pause before the LED panel flashed vividly." / "Almost immediately I felt something grip my chest, a tightening sensation that made it hard to breathe." |
| `deandead` | 是 | `Day 6.rpy:380` / `vaultPassword4` | "I gasped, and no sooner had I been given enough of a reprieve for air, the tightening came back full force." / "I fell to my knees, clutching my chest. " |
| `hossdead` | 是 | `Day 6.rpy:401` / `vaultPassword5` | "At first I didn't think anything had happened, but I was suddenly blinded by a bright light. Or at the very least, the flash from the LED panel seemed brighter than it should be for a split second." / "As I rubbed my eyes, the colors morphing into a picture at the forefront of my mind." |
| `saldead` | 是 | `Day 6.rpy:422` / `vaultPassword6` | "All of a sudden it went dark as if someone had cut the lights. I reached out in the darkness, but before I could get a hand on anything to stabilize myself, a high-pitched whistle made me clamp my hands over my head." / mc "Ow! What..." |
| `orlandofailed` | 是 | `Day 6.rpy:444` / `vaultPassword7` | "A chill went up my spine to accompany the chime signaling that the password I'd put in was correct." / mc "Huh?" |
| `bensondead` | 是 | `Day 7.rpy:3966` / `vaultPassword10` | "There was nothing after the chime sounded, almost as if something broke." / mc "Um..." |
| `deantysonfight` | 是 | `Day 8.rpy:85` / `day8morning` | "In unison, their attention on me shifted to Benson's body, notably the gun still in his hand on the floor." / "With one last look at one another, they both made to dive for it." |
| `orlandoshot` | 是 | `Day 8.rpy:102` / `day8morning` | "I watched it fall almost in slow motion. The only sound I could make out was my own breathing until everything else was broken by the single sound of it misfiring." / "My breath had caught in my chest, and as my hands scrambled over my body, expecting to feel a patch of wetness or a hole, or even a burning sensation, I let it out as a sigh of relief." |
| `salrampage` | 是 | `Day 10.rpy:4872` / `vaultPassword11` | "The moment I heard the chime I smiled for all of a moment before I realized what was about to happen." / "I blacked out, and as I began to fall, I could hear Sal call out to me and me falling and crashing into something." |
| `saldeadpool` | 是 | `Day 12CD.rpy:326` / `Day12CDMorning` | "My hand was on the gate but I didn't open it. Before me, the water in the pool was tainted and stained a deep red. " / mc "Blood..." |
| `saldeadpooloswin` | 是 | `Day 12CD.rpy:136` / `Day12CDMorning` | "I noticed Oswin stop shy of the gate heading in, hand on the latch and staring at something. He turned quickly to me as I approached, his face grim." / "There was a sense of sorrow in his face as he unlatched the gate and wandered in. " |
| `ozdead` | 是 | `Day 11 A+B.rpy:3391` / `Day11ABMeeting` | "When I stepped in, the smell hit me first. What traces of it I had picked up on in the walk here was amplified, and I was sure now that I hadn't been imagining it." / mc "Oswin?" |
| `metempsychosis` | 是 | `Day 11 A+B.rpy:3185` / `Day11ABMeeting` | "He showed me the folded piece of paper he was holding, loosely holding it in the air." / oz "What's on this piece of paper?" |
| `werewolf` | 是 | `Day17AB.rpy:1236` / `vaultPassword13` | "It was like opening my eyes, slowly as if I was learning to use them for the first time, but then I saw it." / "At the edge of my vision I could barely make out the distinctive yellow of Orlando's scales in the dim light." |
| `davedying1` | 是 | `Day24AB.rpy:732` / `Day24AStart` | "I wanted to smile at the irony of me forgetting to do it a second time but I couldn't. " / mc "Is anyone... there?" |
| `davedying2` | 是 | `Day24AB.rpy:739` / `Day24AStart` | "Reaching into my pocket I pulled out the photo again." / mc "I love you." |
| `davedying3` | 是 | `Day24AB.rpy:781` / `DaveDies` | "I sat there, waiting. " / mc "Huh...?" |
| `davedying4` | 是 | `Day24AB.rpy:798` / `DaveDies` | mc "I thought..." / dad "I thought I wouldn't find you." |
| `davedying5` | 是 | `Day24AB.rpy:975` / `DaveDies` | "He set me down gently and lay me back against a tree. The moment I could feel the ground under me I sighed and looked up at my dad." / mc "Thanks for... coming to save me." |
| `davedying6` | 是 | `Day24AB.rpy:988` / `DaveDies` | mc "Dad?" / dad "Dave... I..." |
| `davedead1` | 是 | `Day24AB.rpy:1026` / `DaveDies` | wolf "Dave...?" / croc "...He'll be back soon." |
| `davedead2` | 是 | `Day24AB.rpy:1053` / `DaveDies` | croc "Orlando!" / dragon "You're right... Sorry..." |
| `davedead3` | 是 | `Day24AB.rpy:1057` / `DaveDies` | dragon "Is it Dean? Tyson?" / croc "I'm not... Oh... Oh no..." |
| `davedead4` | 是 | `Day23F.rpy:41` / `Day23FStart` | "I almost jumped upon hearing Thanatos speak, though I couldn't see him." / rat "WELL... NOT AS IF SLEEPING IS A GOOD OPTION THESE DAYS, HUH? " |
| `davedead5` | 是 | `Day23F.rpy:47` / `Day23FStart` | "He climbed up into view by the window, looking to the outside world and waving me off over his shoulder." / rat "REALLY MESSED UP THING TO DO, DAVE." |
| `davedead6` | 是 | `Day24AB.rpy:1078` / `DaveDies` | rat "...SORRY. " / rat "IS THAT OKAY? MASTER?" |

:::

::: {.gallery-trigger-group data-category="Misc"}

### Misc

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `ozmeet` | 是 | `Day 8.rpy:4734` / `Day8Oz` | mc "Have I... been in danger?" / oz "You tell me." |
| `labrat1` | 是 | `Day 11 A+B.rpy:3397` / `Day11ABMeeting` | "I was stunned, staring at what I was seeing. Eyes trailing down to the knife sticking out of his chest." / mc "What...? How? Why? When did...?" |
| `labrat2` | 是 | `Day 11 A+B.rpy:3401` / `Day11ABMeeting` | "I took a step back, looking about the lab." / "Nothing seemed to be out of the ordinary, at least as far as spooky laboratories went. There was another room off to the side, a cabinet against the wall, but I couldn't think right with how suffocating the smell was." |
| `thanatosdesk` | 是 | `Day 11 A+B.rpy:3121` / `Day11ABMeeting` | mc "Thanatos...?" / "Oswin left with a wave over his shoulder into a room attached to the one he left me in. It just looked like another smaller laboratory from what I could make out through the door but most of it was veiled in the same darkness as the passage." |
| `thanatosdesk2` | 是 | `Day 11 A+B.rpy:3148` / `Day11ABMeeting` | rat "YEAH, IT'S SURE BEEN A RIOT WATCHING YOU SCURRY ABOUT AFTER YOU TAKE A QUICK NAP." / "I huffed but he seemed to shrug, a satisfied if smug tone in the robotic voice coming from the collar." |
| `thanatosdesk3` | 是 | `Day 11 A+B.rpy:3158` / `Day11ABMeeting` | rat "THAT'S IT. JUST ABOUT THERE." / mc "This is close enough?" |
| `bensonthanatosgun` | 是 | `Day 13CD.rpy:878` / `Day13DMeeting` | rat "WHY DO YOU WANT TO KNOW?" / "He gestured to me lazily, not shifting his gaze once." |
| `hammondfamilyphoto` | 是 | `Day22AB.rpy:590` / `Day22ABThanatos1` | "But that wasn't all that was in the book. A lone photograph left underneath it." / mc "What's this?" |
| `envelopephoto1` | 是 | `Day23AB.rpy:925` / `Day23AStart` | "Trembling in the cold I tried to ball up in order to keep warm. Yelling for help wasn't going to help, because there was no one around. If anything I was in more danger if I said a word." / "So, I started to cry. Quietly. Cold and scared, worried for what was about to happen, it was all I had left." |
| `envelopephoto2` | 是 | `Day23AB.rpy:939` / `Day23AStart` | mc "Who...?" / "I thought back to what Oswin had said and started to connect the dots." |
| `daveflashlight1` | 是 | `Day24AB.rpy:1912` / `Day24BStart` | "I'd underestimated just how much the light from the mansion was lighting things up once I'd passed beyond the tree line. It was dark, and I could barely see my hand in front of my face." / "If it wasn't for the sounds of insects echoing around me, I'd have assumed that I was somewhere deep and dark, like when Thanatos knocked me out." |
| `daveflashlight2` | 是 | `Day24AB.rpy:1917` / `Day24BStart` | mc "Hello? Is anyone out here?" / "No response, and barely any sound beyond what I'd been hearing already. Each footstep I took made me wonder just how far into the darkness I'd come." |
| `daveflashlight3` | 是 | `Day24AB.rpy:1925` / `Day24BStart` | "My fur stood on end, sensing someone nearby." / mc "Hello?" |
| `roswellmastermind1` | 是 | `Day23F.rpy:789` / `Day23FStart` | rat "I DO NOT UNDERSTAND WHY." / "Inching forward towards the voice I could tell it was a struggle for him to speak, or at the very least his normal voice had static in it, like he was still broken." |
| `roswellmastermind2` | 是 | `Day23F.rpy:806` / `Day23FStart` | rat "DEAD?" / mc "What about the others? They're dead too!" |
| `thanatosfire` | 是 | `Day25B.rpy:2291` / `Day25BStart` | rat "Oi, Dave. Get up. You're going to die if you stay there." / mc "Who...? Thanatos? Is that you?" |
| `daveletter` | 是 | `Day24A_Redux.rpy:1892` / `RoswellsGoodbye` | "Carefully I opened the letter, pulling out the contents and started to read." / mc2 "Dave. " |
| `godofdeath1` | 是 | `Day24A_Redux.rpy:2709` / `EndofTime` | rat2 "Well done." / rat2 "You've reached the end. Finally. It's good to see you. " |
| `godofdeath2` | 是 | `Day24A_Redux.rpy:2717` / `EndofTime` | rat2 "But first, let's check a few things, shall we?" / rat2 "Memory reaches across time and space alike if it's strong enough, or if you never die, that helps too. " |
| `theelixir` | 是 | `Day24A_Redux.rpy:3303` / `FinalPassword` | boar "...Thanatos...?" / "As I turned around, Roswell was holding the limp body of Thanatos tight. It was strange to think of him as now dead, but the sound of the door opening behind me distracted him from telling him what just happened." |
| `tysonhospital1` | 是 | `Day24A_Redux.rpy:3445` / `FinalPassword` | wolf "What?" / mc "For the past year and a half... Ever since dad died..." |
| `davetysonbed` | 是 | `Day24A_Redux.rpy:3649` / `FinalPassword` | "Hours later we'd arrived back home, with Florencia pulling the car up outside my house and stepping out. " / "He flashed us a smile and they drove away, leaving just Tyson and myself alone." |
| `trainfriends` | 是 | `Day24A_Redux.rpy:3706` / `beachtime` | dragon "Rude! Roswell got sick suddenly and he wanted to make sure he was okay. " / bear "He better be someone decent and treat Dave right..." |
| `dragonbeartrain` | 是 | `Day24A_Redux.rpy:3698` / `beachtime` | dragon "Hey Dean, what do you think this place is going to be like, anyway?" / bear "Hm? Oh, dunno." |
| `daveorlandotalk` | 是 | `Day24A_Redux.rpy:3789` / `beachtime` | dragon "That was... quite a story." / mc "Yeah... But that's what happened. Everything I remember, anyway. Tyson's already heard it all twice over the past week so... y'know." |

:::

::::

## 不在画廊内的

以下图片名称在脚本中有定义或调用，但没有加入当前画廊列表，因此即使在剧情中显示，也不存在对应的画廊按钮。

::: {#gallery-non-gallery-index .gallery-non-gallery-index}

| CG 名称 | 画廊 | 最早正常触发位置 | 上下文 |
|---|---|---|---|
| `deanlove` | 否 | 无正常流程触发；仅见于 `Day24A_Redux.rpy:3825` / `CGdump` | 当前脚本只有不可达的调试调用，正常游玩不会显示。 |
| `envelopephoto3` | 否 | `Day23AB.rpy:948` / `Day23AStart` | "Carefully I looked at the man's features. He looked like a magician, or maybe it was just the fancy cut of his coat. His white fur did remind me a little of the Easter Bunny though. " / "Oswin said it'd be fine if I read the note, so long as Roswell got it too. Though I wasn't sure if the rules still applied given the assumption was that I'd be the one getting back." |
| `hammondfamilyphoto2` | 否 | `Day22AB.rpy:606` / `Day22ABThanatos1` | "I breathed out, shaking my head." / mc "But now Oswin is dead, and wondering about that probably doesn't matter." |
| `roswellepilogue` | 否 | `encore.rpy:2013` / `Roswell_Encore` | rat3 "I understand. " / boar "No, you're an assistant for work. " |

:::

### 已彻底删除的 Dean CG

旧版本中曾存在四张 Dean 成人 CG。

b0.7 版本它们仍存在游戏文件中，但游戏过程中不会展示 CG，也没有对应剧情文字展示；而早于 b0.7 的游戏版本会在过程中完整展示 CG 和对应文字剧情片段。

相关图片已经从 b0.85 游戏文件中彻底删除，也不属于当前画廊的 100 张完成统计。

## 相关页面

- [字母线系统](../guide/path-system.md)
- [密码分级提示](../guide/password-hints.md)
- [十二枚奖牌收集指南](medals.md)
- [好感度机制与加点](../mechanics/affection.md)
- [好感度检定与剧情文本差异](../mechanics/affection-differences.md)

<script src="../assets/gallery-locator.js" defer></script>
