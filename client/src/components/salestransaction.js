import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Link, Route, Routes} from "react-router-dom";
import Sidebar from './sidebar';
import SidebarCustomer from './sidebarcus';




function SalesTransaction(){
    return (
        <div class="bg-gray-500 min-h-screen">
        <div class="flex">
            <SidebarCustomer/>
            <div class="ml-[650px] bg-white m-[50px] w-[600px] rounded-lg mt-[125px] place-content-center">
                <div class="grid grid-cols-3">
                    <h1 class="text-center mt-5 bg-white"><b>Customer Name </b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Class Type </b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Quantity </b></h1>
                </div>
                <div class="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>
                <div class="pl-5 rounded-lg bg-white h-[350px] p-5">
                    <div class="grid grid-cols-3 grid-rows-3">
                    <input class="ml-6 mt-6 rounded-lg bg-teal-500 h-6 w-[150px] placeholder-slate-900" placeholder=' search'></input><div class="h-6 pt-5 pb-5">0kg</div><div class="h-6 pt-5 pb-5"><input class="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input></div>
                        <div></div><div class="h-6 pt-5 pb-5">0kg</div><div class="h-6 pt-5 pb-5"><input class="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input></div>
                        <div></div><div class="h-6 pt-5 pb-5">0kg</div><div class="h-6 pt-5 pb-5"><input class="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input></div>
                        <div></div><div class="h-6 pt-5 pb-5">0kg</div><div class="h-6 pt-5 pb-5"><input class="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input></div> 
                    </div>
                    <button class="delay-150 bg-white border-emerald-500 border-2 ml-96 rounded-lg p-1 mt-3" >+ Add product </button>
                    <div class="grid grid-cols-2 grid-rows-2 mt-[100px] rounded-lg bg-emerald-400 h-[1px] gap-1">
                        <p class="mt-7 ml-[1px] "><b>Total Weight</b><p class="mt-7 ">0 kg</p></p>
                        <p class="mt-7 ml-[1px] "><b>Total Price</b><p class="mt-7 ">0 kg</p></p>
                    </div>
                </div>
                <button class="delay-150 bg-white border-emerald-500 ml-[480px] border-2 place-content-center p-1 h-9 w-[80px] mt-[175px] mb-11 rounded-lg">Submit</button>
            </div>
        </div>
    </div>


    )
}
export default SalesTransaction;