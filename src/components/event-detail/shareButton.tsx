import Link from "next/link";
import { IconType } from "react-icons";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import CopyButton from "./copyButton";

interface IShareButton {
  Icon: IconType;
  link: string;
  style: string;
}

const shareButtons: IShareButton[] = [
  {
    Icon: IoLogoFacebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500",
  },
  {
    Icon: BsTwitterX,
    link: "https://www.twitter.com/intent/tweet?url=",
    style: "text-blue-400",
  },
  {
    Icon: IoLogoWhatsapp,
    link: "https://wa.me/?text=",
    style: "text-green-500",
  },
];

export default function ShareButton({ eventId }: { eventId: string }) {
  const domain = "https://matchtix.vercel.app/event/";
  return (
    <div>
      <p>Share Match</p>
      <div className="mt-2 flex items-center gap-3">
        {shareButtons.map((item, index) => {
          return (
            <Link key={index} href={`${item.link}${domain}${eventId}`}>
              <item.Icon className={`${item.style} size-7`} />
            </Link>
          );
        })}
        <CopyButton link={`${domain}${eventId}`} />
      </div>
    </div>
  );
}
