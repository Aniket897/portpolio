import ProjectCard from './ProjectCard'
const projects = [
    {
        name: "event-prime clone",
        description: "event prime is a platform where companies can host events and sell tickets to customer",
        stack: ["ReactJs", "NodeJs", "ExpresJs", "Mongodb", "Stripe", "JWT"],
        github: "https://github.com/Aniket897/event-prime-clone",
        deploy: "https://event-prime-clone.vercel.app/",
        image: "/event-prime.png"
    },
    {
        name: "halloween-shop clone",
        description: "halloween shop is a ecommerce website where cusomer get products related to halloween",
        stack: ["ReactJs", "Tailwind CSS", "Redux", "Redux-toolkit"],
        github: "https://github.com/Aniket897/halloween-shop-clone",
        deploy: "https://halloween-shop-clone.vercel.app/",
        image: "/halloween-shop.png"
    },
]

const Projects = () => {
    return (
        <div className="w-[80vw] flex items-center justify-center flex-col mx-auto py-6 ">
            <div className='mt-[50px] flex flex-col gap-y-[50px]'>
                {
                    projects.map((item, index) => <ProjectCard key={index} project={item} />)
                }
            </div>
        </div>
    )
}

export default Projects