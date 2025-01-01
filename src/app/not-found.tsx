import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="text-xl font-medium">Could not find requested resource</p>
      <Link href="/" className="rounded-lg bg-accent px-4 py-2 text-white">
        Return Home
      </Link>
    </div>
  );
}
