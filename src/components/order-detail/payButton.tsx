"use client";

interface PayButtonProps {
  orderToken: string;
  disabled?: boolean;
}

export default function PayButton({
  orderToken,
  disabled = false,
}: PayButtonProps) {
  const handleClick = async () => {
    if (!disabled && orderToken) {
      window.snap.pay(orderToken);
    } else {
      console.log("Order token is required");
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full rounded-lg p-2 text-center text-white ${disabled ? "cursor-not-allowed bg-accent/80" : "bg-accent"}`}
    >
      Pay Ticket
    </button>
  );
}
