import React from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const modalStyles = {
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)', // Grey out the background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    background: 'white',
    border: '1px solid #ccc', // Add a border to the modal
    borderRadius: '5px',
    padding: '20px',
    width: '500px',
    height: '400px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    textAlign: 'left',
  },
};

const SalesOrdering1 = () => {

  // // Function to open the modal
  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // // Function to close the modal
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className=" w-screen min-h-screen flex">
      <Sidebar></Sidebar>
      <div className=' w-screen min-h-screen flex flex-col ml-[375px] items-start'>
        <div className='flex flex-row mt-[100px]'>
          <input
              className=" bg-[#D9D9D9] h-[30px] w-[225px] rounded-tl-sm rounded-bl-sm min-w-[50px] border-[1.5px] border-black placeholder:text-black"
              placeholder=" Search"
            >
          </input>
          <button className='h-[30px] w-[40px] border-l-0 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black justify-center items-center px-2 hover:bg-[#F3F3F3]'><Icon icon="carbon:search" className='h-5 w-5' /></button>
        </div>
        <div className='font-bold text-2xl mt-5'>Sales Ordering</div>
        <div className='flex flex-col w-10/12'>
          <div className='flex justify-end'>
            <button className='h-[30px] w-[200px] bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3]'>
              + Create Transaction
            </button>
          </div>
        </div>
        <div className='flex flex-col w-10/12 shadow-lg'>
          
          <div className='flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm mt-5 h-16 justify-center items-center font-bold border-black shadow-md '>
            <div className='flex-[0.15]'></div>
            <div className='flex-1'>Sales ID</div>
            <div className='flex-1'>Customer Name</div>
            <div className='flex-1'>Order Date</div>
            <div className='flex-1'>Order Quantity</div>
            <div className='flex-1'>Order Cost</div>
            <div className='flex-1'>Order Status</div>

          </div>
          <div className='flex flex-col bg-white border-[1.5px] rounded-b-sm border-t-0 h-[500px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto'>
            <div className='flex flex-row w-full mt-5'>
              <div className=''><button className='ml-4 mt-1 bg-[#F3F3F3] text-black  hover:bg-[#3BC4AF] hover:text-white'><Icon icon="bxs:edit" className='h-6 w-6'/></button></div>
              <div className='flex-1'>Sales 001123</div>
              <div className='flex-1'>Jose Paciano</div>
              <div className='flex-1'>11/05/23</div>
              <div className='flex-1'>200kg</div>
              <div className='flex-1'>Php 11,700</div>
              <div className='flex-1'>Shipping</div>
            </div>

            <div className='flex flex-row w-full '>
              <div className=''><button className='ml-4 mt-1 bg-[#F3F3F3] text-black  hover:bg-[#3BC4AF] hover:text-white'><Icon icon="bxs:edit" className='h-6 w-6'/></button></div>
              <div className='flex-1'>Sales 001123</div>
              <div className='flex-1'>John Mariano</div>
              <div className='flex-1'>09/07/23</div>
              <div className='flex-1'>200kg</div>
              <div className='flex-1'>Php 11,700</div>
              <div className='flex-1'>Delivered</div>
            </div>

            <div className='flex flex-row w-full'>
              <div className=''><button className='ml-4 mt-1 bg-[#F3F3F3] text-black  hover:bg-[#3BC4AF] hover:text-white'><Icon icon="bxs:edit" className='h-6 w-6'/></button></div>
              <div className='flex-1'>Sales 001123</div>
              <div className='flex-1'>Jose Paciano</div>
              <div className='flex-1'>11/05/23</div>
              <div className='flex-1'>200kg</div>
              <div className='flex-1'>Php 11,700</div>
              <div className='flex-1'>Shipping</div>
            </div>

            <div className='flex flex-row w-full '>
              <div className=''><button className='ml-4 mt-1 bg-[#F3F3F3] text-black  hover:bg-[#3BC4AF] hover:text-white'><Icon icon="bxs:edit" className='h-6 w-6'/></button></div>
              <div className='flex-1'>Sales 001123</div>
              <div className='flex-1'>John Mariano</div>
              <div className='flex-1'>09/07/23</div>
              <div className='flex-1'>200kg</div>
              <div className='flex-1'>Php 11,700</div>
              <div className='flex-1'>Delivered</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrdering1;
