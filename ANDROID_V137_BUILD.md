# V137 Android Build

A minimal Android Studio project is now included under `android/`.

### Before building
- Replace `https://YOUR_DOMAIN` with the production HTTPS URL.
- Confirm the production backend is live.
- Configure the release keystore securely.
- Do not place Cashfree secrets, JWT secrets or database credentials in the Android project.

### Build
Open `android/` in Android Studio, sync Gradle, then build a signed **Android App Bundle (.aab)**.

The generated AAB must be installed/tested through Play Console internal testing before public release.
