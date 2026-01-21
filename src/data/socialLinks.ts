import { FaLinkedin, FaGithub, FaEnvelope, FaCoffee } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons' 

export interface SocialLink {
  name: string
  href: string
  icon: IconType 
  ariaLabel: string
  className:string
}

export const socialLinks: SocialLink[] = [
     {
    name: 'X',
    href: 'https://x.com/Sarthakbuilds', 
    icon: FaXTwitter,
    ariaLabel: 'X / Twitter profile',
    className:'text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110'
  },
   {
    name: 'GitHub',
    href: 'https://github.com/Sarthak-builds',
    icon: FaGithub,
    ariaLabel: 'GitHub profile',
    className:'text-green-400 hover:text-green-500 transition-colors duration-200 hover:scale-110'
  },
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/in/sarthak-shiroty-8240bb357',
    icon: FaLinkedin, 
    ariaLabel: 'LinkedIn profile',
    className:'text-blue-300 hover:text-blue-400 transition-colors duration-200 hover:scale-110'
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sarthakshiroty20@gmail.com',
    icon: FaEnvelope,
    ariaLabel: 'Email me',
    className:'text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110'
  },
  {
    name: 'Buy Me a Coffee',
    href: 'https://buymeacoffee.com/sarthakbuilds', 
    icon: FaCoffee,
    ariaLabel: 'Support my work',
    className:'text-cyan-400 hover:text-cyan-500 transition-colors duration-200 hover:scale-110'
  },
]
export const socialLinksHero: SocialLink[] = [
     {
    name: 'X',
    href: 'https://x.com/Sarthakbuilds', 
    icon: FaXTwitter,
    ariaLabel: 'X / Twitter profile',
    className:'text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110'
  },
   {
    name: 'GitHub',
    href: 'https://github.com/Sarthak-builds',
    icon: FaGithub,
    ariaLabel: 'GitHub profile',
     className:'text-green-400 hover:text-green-500 transition-colors duration-200 hover:scale-110'
  },
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/in/sarthak-shiroty-8240bb357',
    icon: FaLinkedin, 
    ariaLabel: 'LinkedIn profile',
     className:'text-blue-300 hover:text-blue-400 transition-colors duration-200 hover:scale-110'
  },
]