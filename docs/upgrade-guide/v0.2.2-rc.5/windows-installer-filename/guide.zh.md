---
kind: upgrade-guide
description: "匹配带版本号的 Windows 安装包的脚本需要为新构建使用 changhangzhiyou-harness 前缀。"
---

# Windows 安装包文件名前缀

[English](guide.md) | 中文

## 变更

新的带版本号的 Windows 安装包及其 blockmap 使用 `changhangzhiyou-harness-` 前缀。按原有 `deepseek-harness-` 前缀定位构建产物的脚本需要适配新文件名。

## 迁移

1. 将新 Windows 构建的文件匹配模式和版本下载地址改为使用 `changhangzhiyou-harness-<版本>-win-x64.exe`。
2. 如果脚本还处理历史发布，为这些发布保留旧前缀匹配。
3. 确认选中的安装包与对应的 blockmap（如果存在）具有相同的版本和前缀。
