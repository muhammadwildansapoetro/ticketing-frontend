import { useRouter } from "next/router";

export default function Pagination() {
  return (
    <div className="mb-5 flex items-center justify-center gap-2">
      <button>Previous</button>
      <button className="border border-black px-1">1</button>
      <button className="border border-black px-1">2</button>
      <button className="border border-black px-1">3</button>

      <button>Next</button>
    </div>
  );
}
