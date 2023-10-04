import { Route, Routes } from "react-router-dom";
import { Home, Player } from "./pages";
import { Header } from "./components";


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/player/:allyCode" element={<Player/>}/>
            </Routes>
        </>
    );
};

export default App;