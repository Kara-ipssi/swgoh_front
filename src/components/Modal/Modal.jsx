import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({open, setOpen, selectedUnit, unitOtherInfos}) {
  

    const cancelButtonRef = useRef(null)

    /**
     * @description get unit stats
     */
    const {stats} = selectedUnit;

    if(!open) return null;
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={unitOtherInfos.image} alt="" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            {selectedUnit && selectedUnit.name}
                                        </Dialog.Title>
                                    <div className="mt-2 flex">
                                        {/* <p className="text-sm text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo
                                        pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
                                        </p> */}
                                        <div className="space-y-[10px] flex-auto">
                                            <ul className="divide-y divide-gray-200 ">
                                                <li className="py-4 text-left">
                                                    Life : <span className="text-red-600">{stats['1']}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Protection : <span className="text-blue-600">{stats['28']}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Speed: <span className="text-blue-600">{stats['5']}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Special Damage : <span className="text-blue-600">{stats['7']}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Special Critical Chance : <span className="text-blue-600">{stats['22']}</span>
                                                </li>
                                            </ul>                                
                                        </div>
                                        <div className="space-y-[10px] flex-auto">
                                            <ul className="divide-y divide-gray-200">
                                                <li className="py-4 text-left">
                                                    Power : <span className="text-blue-600">{selectedUnit.power}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Tenacity : <span className="text-blue-600">{stats['18']}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Physical damage: <span className="text-blue-600">{stats["31"]}</span>
                                                </li>
                                                <li className="py-4 text-left">
                                                    Physical Critical Chance : <span className="text-blue-600">{stats['21']}</span>
                                                </li>
                                                
                                                {
                                                    selectedUnit.combat_type === 1 && (
                                                        <>
                                                            <li className="py-4 text-left">
                                                            Critical damage: <span className="text-blue-600">{stats['16']}</span>
                                                            </li>
                                                            <li className='py-4 text-left'>
                                                                Health steal: <span className="text-blue-600">{stats['27']}</span>
                                                            </li>
                                                        </>
                                                    )
                                                }
                                            </ul>                                
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                    
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
