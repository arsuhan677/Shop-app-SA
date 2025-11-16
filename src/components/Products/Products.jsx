import React from "react";

export default function Products({count, setCount}) {

  const addToCart = (product) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  setCount(count + 1);
};

  const Products = [
    {
      id: 1,
      name: "Winter Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "25000",
      images: "/images/winter.jpeg"
    },
    {
      id: 2,
      name: "KeyBoard",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "840",
      images: "/images/keyboard.jpeg"
    },
    {
      id: 3,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "550",
      images: "/images/tshirt.jpeg"
    },
    {
      id: 4,
      name: "Leptop HP",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "230",
      images: "/images/download.jpeg"
    },
    {
      id: 5,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "340",
      images: "/images/tshirt.jpeg"
    },
    {
      id: 6,
      name: "Winter Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "25000",
      images: "/images/winter.jpeg"
    },
    {
      id: 7,
      name: "KeyBoard",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "840",
      images: "/images/keyboard.jpeg"
    },
    {
      id: 8,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "550",
      images: "/images/tshirt.jpeg"
    },
    
    
  ]

  // const addToCart = () => {
  //     setCount(count + 1)
  // }


  return (
    <div className="container mx-auto px-3 sm:px-1">
      <div className="gap-3 sm:gap-6 grid grid-cols-2 sm:grid-cols-4 sm:mt-16 mt-12">
      {Products.map((product) => (
        <div className="bg-gray-900 items-center rounded-xl overflow-hidden xs:h-100">
          <img className="w-full h-40 sm:h-60 object-cover hover:scale-110 transition-all duration-500 group-hover:translate-y-2 group-hover:scale-110 "
            src={product.images}
            alt={product.name}
          />
          <div className="p-4">
            <div key={product.id}>
            <h2 className="uppercase sm:text-lg text-sm text-gray-300 mb-2">{product.name}</h2>
            <h2 className="sm:text-2xl text-xl font-semibold mb-2 text-ellipsis line-clamp-1">{product.name}</h2>
            <p className="text-[16px] text-gray-400 mb-4 hidden sm:block">{product.description}</p>
            <p className="sm:text-2xl text-xl font-semibold text-cyan-400 sm:mb-3 mb-3">$ {product.price}</p>
          </div>
          <p className="mb-2">Quantity</p>
          <div>
            {/* <button className="border py-2 text-black font-semibold cursor-pointer w-full rounded-xl">
              Add to Cart
            </button> */}
            <button onClick={() => addToCart(product)} className="border py-2.5 sm:py-3 bg-cyan-500 text-black font-semibold cursor-pointer hover:bg-cyan-400 w-full rounded-xl">
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
