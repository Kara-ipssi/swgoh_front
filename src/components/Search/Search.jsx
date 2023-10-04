import { useContext } from "react";
import { MainContext } from "../../contexts";
const Search = () => {
    const {search, searchPlayerByAllyCode } = useContext(MainContext);
    
    const handleChange = (e) => {
        const value = e.target.value;
        // number only && limit to 9 digits
        const filteredValue = value.replace(/[^0-9]/g, '')
        const limitedValue = filteredValue.slice(0, 9);
        search[1](limitedValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // verif if value is a number and has 9 digits
        if(search[0].length === 9){
            // search player by ally code
            await searchPlayerByAllyCode(search[0]);
        }else{
            alert("Ally code must be 9 digits");
        }
    }
    
    return (
        <div className="relative rounded-3xl ">
            <form onSubmit={handleSubmit}>
                <input className="w-[400px] p-[10px] rounded-lg" type="search" value={search[0]} placeholder="Ally code here.." onChange={handleChange} />
            </form>
        </div>
    )
};

export default Search;