import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
        <Image
          src="/hero-top-loader.png"
          alt="Top-load washer and dryer in a clean laundry room"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          FreshSpin Rentals
        </h1>
        <p className="text-lg text-gray-700">
          Affordable washer & dryer rentals serving Fort Worth and West Dallas.
        </p>
      </section>

      {/* Service Area */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          Service Area
        </h2>
        <p className="text-gray-700">
          Fort Worth and the West Dallas area. Message us to confirm availability in your neighborhood.
        </p>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Monthly Pricing
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Value (Older Units)</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>$50 / month — Washer & Dryer set</li>
              <li>$35 / month — Single machine</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Premium (Newer Units)</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>$65 / month — Washer & Dryer set</li>
              <li>$40 / month — Single machine</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="mb-12">
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
        >
          Contact us on Facebook Messenger
        </Link>
      </section>

      {/* Footer note */}
      <footer className="text-sm text-gray-500">
        This is a rental service only. Appliances remain the property of FreshSpin Rentals.
      </footer>
    </main>
  );
}

