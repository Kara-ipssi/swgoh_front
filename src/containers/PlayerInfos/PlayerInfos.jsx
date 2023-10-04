import { useState, useContext } from 'react'
import { Tab, Dialog} from '@headlessui/react'

import { MainContext} from "../../contexts";

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import { Modal } from '../../components';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}


const PlayerInfos = () => {
    const { player } = useContext(MainContext);
    const { heroes } = player[0];
    const { ships } = player[0];
    let [categories, setCategories] = useState({
        Heroes: heroes,
        Ships: ships,
    });

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const fHeroes = heroes.filter((hero) => {
            return hero.name.toLowerCase().includes(searchValue);
        });
        const fShips = ships.filter((ship) => {
            return ship.name.toLowerCase().includes(searchValue);
        });
        setCategories({
            Heroes: fHeroes,
            Ships: fShips,
        });
    };

    const handleSort = (e) => {
        const sortValue = e.target.value;
        console.log(sortValue);
        const fHeroes = [...heroes].sort((a, b) => {
            if (sortValue === 'name') {
                return a.name.localeCompare(b.name);
            }
            if (sortValue === 'power') {
                return b.power - a.power;
            }
        });
        const fShips = [...ships].sort((a, b) => {
            if (sortValue === 'name') {
                return a.name.localeCompare(b.name);
            }
            if (sortValue === 'power') {
                return b.power - a.power;
            }
        });
        setCategories({
            Heroes: fHeroes,
            Ships: fShips,
        });
    };

    const handleResetSearch = () => {
        setCategories({
            Heroes: heroes,
            Ships: ships,
        });
    };

    const [isOpen, setIsOpen] = useState(false)

    return (
    <div className="w-full px-2 py-16 sm:px-0 ">
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {Object.keys(categories).map((category) => (
                    <Tab
                        onClick={handleResetSearch}
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        {category}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
                {Object.values(categories).map((units, idx) => (
                    <Tab.Panel
                        // key={idx}
                        className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
                        )}
                    >
                        <div className="w-full sm:px-0 my-8 rounded-lg flex items-center gap-4">
                            <div className="relative rounded-md shadow-xl flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    onChange={handleSearch}
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-10 sm:text-sm border-gray-300 rounded-lg"
                                    placeholder="Filtre by name"
                                />
                            </div>
                            <div className="flex justify-around flex-1 shadow-xl py-10 items-center rounded-lg">
                                <div className="flex items-center space-x-[20px]">
                                    <span>Sort by</span>
                                    <select className="rounded-lg" onChange={handleSort}>
                                        <option value="" disabled selected>---</option>
                                        <option value="name">Name</option>
                                        <option value="power">Power</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {units.map((unit) => (
                                <li className="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.05]  duration-300">
                                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="truncate text-sm font-medium text-gray-900">{unit.name}</h3>
                                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                    Rarity {unit.rarity}
                                                </span>
                                            </div>
                                            <p className="mt-1 truncate text-sm text-gray-500">Galactic power : {unit.power}</p>
                                        </div>
                                        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://assets.swgoh.gg/files/assets/light-side.816929cef526dee2.jpg" alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    </div>
    )
}

export default PlayerInfos;