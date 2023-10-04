import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api_url = process.env.REACT_APP_API_URL;

// Init main context
const MainContext = createContext();

// Context provider for inherit props and methodes 
const MainProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [player, setPlayer] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const searchPlayerByAllyCode = async (allyCode) =>{
        try {
            let req_url = `${api_url}/api/${allyCode}/create`;
            setLoading(true);    
            const response = await axios.post(req_url);
            setPlayer(response.data.data);
            navigate(`/player/${allyCode}`);
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data.message);
            setLoading(false);
            navigate(`/`);
        }
    } 

    // context value to be passed to children components
    const value = {
        loading: [loading, setLoading],
        player: [player, setPlayer],
        api_url,
        searchPlayerByAllyCode,
        search: [searchValue, setSearchValue],
        error: [error, setError],
        navigate
    }

    // return provider
    return(
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}

export {
    MainContext,
    MainProvider
}