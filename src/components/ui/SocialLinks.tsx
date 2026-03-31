import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import ProfilePopover from "./ProfilePopover";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((link) => {
        const LinkContent = (
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
        );

        if (link.image) {
          return (
            <ProfilePopover key={link.name} imageSrc={link.image}>
              {LinkContent}
            </ProfilePopover>
          );
        }

        return LinkContent;
      })}
    </div>
  );
}