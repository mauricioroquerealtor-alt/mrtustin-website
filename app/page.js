
import Link from "next/link";

const navy = "#142c49";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sell Your Home", href: "/#sell" },
  { label: "Search Homes", href: "/#search" },
  { label: "Multifamily", href: "/#multifamily" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <header
        style={{
          padding: "20px 6%",
          background: "#ffffff",
          color: navy,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>
            Mr. Tustin Real Estate
          </div>
          <div style={{ fontSize: 13 }}>
            Your Local Tustin Real Estate Expert
          </div>
        </div>

        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "18px",
            fontSize: 14,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: navy,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#cash-offer"
            style={{
              background: navy,
              color: "white",
              padding: "13px 18px",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get a Cash Offer
          </Link>
        </nav>
      </header>

      <section
        style={{
          background: navy,
          color: "white",
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)" }}>
          Your Home. Your Equity. Your Next Chapter.
        </h1>
        <p>
          Helping homeowners in Tustin and throughout Orange County
          make confident real estate decisions.
        </p>
        <h3>Thinking About Selling?</h3>
        <p>Let's talk about your options.</p>
      </section>

      <section id="sell" style={{ padding: "65px 8%" }}>
        <h2>Sell Your Home With Confidence</h2>
        <p>
          Personalized service, local market knowledge,
          and a plan built around your goals.
        </p>
      </section>

      <section
        id="cash-offer"
        style={{
          padding: "65px 8%",
          background: "#f0f4f8",
        }}
      >
        <h2>Explore a Cash Offer</h2>
        <p>
          Interested in selling as-is without public showings?
          Let's explore your options.
        </p>
      </section>

      <section id="search" style={{ padding: "65px 8%" }}>
        <h2>Search Homes in Tustin and Orange County</h2>
        <p>
          Explore local homes for sale. MLS property search
          is coming soon.
        </p>
      </section>

      <section
        id="multifamily"
        style={{
          padding: "65px 8%",
          background: "#f0f4f8",
        }}
      >
        <h2>Small Multifamily Real Estate</h2>
        <p>
          From duplexes and fourplexes to apartment buildings,
          work with an agent who understands real estate
          investing firsthand.
        </p>
      </section>

      <section id="about" style={{ padding: "65px 8%" }}>
        <h2>Meet Mauricio Roque</h2>
        <p>
          Your local Tustin real estate expert, helping
          homeowners protect their equity and plan
          their next move.
        </p>
      </section>

      <section
        id="contact"
        style={{
          padding: "65px 8%",
          background: "#f0f4f8",
        }}
      >
        <h2>Let's Talk Real Estate</h2>
        <p>
          Whether you're thinking about selling or just
          exploring your options, I'd love to connect.
        </p>
      </section>

      <footer
        style={{
          padding: "30px 8%",
          background: navy,
          color: "white",
          textAlign: "center",
        }}
      >
        Mr. Tustin Real Estate | Real Brokerage
      </footer>
    </main>
  );
}
