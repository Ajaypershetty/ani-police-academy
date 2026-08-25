# ANI Police Academy — Production Launch Checklist

## 1. Backend
- [ ] Deploy PostgreSQL with automated backups
- [ ] Run every migration in `backend/migrations`
- [ ] Configure production environment variables
- [ ] Use a long random `JWT_SECRET`
- [ ] Configure Cashfree production credentials
- [ ] Configure Cashfree webhook URL and secret
- [ ] Put the API behind HTTPS
- [ ] Verify `/health/ready` returns ready=true

## 2. Security
- [ ] Confirm admin accounts use strong passwords
- [ ] Confirm no secrets are committed to Git
- [ ] Test rate limits
- [ ] Test suspended users cannot access protected APIs
- [ ] Test premium APIs with FREE and PREMIUM accounts
- [ ] Test expired subscriptions
- [ ] Test payment webhook signature rejection
- [ ] Test duplicate payment/webhook events

## 3. Student app
- [ ] Test registration
- [ ] Test login/logout
- [ ] Test password reset
- [ ] Test practice
- [ ] Test mock tests
- [ ] Test results/analytics
- [ ] Test notifications
- [ ] Test profile
- [ ] Test all four premium plans

## 4. Payments
- [ ] Verify ₹99 / 1 month
- [ ] Verify ₹199 / 3 months
- [ ] Verify ₹499 / 6 months
- [ ] Verify ₹999 / 1 year
- [ ] Verify UPI payment
- [ ] Verify card payment
- [ ] Verify failed payment
- [ ] Verify cancelled checkout
- [ ] Verify successful payment activates only the purchaser
- [ ] Verify renewal/expiry behavior

## 5. Release
- [ ] Build signed Android release
- [ ] Create privacy policy
- [ ] Create terms/refund policy
- [ ] Prepare Play Store listing
- [ ] Complete Play billing/alternative-billing compliance for the chosen distribution
- [ ] Internal testing
- [ ] Closed testing
- [ ] Production rollout
