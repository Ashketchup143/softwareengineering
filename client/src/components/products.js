import { Icon } from '@iconify/react';
import Sidebar from './sidebar';
import Sidebarcus from './sidebarcus';
import React, {useState, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


const modalStyles = {
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    width: '500px',
    height: '360px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    textAlign: 'left',
  },
};

function Products() {

//from here
  const [product, setProduct] = useState([]);
    const [type, setType] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [price, setPrice] = useState([]);
    const [measure, setMeasure] = useState([])

    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(res => {return res.json()})
        .then(data => {
            setProduct(data)
            setType(data.map((row) => row.class));
            setPrice(data.map((row) => row.price));
            setQuantity(data.map((row) => row.total_quantity));
            setMeasure(data.map((row) => row.measurement_type))

            const newArray = [...data.map((row) => row.price)];
            
            setInputValues(newArray);
            
        })
    }, [])

            const [isEditing, setIsEditing] = useState(false);
            const [text1, setText1] = useState('Enter Class Type');
            const [text2, setText2] = useState('');
            const [text3, setText3] = useState('');
            const [text4, setText4] = useState('');
        
            const handleEditClick = () => {
            setIsEditing(true);
            };
        
            const handleSaveClick = () => {
                // Check if the input values are valid numbers
                if (
                  isNaN(parseFloat(text2)) ||
                  isNaN(parseFloat(text4))
                ) {
                  alert('Please enter valid numbers for Quantity and Price.');
                  return;
                }
            setIsEditing(false);
            };
    

    const handleSubmit = (event) =>{
        let tester = window.confirm("Try to press")
        //create confirmation modal of sales order
        if(tester == true){
          event.preventDefault();
          console.log("submitted");
          const url = 'http://localhost:4000/products';
          fetch(url, {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({prices: inputValues})
          })
          .then(response => response.json())
          .catch(error => console.error(error))
          }
      }

    const handleInputChange = (index, newValue) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = newValue;
        setInputValues(updatedValues);
    }
  //to here
    


  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [editedBatchId, setEditedBatchId] = useState('');
  const [editedClassType, setEditedClassType] = useState('');
  const [measurementType, setMeasurementType] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/products')
    .then(res => {return res.json()})
    .then(data => {
        setProduct(data)
        setType(data.map((row) => row.class));
        setPrice(data.map((row) => row.price));
        setQuantity(data.map((row) => row.total_quantity));
        setMeasure(data.map((row) => row.measurement_type))
  
        const newArray = [...data.map((row) => row.price)];
        
        setInputValues(newArray);
        
    })
  }, [])
  

  const openModal = (batchId, classType, quantity, measurementType, price) => {
    setEditedBatchId(batchId);
    setEditedClassType(classType);
    setQuantity(quantity);
    setMeasurementType(measurementType);
    setPrice(price);
    setModalOpen(true);
  };

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(res => {return res.json()})
        .then(data => {
            setProduct(data)
            setType(data.map((row) => row.class));
            setPrice(data.map((row) => row.price));
            setQuantity(data.map((row) => row.total_quantity));
            setMeasure(data.map((row) => row.measurement_type))

            const newArray = [...data.map((row) => row.price)];
            
            setInputValues(newArray);
            
        })
    }, [])
  
      
  const openCreateModal = () => {
    setQuantity('');
    setMeasurementType('');
    setPrice('');
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleCreate = () => {
    console.log('Creating product:', quantity, measurementType, price);
    setTimeout(() => {
      closeCreateModal();
    }, 2000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEdit = () => {
    console.log('Editing product:', quantity, measurementType, price);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="w-screen min-h-screen flex">
      <Sidebarcus />
      <div className="w-screen min-h-screen flex flex-col ml-[375px] items-start">
        <div className="flex flex-row mt-[100px]">
          <input
            className="bg-[#D9D9D9] h-[30px] w-[225px] rounded-tl-sm rounded-bl-sm min-w-[50px] border-[1.5px] border-black placeholder:text-black"
            placeholder=" Search"
          />
          <button className="h-[30px] w-[40px] border-l-0 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black justify-center items-center px-2 hover:bg-[#F3F3F3]">
            <Icon icon="carbon:search" className="h-5 w-5" />
          </button>
        </div>
        <div className="font-bold text-2xl mt-5">Repacked Inventory</div>
        <div className="flex flex-col w-10/12 mt-5">
          <div className="flex flex-row justify-end">
            <Link to="/Sacksinventory">
              <button className="h-[30px] w-[200px] mr-4 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3]">
                Sacks Inventory
              </button>
            </Link>
            <Link to="/inventory">
              <button className="h-[30px] w-[200px] mr-4 bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3]">
                Total Inventory
              </button>
            </Link>
            <button className="h-[30px] w-[200px] bg-[#D9D9D9] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3]" onClick={openCreateModal}>
              + Add Product
            </button>
          </div>
        </div>
        <div className="flex flex-col w-10/12 shadow-lg mt-5">
          <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm h-16 justify-center items-center font-bold border-black shadow-md">
            <div className="flex-[0.5]"></div>
            <div className="flex-1">Batch ID</div>
            <div className="flex-1">Class Type</div>
            <div className="flex-1">Quantity</div>
            <div className="flex-1">Measurement Type</div>
            <div className="flex-1">Price</div>
            <div className="flex-1">Expiry Date</div>
          </div>

          <div className='flex flex-col bg-white border-[1.5px] rounded-b-sm border-t-0 h-[500px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto'>
            <div className="flex flex-row w-full mt-5">
              <div className="">
                <button
                  className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white"
                  onClick={() => openModal('Batch0121312', 'Class A')}
                >
                  <Icon icon="bxs:edit" className="h-6 w-6" />
                </button>

                <button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                  <Icon icon="material-symbols:delete-outline" className='h-6 w-6' />
                </button>
              </div>
              <div className="flex-1">Batch0121312</div>
              <div className="flex-1">Class A</div>
              <div className="flex-1">20</div>
              <div className="flex-1">Boxes</div>
              <div className="flex-1">php56/kg</div>
              <div className="flex-1">Dec, 17, 2002</div>
            </div>

            <div className="flex flex-row w-full">
              <div className="">
                <button
                  className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white"
                  onClick={() => openModal('Batch0121312', 'Class A')}
                >
                  <Icon icon="bxs:edit" className="h-6 w-6" />
                </button>

                <button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                  <Icon icon="material-symbols:delete-outline" className='h-6 w-6' />
                </button>
              </div>
              <div className="flex-1">Batch0121312</div>
              <div className="flex-1">Class A</div>
              <div className="flex-1">20</div>
              <div className="flex-1">Boxes</div>
              <div className="flex-1">php56/kg</div>
              <div className="flex-1">Dec, 17, 2002</div>
            </div>

            <div className="flex flex-row w-full">
              <div className="">
                <button
                  className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white"
                  onClick={() => openModal('Batch0121312', 'Class A')}
                >
                  <Icon icon="bxs:edit" className="h-6 w-6" />
                </button>

                <button className="ml-6 mt-1 bg-[#F3F3F3] text-black hover:bg-[#3BC4AF] hover:text-white">
                  <Icon icon="material-symbols:delete-outline" className='h-6 w-6' />
                </button>
              </div>
              <div className="flex-1">Batch0121312</div>
              <div className="flex-1">Class A</div>
              <div className="flex-1">20</div>
              <div className="flex-1">Boxes</div>
              <div className="flex-1">php56/kg</div>
              <div className="flex-1">Dec, 17, 2002</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={modalStyles.modalContainer}>
          <div style={modalStyles.modal}>
            <div style={modalStyles.modalContent}>
              <div className="text-center text-xl font-bold mb-9">Edit Product</div>
              <div className="flex flex-col gap-6" style={{ justifyContent: 'flex-end' }}>
                  <h2 className="flex-1 flex ml-10">
                    <b>Quantity: </b>
                    <div className="flex-1">
                      <input
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        className="ml-[140px] rounded-lg bg-teal-500 h-6 w-[105px]"
                      />
                    </div>
                  </h2>
                  <h2 className="flex-1 flex ml-10">
                    <b>Measurement Type: </b>
                    <div className="flex-1">
                      <input
                        value={measurementType}
                        onChange={(event) => setMeasurementType(event.target.value)}
                        className="ml-[60px] rounded-lg bg-teal-500 h-6 w-[105px]"
                      />

                    </div>
                  </h2>
                  <h2 className="flex-1 flex ml-10">
                    <b>Price: </b>
                    <div className="flex-1">
                      <input
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        className="ml-[165px] rounded-lg bg-teal-500 h-6 w-[105px]"
                      />
                    </div>
                  </h2>
                {/* Add more input fields for editing */}
                <div className='flex flex-col items-center gap-6'>
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

{isCreateModalOpen && (
          <div style={modalStyles.modalContainer}>
            <div style={modalStyles.modal}>
              <div style={modalStyles.modalContent}>
                <div className="text-center text-xl font-bold mb-9">Create Product</div>
                <div className="flex flex-col gap-6" style={{ justifyContent: 'flex-end' }}>
                  {/*HERE*/}
                {isEditing ? (
                  <>
                  <h2 className="flex-1 flex ml-10">
                    <b>Quantity: </b>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={text2}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          if (newValue.length <= 8) {
                            setText2(newValue);
                          } else {
                            alert('Quantity cannot be more than 8 characters.');
                          }
                        }}
                        className="ml-[5px] rounded-lg bg-teal-500 h-6 w-[250px]"
                      />
                    </div>
                  </h2>
                  <h2 className="flex-1 flex ml-10">
                    <b>Measurement Type: </b>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={text3}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          if (newValue.length <= 8) {
                            setText3(newValue);
                          } else {
                            alert('Measurement Type cannot be more than 8 characters.');
                          }
                        }}
                        className="ml-[5px] rounded-lg bg-teal-500 h-6 w-[250px]"
                      />
                    </div>
                  </h2>
                  <h2 className="flex-1 flex ml-10">
                    <b>Price: </b>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={text4}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          if (newValue.length <= 8) {
                            setText4(newValue);
                          } else {
                            alert('Price cannot be more than 8 characters.');
                          }
                        }}
                        className="ml-[5px] rounded-lg bg-teal-500 h-6 w-[250px]"
                      />
                    </div>
                  </h2>     
                  </>
                  ) : (
                    <>
                    <div className="flex">
                          <b class="ml-10">Quantity:  </b>
                          <p class="ml-[10px]">{text2}</p>
                    </div>
                        
                    <div className="flex">
                          <b class="ml-10">Measurement Type:</b>
                          <p class="ml-[10px]">{text3}</p>
                    </div>
                    <div className="flex ">
                          <b class="ml-10">Price:  </b>
                          <p class="ml-[10px]">{text4}</p>
                    </div>
                        
                    </>
                  )}
                </div>
                <button onClick={handleEditClick} className="ml-[160px] bg-emerald-500 text-white py-2 px-4 mt-2 rounded-lg mb-5">Edit</button>
                <button onClick={handleSaveClick} className="ml-[10px] bg-emerald-500 text-white py-2 px-4 mt-2 rounded-lg w-[70px] items-center">Save</button>
                {/*HERE*/}
                  <div className="flex flex-col items-center gap-6">
                    <button
                      onClick={handleCreate}
                      className="delay-150 bg-[#D9D9D9] w-[75px] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3] place-content-end"
                    >
                      Create
                    </button>
                    <button
                      onClick={closeCreateModal}
                      className="delay-150 bg-[#D9D9D9] w-[75px] rounded-tr-sm rounded-br-sm border-[1.5px] border-black hover:bg-[#F3F3F3] place-content-end"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}

export default Products;
