import React, { useState } from "react";

export default function Products() {
  const [cart, setCart] = useState([])

  const Products = [
    {
      id: 1,
      name: "Winter Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "",
      images: "/images/winter.jpeg"
    },
    {
      id: 2,
      name: "KeyBoard",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "",
      images: "/images/keyboard.jpeg"
    },
    {
      id: 3,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "",
      images: "/images/tshirt.jpeg"
    },
    {
      id: 4,
      name: "Leptop HP",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "",
      images: "/images/download.jpeg"
    },
    {
      id: 3,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "",
      images: "/images/tshirt.jpeg"
    },
    {
      id: 1,
      name: "Winter Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "",
      images: "/images/winter.jpeg"
    },
  ]
  return (
    <div className="container mx-auto px-3 sm:px-1">
      <div className="gap-3 sm:gap-6 grid grid-cols-2 sm:grid-cols-3 mt-16">
      {Products.map((product) => (
        <div className="bg-gray-900 items-center rounded-xl overflow-hidden xs:h-100">
          <img className="w-full h-40 sm:h-60 object-cover transform transition-all duration-500 group-hover:translate-y-2 group-hover:scale-110 "
            src={product.images}
            alt=""
          />
          <div className="p-4">
            <div key={product.id}>
            <h2 className="uppercase text-gray-300 mb-2">{product.name}</h2>
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-[16px] text-gray-400 mb-4 hidden sm:block">{product.description}</p>
            <p className="text-2xl font-semibold text-cyan-400 mb-6">{product.price}</p>
          </div>
          <p className="mb-2">Quantity</p>
          <div>
            {/* <button className="border py-2 text-black font-semibold cursor-pointer w-full rounded-xl">
              Add to Cart
            </button> */}
            <button className="border py-3 bg-cyan-600 text-black font-semibold cursor-pointer hover:bg-cyan-400 w-full rounded-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
          ))}
      </div>
    </div>
  );
}
