import { Exptag } from "../ui/exptag";
import { experienceData } from "@/data/experience";

export const Experience = () => {
    return (
        <div className="mt-6 mb-16 mx-2 md:my-12">
            <h2 className="instrument-serif-regular-italic text-2xl  tracking-tight text-neutral-900 dark:text-white/90">
                Experience
            </h2>

            <div className="flex flex-col scale-100 pl-2 md:pl-4 mt-4 ">
                {experienceData.map((item, index) => (
                    <Exptag
                        key={item.id}
                        logo={item.logo}
                        company={item.company}
                        role={item.role}
                        date={item.date}
                        description={item.description}
                        technologies={item.technologies}
                        isFirst={index === 0}
                        isLast={index === experienceData.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}