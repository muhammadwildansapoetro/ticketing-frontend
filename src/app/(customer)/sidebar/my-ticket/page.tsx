"use client"
function MyTicket() {
    return (
      <div className="flex-1 bg-white p-8">
        <header className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold">My Tickets</h2>
          <div className="flex items-center space-x-4">
            <button className="rounded bg-secondary px-4 py-2 text-primary">Search Event</button>
          </div>
        </header>
        <div className="rounded-lg bg-gray-100 p-8 text-center">
          <ul className="mb-4 flex justify-center space-x-8">
            <li className="cursor-pointer text-gray-500">Event Aktif</li>
            <li className="border-b-2 border-primary font-semibold text-primary">Event Lalu</li>
          </ul>
          <div className="mt-4">
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
                🎫
              </div>
              <p className="mt-4 text-gray-500">Kamu belum memiliki tiket, silakan membeli tiket terlebih dahulu.</p>
              <a href="#" className="mt-2 font-medium text-primary">Cari Event Sekarang</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MyTicket;
  