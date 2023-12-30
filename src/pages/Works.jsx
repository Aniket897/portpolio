import Projects from "../components/Projects"

const Works = () => {
    return (
        <>
            <div className="bg-black w-full p-4 flex h-[200px] items-center justify-center text-center flex-col">
                <p className="font-extrabold text-4xl ">⚒️ My Works</p>
            </div>
            <Projects/>
        </>
    )
}

export default Works