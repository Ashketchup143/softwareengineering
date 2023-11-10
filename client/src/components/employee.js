import React from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Employee = () => {
  return (
    <div className="w-screen min-h-screen flex">
      <Sidebar />

      <div className="w-screen min-h-screen flex flex-col ml-[375px] items-start">
        <div className="flex flex-row mt-[50px]">
          <input
            className="bg-[#D9D9D9] h-[30px] w-[225px] rounded-tl-sm rounded-bl-sm min-w-[50px] border-[1.5px] border-black placeholder:text-black"
            placeholder=" Search"
          ></input>
          <button className="h-[30px] w-[40px] border-l-0 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black justify-center items-center px-2 hover:bg-[#F3F3F3]">
            <Icon icon="carbon:search" className="h-5 w-5" />
          </button>
        </div>

        <div className="font-bold text-2xl mt-5">Employee</div>

        <div className="bg-[#D9D9D9] h-[150px] w-10/12 border-[1.5px] border-black mt-[20px] font-bold shadow-md rounded-sm">
          <div className="flex">
            <div className="rounded-full border-2 bg-white h-[100px] w-[100px] ml-8 mt-5 border-white "></div>

            <div className="flex-col ml-[100px] w-[150px] text-left mt-4 whitespace-nowrap">
              <div class="">Ashley Lim</div>
              <div class="">Emp ID: Emp100001</div>
              <div class="">Department: Marketing</div>
              <div class=" ">Phone No: 09123098472</div>
            </div>
            <div className="flex-col ml-[120px] w-[150px] text-left mt-4 whitespace-nowrap">
              <div>Required Time In: 8:00 am</div>
              <div>Birthday: March 21, 2002</div>
              <div>Address: Bago, Davao City</div>
              <div>Hiring Date: December 1, 2022</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-10/12 shadow-lg mt-5">
          <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm h-16 justify-center items-center font-bold border-black shadow-md">
            <div className="flex-[0.1]"></div>
            <div className="flex-1">Pay ID</div>
            <div className="flex-1">Payslip Date</div>
            <div className="flex-1">Gross Pay</div>
            <div className="flex-1">Deductions</div>
            <div className="flex-1">Amount</div>
          </div>

          <div className='flex flex-col bg-white border-[1.5px] rounded-b-sm border-t-0 h-[450px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto'>

            <div className="flex flex-row w-full mt-5">
              <div className="flex-[0.1]">
                <Link to="/employee">
                  <button className="ml-4 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                    <Icon icon="bxs:edit" className="h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="flex-1">Pay10000002</div>
              <div className="flex-1">11/05/23</div>
              <div className="flex-1">Php 13,000</div>
              <div className="flex-1">Php 2,000</div>
              <div className="flex-1">Php 11,000</div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex-[0.1]">
                <Link to="/employee">
                  <button className="ml-4 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                    <Icon icon="bxs:edit" className="h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="flex-1">Pay10000001</div>
              <div className="flex-1">11/05/23</div>
              <div className="flex-1">Php 13,000</div>
              <div className="flex-1">Php 2,000</div>
              <div className="flex-1">Php 11,000</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Employee;