import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { MainContext} from "../../contexts";
import { PlayerInfos } from "../../containers";
import { Loader } from "../../components";
const Player = () => {
    // get page params 
    const params = useParams();
    const { allyCode } = params;

    const [loading, setLoading] = useState(true);

    const { player, searchPlayerByAllyCode} = useContext(MainContext);

    useEffect(() => {
        setLoading(true);
        searchPlayerByAllyCode(allyCode);
        setLoading(false);
    // eslint-disable-next-line
    }, [allyCode]);

    if(!player[0] || loading) return <Loader/>;
    return (
        <div className="flex-col relative items-center justify-center px-[150px] py-[100px]  space-y-[20px]">
            <a className="hover:text-[#51291E]" href={player[0].playerData.url} target="_blank" rel="noreferrer">
                <h1 className="text-3xl text-center">
                    {player[0].playerData.pseudo} - {player[0].playerData.title}<br/>
                </h1>
            </a>
            <div className="flex items-center justify-around rounded-lg overflow-hidden ">
                <div className="">
                    <a href={player[0].playerData.url} target="_blank" rel="noreferrer">
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
                                    Total galactic power: <span className="text-blue-600">{player[0].playerData.totalGalacticPower}</span>
                                </li>
                                <li className="py-4">
                                    Character galactic power: <span className="text-blue-600">{player[0].playerData.characterGalacticPower}</span>
                                </li>
                                <li className="py-4">
                                    Ship galactic power: <span className="text-blue-600">{player[0].playerData.shipGalacticPower}</span>
                                </li>
                                <li className="py-4">
                                    Profile link : <a className="text-blue-600" href={player[0].playerData.url} target="_blank" rel="noreferrer">{player[0].playerData.url}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-[10px]">
                            <ul className="divide-y divide-gray-200">
                                <li className="py-4">
                                    Level: <span>{player[0].playerData.level}</span>
                                </li>
                                <li className="py-4">
                                    Guild: <span>{player[0].playerData.guild.name}</span>
                                </li>
                                <li className="py-4">
                                    Ally code: <span>{player[0].playerData.allyCode}</span>
                                </li>
                                <li className="py-4">
                                    Title: <span>{player[0].playerData.title}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PlayerInfos/>
        </div>
    )
}

export default Player;