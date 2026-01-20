import Link from "next/link";
import { socialLinksHero, socialLinks } from "@/data/socialLinks";

export default function SocialLinksHero() {
  return (
    <div className="flex gap-8 items-center">
      {socialLinksHero.map((link) => (
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
