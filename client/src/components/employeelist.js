import React from 'react'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  return (
    <div class="bg-gray-500 w-screen min-h-screen">
        <div class="flex flex-col">
            <Sidebar/>
            <div class='flex flex-row'>
              <input className=' ml-[500px] mt-[150px] bg-white h-[30px] w-[200px] rounded-lg' placeholder='   Search'></input>  <button className='ml-[600px] mt-[150px] bg-white h-[30px] w-[200px] rounded-lg'>+ Add Employee</button>
            </div>
            <div class="ml-[500px] bg-white h-[620px] w-[1000px] rounded-lg mt-[20px]">
                <div class="grid grid-cols-5">
                    <h1 class="text-center mt-5 bg-white"><b>Employee ID</b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Name</b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Department</b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Position</b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Last Payslip</b></h1>
                </div>
                <div class="mt-[20px] ml-[20px] w-[960px] rounded-lg bg-emerald-400 h-[1px]"></div>
                <Link to="/employee"><div class="grid grid-cols-5">
                    <h1 class="text-center mt-5 bg-white">Emp1020123</h1>
                    <h1 class="text-center mt-5 bg-white">Aaron Justin Macias</h1>
                    <h1 class="text-center mt-5 bg-white">Marketing</h1>
                    <h1 class="text-center mt-5 bg-white">Marketing Head</h1>
                    <h1 class="text-center mt-5 bg-white">11/05/23</h1>
                </div></Link>
                
                <div class="grid grid-cols-5">
                    <h1 class="text-center mt-5 bg-white">Emp1020123</h1>
                    <h1 class="text-center mt-5 bg-white">John Vergel</h1>
                    <h1 class="text-center mt-5 bg-white">Marketing</h1>
                    <h1 class="text-center mt-5 bg-white">Marketing Head</h1>
                    <h1 class="text-center mt-5 bg-white">11/05/23</h1>
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

export default EmployeeList