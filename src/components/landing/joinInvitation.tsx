export default function JoinInvitation() {
  return (
    <div className="mx-5 mt-5 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-10">
      <button className="flex h-16 w-full items-center justify-center rounded-lg border border-accent bg-accent p-2 text-center text-white lg:h-20 lg:w-96 lg:text-lg">
        Sign up with friend's referral code and get 10% discount coupon
      </button>
      <button className="flex h-16 w-full items-center justify-center rounded-lg border border-accent bg-white p-2 text-center text-accent lg:h-20 lg:w-96 lg:text-lg">
        Invite your friend to sign up and get 10.000 point
      </button>
    </div>
  );
}
