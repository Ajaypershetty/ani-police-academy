# ANI Police Academy V136 — Android Production Release

## Release target
Build a signed Android App Bundle (`.aab`) for Play Console testing.

## Before building
- Set the final Android application ID/package name.
- Point the app to the production HTTPS API.
- Confirm no Cashfree secret or database credential is bundled in Android.
- Configure the release signing key in Android/Gradle secrets.
- Set versionCode/versionName.
- Verify launcher icon, splash screen and adaptive icon.
- Verify INTERNET permission only; do not request unnecessary permissions.

## Billing/payment compliance
ANI sells digital premium educational access. Before production submission, confirm the current Google Play billing requirements and any applicable India alternative-billing enrollment/reporting requirements for the chosen distribution model.

## Build
1. Open the Android project in Android Studio.
2. Configure release signing.
3. Run unit/build checks.
4. Build `bundleRelease`.
5. Install/test the release build on physical Android devices.
6. Upload the exact tested `.aab` to Play Console internal testing.

## Never include
- JWT_SECRET
- DATABASE_URL
- CASHFREE_CLIENT_SECRET
- CASHFREE_WEBHOOK_SECRET
- PostgreSQL credentials
