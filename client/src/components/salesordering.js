import React from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

const SalesOrdering1 = () => {
  return (
    <div className="bg-gray-500 w-screen min-h-screen">
      <div className="flex flex-col">
        <Sidebar />
        <div className="ml-[275px] mt-8 text-2xl text-white font-bold">Sales Ordering</div>
        <div className="flex flex-row">
          <input
            className="ml-[400px] mt-[100px] bg-white h-[30px] w-[200px] rounded-lg"
            placeholder="Search"
          ></input>
          <Link to="/salestransaction">
            <button className="ml-[850px] mt-[100px] bg-white h-[30px] w-[200px] rounded-lg">
              + Create Transaction
            </button>
          </Link>
        </div>
        <div className="ml-[400px] bg-white h-[620px] w-[1250px] rounded-lg mt-[20px]">
          <div className="flex">
            <h1 className="text-center mt-5 bg-white flex-1">
              <b>Sales ID</b>
            </h1>
            <h1 className="text-center mt-5 bg-white flex-1">
              <b>Customer Name</b>
            </h1>
            <h1 className="text-center mt-5 bg-white flex-1">
              <b>Order Date</b>
            </h1>
            <h1 className="text-center mt-5 bg-white flex-1">
              <b>Order Quantity</b>
            </h1>
            <h1 className="text-center mt-5 bg-white flex-1">
              <b>Order Cost</b>
            </h1>
            <h1 className="text-center mt-5 bg-white flex-1">
              <b>Order Status</b>
            </h1>
          </div>
          <div className="mt-[20px] ml-[20px] w-[1200px] rounded-lg bg-emerald-400 h-[1px]"></div>
          <div className="flex">
            <h1 className="text-center mt-5 bg-white flex-1">Sales 001123</h1>
            <h1 className="text-center mt-5 bg-white flex-1">Jose Paciano</h1>
            <h1 className="text-center mt-5 bg-white flex-1">11/05/23</h1>
            <h1 className="text-center mt-5 bg-white flex-1">200kg</h1>
            <h1 className="text-center mt-5 bg-white flex-1">Php 11,700</h1>
            <h1 className="text-center mt-5 bg-white flex-1">Shipping</h1>
          </div>
          <div className="flex">
            <h1 className="text-center mt-5 bg-white flex-1">Sales 001123</h1>
            <h1 className="text-center mt-5 bg-white flex-1">John Mariano</h1>
            <h1 className="text-center mt-5 bg-white flex-1">09/07/23</h1>
            <h1 className="text-center mt-5 bg-white flex-1">200kg</h1>
            <h1 className="text-center mt-5 bg-white flex-1">Php 11,700</h1>
            <h1 className="text-center mt-5 bg-white flex-1">Delivered</h1>
          </div>
          <div className="pl-5 rounded-lg bg-white h-[350px] p-5">
            <div className="flex flex-wrap">
              {/* Your content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrdering1;
