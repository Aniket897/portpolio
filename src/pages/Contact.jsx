import ContactUs from "../components/ContactUs";

const Contact = () => {
    return (
        <>
            <div className="bg-black w-full p-4 flex h-[200px] items-center justify-center text-center flex-col">
                <p className="font-extrabold text-4xl ">✉️ Contact Me</p>
            </div>
            <ContactUs/>
        </>
    )
}

export default Contact;