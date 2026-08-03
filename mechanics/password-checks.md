---
title: "密码检定的底层机制"
description: "Password b0.85 如何标准化金库输入、匹配日期、动态跳转，并处理 D7 与 D11 的特殊实现"
toc: true
---

本页解释《Password》b0.85 中按日期运行的金库密码系统，但不会公开四次主要检定的答案。

D1 至 D17 的大多数金库输入共用 `vaultInput` label。Path P 最终流程中的键盘输入使用独立的 `FinalPassword` label；D1 咖啡杯姓名也使用另一套区分大小写的输入逻辑。

需要逐级解谜线索时，见[密码分级提示](../guide/password-hints.md)。

## 输入标准化

共用金库输入首先执行：

```renpy
$ VaultPassword = renpy.input("INPUT PASSWORD")
$ VaultPassword = VaultPassword.strip()
$ VaultPassword = VaultPassword.upper()
```

这意味着：

- 不区分英文字母大小写；
- 会删除首尾空白；
- 拼写、标点和密码内部的空格仍必须准确。

例如，`example`、`EXAMPLE` 和 `Example` 会被视为相同输入；但改变单词内部空格或标点后，就会形成不同字符串。

## 列表查找与动态跳转

调度器每次都会重新建立两组平行列表：

- `passwordList`：保存能够识别的字符串；
- `correctDayList`：保存相同位置对应的正确日期。

两个列表通过索引建立对应关系。其逻辑可简化为：

```text
读取输入
→ 删除首尾空白
→ 转为大写

输入已登记，且日期正确
→ 跳转至 vaultPassword<索引>

输入已登记，但日期错误
→ 跳转至 vaultBadDay<当前日期>

去除空白后为空
→ 跳转至 vaultEmpty<当前日期>

输入未登记
→ 跳转至 vaultWrong<当前日期>
```

成功跳转目标由 `passwordList.index()` 返回的第一个匹配位置构造。因此，共用调度器不需要为每个密码分别编写一套硬编码输入分支。

## 成功与失败结果

成功进入某个 `vaultPasswordX` label 后，通常会设置该阶段的成功标记、显示警告或幻象，再返回主线。

但密码成功并不独立决定最终字母线。之后的角色线、角色生死和其他剧情检定仍可能改变结果，详见[字母线系统](../guide/path-system.md)。

即使部分日期显示的对白相似，三类失败跳转仍然不同：

::: {.password-result-table .table-responsive .table-scroll-compact}

| 输入状态 | 跳转目标 |
|---|---|
| 去除首尾空白后为空 | `vaultEmpty<currentDay>` |
| 非空，但不在密码表中 | `vaultWrong<currentDay>` |
| 已登记，但不属于当前日期 | `vaultBadDay<currentDay>` |

:::

部分日期会为“密码正确但日期错误”提供专门提示，其他日期则可能复用普通错误回应。较后期的检定通常还会提供重试或 **Give up** 选项。

## 主要检定阶段

剧情共有四次主要密码检定，但第一阶段分布在 D4 与 D6。

::: {.password-check-stages-table .table-responsive .table-scroll-compact}

| 类型 | 日期 | 作用 |
|---|---:|---|
| 可选彩蛋输入 | D1 | 使用共用金库调度器 |
| 没有可接受答案 | D2 | 会打开金库输入，但没有登记给 D2 的正确答案 |
| 可选彩蛋输入 | D3 | 使用共用金库调度器 |
| 主要检定，第 1A 阶段 | D4 | 设置之后由 Roswell 线读取的成功标记 |
| 主要检定，第 1B 阶段 | D6 | 为其他五条角色线保留五个角色相关字符串 |
| 主要检定，第 2 阶段 | D7 | 使用下文说明的重复索引落穿结构 |
| 主要检定，第 3 阶段 | D10 | 主要字母线分流关口；Sal 线存在失败豁免 |
| 未完成实现 | D11 | 保留密码脚手架，但没有可用成功路径 |
| 主要检定，第 4 阶段 | D17 | 失败后果稍后发生；Tyson 线存在豁免 |
| 独立最终输入 | Path P 最终流程 | 使用 `FinalPassword`，而不是 `vaultInput` |

:::

D1 和 D3 属于可选彩蛋，不是推进主线所需的密码检定。其效果见[彩蛋与隐藏输入](../extras/easter-eggs.md)。

## D4 与 D6 的角色线边界

第一阶段分布在两个不同日期。

### D4

六条角色线都会到达 D4 的金库场景。

D4 的成功 label 本身不会检查当前搭档是否为 Roswell，但由它设置的成功标记，之后只会被 Roswell 线的流程要求。

### D6

Roswell 线不会进入普通 D6 金库检定。其他五条角色线共用同一个输入界面，并登记了五个角色相关字符串。

调度器只检查输入字符串和当前日期，不检查当前角色线。因此，在某条角色线中输入另一个角色对应的有效字符串时，游戏仍会显示那个角色的警告，并设置那个角色对应的成功标记。

但当前角色线真正需要的标记仍然没有写入，所以之后的失败条件仍会成立。

## 角色线专属的失败豁免

Sal 线在 D10 选择 **Give up** 后，密码检定仍然属于失败；只是 Sal 线的专属分支会阻止普通情况下发生的 D11 灾难和 Path C/D 分流。

Tyson 线在 D17 选择 **Give up** 后，同样不会写入成功标记；但之后的 Tyson 线剧情会阻止 D19 灾难和 Path F/G 分流。

这些豁免改变的是**失败的后果**，不会把失败检定改判为成功。完整分流见[字母线系统](../guide/path-system.md)。

## D7 的重复索引落穿

b0.85 中，D7 密码在 `passwordList` 内连续出现三次，索引分别为 8、9 和 10。三个位置对应的日期都设为 D7。

由于 `passwordList.index()` 只返回第一次匹配的位置，正确输入 D7 密码后，程序会得到索引 8，并跳转到 `vaultPassword8`。

三个 label 在脚本中连续排列：

```renpy
label vaultPassword8:

label vaultPassword9:

label vaultPassword10:
    # D7 成功实现
```

前两个 label 都没有正文，因此执行会自然继续到下一个 label。实际控制流是：

```text
vaultPassword8
→ vaultPassword9
→ vaultPassword10
```

这就是当前 D7 答案仍然能够到达完整成功场景的原因。

D7 历史密码变化见[旧版本密码档案](../versions/legacy-passwords.md)。

## D11 的未完成实现

D11 仍保留：

- 一个登记字符串；
- 日期映射；
- 失败处理 label；
- 相关对白；
- 之后会读取 D11 标记的剧情分支。

但正常剧情不会在 D11 打开 `vaultInput`，与该字符串对应的 `vaultPassword12` 成功 label 也不存在。

因此，D11 在 b0.85 中没有可实际使用的密码。残留代码也不会影响四次主要密码检定。

旧版用途与残留背景见[旧版本密码档案](../versions/legacy-passwords.md#d11-可选金库)。

## 相关页面

- [密码分级提示](../guide/password-hints.md)
- [字母线系统](../guide/path-system.md)
- [彩蛋与隐藏输入](../extras/easter-eggs.md)
- [旧版本密码档案](../versions/legacy-passwords.md)
