import React from 'react'
import Sidebar from './sidebar'


const Employee = () => {
  return (
    <div class="bg-gray-500 w-screen min-h-screen">
    <div class="flex flex-col">
        <Sidebar/>
        <div class="ml-[475px] mt-[30px] bg-white h-[160px] w-[1000px] rounded-lg">
            <div class="rounded-full border-2 bg-emerald-500 h-20 w-20 ml-5 mt-5 border-white flex">
                <div class="ml-[100px] whitespace-nowrap text-left"><b>Ashley Lim</b>
                <div class="ml-[] ">Marketing Head</div>
                </div>
                <div class="flex-col text-left ml-[150px]  whitespace-nowrap">
                    <div class="ml-[px] whitespace-nowrap">Emp ID: Emp100001</div>
                    <div>Department: Marketing </div>
                    <div>Phone No: 09123098472 </div>
                    <div>Email: aaronmacias@gmail.com</div>
                </div>
                <div class="flex-col text-left ml-[75px]  whitespace-nowrap">
                    <div>Required Time In: 8:00 am</div>
                    <div>Birthday: March 21, 2002</div>
                    <div>Address: Bago, Davao City</div>
                    <div>Hiring Date: December 1, 2022</div>
                </div>

                
            </div>
            
            <div class="bg-white h-[620px] w-[1000px] rounded-lg mt-[120px]">
                <div class="flex">
                    <h1 class="text-center mt-5 bg-white flex-1"><b>Pay ID </b></h1>
                    <h1 class="text-center mt-5 bg-white flex-1"><b>Payslip Date </b></h1>
                    <h1 class="text-center mt-5 bg-white flex-1"><b>Gross Pay </b></h1>
                    <h1 class="text-center mt-5 bg-white flex-1"><b>Deductions </b></h1>
                    <h1 class="text-center mt-5 bg-white flex-1"><b>Amount </b></h1>
                </div>
                <div class="mt-[20px] ml-[20px] w-[960px] rounded-lg bg-emerald-400 h-[1px]"></div>
                <div class="flex">
                    <h1 class="text-center mt-5 bg-white flex-1">Pay10000002 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">11/05/23 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Php 13,000 </h1>
                    
                    <h1 class="text-center mt-5 bg-white flex-1">Php 2,000 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Php 11,000 </h1>
                </div>
                <div class="flex">
                    <h1 class="text-center mt-5 bg-white flex-1">Pay10000001 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">11/05/23 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Php 13,000 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Php 2,000 </h1>
                    <h1 class="text-center mt-5 bg-white flex-1">Php 11,000 </h1>
                </div>
                <div class="pl-5 rounded-lg bg-white h-[350px] p-5">
                    <div class="flex">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Employee