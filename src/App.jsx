import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element="Hello Test"/>
        </Routes>
    );
};

export default App;