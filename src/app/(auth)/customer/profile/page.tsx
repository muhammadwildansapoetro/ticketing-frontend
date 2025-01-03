"use client";
import customerGuard from "@/Protection/customerGuard";

function profile() {
  return (
    <div className="bg-accent text-white">
      <h1>Profile</h1>
    </div>
  );
}

export default customerGuard(profile);
