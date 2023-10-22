import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Link, Route, Routes} from "react-router-dom";
import Sidebar from './sidebar';
import SidebarCustomer from './sidebarcus';




function SalesTransaction(){
    return (
        <div className="bg-gray-500 min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="ml-[650px] bg-white m-[50px] w-[600px] h-[700px] rounded-lg mt-[125px] place-content-center">
                    <div className="flex">
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Customer Name</b>
                        </div>
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Class Type</b>
                        </div>
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Quantity</b>
                        </div>
                    </div>

                    <div className="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>

                    <div className='w-[550px] h-[400px]'>
                        <div className="flex mt-4">
                        <input className="ml-6 mt-6 rounded-lg bg-teal-500 h-6 w-[150px] placeholder-slate-900" placeholder='Search'></input>
                            <div className="text-center mt-5 ml-[100px]">
                                Class A
                            </div>
                            <div className=" mt-5 ">
                                <input className="ml-[125px] rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="text-center mt-5 ml-[275px]">
                                Class B
                            </div>
                            <div className="text-center mt-5">
                                <input className="ml-[125px] rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="text-center mt-5 ml-[275px]">
                                Class C
                            </div>
                            <div className="text-center mt-5">
                                <input className="ml-[125px] rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <button className="delay-150 bg-white border-emerald-500 border-2 ml-96 rounded-lg p-1 mt-7">+ Add product</button>
                    </div>
                    

                        
                    

                    <div className="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>
                    <div className="flex">
                        <div className='flex-col ml-14'>
                            <div className="text-center mt-5 bg-white">
                            <b>Total Weight</b>
                            </div>
                            <div className='mt-5'>0kg</div>
                        </div>
                        <div className='flex-col ml-24'>
                            <div className="text-center mt-5 bg-white">
                            <b>Total Price</b>
                            </div>
                            <div className='mt-5'>Php 50000</div>
                        </div>

                        <button className="delay-150 bg-white border-emerald-500 ml-24 mt-16 border-2 place-content-center p-1 h-9 w-[80px] rounded-lg">Submit</button>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>


    )
}
export default SalesTransaction;