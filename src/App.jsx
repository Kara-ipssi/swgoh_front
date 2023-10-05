import { Route, Routes } from "react-router-dom";
import { Home, Player } from "./pages";
import { Header, Footer } from "./components";
import { useEffect, useContext} from "react";
import { MainContext } from "./contexts";



const App = () => {

    const { fetchAllHeroesAndShips } = useContext(MainContext);

    useEffect(() => {
        fetchAllHeroesAndShips();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="min-h-screen">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/player/:allyCode" element={<Player/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;