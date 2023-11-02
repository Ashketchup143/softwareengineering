import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from './sidebar';

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

function Products() {
    const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };
    return (
        <div className="bg-gray-500 min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="ml-[650px] bg-white m-[50px] w-[600px] h-[700px] rounded-lg mt-[125px] place-content-center">
                    <div className="flex">
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Class Type</b>
                        </div>
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Quantity</b>
                        </div>
                        <div className="text-center mt-5 bg-white flex-1">
                            <b>Price</b>
                        </div>
                    </div>

                    <div className="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>

                    <div className='w-[550px] h-[400px]'>
                        <div className="flex mt-4">
                            <div className="text-center mt-5 flex-1">
                                Class A
                            </div>
                            <div className="text-center mt-5 flex-1">
                                0kg
                            </div>
                            <div className=" mt-5 flex-1">
                                <input className="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <div className="flex mt-4">
                        <div className="text-center mt-5 flex-1">
                            Class B
                        </div>
                        <div className="text-center mt-5 flex-1">
                            0kg
                        </div>
                        <div className="text-center mt-5 flex-1">
                            <input className="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                        </div>
                        </div>

                        <div className="flex mt-4">
                        <div className="text-center mt-5 flex-1">
                            Class C
                        </div>
                        <div className="text-center mt-5 flex-1">
                            0kg
                        </div>
                        <div className="text-center mt-5 flex-1">
                            <input className="ml-6 rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                        </div>
                        </div>

                        <button onClick={openModal} className="delay-150 bg-white border-emerald-500 border-2 ml-96 rounded-lg p-1 mt-7">+ Add product</button>
                        {isModalOpen && (
                        <div style={modalStyles.modalContainer}>
                        <div style={modalStyles.modal}>
                            <div style={modalStyles.modalContent}>
                            <div className='text-center text-xl font-bold mb-9'>Add products</div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='flex-1 flex mx-10'>
                                    <b className='flex-1'>Class Name: </b>
                                    <div className='flex-1'><input className="ml-6 rounded-lg bg-teal-500 h-6 w-[105px]"></input>
                                    </div>
                                </h2>
                                <h2 className='flex-1 flex ml-10'>
                                    <b>Type of Measurement: </b>
                                    <div class="bg-teal-500 rounded-md ml-[45px] w-12 justify-start">
                                    <input class="rounded-md bg-[#CCDA7D] mr-1" type='radio' name='typeofmeasure' id='kg'></input>
                                    <label for='kg'>kg</label>
                                    </div>
                                    <div class="bg-teal-500 rounded-md w-12 ml-2 mr-10">
                                    <input class="rounded-md bg-[#CCDA7D] mr-1" type='radio' name='typeofmeasure' id='box'></input>
                                    <label for='box'>box</label>
                                    </div>
                                </h2>
                                <h2 className='flex-1 flex mx-10'>
                                    <b className='flex-1'>Price: </b>
                                    <div className='flex-1'><input className="ml-6 rounded-lg bg-teal-500 h-6 w-[105px]"></input>
                                    </div>
                                </h2>
                                <button onClick={closeModal} className="delay-150 bg-white border-emerald-500 border-2 place-content-center ml-[250px] p-1 h-9 w-[80px] rounded-lg">Submit</button>
                                <button onClick={closeModal} className="delay-150 bg-white border-emerald-500 border-2 place-content-center ml-[250px] p-1 h-9 w-[80px] rounded-lg">Close</button>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                    

                        
                    

                    <div className="mt-[20px] ml-[20px] w-[550px] rounded-lg bg-emerald-400 h-[1px]"></div>
                    <div className="flex">
                        <div className='flex-col ml-14'>
                            <div className="text-center mt-5 bg-white">
                            <b>Total Weight</b>
                            </div>
                            <div className='mt-5'>0kg</div>
                        </div>
                        <div className='flex-col ml-24'>
                            <div className="text-center mt-5 bg-white">
                            <b>Total Price</b>
                            </div>
                            <div className='mt-5'>Php 50000</div>
                        </div>

                        <button className="delay-150 bg-white border-emerald-500 ml-24 mt-16 border-2 place-content-center p-1 h-9 w-[80px] rounded-lg">Submit</button>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Products;
