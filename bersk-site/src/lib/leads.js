import { getUtm } from '../lead/track.js'

// Every lead goes to TWO places so one failing never loses it:
//   1. Email (FormSubmit)  ->  your inbox
//   2. Google Sheet        ->  a row in your "Leads" sheet (see google-sheet/Code.gs)
export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mishaeledegwa@gmail.com'

// Paste your Google Apps Script web app URL here after you deploy it.
// Empty = sheet saving is off and only the email is sent.
export const SHEET_ENDPOINT = ''

const LABELS = {
  name: 'Name', whatsapp: 'WhatsApp', email: 'Email', phone: 'Phone', company: 'Company',
  wants_built: 'Wants built', budget: 'Budget band', start: 'Wants to start',
  message: 'Message', source: 'Source', variant: 'Headline variant',
  utm_source: 'utm_source', utm_medium: 'utm_medium', utm_campaign: 'utm_campaign',
  utm_content: 'utm_content', utm_term: 'utm_term', fbclid: 'fbclid',
}

// lead: plain object with the keys above. Throws only if BOTH destinations fail.
export async function submitLead(lead, { subject }) {
  const utm = getUtm()
  const full = { ...lead, ...utm, variant: utm.headline_variant || lead.variant || '' }

  const emailBody = { _subject: subject, _template: 'table', _honey: '' }
  if (full.email) emailBody._replyto = full.email
  Object.entries(full).forEach(([k, v]) => {
    if (v !== '' && v != null && k !== 'headline_variant') emailBody[LABELS[k] || k] = v
  })

  const tasks = [
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(emailBody),
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error('email failed')
    }),
  ]

  if (SHEET_ENDPOINT) {
    // Apps Script web apps don't send CORS headers, so this is fire-and-forget
    tasks.push(
      fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(full),
      }),
    )
  }

  const results = await Promise.allSettled(tasks)
  if (!results.some((r) => r.status === 'fulfilled')) throw new Error('all destinations failed')
}
