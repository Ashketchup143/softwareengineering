import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Sidebar from './sidebar';
import { Icon } from '@iconify/react';

function Inventory(){
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
            <div className="font-bold text-2xl mt-5">Total Inventory</div>
            <div className="flex flex-col w-10/12 mt-5">
                
              <div className="flex flex-row justify-end">

                <button className="h-[30px] w-[200px] bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3]">
                 + Add Product
                </button>
              </div>
            </div>
            <div className="flex flex-col w-10/12 shadow-lg mt-5">
              <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm h-16 justify-center items-center font-bold border-black shadow-md">
                <div className="flex-[0.3]"></div>
                <div className="flex-1">Class Type</div>
                <div className="flex-1">Quantity</div>
                <div className="flex-1">Price</div>
              </div>
    
              <div className='flex flex-col bg-white border-[1.5px] border-t-0 h-[500px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto'>
              
              <div className="flex flex-row w-full mt-5">
                    <div className="">
                    <Link to="/employee"><button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                      <Icon icon="bxs:edit" className="h-6 w-6" />
                    </button></Link>

                    <button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                        <Icon icon="material-symbols:delete-outline" className='h-6 w-6' />
                    </button>
                  </div>
                  <div className="flex-1">Class A</div>
                  <div className="flex-1">300 boxes</div>
                  <div className="flex-1">php820/box</div>
                </div>
              
                <div className="flex flex-row w-full">
                    <div className="">
                    <Link to="/employee"><button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                      <Icon icon="bxs:edit" className="h-6 w-6" />
                    </button></Link>

                    <button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                        <Icon icon="material-symbols:delete-outline" className='h-6 w-6' />
                    </button>
                  </div>
                  <div className="flex-1">Class B</div>
                  <div className="flex-1">200 kg</div>
                  <div className="flex-1">php56/kg</div>
                </div>

                <div className="flex flex-row w-full">
                    <div className="">
                    <Link to="/employee"><button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                      <Icon icon="bxs:edit" className="h-6 w-6" />
                    </button></Link>

                    <button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                        <Icon icon="material-symbols:delete-outline" className='h-6 w-6' />
                    </button>
                  </div>
                  <div className="flex-1">Class C</div>
                  <div className="flex-1">500 kg</div>
                  <div className="flex-1">php56/kg</div>
                </div>

              </div>
              <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm h-16 justify-center items-center font-bold border-black shadow-md border-t-0 rounded-b-sm">
                <div className="flex-1 ml-8 text-left">Total Num. Weight = 1500 kg</div>
                <div className="flex-1 text-left">Total Num. Boxes = 500 boxes</div>
                
              </div>
              {/* Additional employee entries can be added as needed */}
            </div>
          </div>
        </div>
      );
    };
export default Inventory;