import Link from "next/link";

export default function OrderCard() {
  return (
    <div className="flex items-center justify-center gap-5 lg:flex-col">
      <div className="w-1/2 lg:w-full">
        <div className="mb-2 hidden lg:block lg:pb-3">
          You haven't selected a ticket yet. Please select it first in the
          <span className="font-bold"> Ticket </span> menu tab.
        </div>
        <div className="items-center justify-between lg:flex lg:border-t lg:border-t-gray-300 lg:pt-3">
          <p> Total 0 ticket</p>
          <p className="mr-2 text-xl font-bold">Rp 0</p>
        </div>
      </div>

      <Link
        href={`/order`}
        className="w-1/2 rounded-lg bg-accent p-2 text-center tracking-widest text-white hover:bg-accent/90 lg:w-full"
      >
        Buy ticket
      </Link>
    </div>
  );
}
