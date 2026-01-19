import SocialLink from "../ui/SocialLink"

export const CTA = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="instrument-serif-regular-italic text-3xl ">Get in Touch</h1>
            <p className="hanken-grotesk text-white/60"><span className="text-white">Open to Work:</span>Full-Time, Freelance, or Collabs. <span className="text-white">Let's talk.</span></p>
            <div className="flex gap-4 py-3 px-3 ">
                <SocialLink></SocialLink>
                <SocialLink></SocialLink>
                 <SocialLink></SocialLink>
                <SocialLink></SocialLink>
            </div>
        </div>
    )
}