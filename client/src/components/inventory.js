import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Sidebar from './sidebar';

function Inventory(){
     return (
        <div className="bg-gray-500 min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="ml-[650px] bg-white m-[50px] w-[600px] h-[700px] rounded-lg mt-[125px] place-content-center">
                    <div className="flex">
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Class Type</b>
                        </div>
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Quantity</b>
                        </div>
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Price</b>
                        </div>
                    </div>

                    <div className="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>

                    <div className='w-[550px] h-[400px]'>
                        <div className="flex mt-4">
                            <div className="text-center mt-5 ml-[55px]">
                                Class A
                            </div>
                            <div className="text-center mt-5 ml-[175px]">
                                0kg
                            </div>
                            <div className=" mt-5 ml-[150px]">
                                php56/kg
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="text-center mt-5 ml-[55px]">
                                Class A
                            </div>
                            <div className="text-center mt-5 ml-[175px]">
                                0kg
                            </div>
                            <div className=" mt-5 ml-[150px]">
                                php56/kg
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="text-center mt-5 ml-[55px]">
                                Class A
                            </div>
                            <div className="text-center mt-5 ml-[175px]">
                                0kg
                            </div>
                            <div className=" mt-5 ml-[150px]">
                                php56/kg
                            </div>
                        </div>

                    </div>
                    

                        
                    

                    <div className="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>
                    <div className="flex">
                        <div className='flex-col ml-14'>
                            <div className="text-center mt-5 bg-white">
                            <b>Total Weight</b>
                            </div>
                            <div className='mt-5'>0kg</div>
                        </div>
                        

                        <button className="delay-150 bg-white border-emerald-500 ml-24 mt-16 border-2 place-content-center p-1 h-9 w-[150px] rounded-lg">Add Inventory</button>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};
export default Inventory;