import { Toolbox } from "@phosphor-icons/react"
import Divider from "./Divider"

const Skills = [
    "html",
    "css",
    "javascript",
    "react js",
    
]



const MySkills = () => {
    return (
        <div className="w-[80vw] h-[90vh] flex items-center justify-center flex-col mx-auto py-6 ">
            <Divider text={'My Skills'} />
            <div className="mt-9 grid max-sm:grid-cols-2 md:flex flex-wrap gap-5">
                {Skills.map((item, index) => {
                    return <button key={index} className="inline-flex md:w-[150px] items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-red-400 uppercase sm:w-auto sm:mb-0">
                        {item}
                    </button>
                })}
            </div>
        </div>
    )
}

export default MySkills