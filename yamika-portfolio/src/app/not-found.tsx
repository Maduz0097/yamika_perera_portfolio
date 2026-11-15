import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="mx-auto max-w-md px-6">
        <h1 className="text-5xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-lg text-muted">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
