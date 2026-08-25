# Android Release Checklist

## Before build
- [ ] Set final application/package ID.
- [ ] Set final app name: ANI Police Academy.
- [ ] Replace development API URL with production HTTPS API URL.
- [ ] Remove development payment configuration.
- [ ] Confirm no API keys/secrets are bundled in the APK/AAB.
- [ ] Confirm app icon, splash screen and screenshots.
- [ ] Set version code/version name.
- [ ] Configure release signing key and store it securely.

## QA
- [ ] Registration/login/logout.
- [ ] Password reset.
- [ ] Student dashboard.
- [ ] Practice.
- [ ] Mock tests.
- [ ] Results/analytics.
- [ ] Notifications.
- [ ] Profile.
- [ ] Admin access is unavailable to students.
- [ ] FREE users cannot call premium endpoints successfully.
- [ ] PREMIUM users can access premium endpoints.
- [ ] Expired subscriptions lose premium access.
- [ ] ₹99 / ₹199 / ₹499 / ₹999 payment flows.
- [ ] Failed/cancelled payments do not grant premium.
- [ ] Webhook replay/idempotency.
- [ ] App works on common Android screen sizes.

## Release
- [ ] Build signed `.aab`.
- [ ] Test the exact release build.
- [ ] Upload to Play Console internal testing.
- [ ] Complete required Play Console declarations.
- [ ] Complete applicable billing/alternative-billing enrollment.
- [ ] Closed test.
- [ ] Production rollout.
