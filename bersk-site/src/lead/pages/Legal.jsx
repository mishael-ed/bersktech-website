const UPDATED = '10 November 2026'

export function Privacy() {
  return (
    <section className="lp-block lp-legal">
      <div className="lp-wrap lp-narrow">
        <h1 className="lp-h1 lp-h1-sm">Privacy Policy</h1>
        <p className="lp-muted">Last updated: {UPDATED}</p>

        <h2>Who we are</h2>
        <p>Bersk Technologies ("Bersk", "we", "us") builds websites, apps, online stores and automation for businesses and individuals.</p>

        <h2>What we collect</h2>
        <p>When you fill in our form we collect your name, WhatsApp number, email address, what you want built, your rough budget and when you want to start. We also collect basic visit information such as the ad you came from (for example, campaign tags in the link), your device and browser type, and how you use this page, including whether you watch our video.</p>

        <h2>How we use it</h2>
        <ul>
          <li>To contact you about your enquiry, including by WhatsApp, email and phone, and to arrange your strategy call.</li>
          <li>To understand which ads and pages work, and to improve them.</li>
          <li>To show you relevant ads and measure their results.</li>
        </ul>

        <h2>Advertising and tracking</h2>
        <p>We use the Meta Pixel. It lets us measure our ads on Facebook and Instagram and may share information about your visit and the details you submit with Meta. Meta's own privacy policy explains how it uses that information. You can manage ad preferences in your Facebook and Instagram settings.</p>

        <h2>Who we share it with</h2>
        <p>We do not sell your personal data. We share it only with the services we use to run this page and our business, such as form delivery, email, hosting, analytics and advertising platforms (including Meta), and where the law requires it.</p>

        <h2>How long we keep it</h2>
        <p>We keep your details for as long as needed to follow up on your enquiry and for our business records, then delete or anonymise them.</p>

        <h2>Your rights</h2>
        <p>Under the Nigeria Data Protection Act you can ask to see, correct or delete your personal data, or object to how we use it. To do that, email us at hello@bersk.tech and we will respond promptly.</p>

        <h2>Changes</h2>
        <p>We may update this policy and will change the date above when we do.</p>
      </div>
    </section>
  )
}

export function Terms() {
  return (
    <section className="lp-block lp-legal">
      <div className="lp-wrap lp-narrow">
        <h1 className="lp-h1 lp-h1-sm">Terms</h1>
        <p className="lp-muted">Last updated: {UPDATED}</p>

        <h2>About this page</h2>
        <p>This page lets you ask Bersk Technologies about building an app, website, online store or other digital product. Submitting the form does not create a contract for any work.</p>

        <h2>Strategy calls</h2>
        <p>A strategy call is a conversation to understand your idea and agree sensible next steps. Anything we later agree to build, including scope, timelines and price, will be set out in a separate written agreement before work starts.</p>

        <h2>Your information</h2>
        <p>Please give accurate details so we can reach you. How we handle your data is explained in our Privacy Policy.</p>

        <h2>No guarantees</h2>
        <p>Examples of our work show what we have built for other clients. Results depend on each business, so we cannot promise the same outcome for you.</p>

        <h2>Our content</h2>
        <p>The text, design, logos and video on this page belong to Bersk Technologies or are used with permission. Please do not copy or reuse them without asking.</p>

        <h2>Limits of liability</h2>
        <p>We work to keep this page accurate and available but provide it as is. To the extent the law allows, Bersk is not liable for losses from using this page.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
      </div>
    </section>
  )
}
