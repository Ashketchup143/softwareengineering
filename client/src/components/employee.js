import React from 'react'
import Sidebar from './sidebar'


const Employee = () => {
  return (
    <div class="bg-gray-500 w-screen min-h-screen">
        <div class="flex">
            <Sidebar/>
            <div class="ml-[350px] mt-[30px] bg-white h-[160px] w-[1000px] rounded-lg">
                <div class="rounded-full border-2 bg-emerald-500 h-20 w-20 ml-5 mt-5 border-white grid grid-cols-3 grid-rows-3">
                    <div class="ml-[692px] whitespace-nowrap">Gender: Male</div>
                    <div class="ml-[80px] whitespace-nowrap"><b>Ashley Lim</b><div class="ml-[] text-sm">Marketing Head </div> </div>
                    <div class="ml-[340px] whitespace-nowrap">Emp ID: Emp100001 <div class="ml-[300px]">Address: Bago, Davao City</div></div>
                    <div class="ml-[392px] whitespace-nowrap">Hiring Date: December 1, 2022   <div class="ml-[300px]">Required Time In: 8:00 am</div></div>
                    <div class="ml-[367px] whitespace-nowrap"><br/>Phone No: 09123098472 <br/><div class="ml-[299px] whitespace-nowrap">Email: aaronmacias@gmail.com</div></div>
                    <div class="ml-[340px] whitespace-nowrap"><br/>Department: Marketing <br/><div class="ml-[300px] whitespace-nowrap">Birthday: March 21, 2002</div></div>
                    <div class="ml-[392px] whitespace-nowrap"><br/>Position: Marketing Head <br/></div>
                    
                    
                    
                </div>
            
            <div class="bg-white h-[620px] w-[1000px] rounded-lg mt-[120px]">
                <div class="grid grid-cols-5">
                    <h1 class="text-center mt-5 bg-white"><b>Pay ID </b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Payslip Date </b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Gross Pay </b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Deductions </b></h1>
                    <h1 class="text-center mt-5 bg-white"><b>Amount </b></h1>
                </div>
                <div class="mt-[20px] ml-[20px] w-[960px] rounded-lg bg-emerald-400 h-[1px]"></div>
                <div class="grid grid-cols-5">
                    <h1 class="text-center mt-5 bg-white">Pay10000002 </h1>
                    <h1 class="text-center mt-5 bg-white">11/05/23 </h1>
                    <h1 class="text-center mt-5 bg-white">Php 13,000 </h1>
                    <h1 class="text-center mt-5 bg-white">Php 2,000 </h1>
                    <h1 class="text-center mt-5 bg-white">Php 11,000 </h1>
                </div>
                <div class="grid grid-cols-5">
                    <h1 class="text-center mt-5 bg-white">Pay10000001 </h1>
                    <h1 class="text-center mt-5 bg-white">11/05/23 </h1>
                    <h1 class="text-center mt-5 bg-white">Php 13,000 </h1>
                    <h1 class="text-center mt-5 bg-white">Php 2,000 </h1>
                    <h1 class="text-center mt-5 bg-white">Php 11,000 </h1>
                </div>
                <div class="pl-5 rounded-lg bg-white h-[350px] p-5">
                    <div class="grid grid-cols-2 grid-rows-3">
                    </div>
                    </div>
                </div>
            </div>
              
        </div>
        </div>
  )
}

export default Employee