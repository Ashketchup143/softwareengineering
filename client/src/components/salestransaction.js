import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import SidebarCustomer from "./sidebarcus";
import { Icon } from "@iconify/react";
import { jsPDF } from "jspdf";

const modalStyles = {
    modalContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)", // Grey out the background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    modal: {
        background: "white",
        border: "1px solid #ccc", // Add a border to the modal
        borderRadius: "5px",
        padding: "20px",
        width: "500px",
        height: "400px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
    modalContent: {
        textAlign: "left",
    },
};

function SalesTransaction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productName, setProductName] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddProduct = () => {
        // Handle the logic for adding product here
        console.log("Adding product:", productName);

        // Close the modal after a delay (e.g., 2 seconds)
        setTimeout(() => {
            closeModal();
        }, 2000); // 2000 milliseconds (2 seconds)
    };

    const handleGeneratePDF = () => {
        // Create a new instance of jsPDF
        const pdf = new jsPDF();

        // Add content to the PDF
        pdf.setFontSize(18);
        pdf.setTextColor(0, 0, 255); // Set text color to blue
        pdf.text("Sales Receipt", 20, 20);

        // Product details
        const products = [
            { name: "Product A", weight: "500 kg", price: 10000 },
            { name: "Product B", weight: "300 kg", price: 7500 },
            // Add more products as needed
        ];

        // Calculate total price before tax
        const totalPriceBeforeTax = products.reduce(
            (total, product) => total + product.price,
            0
        );

        // Calculate tax (12% of total)
        const taxRate = 0.12;
        const taxAmount = totalPriceBeforeTax * taxRate;

        // Calculate total price with tax
        const totalPriceWithTax = totalPriceBeforeTax + taxAmount;

        // Set initial y-coordinate for the receipt content
        let y = 40;

        // Add product details
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0); // Set text color to black
        products.forEach((product) => {
            y += 10;
            pdf.text(`${product.name} - ${product.weight}`, 20, y);
            y += 8;
            pdf.text(`Price: ${product.price}php`, 20, y);
        });

        // Add a line for separation
        y += 10;
        pdf.line(20, y, 190, y);

        // Add total price before tax
        y += 10;
        pdf.text(`Total Price (Before Tax): ${totalPriceBeforeTax}php`, 20, y);

        // Add tax
        y += 10;
        pdf.text(`Tax (12%): ${taxAmount.toFixed(2)}php`, 20, y);

        // Add a line for separation
        y += 10;
        pdf.line(20, y, 190, y);

        // Add total price with tax
        y += 10;
        pdf.text(
            `Total Price (With Tax): ${totalPriceWithTax.toFixed(2)}php`,
            20,
            y
        );

        // Save the PDF
        pdf.save("sales_receipt.pdf");
    };

    return (
        <div className=" w-screen min-h-screen flex">
            <Sidebar></Sidebar>
            <div className=" w-screen min-h-screen flex flex-col ml-[500px] mt-[125px] items-start">
                <div className="font-bold text-2xl mt-5">Sales Transaction</div>

                <div className="flex flex-col w-8/12 shadow-lg">
                    <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm mt-5 h-16 justify-center items-center font-bold border-black shadow-md ">
                        <div className="flex-1">Customer Name</div>
                        <div className="flex-1">Class Type</div>
                        <div className="flex-1">Quantity</div>
                    </div>

                    <div className="flex flex-col bg-white border-[1.5px] rounded-b-sm border-t-0 h-[500px] items-center border-black max-h-3/4 gap-[30px] overflow-y-auto">
                        <div className="flex flex-row w-full mt-5">
                            <div className="flex-1">
                                <input
                                    className="ml-[30px] rounded-lg bg-[#3BC4AF] h-6 w-[150px] placeholder-slate-900"
                                    placeholder="Search"
                                ></input>
                            </div>
                            <div className="flex-1">Sales 001123</div>
                            <div className="flex-1">
                                <input className=" rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <div className="flex flex-row w-full ">
                            <div className="flex-1"></div>
                            <div className="flex-1">Sales 001123</div>
                            <div className="flex-1">
                                <input className=" rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <div className="flex flex-row w-full ">
                            <div className="flex-1"></div>
                            <div className="flex-1">Sales 001123</div>
                            <div className="flex-1">
                                <input className=" rounded-lg bg-teal-500 h-6 w-[80px]"></input>
                            </div>
                        </div>

                        <div className="flex flex-row w-full ">
                            <div className="flex-1"></div>
                            <div className="flex-1"></div>
                            <div className="flex-1">
                                <button
                                    className="h-[30px] w-[150px] bg-[#D9D9D9] rounded-sm border-[1.5px] border-black hover:bg-[#F3F3F3]"
                                    onClick={openModal}
                                >
                                    + Add Product
                                </button>
                                {/* Modal */}
                                {isModalOpen && (
                                    <div style={modalStyles.modalContainer}>
                                        <div style={modalStyles.modal}>
                                            <div
                                                style={modalStyles.modalContent}
                                            >
                                                <div className="text-center text-xl font-bold mb-9">
                                                    Add Product
                                                </div>
                                                <div
                                                    className="flex flex-col gap-6"
                                                    style={{
                                                        justifyContent:
                                                            "flex-end",
                                                    }}
                                                >
                                                    <h2 className="flex-1 flex ml-10">
                                                        <b className="flex-1">
                                                            Product Name:{" "}
                                                        </b>
                                                        <div className="flex-1">
                                                            <input
                                                                value={
                                                                    productName
                                                                }
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    setProductName(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                                className="rounded-lg bg-teal-500 h-6 w-[105px]"
                                                            />
                                                        </div>
                                                    </h2>

                                                    <div className="flex flex-col items-center gap-6 mt-[120px]">
                                                        <button
                                                            onClick={
                                                                handleAddProduct
                                                            }
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
                        </div>
                    </div>

                    <div className="flex flex-row bg-[#D9D9D9] border-[1.4px] rounded-t-sm h-16 justify-center items-center font-bold border-black shadow-md border-t-0 rounded-b-sm">
                        <div className="flex-1 ml-8 text-left">
                            Total bought = 1500 kg
                        </div>
                        <div className="flex-1 text-left">
                            Total Price = 50000php
                        </div>
                        <div className="flex-1 ">
                            <button
                                className="h-[30px] w-[150px] bg-[#D9D9D9] rounded-sm border-[1.5px] border-black hover:bg-[#F3F3F3]"
                                onClick={handleGeneratePDF}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SalesTransaction;