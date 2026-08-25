# V138 Live Verification

After production deployment:
1. `/health` returns HTTP 200.
2. `/health/ready` returns `ready=true`.
3. Android points to the same HTTPS API.
4. Registration/login/logout work.
5. Notifications work.
6. ₹99, ₹199, ₹499 and ₹999 payment plans work.
7. Failed/cancelled payments never grant Premium.
8. Successful payments grant the correct expiry.
9. Webhook signatures are rejected when invalid.
10. Replayed payment events do not duplicate entitlement changes.

Test in Cashfree sandbox first, then production.
