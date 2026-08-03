# Password b0.85 Bilingual Guide

[中文站](https://yangtaomijian.github.io/password-b085-guide/) ·
[English Site](https://yangtaomijian.github.io/password-b085-guide/en/)

《Password》b0.85 的非官方中英双语攻略与机制资料库。

An unofficial Chinese and English reference guide for *Password* b0.85.

## 内容 / Coverage

-   角色 Route 与字母 Path
-   分级密码提示
-   十二枚奖牌与 Path P
-   CG Gallery 检索与触发条件
-   Compendium 解锁条件
-   好感度与剧情差异
-   密码检定、奖牌持久化及彩蛋
-   b0.7 与 b0.85 版本变化，以及旧版线路、密码与机制档案

Both language versions cover the current b0.85 guide and include a source-checked comparison archive for b0.7 and b0.85.

## 版本与剧透 / Version and Spoilers

本站的现行攻略以 **Password b0.85** 为准；版本档案专门比较 **b0.7** 与
**b0.85**。全站包含大量剧情、Bad Ending、收集内容和结局条件剧透。

The current walkthrough is specific to **Password b0.85**, while the version archives compare **b0.7** with **b0.85**. The site contains extensive story, bad-ending, collectible, and ending-condition spoilers.

## 官方入口 / Official Links

-   [Password on itch.io](https://passwordvn.itch.io/password)
-   [Grizz on Patreon](https://www.patreon.com/PASSWORDVN)
-   [Community Discord](https://discord.gg/CSuEPWt) --- 18+ / NSFW

## 本地构建 / Local Build

需要安装 [Quarto](https://quarto.org/)。

Requires [Quarto](https://quarto.org/).

``` bash
bash scripts/build-bilingual.sh
python3 -m http.server 8000 --directory _site
```

中文站是默认站点，源码位于仓库根目录；英文站作为独立 Quarto 子站维护在
`site-en/`，发布至 `/en/`。

The Chinese site is the default site and is built from the repository root. The English site is maintained as a separate Quarto project under `site-en/` and is published under `/en/`.

本地访问：

-   http://localhost:8000/
-   http://localhost:8000/en/

## 说明 / Disclaimer

本项目为非官方玩家资料，与游戏作者及发行平台无隶属关系。

仓库不包含游戏本体、完整脚本、提取后的 CG
或其他未经授权的游戏资源。游戏名称、角色及原始素材的相关权利归原作者所有。

This is an unofficial fan-made reference project and is not affiliated with the developer or any distribution platform.

The repository does not contain the game, its complete scripts, extracted CG files, or other unauthorized game assets. Rights to the game, characters, and original materials belong to their respective owner.
