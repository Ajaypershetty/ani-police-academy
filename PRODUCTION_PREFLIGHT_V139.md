# V139 — Production Preflight

This version prepares the exact preflight needed immediately before deployment.

## Required environment
- DATABASE_URL
- JWT_SECRET (32+ characters)
- CASHFREE_CLIENT_ID
- CASHFREE_CLIENT_SECRET
- CASHFREE_WEBHOOK_SECRET
- CASHFREE_ENV=production
- PUBLIC_API_URL=https://...

## Run
From the project root:

`node scripts/production-preflight.mjs`

If variables are missing, the script intentionally blocks deployment.

## After preflight
1. Deploy PostgreSQL.
2. Run migrations.
3. Deploy the API.
4. Verify `/health` and `/health/ready`.
5. Configure Cashfree webhook.
6. Run sandbox/live-approved payment tests.
7. Verify Premium entitlement and expiry.
8. Build the signed Android AAB.
