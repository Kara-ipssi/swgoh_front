import dark_vador from "./dark_vador.png";
import stormtrooper from "./stormtrooper.png";
// import r2d2 from "./R2D2.webp";
import Search from "../Search/Search";

const Header = () => {
    
    return (
        <>
            <div className="headers bg-[#110F17] w-full h-[150px] flex items-center justify-around ">
                    {/* <img className="h-[100px]" src={r2d2} alt="" /> */}
                <a href="/"><img src={dark_vador} className="h-24 scale-x-[-1]" alt=""  /></a>
                <div className="cursor-pointer flex-col space-y-[10px]">
                    <a href="/"> 
                        <span className="flex justify-center text-white hover:text-indigo-100 text-xl font-bold uppercase">SWGOH - Companion</span> 
                    </a>
                    <Search/>
                </div>
                <a href="/"><img src={stormtrooper} className="h-24" alt=""  /></a>
            </div>
            {/* <div className="subHeader bg-[#6D3928] w-full h-[70px]">
            </div> */}
        </>
    )
}

export default Header;