// ─────────────────────────────────────────────────────────────
// Landing page settings. Fill these in as you get them.
// Anything left empty is simply hidden or switched off on the page.
// ─────────────────────────────────────────────────────────────
export const LEAD_CONFIG = {
  // Where leads are sent (email + Google Sheet) is set in src/lib/leads.js

  // Meta Pixel ID, e.g. '123456789012345'. Empty = no tracking script loaded.
  pixelId: '',

  // WhatsApp number in international format, digits only, e.g. '2348012345678'
  whatsappNumber: '',
  whatsappMessage: "Hi Bersk, I just booked a strategy call and I'd like to chat.",

  // Booking calendar link (Calendly, Cal.com, etc.). Shown on the thank-you page.
  calendarUrl: '',

  // Video for Step 1. Put the compressed .mp4 in /public and use e.g. '/lead-video.mp4'
  videoSrc: '',
  videoPoster: '',
  videoCaptions: '', // optional .vtt file

  // Galuxe proof. Only fill `result` and `timeframe` once Galuxe has approved in writing.
  galuxe: {
    result: '', // e.g. 'Orders up 17.2%'
    timeframe: '', // e.g. 'in the first 90 days'
    quote: '', // client quote, only with written approval
    quoteBy: '',
  },

  // Rough budget bands in Naira (confirm your minimum project budget before launch)
  budgetBands: [
    'Under ₦500,000',
    '₦500,000 – ₦1,500,000',
    '₦1,500,000 – ₦5,000,000',
    'Above ₦5,000,000',
    'Not sure yet',
  ],
}
