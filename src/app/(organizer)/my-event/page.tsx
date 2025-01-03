"use client"
import organizerGuard from "@/hoc/organizerGuard";

function MyEventPage() {
  return <div>My Event Page</div>;
}

export default organizerGuard(MyEventPage)
