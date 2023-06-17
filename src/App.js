import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/InfoPages/MainPage"
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
import ProductList from "./pages/Catalog/ProductList";
import UserAccount from "./pages/UserAccount";
import {AuthProvider} from "./context/AuthContext";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

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
                    <Route path="/catalog/computers" element={<CatalogComputers/>} />
                    <Route path="/catalog/:category" element={<ProductList/>} />
                    <Route path="/catalog/computers/:category" element={<ProductList/>} />
                    <Route path="/user" element={<UserAccount/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route exact path="/order/:id" element={<Order/>} />
                </Routes>
                <Footer/>
            </AuthProvider>
        </div>
    );
}

export default App;