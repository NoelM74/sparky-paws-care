# Newsletter signup — how to connect it

The signup form is live on every page. **It works right now with no setup**, but the
default mode is a fallback. Read this to pick the right option.

Configuration lives at the top of `assets/js/main.js`:

```js
var SIGNUP_ENDPOINT = '';                          // where the form POSTs
var SIGNUP_EMAIL    = 'hello@sparkypawscare.com';  // mailto fallback target
```

---

## Why there's a choice to make

This is a static site — HTML and CSS on a CDN, with no server. A static site
**cannot send email by itself**. Something has to receive the submission. The
three options below differ in what does the receiving.

---

## Option 1 — Listmonk (recommended)

You already run Listmonk for the newsletter. It has a public subscription
endpoint built for exactly this, so it needs no third party and no new service.

Subscribers land straight in your list with double opt-in, and unsubscribes and
bounces keep flowing through the same pipeline you already have.

Set:

```js
var SIGNUP_ENDPOINT = 'https://YOUR-LISTMONK-HOST/api/public/subscription';
```

Listmonk expects `email` and a list UUID. In `main.js`, change the `body` in the
`fetch` call to:

```js
body: JSON.stringify({
  email: email,
  name: '',
  list_uuids: ['YOUR-LIST-UUID']
})
```

You'll need CORS enabled on the Listmonk host for `https://sparkypawscare.com`.

**Trade-off:** requires Listmonk to be publicly reachable over HTTPS.

---

## Option 2 — A form service

Services like Formspree, Web3Forms, or Basin give you a URL that forwards
submissions to an inbox. Point them at `hello@sparkypawscare.com`.

```js
var SIGNUP_ENDPOINT = 'https://formspree.io/f/YOUR-FORM-ID';
```

No other code change needed — the form already POSTs JSON with an
`Accept: application/json` header, which these services understand.

**Trade-off:** a third party sees every subscriber address, which you should
name in the Privacy Policy under "Service providers". Free tiers cap volume.

---

## Option 3 — Do nothing (current default)

With `SIGNUP_ENDPOINT` empty, submitting opens the person's email client with a
pre-filled message to `hello@sparkypawscare.com`. You add them manually.

**Trade-off:** this is the weakest option. It's fine for launch or low volume,
but it loses anyone without a configured mail client, and it converts far worse
than an inline form because it drops the person out of the browser.

Move to Option 1 before you drive real traffic.

---

## What the form already handles

- Client-side email validation with an inline, screen-reader-announced error
- A honeypot field that silently absorbs naive bots
- Disabled submit + "Signing you up…" state while the request is in flight
- Success and failure messages, with the failure message giving the direct
  email address as a fallback
- Full keyboard operation, a real `<label>`, and `aria-live` status updates
- 44px minimum touch targets

## What it does NOT handle

- **Double opt-in** — Option 1 gives you this for free. Options 2 and 3 don't.
  Sending marketing email without confirmed consent is a GDPR problem for an
  Irish-established controller, so don't skip this.
- **Rate limiting** — the honeypot stops crude bots, nothing else. A form service
  or Listmonk gives you real abuse protection.
- **Storing anything** — nothing is persisted client-side, by design.
