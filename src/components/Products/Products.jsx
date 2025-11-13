import React from "react";

export default function Products({count, setCount}) {
  // const [cart, setCart, ] = useState([])
  // const [cartCount, setCartCount] = useState([])
  

  const Products = [
    {
      id: 1,
      name: "Winter Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "20.02",
      images: "/images/winter.jpeg"
    },
    {
      id: 2,
      name: "KeyBoard",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "10.06",
      images: "/images/keyboard.jpeg"
    },
    {
      id: 3,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "10.07",
      images: "/images/tshirt.jpeg"
    },
    {
      id: 4,
      name: "Leptop HP",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "30.06",
      images: "/images/download.jpeg"
    },
    {
      id: 3,
      name: "T-Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "40.1",
      images: "/images/tshirt.jpeg"
    },
    {
      id: 1,
      name: "Winter Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et.",
      price: "50.03",
      images: "/images/winter.jpeg"
    },
  ]

  const addToCart = () => {
      setCount(count + 1)
  }


  return (
    <div className="container mx-auto px-3 sm:px-1">
      <div className="gap-3 sm:gap-6 grid grid-cols-2 sm:grid-cols-3 sm:mt-16 mt-12">
      {Products.map((product) => (
        <div className="bg-gray-900 items-center rounded-xl overflow-hidden xs:h-100">
          <img className="w-full h-40 sm:h-60 object-cover transform transition-all duration-500 group-hover:translate-y-2 group-hover:scale-110 "
            src={product.images}
            alt=""
          />
          <div className="p-4">
            <div key={product.id}>
            <h2 className="uppercase text-gray-300 mb-2">{product.name}</h2>
            <h2 className="sm:text-2xl text-xl font-semibold mb-2 text-ellipsis line-clamp-1">{product.name}</h2>
            <p className="text-[16px] text-gray-400 mb-4 hidden sm:block">{product.description}</p>
            <p className="sm:text-2xl text-xl font-semibold text-cyan-400 sm:mb-6 mb-3">$ {product.price}</p>
          </div>
          <p className="mb-2">Quantity</p>
          <div>
            {/* <button className="border py-2 text-black font-semibold cursor-pointer w-full rounded-xl">
              Add to Cart
            </button> */}
            <button onClick={addToCart} className="border py-2.5 sm:py-3 bg-cyan-500 text-black font-semibold cursor-pointer hover:bg-cyan-400 w-full rounded-xl">
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
