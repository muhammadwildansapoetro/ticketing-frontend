import React from "react";

type InvoiceItem = {
  description: string;
  color: string;
  size: string;
  price: number;
};

const Invoice: React.FC = () => {
  const items: InvoiceItem[] = [
    {
      description: "Mist Black Triblend",
      color: "White",
      size: "Medium",
      price: 120,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <header className="mb-8 border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">Invoice</h1>
          <p className="text-sm text-gray-500 mt-1">Order #15478</p>
        </header>

        {/* Address Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* From Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">From</h2>
            <p className="text-gray-600">Roger Culhane</p>
            <p className="text-gray-500">Email: contact@example.com</p>
            <p className="text-gray-500">2972 Westheimer Rd, Santa Ana</p>
          </div>

          {/* To Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">To</h2>
            <p className="text-gray-600">Cristofer Levin</p>
            <p className="text-gray-500">Email: contact@example.com</p>
            <p className="text-gray-500">New York, USA 2707 Davis Avenue</p>
          </div>
        </div>

        {/* Items Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Products</h2>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4"
            >
              <div>
                <p className="text-gray-800 font-medium">{item.description}</p>
                <p className="text-gray-500 text-sm">
                  Color: {item.color}, Size: {item.size}
                </p>
              </div>
              <p className="text-gray-700 font-semibold">${item.price}</p>
            </div>
          ))}
        </div>

        {/* Shipping and Payment Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Shipping Method
            </h2>
            <p className="text-gray-600">FedEx - Take up to 3 working days</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Payment Method
            </h2>
            <p className="text-gray-600">Apply Pay Mastercard</p>
            <p className="text-gray-600">**** **** **** 5874</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-700 font-medium">$120.00</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Shipping Cost</p>
            <p className="text-gray-700 font-medium">$10.00</p>
          </div>
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Total Payable</p>
            <p className="text-blue-600">$130.00</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Download Invoice
          </button>
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
            Send Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
