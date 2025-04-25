# Redirector

A tiny, zero-config Next.js app that helps you manage email-safe redirects.  
Host a single link on your own domain, then send visitors on to any URL after a 3–5 second pause.  

Why use this?  
- **Preserves deliverability**  
  Only one outbound domain in your email link—no extra redirects to hurt your reputation.  
- **Easy setup**  
  Clone, set your `TARGET_URL` in `.env.local`, and deploy to Vercel (or any Next.js host).  
- **Custom delay**  
  Default pause is 3–5 seconds, but you can tweak timing in a single config file.  

Perfect for cold-mail campaigns, one-click landing pages, or any situation where link reputation matters.


#Directions

1. Change your logo in public folder, also personalise by changing brand related text.
2. Make a .env file
3. Add your redirect URL