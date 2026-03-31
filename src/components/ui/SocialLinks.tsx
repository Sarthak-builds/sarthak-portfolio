import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={link.className}
          aria-label={link.ariaLabel}
        >
          <link.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
}