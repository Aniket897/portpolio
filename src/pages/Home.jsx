import { Envelope, LockSimple, MapPinLine, PhoneCall, Truck } from "@phosphor-icons/react";
import AboutMe from "../components/AboutMe";
import Divider from "../components/Divider";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Divider text='About Me' />
            <AboutMe />
            <div className="mt-[150px]">
                <Divider text='My Projects' />
            </div>
            <Projects />
            <div className="mt-[50px]">
                <Divider text='Contact Me' />
            </div>
            <div className="w-[80vw] mx-auto p-5 mt-[100px] max-md:grid-cols-1 grid grid-cols-3">
                <div className="flex items-center max-md:flex-col gap-[50px] md:w-[80vw] mx-auto justify-evenly ">
                    <div className="w-full bg-[#2B2B2B] p-5 rounded-md hover:shadow-lg cursor-pointer">
                        <div className="flex items-center gap-2 py-5">
                            <PhoneCall size={32} weight="fill" />
                            <p className="text-2xl heading">Phone</p>
                        </div>
                        <p>+91 9637618151</p>
                    </div>
                    <div className="w-full bg-[#2B2B2B] p-5 rounded-md hover:shadow-lg cursor-pointer">
                        <div className="flex items-center gap-2 py-5">
                            <Envelope size={32} weight="fill" />
                            <p className="text-2xl heading">Email</p>
                        </div>
                        <p>aniketbkangane9637@gmail.com</p>
                    </div>
                    <div className="w-full bg-[#2B2B2B] p-5 rounded-md hover:shadow-lg cursor-pointer">
                        <div className="flex items-center gap-2 py-5">
                            <MapPinLine size={32} weight="fill" />
                            <p className="text-2xl heading">Address</p>
                        </div>
                        <p>Jalna , Maharashtra</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;