import { createContext, useState } from "react";
import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

// Init main context
const MainContext = createContext();

// Context provider for inherit props and methodes 
const MainProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [player, setPlayer] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [error, setError] = useState(null);

    const searchPlayerByAllyCode = async (allyCode) =>{
        try {
            let req_url = `${api_url}/api/${allyCode}/create`;
            setLoading(true);    
            const response = await axios.post(req_url);
            console.log(response.data);
            setPlayer(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data);
            setLoading(false);
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