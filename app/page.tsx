import Image from "next/image";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient-glow ambient-glow-one" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-two" aria-hidden="true" />
      <div className="pattern pattern-top" aria-hidden="true" />
      <div className="pattern pattern-bottom" aria-hidden="true" />

      <header className="topbar">
        <div className="topbar-line" />
        <span className="topbar-label">Kannur District Committee</span>
        <div className="topbar-line" />
      </header>

      <section className="hero" aria-labelledby="coming-soon-title">
        <div className="logo-frame">
          <div className="logo-halo" aria-hidden="true" />
          <Image
            src="/wisdom-logo.png"
            alt="Wisdom Islamic Organisation"
            width={1894}
            height={469}
            priority
            className="logo"
          />
        </div>

        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>OFFICIAL WEBSITE</span>
          <span className="eyebrow-dot" />
        </div>

        <h1 id="coming-soon-title">
          Coming <span>Soon</span>
        </h1>

        <p className="intro">
          A new digital home for the <strong>Wisdom Islamic Organisation</strong>,
          <br className="desktop-break" />
          Kannur District Committee, is being prepared.
        </p>

        <div className="ornament" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className="supporting-copy">
          Stay connected. Our website will be available soon with updates,
          <br className="desktop-break" />
          programmes, initiatives and district committee information.
        </p>

        {/* <div className="status-card">
          <div className="status-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="status-title">We are getting things ready</p>
            <p className="status-text">The new website is currently under preparation.</p>
          </div>
        </div> */}
      </section>

      <footer className="footer">
        <div className="footer-mark">W</div>
        <p>Wisdom Islamic Organisation · Kannur District Committee</p>
        <p className="copyright">© {new Date().getFullYear()} Wisdom Islamic Organisation</p>
      </footer>
    </main>
  );
}
