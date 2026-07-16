import Link from "next/link";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-02-24.acacia" });

export default async function SuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const id = searchParams.session_id;
  let session: Stripe.Checkout.Session | null = null;
  if (id) {
    try {
      session = await stripe.checkout.sessions.retrieve(id);
    } catch {
      session = null;
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-4">
        <div className="text-5xl">✓</div>
        <h1 className="text-3xl font-semibold">Payment received</h1>
        <p className="text-neutral-400">
          {session?.customer_details?.email
            ? `A receipt has been sent to ${session.customer_details.email}.`
            : "Thank you for your purchase."}
        </p>
        <Link href="/" className="inline-block text-sm underline text-neutral-300 hover:text-white">
          Back to shop
        </Link>
      </div>
    </main>
  );
}
