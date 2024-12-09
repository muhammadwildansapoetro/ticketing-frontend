import Link from "next/link";

const navigation = [
  { name: "Explore Matches", href: "/match" },
  { name: "Create Match", href: "/create-match" },
];

export default function DialogMenu() {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-accent">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-accent/10"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="py-6">
          <Link
            href="#"
            className="block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-accent/30"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
