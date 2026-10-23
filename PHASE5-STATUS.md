# Phase 5 status (hand-off)

## Done and in this package
- Bug fixes: monthly repeat / "in N months" no longer skips a month (addMo in index.html, features.js, dates.js).
- Dates: Hindi and Telugu weekdays, "every / next week / in N days" phrases, Unicode-safe word boundaries (dates.js).
- First-run tour rebuilt (launch.js): 4 steps, language chooser, never opens over another dialog, counts as seen however it is closed.
- Language layer (i18n.js + i18n-data.js): English, Hindi, Telugu. Never translates the user's own text.
- Language picker in Settings; dates follow the chosen language.
- Fonts bundled locally (fonts/, fonts.css): Familjen Grotesk, Noto Sans Devanagari, Noto Sans Telugu. Google Fonts removed from every page.
- Accessibility helpers (launch.js): dialogs named, focus returns, chip groups labelled, skip link.
- Android: .woff2 MIME type, build.sh copies fonts/, workflow watches fonts/**.
- privacy.html: font sentence corrected, Android permissions section added.
- Version 3.4.0; sw.js cache list updated.
- All existing tests pass (after the version-string update in tests/vault.mjs).

## Still to do (next session)
1. i18n-data.js: run a crawl in Hindi/Telugu mode and fill the strings that are still English
   (recap, plan, command palette, sync/encryption dialogs, long help text). Native speaker must review Hindi and Telugu.
2. New tests: language layer (user text never translated, no wrong-script characters), date fixes, tour, a11y audit.
3. Android: values-hi / values-te string files; move hard-coded English out of the Java code
   (Done button, "Task reminders" channel, widget labels "today"/"tomorrow").
4. AAB build script + release signing from secrets (Play needs an AAB, not the debug APK).
5. PLAY_STORE.md: listing text, data-safety answers, justification for overlay / screen-capture / foreground-service permissions.
6. README + ROADMAP update, rebuild APK to verify.

## Only you can do
Native-speaker review of the translations, real-phone testing, Play Console account, release keystore, screenshots.
