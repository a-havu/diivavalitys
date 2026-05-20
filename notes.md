To verify your domain with Resend:

Go to resend.com and create a free account
Go to Domains → Add Domain → enter the agency's domain
Resend will give you a few DNS records to add to your domain settings
Add those records in your domain registrar (wherever the domain was purchased — e.g. GoDaddy, Namecheap, etc.)
Click Verify in Resend — takes a few minutes to propagate

Once verified you can use any email on that domain as the from address:
from: 'contact@diivis.fi'
to: 'manager@diivis.fi'


Step 1 — Add your domain
From your Resend dashboard, go to Domains, click Add Domain, enter your domain (or subdomain) for diivis, and click Add Domain.
Step 2 — Get your DNS records
Once added, Resend will show the required DNS records you need to add. You'll need to configure two mandatory records:

SPF — a TXT record listing IP addresses authorized to send email on behalf of your domain Resend
DKIM — a TXT record containing a public key used to verify email authenticity Resend

Step 3 — Add records to your DNS provider
Go to wherever your DNS is managed (Cloudflare, GoDaddy, Namecheap, etc.) and add those records. Resend's UI adapts based on your DNS provider — for example, if you're using Cloudflare or Google Domains, it tailors the interface to match their settings. Resend
Step 4 — Verify
Click Check DNS next to your domain. Resend will query each record and update the status indicators. Propagation can take up to 24 hours. When all checks pass, the domain status changes to Verified. 
Optional: DMARC
Once SPF and DKIM verify, you can optionally add a DMARC record to build additional trust with mailbox providers. 