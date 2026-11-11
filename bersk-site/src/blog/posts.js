// ─────────────────────────────────────────────────────────────
// Blog posts. To add one, copy a post below, change the slug, title and text.
//
// Each block in `blocks` is one of:
//   { t: 'p',    c: 'A paragraph' }
//   { t: 'h2',   c: 'A heading' }
//   { t: 'ul',   c: ['bullet', 'bullet'] }
//   { t: 'ol',   c: ['step', 'step'] }
//   { t: 'note', c: 'A highlighted tip' }
// Inside text you can use  **bold**  and  [link text](/page-or-url)
// ─────────────────────────────────────────────────────────────

export const POSTS = [
  {
    slug: 'how-to-choose-a-software-development-company-in-lagos',
    title: 'How to Choose a Software Development Company in Lagos',
    seoTitle: 'How to Choose a Software Company in Lagos | Bersk',
    description:
      'A plain-words checklist for choosing a software development company in Lagos, Nigeria: what to look for, what to ask, and the red flags to avoid.',
    category: 'Choosing a developer',
    date: '2026-11-11',
    blocks: [
      { t: 'p', c: 'Choosing who builds your software is one of the biggest decisions you will make for your business or your idea. A good team saves you months and money. The wrong one can leave you with a half-finished product and nothing to show for your budget. This guide gives you a simple way to choose, whether you are hiring a software development company in Lagos or anywhere else.' },
      { t: 'h2', c: 'Start with the problem, not the technology' },
      { t: 'p', c: 'Before you speak to anyone, write down what you want to achieve in one or two sentences. For example: “Customers should be able to book and pay online without calling us.” A good developer asks about the problem first and the technology second. If someone starts naming tools before they understand your goal, be careful.' },
      { t: 'h2', c: 'Look at what they have actually built' },
      { t: 'p', c: 'Ask to see live products, not just pictures. Open them on your phone, click around, and check that they load quickly and work properly. Then ask whether you can speak to a past client. A team that is proud of its work will be happy to arrange this. You can see an example of our own work in our [case studies](/case-studies).' },
      { t: 'h2', c: 'Check how they communicate' },
      { t: 'ul', c: [
        'They explain things in plain words, not jargon.',
        'You can reach them directly, on a channel you actually use such as WhatsApp, email or calls.',
        'They put the plan in writing instead of leaving it as a conversation.',
      ] },
      { t: 'p', c: 'Communication in the first week usually predicts the whole project. If answers are slow or vague before you have paid anything, it rarely improves later.' },
      { t: 'h2', c: 'Ask who will actually build your product' },
      { t: 'p', c: 'Some companies sell you with one team and then hand the work to another, or pass it through several layers. Ask who the developers are, whether you will speak to them directly, and who is responsible if something goes wrong. Fewer layers means fewer misunderstandings.' },
      { t: 'h2', c: 'Get scope, timeline and price in writing' },
      { t: 'p', c: 'Before you agree to anything, ask for a written plan that covers:' },
      { t: 'ul', c: [
        'What is included, and what is not.',
        'The main stages and when each one should be done.',
        'How much each stage costs and when payments are due.',
        'What happens when you want to change something.',
        'Who fixes problems after launch, and for how long.',
      ] },
      { t: 'p', c: 'A clear written plan protects both sides. If a company will not put it in writing, walk away.' },
      { t: 'h2', c: 'Ask about life after launch' },
      { t: 'p', c: 'Software is not finished on launch day. You will need updates, fixes and support. Ask about ongoing support options, about documentation, and about who owns the code, the designs and the accounts, such as hosting, app store listings and your domain name. You should always own what you paid for.' },
      { t: 'h2', c: 'Red flags to watch for' },
      { t: 'ul', c: [
        'A price with no breakdown.',
        'Pressure to decide today.',
        'Promises of guaranteed sales or rankings.',
        'No live work to show.',
        'A request for the full payment before any work is done.',
        'No written agreement.',
        'Developers you are never allowed to speak to.',
      ] },
      { t: 'h2', c: 'Questions to ask every company' },
      { t: 'ol', c: [
        'Can I see products you have built that are live today?',
        'Can I speak to a past client?',
        'Who will actually be building my product?',
        'How will you keep me updated, and how often?',
        'What exactly is included in the price?',
        'How are payments split across the project?',
        'What happens after launch, and who owns the code?',
      ] },
      { t: 'h2', c: 'How we work at Bersk' },
      { t: 'p', c: 'We are a software development company in Lagos, Nigeria. We start with a [strategy call](/contact) where we listen to your idea and agree what to build first. Then we give you a clear scope, timeline and price, and you approve each stage before we move on. To know more about the team, read [about us](/about).' },
    ],
  },

  {
    slug: 'how-much-does-it-cost-to-build-an-app-in-nigeria',
    title: 'How Much Does It Cost to Build an App in Nigeria?',
    seoTitle: 'Cost to Build an App in Nigeria: What Drives It | Bersk',
    description:
      'There is no single price for an app. Learn what drives the cost of building an app in Nigeria, how to budget, and how to compare quotes fairly.',
    category: 'Budgeting',
    date: '2026-11-11',
    blocks: [
      { t: 'p', c: 'It is the first question almost everyone asks, and the honest answer is: it depends. Two apps that look similar on the surface can cost very different amounts to build. Instead of guessing a number, it helps to understand what drives the price. Then you can budget sensibly and compare quotes fairly.' },
      { t: 'h2', c: 'The main things that drive the cost' },
      { t: 'ul', c: [
        '**Number and complexity of features.** Every feature needs design, building and testing. A simple app with a few screens costs far less than one with accounts, payments, chat and an admin area.',
        '**Which phones you support.** iPhone, Android, or both, and whether you also want a website version.',
        '**Design.** A custom, polished design takes more time than a basic template, but it is what your users notice first.',
        '**Connections to other services.** Linking to payment providers such as Paystack or Flutterwave, maps, SMS, email or WhatsApp adds work.',
        '**Accounts and an admin dashboard.** Logins, user roles and a dashboard for you to manage the app all add to the build.',
        '**What happens behind the scenes.** The server, database and security that keep the app running reliably.',
        '**Special features.** Things like AI, live tracking or video are more involved than standard screens.',
        '**Testing.** Time spent testing on real phones and fixing problems before launch.',
      ] },
      { t: 'h2', c: 'Costs that continue after launch' },
      { t: 'p', c: 'Building the app is not the only cost. Plan for the ongoing ones too:' },
      { t: 'ul', c: [
        'Hosting and servers.',
        'App store developer accounts. Apple and Google both charge fees for these.',
        'Third-party tools and services. These are often priced in US dollars, so the cost in naira can change with the exchange rate.',
        'Updates, bug fixes and support.',
        'Marketing, so that people actually find and use the app.',
      ] },
      { t: 'h2', c: 'How to keep the cost under control' },
      { t: 'ul', c: [
        'Start with a smaller first version with only the features users truly need. This is often called an MVP.',
        'Write a short list of must-haves and a separate list of nice-to-haves.',
        'Build in stages, so you can learn from real users before you spend more.',
        'Use proven tools instead of building everything from scratch.',
        'Decide early. Changing your mind in the middle of a build is one of the biggest causes of extra cost.',
      ] },
      { t: 'h2', c: 'How to compare quotes fairly' },
      { t: 'p', c: 'Do not compare quotes on the final number alone. Ask each company for a breakdown that shows:' },
      { t: 'ul', c: [
        'Which features and screens are included.',
        'Which phones and platforms are covered.',
        'How long each stage takes.',
        'How the payments are split.',
        'What is not included.',
        'What support you get after launch.',
      ] },
      { t: 'note', c: 'A low price with a vague scope often costs more later. A clear scope at a fair price is a better sign than the cheapest number.' },
      { t: 'h2', c: 'What to do next' },
      { t: 'p', c: 'The quickest way to get a real figure is to talk through your idea with a developer. On a [strategy call](/contact) with Bersk we listen to what you want to build, agree what to build first, and then give you a clear scope, timeline and price in writing. If you are not sure whether you need an app, a website or an online store first, read [which to build first](/blog/website-mobile-app-or-online-store-which-to-build-first).' },
    ],
  },

  {
    slug: 'website-mobile-app-or-online-store-which-to-build-first',
    title: 'Website, Mobile App or Online Store: Which Should You Build First?',
    seoTitle: 'Website, App or Online Store: Which First? | Bersk',
    description:
      'Not sure whether to build a website, a mobile app or an online store first? Use this simple guide to choose the right starting point for your idea.',
    category: 'Planning',
    date: '2026-11-11',
    blocks: [
      { t: 'p', c: 'You have an idea and you want to get it online. The first question is what to build: a website, a mobile app or an online store. They solve different problems and cost different amounts, so starting with the right one can save you time and money.' },
      { t: 'h2', c: 'Build a website first if…' },
      { t: 'ul', c: [
        'You need people to find and trust your business online.',
        'You mainly want enquiries, bookings or phone calls.',
        'You are still testing your idea.',
        'You want the fastest, lowest-risk way to get online.',
      ] },
      { t: 'p', c: 'A website works on every phone and computer without anyone having to install anything. For many businesses it is the best first step.' },
      { t: 'h2', c: 'Build an online store first if…' },
      { t: 'ul', c: [
        'You sell physical products.',
        'You want customers to order and pay online.',
        'You want to take orders even when you are not available to answer.',
      ] },
      { t: 'p', c: 'Shoppers in Nigeria often want choices such as paying on delivery, the ability to track an order, and an easy way to message you on WhatsApp. Our [Galuxe case study](/case-studies) shows what an online store built around those needs looks like.' },
      { t: 'h2', c: 'Build a mobile app first if…' },
      { t: 'ul', c: [
        'People will use it often, daily or weekly.',
        'You need phone features such as notifications, the camera or location.',
        'The experience depends on being fast and available all the time.',
        'You already have users who are ready to download it.',
      ] },
      { t: 'p', c: 'Apps usually cost more to build, and people have to choose to download them. It is worth being sure that an app is really needed before you start.' },
      { t: 'h2', c: 'A simple way to decide' },
      { t: 'ol', c: [
        'Who is your customer, and where do they spend their time online?',
        'How often will they need to use what you are building?',
        'Could a website do the job? If yes, start there.',
        'What is your budget for the first version?',
        'Choose the smallest thing that proves your idea works.',
      ] },
      { t: 'h2', c: 'You can grow in stages' },
      { t: 'p', c: 'Many businesses start with a website, add an online store when sales begin, and build an app once they have regular users. Each stage teaches you what customers actually want, so you spend your budget on the right things. For a look at costs, read [what drives the cost of an app in Nigeria](/blog/how-much-does-it-cost-to-build-an-app-in-nigeria).' },
      { t: 'p', c: 'If you want help choosing, book a [strategy call](/contact). We will give you honest advice on what to build first, even when the answer is the simplest option.' },
    ],
  },

  {
    slug: 'what-to-prepare-before-your-first-call-with-a-developer',
    title: 'What to Prepare Before Your First Call With a Software Developer',
    seoTitle: 'Prepare for Your First Call With a Developer | Bersk',
    description:
      'A short checklist to help you get the most from your first call with a software developer, so you leave with a clear next step.',
    category: 'Getting started',
    date: '2026-11-11',
    blocks: [
      { t: 'p', c: 'You do not need a perfect plan to talk to a developer. But a little preparation helps you get far more out of the first conversation. Here is a short checklist you can work through in about half an hour.' },
      { t: 'h2', c: '1. The problem you want to solve' },
      { t: 'p', c: 'Describe the problem in one or two sentences, in your own words. “Customers keep calling to ask about their orders” is a better starting point than a list of features.' },
      { t: 'h2', c: '2. Who it is for' },
      { t: 'p', c: 'Who will use it? Customers, your team, or both? How comfortable are they with technology, and what phones do they use? This shapes almost every decision.' },
      { t: 'h2', c: '3. The three things it must do' },
      { t: 'p', c: 'Pick the three most important things the product has to do on day one. Everything else can wait for a later version. Keeping the first version small saves money and gets you to real users faster.' },
      { t: 'h2', c: '4. Examples you like' },
      { t: 'p', c: 'Gather two or three websites or apps you like, and note what you like about each one. Examples are often clearer than descriptions.' },
      { t: 'h2', c: '5. Your budget and timing' },
      { t: 'p', c: 'Have a rough budget range and a sense of when you want to launch. Being open about both helps a developer suggest what is realistic and what to build first.' },
      { t: 'h2', c: '6. What you already have' },
      { t: 'ul', c: [
        'A logo and brand colours.',
        'Photos, text or product lists.',
        'A domain name or existing website.',
        'Accounts such as a Google Business Profile, social pages or payment accounts.',
      ] },
      { t: 'h2', c: '7. Who makes the decisions' },
      { t: 'p', c: 'If more than one person has to approve the project, include them early. It avoids delays and surprises later on.' },
      { t: 'note', c: 'You do not need all the answers. If you only have the first one or two, that is still enough to start a useful conversation.' },
      { t: 'h2', c: 'What happens on a Bersk strategy call' },
      { t: 'ol', c: [
        'We listen to your idea, your goals and your budget.',
        'We ask questions to make sure we understand it properly.',
        'We agree what to build first.',
        'You leave knowing the next step, and we follow up with a clear scope, timeline and price.',
      ] },
      { t: 'p', c: 'Ready when you are. You can [book a strategy call](/contact) and we will take it from there.' },
    ],
  },

  {
    slug: 'ai-automation-for-small-businesses-where-to-start',
    title: 'AI Automation for Small Businesses: Where to Start',
    seoTitle: 'AI Automation for Small Business: Where to Start | Bersk',
    description:
      'Practical ways small businesses can use AI and automation to save time, and a simple, low-risk way to start without overspending.',
    category: 'AI and automation',
    date: '2026-11-11',
    blocks: [
      { t: 'p', c: 'AI automation simply means using software to do repetitive work for you, so you and your team can spend time on things that need a person. You do not need a large company or a big budget to benefit from it. The trick is to start small and pick the right first task.' },
      { t: 'h2', c: 'Good places to start' },
      { t: 'ul', c: [
        'Answering common customer questions on your website or WhatsApp.',
        'Booking appointments and sending reminders.',
        'Following up with new enquiries quickly.',
        'Collecting leads and keeping them in one place.',
        'Sending invoices, receipts and reports automatically.',
        'Moving information between the tools you already use, so nobody has to copy and paste.',
      ] },
      { t: 'h2', c: 'Start with one repetitive task' },
      { t: 'p', c: 'Look for a task that your team does again and again, that follows the same steps each time, and that takes real hours each week. Write down how long it takes now. That number is how you will know later whether the automation was worth it.' },
      { t: 'h2', c: 'Keep a person in the loop' },
      { t: 'p', c: 'AI is helpful, but it can get things wrong. Make sure customers can always reach a real person, and check the results regularly, especially at the beginning. The goal is to take away the boring work, not to remove the human touch.' },
      { t: 'h2', c: 'Protect your customers’ data' },
      { t: 'p', c: 'Customer information is valuable and, in Nigeria, covered by the Nigeria Data Protection Act. Do not paste customer details into tools you do not trust. Ask any provider where your data is stored and how it is protected.' },
      { t: 'h2', c: 'How to tell whether it is worth it' },
      { t: 'ul', c: [
        'Hours saved each week.',
        'How quickly customers get a reply.',
        'How many enquiries are answered or followed up.',
        'The cost of the tool compared with the value of the time saved.',
      ] },
      { t: 'h2', c: 'Your next step' },
      { t: 'p', c: 'If you are not sure which task to automate first, that is a good topic for a [strategy call](/contact). We look at how your business runs, pick the task that will save the most time, and keep the first version small. You can also see what else we build on our [services page](/services).' },
    ],
  },
]

// ── helpers ──
export const postPath = (post) => `/blog/${post.slug}`

export function findPost(slug) {
  return POSTS.find((p) => p.slug === slug)
}

function textOf(blocks) {
  return blocks
    .map((b) => (Array.isArray(b.c) ? b.c.join(' ') : b.c))
    .join(' ')
    .replace(/\*\*|\[|\]\([^)]*\)/g, '')
}

export function wordCount(post) {
  return textOf(post.blocks).split(/\s+/).filter(Boolean).length
}

export function readMinutes(post) {
  return Math.max(1, Math.round(wordCount(post) / 200))
}

// fixed format and timezone so server and browser always print the same text
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
}
