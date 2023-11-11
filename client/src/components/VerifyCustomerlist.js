import React from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const VerifyCustomerlist = () => {
    return (
        <div className="w-screen min-h-screen flex">
          <Sidebar />
          <div className="w-screen min-h-screen flex flex-col ml-[375px] items-start">
            <div className="flex flex-row mt-[100px]">
              <input
                className="bg-[#D9D9D9] h-[30px] w-[225px] rounded-tl-sm rounded-bl-sm min-w-[50px] border-[1.5px] border-black placeholder:text-black"
                placeholder=" Search"
              ></input>
              <button className="h-[30px] w-[40px] border-l-0 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black justify-center items-center px-2 hover:bg-[#F3F3F3]">
                <Icon icon="carbon:search" className="h-5 w-5" />
              </button>
            </div>
            <div className="font-bold text-2xl mt-5">Verify Customers</div>
            <div className="flex flex-col w-10/12 mt-5">
              <div className="flex justify-end">
                <button className="h-[30px] w-[200px] bg-[#D9D9D9] rounded-sm border-[1.5px] border-black hover:bg-[#F3F3F3]">
                  + Verify Customers
                </button>
              </div>
            </div>
            <div className="flex flex-col w-10/12 shadow-lg mt-5">
              <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm h-16 justify-center items-center font-bold border-black shadow-md">
                <div className="flex-[0.15]"></div>
                <div className="flex-1">Customer ID</div>
                <div className="flex-1">Name</div>
                <div className="flex-1">Shipping Address</div>
                <div className="flex-1">Last Payment Date</div>
              </div>
    
              <div className='flex flex-col bg-white border-[1.5px] rounded-b-sm border-t-0 h-[500px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto'>
              
              <div className="flex flex-row w-full mt-5">
                    <div className="">
                    <Link to="/customer"><button className="ml-4 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                      <Icon icon="ph:play" className='h-6 w-6'/>
                    </button></Link>
                  </div>
                  <div className="flex-1">Cust09123123</div>
                  <div className="flex-1">Aaron Justin Macias</div>
                  <div className="flex-1">Davao Fastfood</div>
                  <div className="flex-1">11/05/23</div>
                </div>
              
              <div className="flex flex-row w-full ">
                <div className="">
                <Link to="/customer"><button className="ml-4 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                  <Icon icon="ph:play" className='h-6 w-6'/>
                  </button></Link>
                </div>
                <div className="flex-1">Cust09123123</div>
                <div className="flex-1">Aaron Justin Macias</div>
                <div className="flex-1">Davao Fastfood</div>
                <div className="flex-1">11/05/23</div>
              </div>
    
              </div>
              {/* Additional employee entries can be added as needed */}
            </div>
          </div>
        </div>
      );
}

export default VerifyCustomerlist