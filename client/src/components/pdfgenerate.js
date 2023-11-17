import React from 'react'

const pdfgenerate = () => {
    const handleGeneratePDF = () => {
        // Create a new instance of jsPDF
        const pdf = new jsPDF();
      
        // Add content to the PDF
        pdf.setFontSize(18);
        pdf.setTextColor(0, 0, 255); // Set text color to blue
        pdf.text('Sales Receipt', 20, 20);
      
        // Product details
        const products = [
          { name: 'Product A', weight: '500 kg', price: 10000 },
          { name: 'Product B', weight: '300 kg', price: 7500 },
          // Add more products as needed
        ];
      
        // Calculate total price before tax
        const totalPriceBeforeTax = products.reduce((total, product) => total + product.price, 0);
      
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
        pdf.text(`Total Price (With Tax): ${totalPriceWithTax.toFixed(2)}php`, 20, y);
      
        // Save the PDF
        pdf.save('sales_receipt.pdf');
      };
  return (
    <div className="flex-1 ">
                <button
            className="h-[30px] w-[150px] bg-[#D9D9D9] rounded-sm border-[1.5px] border-black hover:bg-[#F3F3F3]"
            onClick={handleGeneratePDF}
          >
            Submit
          </button></div>
    
  );
}

export default pdfgenerate