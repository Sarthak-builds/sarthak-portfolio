import { Exptag } from "../ui/exptag";
import { experienceData } from "@/data/experience";

export const Experience = () => {
    return (
        <div className="my-10">
            <h2 className="instrument-serif-regular-italic text-2xl  tracking-tight  text-white/90">
                Experience
            </h2>

            <div className="flex flex-col scale-100 md:scale-95">
                {experienceData.map((item) => (
                    <Exptag
                        key={item.id}
                        logo={item.logo}
                        company={item.company}
                        role={item.role}
                        date={item.date}
                        description={item.description}
                        technologies={item.technologies}
                    />
                ))}
            </div>
        </div>
    )
}