
const HeroSection = () => {
    return (
        <section className="md:mt-[100px] h-[90vh] sm:h-[70vh] flex items-center justify-center">
            <div className="px-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <p className="mb-8 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
                        <span>Hi, my name is</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Aniket Kangane </span>
                        <span>and I build things for web</span>
                    </p>
                    <p className="px-0 mb-8 text-lg md:text-xl lg:px-24">
                        I like to craft solid and scalable webapps with great user experiences.
                    </p>
                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                        <button href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                            Resume

                        </button>
                        <a href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-400 rounded-2xl sm:w-auto sm:mb-0">
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;