'use client';
import React, { ReactNode } from "react";

export interface ExperienceCardProps {
    logo: ReactNode;
    company: string;
    role: string;
    date: string;
    description: string;
    technologies?: string;
};

export const Exptag = ({ logo, company, role, date, description, technologies }: ExperienceCardProps) => {
    return (
        <div className="w-full rounded-xl my-4 px-4 md:px-10 hanken-grotesk py-6 inset-shadow-white/10 inset-shadow-sm ">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-start">
                <div className="flex justify-start items-center gap-4">
                    <div>
                        {logo}
                    </div>

                    <div>
                        <h2 className="text-xl capitalize font-medium text-white/90">
                            {company}
                        </h2>
                        <p className="text-sm capitalize text-white/60">
                            {role}
                        </p>
                    </div>
                </div>

                <div className="hanken-grotesk text-white/50 text-sm font-medium flex md:justify-center items-center shrink-0">
                    <p>{date}</p>
                </div>
            </div>

            <div className="hanken-grotesk text-white/70 mt-4 text-[15px] leading-relaxed">
                <div>
                    {description}
                </div>
                {technologies && (
                    <div className="mt-3 text-white/90 capitalize text-sm font-medium tracking-wide">
                        {technologies}
                    </div>
                )}
            </div>
        </div>
    )
}