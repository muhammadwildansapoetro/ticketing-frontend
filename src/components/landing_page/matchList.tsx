import Image from "next/image";
import Link from "next/link";

const matches = [
  {
    id: 1,
    name: "PSIS Semarang vs Semen Padang",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/N4em_6KPfXGD81bWiZfhKdShICo=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899717/f0bde1.jpg",
    imageAlt: "PSIS Semarang vs Semen Padang",
    price: "Rp 70.000",
    venue: "Stadion Madya, Magelang",
    category: "Paid ",
  },
  {
    id: 2,
    name: "Persija vs Persik Kediri",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/WQceE6CiJ1es-Nhs08K_wxuZsog=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899349/b24acd.jpg",
    imageAlt: "Persija vs Persik Kediri",
    price: "Rp 100.000",
    venue: "Stadion Pakansari, Bogor",
  },
  {
    id: 3,
    name: "PS. Barito Putra vs Persita",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/NZGbBaFkvnKAbSl8RTCD2RhEzIY=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8454419/ps-barito-putera-vs-persita-full-match-bri-liga-1-2024-25-7da63f.jpg",
    imageAlt: "PS. Barito Putra vs Persita",
    price: "IDR 70.000",
    venue: "Stadion Sultan Agung, Bantul",
  },
  {
    id: 4,
    name: "PSS Sleman vs PSBS Biak",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/_emuLzZ4hMVcE8x80tULqPiYEdc=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8453231/fm-bri-liga-1-pss-sleman-vs-psbs-biak-8cba0c.jpg",
    imageAlt: "PSS Sleman vs PSBS Biak",
    price: "Rp 50.000",
    venue: "Stadion Manahan, Surakarta",
  },
  {
    id: 1,
    name: "PSIS Semarang vs Semen Padang",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/N4em_6KPfXGD81bWiZfhKdShICo=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899717/f0bde1.jpg",
    imageAlt: "PSIS Semarang vs Semen Padang",
    price: "Rp 70.000",
    venue: "Stadion Madya, Magelang",
    category: "Paid ",
  },
  {
    id: 2,
    name: "Persija vs Persik Kediri",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/WQceE6CiJ1es-Nhs08K_wxuZsog=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899349/b24acd.jpg",
    imageAlt: "Persija vs Persik Kediri",
    price: "Rp 100.000",
    venue: "Stadion Pakansari, Bogor",
  },
  {
    id: 3,
    name: "PS. Barito Putra vs Persita",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/NZGbBaFkvnKAbSl8RTCD2RhEzIY=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8454419/ps-barito-putera-vs-persita-full-match-bri-liga-1-2024-25-7da63f.jpg",
    imageAlt: "PS. Barito Putra vs Persita",
    price: "IDR 70.000",
    venue: "Stadion Sultan Agung, Bantul",
  },
  {
    id: 4,
    name: "PSS Sleman vs PSBS Biak",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/_emuLzZ4hMVcE8x80tULqPiYEdc=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8453231/fm-bri-liga-1-pss-sleman-vs-psbs-biak-8cba0c.jpg",
    imageAlt: "PSS Sleman vs PSBS Biak",
    price: "Rp 50.000",
    venue: "Stadion Manahan, Surakarta",
  },
  {
    id: 1,
    name: "PSIS Semarang vs Semen Padang",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/N4em_6KPfXGD81bWiZfhKdShICo=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899717/f0bde1.jpg",
    imageAlt: "PSIS Semarang vs Semen Padang",
    price: "Rp 70.000",
    venue: "Stadion Madya, Magelang",
    category: "Paid ",
  },
  {
    id: 2,
    name: "Persija vs Persik Kediri",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/WQceE6CiJ1es-Nhs08K_wxuZsog=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899349/b24acd.jpg",
    imageAlt: "Persija vs Persik Kediri",
    price: "Rp 100.000",
    venue: "Stadion Pakansari, Bogor",
  },
  {
    id: 3,
    name: "PS. Barito Putra vs Persita",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/NZGbBaFkvnKAbSl8RTCD2RhEzIY=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8454419/ps-barito-putera-vs-persita-full-match-bri-liga-1-2024-25-7da63f.jpg",
    imageAlt: "PS. Barito Putra vs Persita",
    price: "IDR 70.000",
    venue: "Stadion Sultan Agung, Bantul",
  },
  {
    id: 4,
    name: "PSS Sleman vs PSBS Biak",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/_emuLzZ4hMVcE8x80tULqPiYEdc=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8453231/fm-bri-liga-1-pss-sleman-vs-psbs-biak-8cba0c.jpg",
    imageAlt: "PSS Sleman vs PSBS Biak",
    price: "Rp 50.000",
    venue: "Stadion Manahan, Surakarta",
  },
];

export default function MatchList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-7 lg:max-w-full lg:px-10">
        <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-accent lg:text-3xl">
          Upcoming Matches
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          {matches.map((match) => (
            <div key={match.id} className="group relative rounded-xl">
              <Image
                src={match.imageSrc}
                alt={match.imageAlt}
                width={1000}
                height={1000}
                className="aspect-video w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="overflow-hidden text-gray-700 lg:text-lg">
                    <Link href={match.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {match.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 lg:text-base">
                    {match.venue}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900 lg:text-base">
                    {match.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
