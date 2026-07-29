---
title: "密码检定的底层机制"
description: "Password b0.85 密码输入的标准化、日期匹配、脚本跳转与旧代码残留"
toc: true
---

《Password》的密码输入统一由 `Vault.rpy` 中的 `vaultInput` 处理。

玩家输入密码后，游戏会依次完成：

1. 读取输入内容；
2. 删除首尾空格；
3. 将英文字母统一转为大写；
4. 检查输入是否存在于密码列表；
5. 检查当前日期是否与该密码对应；
6. 跳转到相应的 `vaultPasswordX` 标签。

本页解释这一机制如何工作，不直接公开四个关键密码的答案。解谜提示见[密码分级提示](../guide/password-hints.md)。

## 核心处理流程

原始代码的结构可以简化为：

```renpy
$ VaultPassword = renpy.input("INPUT PASSWORD")
$ VaultPassword = VaultPassword.strip()
$ VaultPassword = VaultPassword.upper()

if VaultPassword in passwordList:
    if currentDay == correctDayList[passwordList.index(VaultPassword)]:
        $ renpy.jump(
            "vaultPassword" +
            str(passwordList.index(VaultPassword))
        )
```

其中：

- `passwordList` 保存可以被识别的密码；
- `correctDayList` 保存每个密码对应的正确日期；
- 两个列表中的相同位置表示一组对应关系；
- 密码在列表中的索引决定跳转到哪个 `vaultPasswordX`。

例如，某密码位于列表索引 11，日期表中相同位置为 10，那么它只有在 D10 输入时才会跳转到：

```renpy
vaultPassword11
```

## 大小写与空格

输入会先执行：

```renpy
$ VaultPassword = VaultPassword.strip()
$ VaultPassword = VaultPassword.upper()
```

因此：

- 英文字母不区分大小写；
- 输入首尾多余的空格通常不会影响结果；
- 单词内部的空格不会被自动删除；
- 拼写和内部空格仍然必须与密码表一致。

例如，下列输入在程序中会被视为相同：

```text
example
EXAMPLE
Example
```

但如果某个密码本身包含内部空格，漏写或增加内部空格仍然会导致不匹配。

## 密码与日期必须同时匹配

游戏并不只检查密码本身，还会检查当前日期。

代码逻辑是：

```renpy
if VaultPassword in passwordList:
    if currentDay == correctDayList[
        passwordList.index(VaultPassword)
    ]:
        ...
```

因此，即使输入内容确实存在于密码表中，只要当前日期不正确，也不会进入对应的密码剧情。

b0.85 密码表中包含的主要类型包括：

| 日期 | 密码用途 |
|---:|---|
| D1 | 彩蛋输入 |
| D3 | 彩蛋输入 |
| D4 | Roswell 线首个关键密码 |
| D6 | 其他五条角色线的首个关键密码 |
| D7 | 第二个关键密码 |
| D10 | 第三个关键密码 |
| D11 | 旧密码残留 |
| D17 | 第四个关键密码 |

角色线密码虽然属于同一阶段，但 Roswell 线的输入时间在 D4，其他角色线则在 D6。

## 跳转标签如何确定

当输入和日期均匹配时，游戏会根据密码在列表中的位置构造标签名：

```renpy
"vaultPassword" + str(index)
```

例如：

```text
索引 4
→ vaultPassword4
```

对应标签中会设置剧情变量、显示相关场景或继续后续流程。

因此，密码检定并不是为每个输入单独编写一套读取代码，而是由一个统一入口完成查表和跳转。

## D7 的三个重复槽位

b0.85 的密码表中，D7 对应位置仍然连续保留了三个相同的列表项。

它们分别占用索引：

```text
8
9
10
```

但 Python 的：

```python
passwordList.index(VaultPassword)
```

只会返回该内容**第一次出现的位置**。

因此，输入当前 D7 正确密码时，程序首先得到的始终是索引 8，而不是索引 9 或 10。

表面上看，这似乎会跳转到错误的位置：

```text
输入 D7 正确密码
→ 找到索引 8
→ jump vaultPassword8
```

但当前脚本中的三个标签结构是：

```renpy
label vaultPassword8:

label vaultPassword9:

label vaultPassword10:
    # 当前 D7 正确密码对应的实际剧情
```

`vaultPassword8` 和 `vaultPassword9` 都是空标签。

Ren'Py 的 `label` 只是可跳转位置，不会像函数一样在末尾自动停止。如果一个标签下没有正文，执行会自然继续到下一个标签。

因此，当前实际流程是：

```text
跳转到 vaultPassword8
→ 标签内容为空
→ 继续进入 vaultPassword9
→ 标签内容仍为空
→ 继续进入 vaultPassword10
→ 执行当前 D7 正确密码的剧情
```

这是一种利用空标签自然落穿的兼容写法。

D7 旧密码的历史变化统一整理在[旧版本密码档案](../versions/legacy-passwords.md)。

## D11 残留密码

D11 的旧密码仍保留在密码列表和变量定义中，但当前脚本缺少对应的正常跳转标签与赋值入口，因此在 b0.85 中已经不可正常使用。

其旧版用途、输入条件和代码残留见[旧版本密码档案](../versions/legacy-passwords.md#d11-可选密码)。
