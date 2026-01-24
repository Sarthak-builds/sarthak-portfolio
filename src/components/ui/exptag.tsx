import { ExperienceCardProps } from "@/types";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Exptag = ({ company, role, description, technologies, link, isFirst, isLast }: ExperienceCardProps) => {
    return (
        <div className="relative pl-8 pb-12 group last:pb-0">
            <div
                className={`absolute left-0 w-[1px] bg-zinc-300 dark:bg-zinc-700 
                    ${isFirst ? 'top-2' : 'top-0'} 
                    ${isLast ? 'h-2' : 'bottom-0'}
                `}
            />

            <div className="absolute left-[-4.5px] top-2 h-3 w-3 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white dark:bg-black group-hover:border-zinc-600 dark:group-hover:border-zinc-400 transition-colors z-10" />

            <div className="flex flex-col items-start gap-1">
                <h3 className="instrument-serif-regular text-xl text-neutral-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-200 transition-colors cursor-pointer flex items-center gap-2">
                    {link ? <Link href={link} target="_blank">{company}</Link> : company}
                </h3>

                <div className="text-base font-semibold text-neutral-700 dark:text-neutral-200 hanken-grotesk">
                    {role}
                </div>

                <div className="text-sm text-neutral-600 dark:text-zinc-400 hanken-grotesk max-w-2xl mt-2 leading-relaxed">
                    {Array.isArray(description) ? (
                        <ul className="list-disc pl-5 space-y-1">
                            {description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{description}</p>
                    )}
                </div>

                <div className="text-sm text-neutral-500 dark:text-zinc-500 mt-2 hanken-grotesk">
                    {technologies}
                </div>
            </div>
        </div>
    )
}