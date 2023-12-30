import AboutMe from "../components/AboutMe";

const About = () => {
    return (
        <>
            <div className="bg-black w-full p-4 flex h-[200px] items-center justify-center text-center flex-col">
                <p className="font-extrabold text-4xl ">👋 About Me</p>
            </div>
            <AboutMe />
            <div className="flex items-center flex-col justify-center pb-[100px]">
                <p className="text-[#6F3D2E]">GET IN TOUCH</p>
                <p className="text-xl md:w-[50vw] self-center md:text-3xl text-center mt-[50px]">that's all about me. There is no better time to connect with me via socials or filling the contact form.</p>
                <a href="/contact" className="mt-[50px] bg-[#6F3D2E] py-3 px-5 rounded-md">Let's Talk</a>
            </div>
        </>
    )
}

export default About;