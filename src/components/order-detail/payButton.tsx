"use client";

export default function PayButton({ orderToken }: { orderToken: string }) {
  const handleClick = async () => window.snap.pay(orderToken);
  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-accent p-2 text-center text-white"
    >
      Pay Ticket
    </button>
  );
}
