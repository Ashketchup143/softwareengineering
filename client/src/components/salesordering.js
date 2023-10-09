import React from 'react'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom';

const SalesOrdering1 = () => {
  return (
    <div class="bg-gray-500 w-screen min-h-screen">
        <div class="flex flex-col">
            <Sidebar/>
            <div className='ml-[275px] mt-8 text-2xl text-white font-bold '>Sales Ordering</div>
            <div class='flex flex-row'>
                
                <input className=' ml-[400px] mt-[100px] bg-white h-[30px] w-[200px] rounded-lg' placeholder='   Search'></input>
                  <Link to="/salestransaction"><button className='ml-[850px] mt-[100px] bg-white h-[30px] w-[200px] rounded-lg'>+ Create Transaction</button></Link>
            </div>
                <div class="ml-[400px] bg-white h-[620px] w-[1250px] rounded-lg mt-[20px]">
                    <div class="grid grid-cols-6">
                        <h1 class="text-center mt-5 bg-white"><b>Sales ID</b></h1>
                        <h1 class="text-center mt-5 bg-white"><b>Customer Name</b></h1>
                        <h1 class="text-center mt-5 bg-white"><b>Order Date</b></h1>
                        <h1 class="text-center mt-5 bg-white"><b>Order Quantity</b></h1>
                        <h1 class="text-center mt-5 bg-white"><b>Order Cost</b></h1>
                        <h1 class="text-center mt-5 bg-white"><b>Order Status</b></h1>
                    </div>
                    <div class="mt-[20px] ml-[20px] w-[960px] rounded-lg bg-emerald-400 h-[1px]"></div>
                    <div class="grid grid-cols-6">
                        <h1 class="text-center mt-5 bg-white">Sales 001123</h1>
                        <h1 class="text-center mt-5 bg-white">Jose Paciano</h1>
                        <h1 class="text-center mt-5 bg-white">11/05/23</h1>
                        <h1 class="text-center mt-5 bg-white">200kg</h1>
                        <h1 class="text-center mt-5 bg-white">Php 11,700</h1>
                        <h1 class="text-center mt-5 bg-white">Shipping</h1>
                    </div>
                    <div class="grid grid-cols-6">
                        <h1 class="text-center mt-5 bg-white">Sales 001123</h1>
                        <h1 class="text-center mt-5 bg-white">John Mariano</h1>
                        <h1 class="text-center mt-5 bg-white">09/07/23</h1>
                        <h1 class="text-center mt-5 bg-white">200kg</h1>
                        <h1 class="text-center mt-5 bg-white">Php 11,700</h1>
                        <h1 class="text-center mt-5 bg-white">Delivered</h1>
                    </div>
                    <div class="pl-5 rounded-lg bg-white h-[350px] p-5">
                        <div class="grid grid-cols-2 grid-rows-3">
                        </div>
                        </div>
                    </div>
                </div>
              
          </div>
  )
}

export default SalesOrdering1