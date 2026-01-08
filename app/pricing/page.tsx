import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Value (Older Units)</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>$50 / month — Washer & Dryer set</li>
            <li>$35 / month — Single machine</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Premium (Newer Units)</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>$65 / month — Washer & Dryer set</li>
            <li>$40 / month — Single machine</li>
          </ul>
        </div>
      </section>

      <div className="mt-10">
        <Link className="underline" href="/contact">
          Contact via Facebook Messenger →
        </Link>
      </div>
    </main>
  );
}