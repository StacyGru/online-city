import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage"
import AboutUs from "./pages/InfoPages/AboutUs"
import Contacts from "./pages/InfoPages/Contacts";
import Payment from "./pages/InfoPages/Payment";
import Delivery from "./pages/InfoPages/Delivery";
import Guarantees from "./pages/InfoPages/Guarantees";
import ForWholesalers from "./pages/InfoPages/ForWholesalers";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog/Catalog";
import CatalogComputers from "./pages/Catalog/CatalogComputers";
import SystemUnitsList from "./pages/Catalog/SystemUnitsList";
import UserAccount from "./pages/UserAccount";
import ComputerKitsList from "./pages/Catalog/ComputerKitsList";
import MonitorsList from "./pages/Catalog/MonitorsList";
import SpecialOffersList from "./pages/Catalog/SpecialOffersList";
import {AuthProvider} from "./context/AuthContext";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <div className="grid-layout text-xs lg:text-sm 2xl:text-lg font-normal text-darkBlue bg-grayWhite">
            <AuthProvider>
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
                    <Route path="/user" element={<UserAccount/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
                <Footer/>
            </AuthProvider>
        </div>
    );
}

export default App;