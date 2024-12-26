export default function Pagination() {
  return (
    <div className="flex h-screen items-center justify-center gap-3">
      <button className="hover:text-accent">Previous</button>
      <button className="border border-black px-2 hover:bg-accent hover:text-white focus:bg-accent focus:text-white">
        1
      </button>
      <button className="border border-black px-2 hover:bg-accent hover:text-white focus:bg-accent focus:text-white">
        2
      </button>
      <button className="border border-black px-2 hover:bg-accent hover:text-white focus:bg-accent focus:text-white">
        3
      </button>
      <button className="hover:text-accent">Next</button>
    </div>
  );
}
