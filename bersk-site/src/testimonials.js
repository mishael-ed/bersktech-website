// ─────────────────────────────────────────────────────────────
// Client testimonials shown on the home page.
// Real client quotes (shortened from the full feedback). Add more entries as they come in.
//
//   quote: array of pieces. Mark the part you want highlighted in blue with  h: true
//   name / role / company / location: who said it (location is optional)
//   logo:  optional image path in /public, e.g. '/logos/clients/acme.webp'
//   photo: optional headshot in /public, e.g. '/clients/jane.webp' (initials show if empty)
// ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: [
      { t: 'Working with Bersk was a great experience from start to finish. The entire process was seamless, and the final result ' },
      { t: 'exceeded our expectations', h: true },
      { t: '.' },
    ],
    name: 'Kene Emmanuel',
    role: 'CEO',
    company: 'Galuxe',
    location: 'Nigeria',
    logo: '/logos/clients/galuxe.webp',
    photo: '',
  },
  {
    quote: [
      { t: 'They took the time to understand our challenges and delivered a solution that ' },
      { t: 'made our processes more efficient', h: true },
      { t: '. A team we’d confidently work with again.' },
    ],
    name: 'Judaah Chandler',
    role: 'CEO & Founder',
    company: 'Aggie Carpet Cleaning',
    location: 'United States',
    logo: '/logos/clients/aggie.webp',
    photo: '',
  },
]
