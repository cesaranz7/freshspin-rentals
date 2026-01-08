import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              FreshSpin Rentals
            </Link>

            <nav className="flex gap-6 text-sm">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <Link className="hover:underline" href="/pricing">
                Pricing
              </Link>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}


