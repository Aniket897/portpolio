import { EnvelopeSimple, House, List, User, Wrench } from '@phosphor-icons/react'

import Sidebar from './Sidebar'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const navigations = [
    { name: 'home', href: "/", icon: <House className='mt-[-5px]' size={18} /> },
    { name: 'about', href: "/about", icon: <User className='mt-[-5px]' size={18} /> },
    { name: 'my works', href: "/works", icon: <Wrench className='mt-[-5px]' size={18} /> },
    { name: 'contact', href: "/contact", icon: <EnvelopeSimple className='mt-[-5px]' size={18} /> },
]



const Navbar = () => {
    const [navbar, showNavbar] = useState(false);
    const navigate = useNavigate();
    return (
        <div className=" sticky bg-[#2A2929] top-0 left-0 w-screen uppercase shadow-md font-bold">
            <div className="w-[80%] max-md:w-[90%] mx-auto flex items-center justify-between py-5">
                <Link to={'/'}>
                    <div className="flex items-center gap-3">
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src="profile.png" alt="" />
                        </div>
                        Aniket Kangane
                    </div>
                </Link>
                <div className="uppercase hidden md:flex items-center gap-10">
                    {navigations.map((item, index) => {
                        return <p onClick={() => navigate(item.href)} className="hover:text-red-500 duration-300 cursor-pointer flex items-center gap-2" key={index}>
                            {item.icon}
                            {item.name}

                        </p>
                    })}
                </div>
                <List onClick={() => showNavbar(true)} className='block md:hidden' size={20} />
            </div>
            {navbar && <Sidebar close={showNavbar} />}
        </div>
    )
}

export default Navbar;