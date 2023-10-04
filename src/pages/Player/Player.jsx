import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { MainContext} from "../../contexts";
import { PlayerInfos } from "../../containers";
const Player = () => {
    // get page params 
    const params = useParams();
    const { allyCode } = params;

    const { player, searchPlayerByAllyCode} = useContext(MainContext);

    useEffect(() => {
        searchPlayerByAllyCode(allyCode);
    }, [allyCode, searchPlayerByAllyCode]);



    return (
        <div className="flex-col relative items-center justify-center px-[150px] py-[100px]  space-y-[20px]">
            {/* {console.log(player[0])} */}
            <a className="hover:text-[#51291E]" href={player[0].url} target="_blank" rel="noreferrer">
                <h1 className="text-3xl text-center">
                    {player[0].pseudo} - {player[0].title}<br/>
                </h1>
            </a>
            <div className="flex items-center justify-around rounded-lg overflow-hidden ">
                <div className="">
                    <a href={player[0].url} target="_blank" rel="noreferrer">
                        <img 
                        className="rounded-lg cursor-pointer  w-[500px]" 
                        src={"https://assets.swgoh.gg/files/assets/light-dark-side.6eaf8b4566bb57bc.png"} alt="avatar" />
                    </a>
                </div>
                <div className="infos flex-col bg-slate-100 w-[40%] rounded-lg">
                    <div className="flex justify-between h-[260px] px-[50px] items-center">
                        <div className="space-y-[10px]">
                            <ul className="divide-y divide-gray-200">
                                <li className="py-4">
                                    Total galactic power: <span className="text-blue-600">{player[0].totalGalacticPower}</span>
                                </li>
                                <li className="py-4">
                                    Character galactic power: <span className="text-blue-600">{player[0].heroesGalacticPower}</span>
                                </li>
                                <li className="py-4">
                                    Ship galactic power: <span className="text-blue-600">{player[0].shipsGalacticPower}</span>
                                </li>
                                <li className="py-4">
                                    Profile link : <a className="text-blue-600" href={player[0].url} target="_blank" rel="noreferrer">{player[0].url}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-[10px]">
                            <ul className="divide-y divide-gray-200">
                                <li className="py-4">
                                    Level: <span>{player[0].level}</span>
                                </li>
                                <li className="py-4">
                                    Guild: <span>{player[0].guildName}</span>
                                </li>
                                <li className="py-4">
                                    Ally code: <span>{player[0].allyCode}</span>
                                </li>
                                <li className="py-4">
                                    Title: <span>{player[0].title}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Example/> */}
            <PlayerInfos/>
            
        </div>
    )
}

export default Player;