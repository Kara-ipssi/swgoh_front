import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api_url = process.env.REACT_APP_API_URL;

// Init main context
const MainContext = createContext();


// Context provider for inherit props and methodes 
const MainProvider = ({children}) => {
    const [player, setPlayer] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [error, setError] = useState(null);
    const [allHeroes, setAllHeroes] = useState([]);
    const [allShips, setAllShips] = useState([]);

    const navigate = useNavigate();

    const searchPlayerByAllyCode = async (allyCode) =>{
        try {
            let req_url = `${api_url}/api/${allyCode}/create`;
            const response = await axios.post(req_url);
            setPlayer(response.data);
            navigate(`/player/${allyCode}`);

        } catch (error) {
            setError(error.response.data.message);
            navigate(`/`);
        }
    }

    /**
     * Fetch all heroes and ships from swgoh.gg
     */
    const fetchAllHeroesAndShips = async () => {
        try {
            const response = await axios.get(`${api_url}/api/allHeroesAndShips/`);
            setAllHeroes(response.data.heroes);
            setAllShips(response.data.ships);
        } catch (error) {
            console.log(error);
        }
    }

    // context value to be passed to children components
    const value = {
        player: [player, setPlayer],
        api_url,
        searchPlayerByAllyCode,
        search: [searchValue, setSearchValue],
        error: [error, setError],
        navigate,
        allHeroes: [allHeroes, setAllHeroes],
        allShips: [allShips, setAllShips],
        fetchAllHeroesAndShips,
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