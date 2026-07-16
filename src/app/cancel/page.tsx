import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-4">
        <div className="text-5xl">×</div>
        <h1 className="text-3xl font-semibold">Checkout cancelled</h1>
        <p className="text-neutral-400">No charge was made. You can restart checkout any time.</p>
        <Link href="/" className="inline-block text-sm underline text-neutral-300 hover:text-white">
          Back to shop
        </Link>
      </div>
    </main>
  );
}
