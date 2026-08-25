# ANI Police Academy — V135 Production Deployment

1. Create managed PostgreSQL with automated backups.
2. Deploy the backend service/container.
3. Configure secrets from `backend/.env.production.example`.
4. Run `node backend/scripts/migrate.mjs`.
5. Verify `/health` and `/health/ready`.
6. Put the API behind HTTPS.
7. Configure the Cashfree production webhook at `/payments/webhook`.
8. Test UPI/card payments for all four plans.
9. Verify premium entitlement and expiry in the production database.
10. Only then point the Android release to the production API.

Never commit DATABASE_URL, JWT_SECRET or Cashfree secrets.
