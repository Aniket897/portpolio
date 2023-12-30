const stack = [
    "react", "node js", "express js", "jwt", "mongodb"
]



const ProjectCard = ({project}) => {
    return (
        <div className="w-full p-4 rounded-md flex items-center max-md:flex-col justify-evenly bg-[#2B2B2B] shadow-sm py-[30px]">
            <div className="w-full md:w-[400px] md:h-[250px] overflow-hidden rounded-md">
                <img className="w-full h-full object-cover" src={project.image} alt="" />
            </div>
            <div className="max-md:mt-6 md:w-[50%]">
                <p className="font-bold text-2xl">{project.name}</p>
                <p className="mt-[20px]">{project.description}</p>
                <div className="flex flex-wrap gap-5 mt-5">
                    {
                        project.stack.map((item, index) => <p className="p-2 bg-[#6F3D3E] rounded-md text-xs" key={index}>{item}</p>)
                    }
                </div>
                <div className="mt-6 space-x-0 md:space-x-2 md:mb-8">
                    <a target="_" href={project.github} className="inline-flex items-center justify-center w-full px-4 py-2 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                        Source Code
                    </a>
                    <a target="_" href={project.deploy} className="inline-flex items-center justify-center w-full px-4 py-2 mb-2 text-lg bg-gray-400 rounded-2xl sm:w-auto sm:mb-0">
                        Live
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;


