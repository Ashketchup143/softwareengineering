import React from 'react'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom';

const CustomerList = () => {
  return (
    <div class="bg-gray-500 w-screen min-h-screen">
    <div class="flex flex-col">
        <Sidebar />
        <div class='flex flex-row'>
            <input className='ml-[500px] mt-[150px] bg-white h-[30px] w-[200px] rounded-lg' placeholder='   Search'></input>
            <button className='ml-[600px] mt-[150px] bg-white h-[30px] w-[200px] rounded-lg'>+ Add Customer</button>
        </div>
        <div class="ml-[500px] bg-white h-[620px] w-[1000px] rounded-lg mt-[20px]">
            <div class="flex">
                <h1 class="text-center mt-5 bg-white flex-1"><b>Customer ID</b></h1>
                <h1 class="text-center mt-5 bg-white flex-1"><b>Name</b></h1>
                <h1 class="text-center mt-5 bg-white flex-1"><b>Shipping Address</b></h1>
                <h1 class="text-center mt-5 bg-white flex-1"><b>Last Payment Date</b></h1>
            </div>
            <div class="mt-[20px] ml-[20px] w-[960px] rounded-lg bg-emerald-400 h-[1px]"></div>
            <Link to="">
                <div class="flex">
                    <h1 class="text-center mt-5 bg-white flex-1">Cust09123123</h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Aaron Justin Macias</h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Davao Fastfood </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">11/05/23</h1>
                </div>
            </Link>

            <div class="flex">
                    <h1 class="text-center mt-5 bg-white flex-1">Cust09123123</h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Aaron Justin Macias</h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Davao Fastfood </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">11/05/23</h1>
            </div>
            <div class="pl-5 rounded-lg bg-white h-[350px] p-5">
                <div class="flex">
                    {/* <!-- Your content here --> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CustomerList