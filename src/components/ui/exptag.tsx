' use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ExperienceCardProps {
    logo: string;
    company?: string;
    role:string;
    date:string;
    description:string;
    technologies?: string;
};

export const Exptag = ({ logo, company, role, date, description, technologies}: ExperienceCardProps) => {

    return (
        <div className=" w-full  rounded-xl my-4 px-10 hanken-grotesk bg-white/4 py-3 ">
         <div className="flex justify-between">
            <div className="flex justify-center items-center gap-5">
            <div>
                <Image src="/assets/images/sarthak_me.jpeg" width={40} alt="Company_logo" height={40} className="rounded-full shrink-0"></Image></div>
            <div>
                <h2 className="text-xl  capitalize">Company Name</h2>
                <p className="text-sm capitalize text-white/60 ">software Developer</p>
            </div>
            </div>
            <div className="hanken-grotesk text-white/60 flex justify-center items-center">
                <p> Dec 2025 - Present</p>
            </div>
         </div>
         <div className="hanken-grotesk text-white/60 mt-2">
           <div>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero commodi nihil ullam rerum cumque voluptas. Ratione, laborum veritatis nam dolorum nostrum vel sit libero alias et dolores culpa, atque cum.
           </div>
            <div className=" my-1 text-white capitalize">
                {technologies}
            </div>
         </div>
        </div>
    )
}