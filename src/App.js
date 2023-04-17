import "./index.css"
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="text-xl font-normal text-darkBlue">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;