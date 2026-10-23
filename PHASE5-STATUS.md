# Phase 5 status (hand-off)

## Done
- Bug fixes: monthly repeat and "in N months" no longer skip a month. Tested, including month ends and a leap year.
- Dates: Hindi and Telugu weekdays, "every", "next week", "in N days", Unicode-safe word boundaries. Tested.
- First-run tour (four steps, language first, never over another dialog, counts as seen however closed). Tested.
- Language layer (English, Hindi, Telugu): never translates the user's own text. Tested, including no wrong-script characters and `$` placeholders kept.
- Fonts bundled locally. Accessibility helpers (named dialogs, labelled groups, skip link). Tested.
- Android strings: `values`, `values-hi`, `values-te` with identical keys. All user-facing text in the Java code, including all of `BubbleService`, the Quick add toast, the reminder channel and Done button, and the widget text, now comes from resources. Tests check keys, placeholders, scripts, references and that no English is left in the Java.
- Native screens follow the language chosen inside Nexus (`Loc.java`, the `setLang` bridge, `i18n.js` tells Android).
- `fonts/**` added to the Android workflow paths.
- Flaky attachment test: explained and fixed (a test defect, see PLAY_STORE.md section 4, item 8).
- AAB: `android/build-aab.sh` (bundletool, signing from environment variables, refuses without a key) and the manual `aab.yml` workflow. Built, validated and converted to an installable APK with a throw-away key.
- `PLAY_STORE.md`, README and ROADMAP updated. `MODIFY_AUDIO_SETTINGS` kept on purpose (WebView recording), with a CHECK.

## Not tried
- Installing the APK or the AAB on a real phone, and the new language switching on a real phone.
- Play's review of the overlay, screen-capture and microphone permissions.

## Only you can do
Native-speaker review of Hindi and Telugu (web and Android strings), real-phone testing, a Play Console account, your own release keystore and the four GitHub secrets, screenshots and the feature graphic, a contact email for the listing.
