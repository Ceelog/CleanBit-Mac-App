# CleanBit Privacy Policy

**Effective date:** October 31, 2026  
**Last updated:** October 31, 2026

This Privacy Policy explains how Dongguan Aibeike AI Co., Ltd. (**“we,” “us,”** or **“our”**) handles information when you use CleanBit (the **“App”**), a macOS application that finds and removes caches, logs, build artifacts, duplicate and large files, and leftovers of uninstalled apps. By using the App, you acknowledge the practices described below.

## 1. Summary

- CleanBit scans and cleans files on your Mac locally. File names, folder paths, file contents, and the names of your installed apps are never uploaded.
- Scan results, cleaning history, folder-access bookmarks, and settings are stored only on your Mac.
- CleanBit uses Firebase Analytics to understand basic App usage, scan and cleaning performance, and purchase-flow reliability. Analytics contains counts, sizes, and fixed identifiers, never your files or paths.
- Purchases are processed by Apple through the Mac App Store. CleanBit does not receive or store your payment-card details.
- CleanBit does not require an account and does not sell your personal information.

## 2. Information Processed on Your Device

### Files and folders

To find space that can be freed, CleanBit reads file and folder metadata, such as names, paths, sizes, dates, and file identity, within the folders you grant access to. To find duplicate files, it computes content checksums of candidate files on your Mac. To find large files faster, it may query the macOS Spotlight index, including a file's last-opened date. To show which apps are running or installed, it reads app information provided by macOS.

All of this processing occurs locally. CleanBit does not upload file names, paths, contents, checksums, or app lists.

### Data stored locally

CleanBit stores the following on your Mac, inside the App's own sandbox container:

- **Settings and preferences**, such as theme, dry-run mode, deletion behavior, menu bar and launch-at-login options, low-space alerts, project folders, and your “never clean” lists;
- **Folder-access bookmarks** for the folders you grant in the open panel, so the App can reopen them without asking again;
- **Analysis cache**, the last result of each page, which may contain file paths and sizes, so a page can show its last result until you refresh it;
- **Cleaning history**, a log of each cleaning session, including the paths, sizes, and outcome of each item; and
- **Purchase state**, such as how many free cleans you have used.

Revoking home-folder access in the App deletes the analysis cache and the App's in-memory results. Local data is removed when you delete the App and its container in accordance with macOS functionality.

## 3. Analytics Information

CleanBit integrates Google Firebase Analytics to help us understand whether the App works as expected and which features need improvement. Depending on the Firebase SDK and your device configuration, analytics information may include:

- App launches and which pages of the App are viewed;
- scan and cleaning events, with the feature used, built-in rule identifiers (for example, “Xcode DerivedData”), item counts, sizes rounded to megabytes, and durations;
- whether home-folder access and Full Disk Access are granted, and whether dry-run mode is on;
- the capacity and free space of your startup disk, reported only as ranges (for example, “256 GB” or “25–50 GB free”);
- settings changed and generic setting values, such as on or off;
- views of the upgrade screen, and purchase and restore workflow events, including product identifier, price, currency, outcome, and limited error domain or error code when a workflow fails;
- your customer type, remaining free cleans, App Store storefront country, interface language, and build type (App Store, TestFlight, or development); and
- standard technical information automatically processed by Firebase, such as an app-instance identifier, device and operating-system information, App version, general geographic region inferred from an IP address, and event timestamps.

We use this information for product analytics, troubleshooting, measuring feature adoption, improving cleaning rules, and evaluating the reliability of the purchase flow. We do not send file names, folder paths, file contents, app names or bundle identifiers, search terms, localized error messages, or payment-card information to Firebase.

Firebase processes analytics information under Google's applicable terms and privacy practices. More information is available from [Google's Firebase privacy documentation](https://firebase.google.com/support/privacy) and [Google's Privacy Policy](https://policies.google.com/privacy).

## 4. Purchases

CleanBit offers free scanning and a limited number of free cleans. Unlimited cleaning is available through a one-time lifetime purchase or an auto-renewable subscription, processed by Apple through StoreKit and the Mac App Store. Apple processes the transaction, payment method, billing, renewals, refunds, and related account information. CleanBit receives only the information StoreKit makes available to verify and restore the applicable entitlement.

Apple handles information under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## 5. Information You Provide to Support

If you contact us for support, we receive the information you choose to provide, such as your contact details, message, and any diagnostic results or screenshots you attach. Screenshots of scan results may show file names and paths; review them before sending.

## 6. Permissions

CleanBit runs in the macOS App Sandbox and can only access what you grant:

- **Home folder:** required. You choose it in a standard macOS open panel. You can revoke it in the App's settings.
- **Full Disk Access:** optional. It lets CleanBit measure and clean the Trash and caches held in other apps' containers. You grant or revoke it in **System Settings → Privacy & Security → Full Disk Access**.
- **Applications folder:** optional, only needed to uninstall apps. You choose it in an open panel.
- **Notifications:** optional, only used for low-disk-space alerts when you turn them on.

## 7. Contact

**Data controller / application provider:** Dongguan Aibeike AI Co., Ltd.  
For privacy questions or requests, email [support@pokiai.com](mailto:support@pokiai.com?subject=CleanBit%20Privacy) or visit our [Support page](/support/).
