
export const metadata = {
  title: "Mr. Tustin Real Estate | Mauricio Roque",
  description:
    "Your local Tustin real estate expert. Helping homeowners sell, explore cash offers, and make smart real estate decisions throughout Orange County.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
