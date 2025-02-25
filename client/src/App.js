import { BrowserRouter, Navigate } from 'react-router-dom';
import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import Products from './components/products'
import SalesOrdering from './components/sales-order'
import Customer from './components/customer';
import Inventory from './components/inventory';
import React, {useState, useEffect} from 'react';
import LandingPage from './components/landingpage';
import LoginCustomer from './components/logincus';
import LoginEmployee from './components/loginemp';
import RegisterEmployee from './components/regemp';
import Customerex from './components/customerex';
import RegisterCustomer from './components/regcus';
import SalesOrdering1 from './components/salesordering';
import Employee from './components/employee';
import EmployeeList from './components/employeelist';
import SalesTransaction from './components/salestransaction';
import CustomerList from './components/customerlist';
<script src="https://cdn.tailwindcss.com"></script>
function App() {

  /*
  useEffect(() => {
    fetch('http://localhost:4000')
    .then(res => {return res.json()})
    .then(data => {
      newProduct(data)

    })  
  }, []);*/



  const handleSubmit = (event) =>{
    let tester = window.confirm("Try to press")
    //create confirmation modal of sales order
   
  }

  { 
     
    /*
      <form onSubmit = {handleSubmit}>
        <div> Class A: </div> <input class = "text-black" value = {classA} onChange ={handleInputChangeA}/> 
        <div> Class B:</div> <input class = "text-black" value = {classB} onChange ={handleInputChangeB}/>
        <div> Class C: </div> <input class = "text-black" value = {classC} onChange ={handleInputChangeC}/>

        <h3> Total Weight: {weight} </h3>
        <h3> Total Price: {totalPrice} </h3>
        <button> Submit Order</button>
      </form> 
  */} 

  return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path = "/products" element = {<Products></Products>}></Route>
      <Route path = "/sales" element = {<SalesOrdering></SalesOrdering>}></Route>
      <Route path = "/customer" element = {<Customer></Customer>}></Route>
      <Route path = "/inventory" element = {<Inventory></Inventory>}></Route>
      <Route path = "/landingpage" element = {<LandingPage></LandingPage>}></Route>
      <Route path='/logincus' element={<LoginCustomer></LoginCustomer>}></Route>
      <Route path='/loginemp' element={<LoginEmployee></LoginEmployee>}></Route>
      <Route path= "/customerex" element = {<Customerex></Customerex>}></Route>
      <Route path='/regcus' element={<RegisterCustomer></RegisterCustomer>}></Route>
      <Route path='/regemp' element={<RegisterEmployee></RegisterEmployee>}></Route>
      <Route path='/salesordering' element={<SalesOrdering1></SalesOrdering1>}></Route>
      <Route path='/employee' element={<Employee></Employee>}></Route>
      <Route path='/employeelist' element={<EmployeeList></EmployeeList>}></Route>
      <Route path='/salestransaction' element={<SalesTransaction></SalesTransaction>}></Route>
      <Route path='/customerlist' element={<CustomerList></CustomerList>}></Route>
    </Routes>



   {
   <div>HAtdog <Link to="/landingpage">
   <button className="mt-6 rounded-lg pr-6 pt-2 pb-2 pl-6 delay-150 bg-gray-200 border-emerald-500 border-2 duration-50">
     Home <b>Inventory</b>
   </button>
 </Link>
 <Link to="/products">
   <button className="mt-6 rounded-lg pr-6 pt-2 pb-2 pl-6 delay-150 bg-gray-200 border-emerald-500 border-2 duration-50">
     Login Page <b>Inventory</b>
   </button>
 </Link> 
 <Link to="/customerlist">
   <button className="mt-6 rounded-lg pr-6 pt-2 pb-2 pl-6 delay-150 bg-gray-200 border-emerald-500 border-2 duration-50">
     Login Page <b>Inventory</b>
   </button>
 </Link>
 </div> 
 
   
   /* 
      <div class="bg-gray-500">
        <div class="flex">
            <div class="bg-white h-screen p-5 pt-10 bl-none rounded-r-lg">
                <div class="rounded-full border-2 bg-emerald-500 h-20 w-20 mb-20 ml-5 mt-10 border-white"></div> 
                <button class="rounded-lg pr-5 pt-2 pb-2 pl-5  delay-150 border-emerald-500 border-2 duration-50">
                    <b>Employees</b> </button>
                <br/>  <Link to="/inventory"> <button class="mt-6  rounded-lg pr-6 pt-2 pb-2 pl-6 delay-150 bg-white border-emerald-500 border-2  duration-50">
               Home <b>Inventory</b> </button></Link><br/>

                <br/><button class="  rounded-lg pr-6 pt-2 pb-2 pl-6 delay-150 bg-white border-emerald-500 border-2 duration-50">
                    <b>Customer</b> </button><br/>
                <br/><button class="rounded-lg pr-10 pt-2 pb-2 pl-10 delay-150 bg-white border-emerald-500 border-2 duration-50">
                    <b>Sales</b> </button>  <br/>     
            </div>
            <div class="ml-[350px] bg-white m-[50px] h-[600px] w-[600px] rounded-lg mt-[25px]">
                <h1 class="text-center  p-3 mt-5 bg-white"><b>SALES ORDER <div class="mt-[20px] rounded-lg bg-emerald-400 h-[1px]"></div></b></h1>
                <h1 class="">Customer Name:
                    <div class=""><input class="text-black rounded-lg bg-teal-500 h-[20px] w-[550px]"></input></div>
                </h1>
                <form>
                <div class="pl-5 rounded-lg bg-white m-5 h-[350px] p-6">
                    <div class="m-1 text-left"> <b>Class Type:</b>
                    
                      <div class="grid grid-cols-3 grid-rows-3">
                        <p class="flex-auto m-2">Class A </p><div class="m-2 ml-[40px]">BOX</div><input value = {classA} onChange ={handleInputChangeA} class="rounded-lg bg-teal-500 h-6 m-2 w-[80px] ml-8"></input>
                        <p class="flex-auto m-2">Class B </p><div class="m-2 ml-[40px]">30/KG</div><input value = {classB} onChange ={handleInputChangeB} class="rounded-lg bg-teal-500 h-6 m-2 w-[80px] ml-8"></input>
                        <p class="flex-auto m-2">Class C </p><div class="m-2 ml-[40px]">40/KG</div><input value = {classC} onChange ={handleInputChangeC} class="rounded-lg bg-teal-500 h-6 m-2 w-[80px] ml-8"></input>
                        </div>
                   
                    </div>
                    <button class=" ml-[313px] rounded-full bg-emerald-500 text-center w-[30px] h-8 border-2 border-white pb-[2px] text-black">+</button>
                    <div class="grid grid-cols-2 mt-2 grid-rows-2 rounded-lg bg-emerald-400 h-[1px] gap-1 ">
                        <p class="mt-[40px] ml-[150px]"><b>Weight: </b></p><p class="mt-[40px] ml-[45px] ">{weight}</p>
                        <p class="mt-[60px] ml-[136px]"><b>Price: </b></p><p class="mt-[60px] ml-[60px]">{totalPrice}</p>
                    </div>
                </div>
                <button class="delay-150 bg-white border-emerald-500 ml-[10px] border-2 place-content-center p-1 h-9 w-[80px] mt-[20px] mb-5 rounded-lg">Submit</button>
                </form>
              </div>
          </div>
        </div>
*/}
      </BrowserRouter>
    </div>
  
  
  );
  
}

export default App;
