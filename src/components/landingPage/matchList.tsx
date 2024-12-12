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
    venue: "Madya Stadium, Magelang",
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
    venue: "Pakansari Stadium, Bogor",
  },
  {
    id: 3,
    name: "PS. Barito Putra vs Persita",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/NZGbBaFkvnKAbSl8RTCD2RhEzIY=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8454419/ps-barito-putera-vs-persita-full-match-bri-liga-1-2024-25-7da63f.jpg",
    imageAlt: "PS. Barito Putra vs Persita",
    price: "IDR 70.000",
    venue: "Sultan Agung Stadium, Bantul",
  },
  {
    id: 4,
    name: "PSS Sleman vs PSBS Biak",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/_emuLzZ4hMVcE8x80tULqPiYEdc=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8453231/fm-bri-liga-1-pss-sleman-vs-psbs-biak-8cba0c.jpg",
    imageAlt: "PSS Sleman vs PSBS Biak",
    price: "Rp 50.000",
    venue: "Manahan Stadium, Surakarta",
  },
  {
    id: 5,
    name: "PSBS Biak vs Persita",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/leAMNBaG9Cqi0wk4PkmO3EuRKgM=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3927348/d805ea.jpg",
    imageAlt: "PSBS Biak vs Persita",
    price: "Rp 50.000",
    venue: "Kapten I Wayan Dipta Stadium, Bali",
  },
  {
    id: 6,
    name: "Dewa United FC vs PS. Barito Putera",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/-sA6ihpDWbKUPo-4E6a3eqhaN48=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3927355/cd9c12.jpg",
    imageAlt: "ewa United FC vs PS. Barito Putera",
    price: "Rp 50.000",
    venue: "Pakansari Stadium, Bogor",
  },
  {
    id: 7,
    name: "Arema FC vs Persis",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/tUJiaHvszkf33_RaIqC4EiSk11Q=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3927354/8e0de0.jpg",
    imageAlt: "Arema FC vs Persis",
    price: "Rp 50.000",
    venue: "Soepardi Stadium, Blitar",
  },
  {
    id: 8,
    name: "PSIS Semarang vs Bali United FC",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/sFaJBNKdjsLZW26zsC-Y6hXAH30=/466x264/filters:quality(70)/vidio-web-prod-video/uploads/video/image/8483922/fm-psis-semarang-vs-bali-united-fc-14b2bd.jpg",
    imageAlt: "PSIS Semarang vs Bali United FC",
    price: "Rp 50.000",
    venue: "Jatidiri Stadium, Semarang",
  },
  {
    id: 9,
    name: "Persebaya Surabaya vs Dewa United FC",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/_Mr896ZLk5rpVOUZs3oSiyX61gs=/466x264/filters:quality(70)/vidio-web-prod-video/uploads/video/image/7467838/fm-persebaya-vs-dewa-united-561279.jpg",
    imageAlt: "Persebaya Surabaya vs Dewa United FC",
    price: "Rp 50.000",
    venue: "Gelora Bung Tomo Stadium, Surabaya",
  },
  {
    id: 10,
    name: "Malut United FC vs Dewa United FC",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/xK3m0egi8hilD9xKYBciiO_2GT8=/466x264/filters:quality(70)/vidio-web-prod-video/uploads/video/image/8477391/fm-bri-liga-1-malut-united-fc-vs-dewa-united-fc-6c305f.jpg",
    imageAlt: "Malut United FC vs Dewa United FC",
    price: "Rp 50.000",
    venue: "Gelora Kie Raha Stadium, Ternate",
  },
  {
    id: 11,
    name: "PSS Sleman vs Persib",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/pzy-oUOSdX7GwhbKl-8mie-Vcmc=/466x264/filters:quality(70)/vidio-web-prod-video/uploads/video/image/8481178/jelang-kick-off-pss-sleman-vs-persib-bri-liga-1-283ee5.jpg",
    imageAlt: "PSS Sleman vs Persib",
    price: "Rp 100.000",
    venue: "Manahan Stadium, Surakarta",
  },
  {
    id: 12,
    name: "Persib vs Borneo FC Samarinda",
    href: "#",
    imageSrc:
      "https://thumbor.prod.vidiocdn.com/__mCXYwfXTUTWlyuHaVk0IYf884=/466x264/filters:quality(70)/vidio-web-prod-video/uploads/video/image/8453263/jelang-kick-off-persib-vs-borneo-fc-samarinda-bri-liga-1-ca5e15.jpg",
    imageAlt: "Persib vs Borneo FC Samarinda",
    price: "Rp 150.000",
    venue: "Gelora Bandung Lautan Api Stadium, Bandung",
  },
];

export default function MatchList() {
  return (
    <div className="bg-accent/10">
      <div className="mx-auto max-w-2xl px-5 pb-20 pt-10 sm:px-7 lg:max-w-full lg:px-10">
        <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          Upcoming Matches
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:mx-20 lg:grid-cols-4 xl:gap-x-5">
          {matches.map((match) => (
            <div
              key={match.id}
              className="group relative rounded-xl bg-white shadow-lg"
            >
              <Image
                src={match.imageSrc}
                alt={match.imageAlt}
                width={1000}
                height={1000}
                className="aspect-video w-full rounded-tl-xl rounded-tr-xl bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="m-2 flex justify-between">
                <div>
                  <h3 className="overflow-hidden font-medium text-gray-900 lg:text-lg">
                    <Link href={match.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {match.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-gray-500">{match.venue}</p>
                  <p className="mb-1 mt-1 font-medium text-gray-800">
                    {match.price}
                  </p>
                  <p className="text-gray-700">Organizer_Name</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
