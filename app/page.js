
export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <header style={{
        padding: "24px 8%",
        background: "#ffffff",
        color: "#142c49"
      }}>
        <h2>Mr. Tustin Real Estate</h2>
        <p>Your Local Tustin Real Estate Expert</p>
      </header>

      <section style={{
        background: "#142c49",
        color: "white",
        padding: "100px 8%",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px" }}>
          Your Home. Your Equity. Your Next Chapter.
        </h1>
        <p>
          Helping homeowners in Tustin and throughout
          Orange County make confident real estate decisions.
        </p>
        <h3>Thinking About Selling?</h3>
        <p>Let's talk about your options.</p>
      </section>

      <section style={{ padding: "65px 8%" }}>
        <h2>Sell Your Home With Confidence</h2>
        <p>
          Personalized service, local market knowledge,
          and a plan built around your goals.
        </p>
      </section>

      <section style={{
        padding: "65px 8%",
        background: "#f0f4f8"
      }}>
        <h2>Explore a Cash Offer</h2>
        <p>
          Interested in selling as-is without public showings?
          Let's explore your options.
        </p>
      </section>

      <section style={{ padding: "65px 8%" }}>
        <h2>Small Multifamily Real Estate</h2>
        <p>
          From duplexes and fourplexes to apartment buildings,
          work with an agent who also understands real estate
          investing firsthand.
        </p>
      </section>

      <footer style={{
        padding: "30px 8%",
        background: "#142c49",
        color: "white",
        textAlign: "center"
      }}>
        Mr. Tustin Real Estate | Real Brokerage
      </footer>
    </main>
  );
}
