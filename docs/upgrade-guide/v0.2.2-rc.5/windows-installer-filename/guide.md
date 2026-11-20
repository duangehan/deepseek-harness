---
kind: upgrade-guide
description: "Scripts matching versioned Windows installer names must use the changhangzhiyou-harness prefix for new builds."
---

# Windows installer filename prefix

English | [中文](guide.zh.md)

## Change

New versioned Windows installers and their blockmaps use the `changhangzhiyou-harness-` prefix. Scripts that locate builds by the previous `deepseek-harness-` prefix need to account for the new filenames.

## Migration

1. Update globs and versioned download URLs for new Windows builds to use `changhangzhiyou-harness-<version>-win-x64.exe`.
2. If the script handles historical releases, keep matching the former prefix for those releases.
3. Confirm that the selected installer and its blockmap, when present, have the same version and prefix.
