import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import AboutUs from "./pages/AboutUs"

function App() {
    return (
        <div className="grid-layout text-xs lg:text-sm 2xl:text-lg font-normal text-darkBlue bg-grayWhite">
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/about_us" element={<AboutUs/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;