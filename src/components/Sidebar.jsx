import { EnvelopeSimple, House, User, Wrench } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'



const navigations = [
    { name: 'home', href: "/", icon: <House className='mt-[-5px]' size={20} /> },
    { name: 'about', href: "/about", icon: <User className='mt-[-5px]' size={20} /> },
    { name: 'my works', href: "/works", icon: <Wrench className='mt-[-5px]' size={20} /> },
    { name: 'contact', href: "/contact", icon: <EnvelopeSimple className='mt-[-5px]' size={20} /> },
]



const Sidebar = ({ close }) => {
    const ref = useRef();

    const handleClickOutSide = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            close(false)
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutSide, true)
        document.body.style.overflowY = 'hidden';
        return () => {
            document.removeEventListener("click", handleClickOutSide, true)
            document.body.style.overflowY = 'scroll';
        }
    }, [])
    return (
        <div ref={ref} className="w-[70vw] absolute top-0 right-0 flex pl-[30px] justify-center flex-col gap-y-10 bg-black h-screen">
            {navigations.map((item, index) => {
                return <a href={item.href} className='hover:text-red-500 duration-300  flex items-center gap-5' key={index}>
                        {item.icon} {item.name}
                </a>
            })}
        </div>
    )
}

export default Sidebar;