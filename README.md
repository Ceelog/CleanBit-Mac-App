# CleanBit: Disk Space Cleaner for macOS

**Free up Mac disk space and know exactly what you're removing.**

CleanBit is a native SwiftUI disk space cleaner built for macOS 15+ and distributed exclusively on the Mac App Store inside Apple's App Sandbox. Every item explains what it is and what happens if you remove it—and nothing is deleted until you confirm.

- **Website:** https://getcleanbit.app/
- **简体中文:** https://getcleanbit.app/zh/
- **Mac App Store:** https://apps.apple.com/app/apple-store/id6829159531?pt=127116872&ct=github-readme&mt=8
- **Video Demo (YouTube):** https://www.youtube.com/watch?v=SQDQhvJGRfY
- **Storage Guides:** https://getcleanbit.app/guides/

![CleanBit Smart Scan](assets/screens/en-smart-scan.webp)

## Key Highlights

- **Three Clear Safety Tiers:** Results are grouped into *Recommended* (caches that rebuild automatically), *Review* (not pre-selected; always moved to the Trash), and *Info Only* (shown for awareness; never deletable).
- **Transparent Confirmation:** Before deletion, CleanBit splits how much goes to the Trash vs. what is permanently deleted—and re-checks every item right before removing it.
- **Built for Developers & AI Coding:**
  - Xcode DerivedData, old iOS DeviceSupport versions, SwiftUI previews, and shut-down simulator caches
  - Package manager caches: npm, Yarn, pnpm, Bun, pip, uv, Swift Package Manager, CocoaPods, Homebrew, Go, Cargo, and Gradle
  - **Build Artifacts:** `node_modules`, `target`, `.build`, `.venv`, and `Pods` with last-modified dates; anything tracked by Git is skipped automatically
  - **AI Tools & Sessions:** Old Claude Code versions, Claude desktop caches, and date-filtered Claude Code / Codex sessions; local models (Hugging Face, Ollama, LM Studio) are listed as info-only
- **Space Analysis, Large Files, Duplicates & App Uninstaller:** Visual folder map, Spotlight-assisted large file search, byte-identical duplicate finder (always keeping at least one copy), and clean app removal.
- **Sandboxed & Honest:** Runs in macOS App Sandbox with no root privileges and no background helper daemon. File names, paths, and file contents never leave your Mac.
- **9 Languages & Per-Group Cleaning (v1.0.1):** Supports English, Simplified Chinese, Traditional Chinese, Japanese, Korean, French, German, Spanish, and Russian (following macOS system language), plus per-group cleaning inside Smart Scan.

## Guides

Practical Mac storage guides with manual Terminal and Finder steps:

- [Best Tools to Clean Up Developer Disk Space on a Mac (2026): Xcode, node_modules & Docker (CLI & GUI)](https://getcleanbit.app/guides/best-developer-disk-cleaners-mac/)
- [Best Disk Cleaners on the Mac App Store (2026): Sandboxed, No Root & One-Time Purchase Options](https://getcleanbit.app/guides/best-disk-cleaners-mac-app-store/)
- [Claude Code Worktrees Filling Your Disk? How to Find and Remove Leftover Git Worktrees](https://getcleanbit.app/guides/claude-code-worktrees-disk-space-mac/)
- [Is It Safe to Delete `~/Library/Caches` on a Mac? How to Clear Cache Safely](https://getcleanbit.app/guides/is-it-safe-to-delete-library-caches-mac/)
- [iOS DeviceSupport and Simulators Taking 40 GB? What You Can Safely Remove](https://getcleanbit.app/guides/ios-devicesupport-and-simulators-disk-space-mac/)
- [Claude Code, Cursor and Codex Eating Disk Space on Your Mac? Here's Where It Goes](https://getcleanbit.app/guides/claude-code-cursor-codex-disk-space-mac/)
- [How to Find and Delete Old `node_modules` Folders on a Mac](https://getcleanbit.app/guides/how-to-find-and-delete-old-node-modules-on-mac/)
- [Is Xcode DerivedData Safe to Delete? What Happens and How to Clean It](https://getcleanbit.app/guides/is-xcode-deriveddata-safe-to-delete/)
- [Mac 上怎么找出并安全清理旧的 `node_modules`？](https://getcleanbit.app/zh/guides/mac-delete-node-modules/)

## Support & Legal

- [Support & Troubleshooting](https://getcleanbit.app/support/)
- [Privacy Policy](https://getcleanbit.app/privacy/)
- [Terms of Use](https://getcleanbit.app/terms/)

## Local Preview (Website Source)

This repository hosts the static source for CleanBit's official website and guides (zero external dependencies, Node.js 20+):

```bash
npm run build
npm run preview
```
