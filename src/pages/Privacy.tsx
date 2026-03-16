import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 border-b border-border">
        <div className="container">
          <Link to="/" className="font-display font-semibold text-lg text-foreground hover:opacity-75 transition-opacity">
            VoxMark
          </Link>
        </div>
      </header>

      <main className="container flex-1 py-16 max-w-2xl">
        <h1 className="text-3xl font-display font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="font-semibold text-base mb-2">The short version</h2>
            <p className="text-muted-foreground">
              We don't collect anything. No analytics, no tracking, no personal data, no cookies. VoxMark is a local app — everything stays on your device.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">What we collect</h2>
            <p className="text-muted-foreground">Nothing. We have no servers, no accounts, and no way to identify you.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">Third-party services</h2>
            <p className="text-muted-foreground">This website is hosted on GitHub Pages. GitHub may collect standard server logs (IP address, browser type) as part of their infrastructure — see <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" className="underline underline-offset-2 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">GitHub's privacy policy</a> for details.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">Contact</h2>
            <p className="text-muted-foreground">Questions? Feel free to open an issue on our GitHub repository.</p>
          </section>
        </div>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">← Back to home</Link>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
