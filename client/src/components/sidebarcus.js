import React from 'react';
import { Link } from 'react-router-dom';

function SidebarCustomer() {
  return (
    <div className="bg-white p-5 pt-10 bl-none rounded-r-lg fixed left-0 w-64 top-0 bottom-0 items-center flex flex-col z-10">
      <div className="rounded-full border-2 bg-emerald-500 h-40 w-40 mb-10 mt-10 border-white"></div>
      <div className="text-xl font-bold">Aaron Macias</div>
      <div className="mt-2 mb-10 text-lg">Marketing Head</div>
      <Link to="/customer">
        <button className="rounded-lg pr-10 pt-2 pb-2 pl-10 delay-150 bg-white border-emerald-500 border-2 duration-50 hover:bg-emerald-500 hover:text-white">
          <b>Profile</b>
        </button>
      </Link>
      <br />
      <Link to="/salestransaction">
        <button className="mt-5 rounded-lg pr-10 pt-2 pb-2 pl-10 delay-150 bg-white border-emerald-500 border-2 duration-50 hover:bg-emerald-500 hover:text-white">
          <b>Order</b>
        </button>
      </Link>
      <br />
    </div>
  );
}

export default SidebarCustomer;