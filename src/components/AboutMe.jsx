import { Toolbox } from "@phosphor-icons/react";
import Divider from "./Divider";



const Skills = [
    "html",
    "css",
    "javascript",
    "react js",

]


const AboutMe = () => {
    return (
        <div className="w-[80vw] min-h-[90vh] flex items-center justify-center flex-col mx-auto py-6 ">
            <p className="text-xl md:w-[50vw] text-center mt-4">👋 Hi, I'm Aniket Kangane, a self-taught passionate FrontEnd developer from  India. I've been building stuff on the 🌐 web since when I was in 10th standard, I've made countless projects and I also posses 🪄 magical powers of using react to build 🚀 delightful user interfaces.</p>
            <p className="text-xl md:w-[50vw] text-center mt-5">
                Proactive React developer proficient in JavaScript and React.js
                framework. Solid understanding of frontend technologies including
                HTML, CSS. Collaborative team player with strong problem-solving
                skills and attention to detail. Experienced in integrating frontend
                components with server-side logic using Git for collaborative
                projects.
            </p>
            <div className="mt-[150px] grid max-sm:grid-cols-2 md:flex flex-wrap gap-5 ">
                {Skills.map((item, index) => {
                    return <button key={index} className="inline-flex md:w-[150px] items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-red-400 uppercase sm:w-auto sm:mb-0">
                        {item}
                    </button>
                })}
            </div>
        </div>
    )
}

export default AboutMe;


