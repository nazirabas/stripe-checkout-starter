import { createCheckoutSession } from "./actions";

const products = [
  {
    id: "prod_charter_day",
    name: "Full-day Yacht Charter",
    description: "Sunseeker 62 for up to 10 guests. Ibiza to Formentera. Chef and tender included.",
    price: 650000,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
  },
  {
    id: "prod_sunset_cruise",
    name: "Sunset Cruise",
    description: "Two hours around Es Vedra. Sparkling wine and canapes on board.",
    price: 120000,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80",
  },
];

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency }).format(amount / 100);
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-2">Stripe Checkout Starter</h1>
        <p className="text-neutral-400">
          Server-action-driven Stripe Checkout with success and cancel pages. Configure your keys in <code>.env.local</code>.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2">
        {products.map((p) => (
          <article key={p.id} className="bg-neutral-900 rounded-lg overflow-hidden border border-white/5">
            <div className="aspect-video bg-neutral-800" style={{ backgroundImage: `url(${p.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-2">{p.name}</h2>
              <p className="text-neutral-400 text-sm mb-4">{p.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{formatPrice(p.price, p.currency)}</span>
                <form action={createCheckoutSession}>
                  <input type="hidden" name="productId" value={p.id} />
                  <input type="hidden" name="name" value={p.name} />
                  <input type="hidden" name="price" value={p.price} />
                  <input type="hidden" name="currency" value={p.currency} />
                  <input type="hidden" name="image" value={p.image} />
                  <button
                    type="submit"
                    className="bg-[#635BFF] hover:bg-[#4F46E5] text-white px-5 py-2 rounded-md font-medium transition"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
