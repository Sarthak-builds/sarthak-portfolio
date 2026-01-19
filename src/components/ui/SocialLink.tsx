import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaCoffee } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

export default function SocialLink() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/sarthak-shiroty", // Pre-filled
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/Sarthak-builds", // Pre-filled
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter className="w-5 h-5" />,
      href: "https://x.com/your_handle", // Replace this
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:your.email@example.com", // Replace this
    },
    {
      name: "Buy Me a Coffee",
      icon: <FaCoffee className="w-6 h-6" />,
      href: "https://buymeacoffee.com/your_handle", // Replace this
    },
  ];

  return (
    <div className="flex gap-6 items-center">
       <Link
          key=''
          href="https://github.com/Sarthak-builds"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110"
          aria-label="Github"
        >
          <FaGithub className="w-7 h-7" />
        </Link>
    </div>
  );
}