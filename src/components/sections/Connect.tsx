"use client";

import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import ConnectCard from "../ui/ConnectCard";
import { FiFileText } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Connect() {
  return (
    <section className="mt-16 md:mt-24">
      <h2 className="dot-matrix text-2xl mb-8 tracking-tighter text-neutral-900 dark:text-neutral-100 uppercase">
        Connect
      </h2>

      <div className="flex flex-wrap gap-3">
        {/* Twitter with Hover Card */}
        <ConnectCard
          name="Sarthak Shiroty"
          username="Sarthakbuilds"
          avatar="/assets/images/sarthak_mee.jpeg"
          bio="Product-focused engineer building pixel-perfect UI and high-performance web applications."
        >
          <Link
            href="https://x.com/Sarthakbuilds"
            target="_blank"
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group"
          >
            <FaXTwitter className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">
              Twitter
            </span>
          </Link>
        </ConnectCard>

        {/* GitHub */}
        <Link
          href="https://github.com/Sarthak-builds"
          target="_blank"
          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group"
        >
          <FaGithub className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">
            GitHub
          </span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://in.linkedin.com/in/sarthak-shiroty-8240bb357"
          target="_blank"
          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group"
        >
          <FaLinkedin className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">
            LinkedIn
          </span>
        </Link>

        {/* Mail */}
        <Link
          href="mailto:sarthakshiroty20@gmail.com"
          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group"
        >
          <FaEnvelope className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">
            Mail
          </span>
        </Link>

        {/* Resume */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group"
        >
          <FiFileText className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">
            Resume
          </span>
        </Link>
      </div>
    </section>
  );
}
