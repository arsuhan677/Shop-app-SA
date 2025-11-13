import React from "react";

const CartPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        Your Cart ({cartItems.length} items)
      </h1>

      {/* {cartItems.map((item, index) => ( */}
        <div key={index} className="border p-4 rounded-xl bg-slate-800/40 mb-3">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-300">Price: {item.price}</p>
        </div>
      {/* ))} */}
    </div>
  );
};

export default CartPage;
