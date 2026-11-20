# CleanBit: Disk Space Cleaner for macOS

**Free up Mac disk space and know exactly what you're removing.**

CleanBit is a native SwiftUI disk space cleaner built for macOS 15+ and distributed exclusively on the Mac App Store inside Apple's App Sandbox. Every item explains what it is and what happens if you remove it—and nothing is deleted until you confirm.

- **Website:** https://ceelog.github.io/CleanBit-Mac-App/
- **简体中文:** https://ceelog.github.io/CleanBit-Mac-App/zh/
- **Mac App Store:** https://apps.apple.com/app/apple-store/id6829159531?pt=127116872&ct=github-readme&mt=8
- **Video Demo (YouTube):** https://www.youtube.com/watch?v=SQDQhvJGRfY
- **Storage Guides:** https://ceelog.github.io/CleanBit-Mac-App/guides/

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

## Guides

Practical Mac storage guides with manual Terminal and Finder steps:

- [How to Find and Delete Old `node_modules` Folders on a Mac](https://ceelog.github.io/CleanBit-Mac-App/guides/how-to-find-and-delete-old-node-modules-on-mac/)
- [Is Xcode DerivedData Safe to Delete? What Happens and How to Clean It](https://ceelog.github.io/CleanBit-Mac-App/guides/is-xcode-deriveddata-safe-to-delete/)
- [Mac 上怎么找出并安全清理旧的 `node_modules`？](https://ceelog.github.io/CleanBit-Mac-App/zh/guides/mac-delete-node-modules/)

## Support & Legal

- [Support & Troubleshooting](https://ceelog.github.io/CleanBit-Mac-App/support/)
- [Privacy Policy](https://ceelog.github.io/CleanBit-Mac-App/privacy/)
- [Terms of Use](https://ceelog.github.io/CleanBit-Mac-App/terms/)

## Local Preview (Website Source)

This repository hosts the static source for CleanBit's official website and guides (zero external dependencies, Node.js 20+):

```bash
node build.mjs
python3 -m http.server -d docs 4173
```
