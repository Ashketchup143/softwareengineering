import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Sidebarcus from './sidebarcus';

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

const Payroll = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [editedSalesId, setEditedSalesId] = useState('');
    const [editedCustomerName, setEditedCustomerName] = useState('');
  
    const openModal = (salesId, customerName) => {
      setEditedSalesId(salesId);
      setEditedCustomerName(customerName);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleEdit = () => {
      // Handle the logic for editing here
      console.log('Editing sales:', editedSalesId, editedCustomerName);
      // Close the modal after a delay (e.g., 2 seconds)
      setTimeout(() => {
        closeModal();
      }, 2000); // 2000 milliseconds (2 seconds)
    };
  
    return (
      <div className=" w-screen min-h-screen flex">
        <Sidebar></Sidebar>
        <div className=' w-screen min-h-screen flex flex-col ml-[375px] items-start'>
          <div className='flex flex-row mt-[100px]'>
            <input
              className=" bg-[#D9D9D9] h-[30px] w-[225px] rounded-tl-sm rounded-bl-sm min-w-[50px] border-[1.5px] border-black placeholder:text-black"
              placeholder=" Search"
            />
            <button className='h-[30px] w-[40px] border-l-0 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black justify-center items-center px-2 hover:bg-[#F3F3F3]'>
              <Icon icon="carbon:search" className='h-5 w-5' />
            </button>
          </div>
          <div className='font-bold text-2xl mt-5'>Payroll</div>
          <div className='flex flex-col w-10/12'>
            <div className='flex justify-end'>
              <Link to="/salestransaction">
                <button className='h-[30px] w-[200px] bg-[#D9D9D9] rounded-sm border-[1.5px] border-black hover:bg-[#F3F3F3]'>
                  Input Daily Time Record
                </button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col w-10/12 shadow-lg'>
            <div className='flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm mt-5 h-16 justify-center items-center font-bold border-black shadow-md '>
              <div className='flex-[0.15]'></div>
              <div className='flex-1'>Payroll ID</div>
              <div className='flex-1'>Payroll Date</div>
              <div className='flex-1'>Total Number Of Hours</div>
              <div className='flex-1'>Total Gross Pay</div>
            </div>
            <div className='flex flex-col bg-white border-[1.5px] rounded-b-sm border-t-0 h-[500px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto'>
              <div className='flex flex-row w-full mt-5'>
                <div className=''>
                <Link to="/eachpayroll"><button
                    className='ml-4 mt-1 bg-[#F3F3F3] text-black  hover:bg-[#3BC4AF] hover:text-white'
                    onClick={() => openModal('Sales001', 'Jose Paciano')}
                  >
                    <Icon icon="ph:play" className='h-6 w-6'/>
                  </button></Link>
                </div>
                <div className='flex-1'>Payrol1243123</div>
                <div className='flex-1'>11/05/23</div>
                <div className='flex-1'>200hrs</div>
                <div className='flex-1'>Php 180,000</div>
              </div>
  
              <div className='flex flex-row w-full'>
              <div className=''>
                  <Link to="/eachpayroll"><button
                    className='ml-4 mt-1 bg-[#F3F3F3] text-black  hover:bg-[#3BC4AF] hover:text-white'
                  >
                    <Icon icon="ph:play" className='h-6 w-6'/>
                  </button></Link>
                </div>
                <div className='flex-1'>Payrol1243123</div>
                <div className='flex-1'>11/05/23</div>
                <div className='flex-1'>200hrs</div>
                <div className='flex-1'>Php 180,000</div>
              </div>
              {/* Add similar rows for other sales entries */}
            </div>
          </div>
        </div>
  
  
        {isModalOpen && (
          <div style={modalStyles.modalContainer}>
            <div style={modalStyles.modal}>
              <div style={modalStyles.modalContent}>
                <div className="text-center text-xl font-bold mb-9">Edit Sales</div>
                <div className="flex flex-col gap-6" style={{ justifyContent: 'flex-end' }}>
                  {/* Add input fields for editing */}
                  <h2 className="flex-1 flex ml-10">
                    <b className="flex-1">Sales ID: </b>
                    <div className="flex-1">{editedSalesId}</div>
                  </h2>
                  <h2 className="flex-1 flex ml-10">
                    <b>Customer Name: </b>
                    <div className="flex-1 ">
                      <input
                        value={editedCustomerName}
                        onChange={(event) => setEditedCustomerName(event.target.value)}
                        className="rounded-lg bg-teal-500 h-6 w-[105px] ml-[80px]"
                      />
                    </div>
                  </h2>
                  {/* Add more input fields for editing */}
                  <div className='flex flex-col items-center gap-6 mt-[50px]'>
                    <button
                      onClick={handleEdit}
                      className="delay-150 bg-[#D9D9D9] w-[75px] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3] place-content-end"
                    >
                      Submit
                    </button>
                    <button
                      onClick={closeModal}
                      className="delay-150 bg-[#D9D9D9] w-[75px] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3] place-content-end"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Payroll