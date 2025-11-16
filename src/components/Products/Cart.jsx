import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(items.map((item) => ({ ...item, quantity: 1 })));
  }, []);

  const updateQuantity = (index, type) => {
    const updated = [...cartProducts];
    if (type === "increment") {
      updated[index].quantity += 1;
    } else if (type === "decrement" && updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    setCartProducts(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Delete function
  const deleteProduct = (index) => {
    const updated = [...cartProducts];
    updated.splice(index, 1);
    setCartProducts(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
    
    console.log(deleteProduct);
  }  
  

  return (
    <div className="p-6 container mx-auto flex flex-col lg:flex-row gap-6">
      {/* Cart Items */}
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        {cartProducts.length === 0 ? (
          <p>No products added yet!</p>
        ) : (
          cartProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 rounded p-2 gap-12"
            >
              {/* Image */}
              <img
                src={product.images}
                alt={product.name}
                className="w-24 h-24 object-cover"
              />

              {/* Product info */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-400 w-80">{product.description}</p>
              </div>

              {/* Price */}
              <div className="items-center">
                <p className="text-white font-semibold mb-2">
                  ৳ {product.price * product.quantity}
                </p>
                <div>
                  <button
                    onClick={() => deleteProduct(index)}
                    className="bg-red-400 py-1 px-2 rounded-sm cursor-pointer hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* <div> */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(index, "decrement")}
                  className="bg-gray-400 text-black px-3 py-1 cursor-pointer rounded"
                >
                  -
                </button>
                <span className="px-4 py-1 border border-gray-800 hover:border-gray-500">
                  {product.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(index, "increment")}
                  className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-black px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
            // </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 p-6 rounded space-y-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal ({cartProducts.length} items)</span>
          <span>৳ {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span>৳ 0</span>
        </div>
        <input
          type="text"
          placeholder="Enter Voucher Code"
          className="border px-3 py-2 w-full rounded"
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded mt-2">
          Apply
        </button>
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>৳ {subtotal}</span>
        </div>
        <button className="bg-orange-500 text-white w-full py-2 rounded">
          PROCEED TO CHECKOUT ({cartProducts.length})
        </button>
      </div>
    </div>
  );
}
