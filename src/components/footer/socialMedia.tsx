import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="mt-4 flex sm:mt-0 sm:justify-center">
      <Link href="#" className="text-white opacity-70 hover:opacity-100">
        <FaFacebook size={20} />
        <span className="sr-only">Facebook</span>
      </Link>

      <Link href="#" className="ms-5 text-white opacity-70 hover:opacity-100">
        <FaXTwitter size={20} />
        <span className="sr-only">Twitter</span>
      </Link>

      <Link href="#" className="ms-5 text-white opacity-70 hover:opacity-100">
        <FaInstagram size={20} />
        <span className="sr-only">Instagram</span>
      </Link>

      <Link href="#" className="ms-5 text-white opacity-70 hover:opacity-100">
        <FaYoutube size={20} />
        <span className="sr-only">Youtube</span>
      </Link>

      <Link href="#" className="ms-5 text-white opacity-70 hover:opacity-100">
        <FaTiktok size={20} />
        <span className="sr-only">Tiktok</span>
      </Link>
    </div>
  );
}