// Everything the live site connects to, in one place. See LAUNCH.md at the repository root for
// how to create each account and where to find these values. None of them are secret: form IDs
// are public by design (they sit in every embed code).

// The public address of the site, used for share links and social preview cards.
export const SITE_URL = 'https://tentides.github.io/dev-suite-devlog';

export const CONTACT_EMAIL = 'tcrawford@nteg.com';
export const BMC_URL = 'https://buymeacoffee.com/tylercrawford';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tyler-l-crawford';

// Kit (kit.com) form IDs: the number in the form's URL, e.g. app.kit.com/forms/1234567/edit.
// One form per list. Turn on "Send incentive email" for both, so nobody is added until they
// confirm by email (the privacy section promises this).
export const KIT_FORMS = {
  waitlist: '9986080', // Kit form "Waitlist" (embed uid 1f3dc98917)
  articles: '9986069', // Kit form "Join the Newsletter" (embed uid d1f3a1f704)
};

// Formspree (formspree.io) form ID: the part after /f/ in the form's endpoint.
export const FORMSPREE_ID = 'xwlpzyyq';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// While an ID is blank, the local dev server pretends the send worked so every state can be
// seen; a production build reports an error instead, so a half-configured site never claims
// to have saved anyone's email.
async function notConfigured(what) {
  if (import.meta.env.DEV) {
    console.warn('[launch] ' + what + ' is not configured yet (site/src/launch.js); simulating success.');
    await wait(700);
    return true;
  }
  throw new Error(what + ' is not configured');
}

// Adds an email to one of the Kit lists. Resolves when Kit has accepted it (the subscriber then
// gets Kit's confirmation email); rejects on a network or Kit error.
export async function subscribe(list, email) {
  const id = KIT_FORMS[list];
  if (!id) return notConfigured('Kit form "' + list + '"');
  const url = 'https://app.kit.com/forms/' + encodeURIComponent(id) + '/subscriptions';
  const body = () => { const f = new FormData(); f.append('email_address', email); return f; };
  let res;
  try {
    res = await fetch(url, { method: 'POST', body: body(), headers: { Accept: 'application/json' } });
  } catch (e) {
    // If the browser blocks reading Kit's reply, send it again without reading the reply.
    // A real network failure throws here too and is reported as an error.
    await fetch(url, { method: 'POST', body: body(), mode: 'no-cors' });
    return true;
  }
  if (!res.ok) throw new Error('Kit returned ' + res.status);
  const data = await res.json().catch(() => ({}));
  if (data && data.status && data.status !== 'success') throw new Error('Kit: ' + data.status);
  return true;
}

// Sends a contact message through Formspree, which emails it to CONTACT_EMAIL.
export async function sendMessage({ name, email, message, topic }) {
  if (!FORMSPREE_ID) return notConfigured('Formspree');
  const res = await fetch('https://formspree.io/f/' + encodeURIComponent(FORMSPREE_ID), {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, topic, _replyto: email, _subject: topic + ' · from ' + name + ' (Dev Log)' }),
  });
  if (!res.ok) throw new Error('Formspree returned ' + res.status);
  return true;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
