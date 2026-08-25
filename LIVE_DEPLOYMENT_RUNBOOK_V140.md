# ANI Police Academy V140 — Live Deployment Runbook

This is the handoff from code completion to real infrastructure.

## A. Create production services
- Managed PostgreSQL database with automated backups.
- Backend API service/container.
- HTTPS domain for the API.
- Secret/environment-variable storage.

## B. Configure backend
Set:
- `NODE_ENV=production`
- `DATABASE_URL`
- `JWT_SECRET`
- `CASHFREE_ENV=production`
- `CASHFREE_CLIENT_ID`
- `CASHFREE_CLIENT_SECRET`
- `CASHFREE_WEBHOOK_SECRET`
- `PUBLIC_API_URL=https://...`

## C. Deploy and migrate
Run the backend and then:

`node backend/scripts/migrate.mjs`

## D. Verify the live API
Set `PUBLIC_API_URL` to the real deployed API and run:

`node scripts/verify-live-api.mjs`

Both `/health` and `/health/ready` must succeed.

## E. Payment verification
Use Cashfree sandbox first. Then, after the production account/webhook is approved and configured, perform an authorized small production test.

Verify:
- ₹99 → 30-day entitlement
- ₹199 → 90-day entitlement
- ₹499 → 180-day entitlement
- ₹999 → 365-day entitlement
- failed/cancelled payment → no entitlement
- invalid webhook → rejected
- replayed webhook → no duplicate entitlement

## F. Android
Replace the placeholder API URL in `AppConfig.java`, configure release signing, build the signed AAB, and test that exact AAB.

## G. Launch
Internal testing → closed testing → production rollout.

**Do not put database, JWT, or Cashfree secret keys into the Android app.**
