import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"

const App = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;