import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage"
import AboutUs from "./pages/AboutUs"
import Contacts from "./pages/Contacts";
import Payment from "./pages/Payment";
import Delivery from "./pages/Delivery";
import Guarantees from "./pages/Guarantees";
import ForWholesalers from "./pages/ForWholesalers";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import CatalogComputers from "./pages/CatalogComputers";
import SystemUnitsList from "./pages/SystemUnitsList";
import ComputerKitsList from "./pages/ComputerKitsList";
import MonitorsList from "./pages/MonitorsList";
import SpecialOffersList from "./pages/SpecialOffersList";

function App() {
    return (
        <div className="grid-layout text-xs lg:text-sm 2xl:text-lg font-normal text-darkBlue bg-grayWhite">
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about_us" element={<AboutUs/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="/payment" element={<Payment/>} />
                    <Route path="/delivery" element={<Delivery/>} />
                    <Route path="/guarantees" element={<Guarantees/>} />
                    <Route path="/for_wholesalers" element={<ForWholesalers/>} />
                    <Route path="/login" element={<LogIn/>} />
                    <Route path="/registration" element={<Registration/>} />
                    <Route path="/basket" element={<Basket/>} />
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/computers" element={<CatalogComputers/>} />
                    <Route path="/system_units" element={<SystemUnitsList/>} />
                    <Route path="/computer_kits" element={<ComputerKitsList/>} />
                    <Route path="/monitors" element={<MonitorsList/>} />
                    <Route path="/special_offers" element={<SpecialOffersList/>} />
                </Routes>
                <Footer/>
        </div>
    );
}

export default App;