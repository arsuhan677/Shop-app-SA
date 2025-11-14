// import { useEffect, useState } from "react";
// import Products from "./Products";

// export default function Cart({cartproduct, setCartProduct}) {
//   const [cartproduct, setCartProduct] = useState([]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(Products);
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//       {cartproduct.length === 0 ? (
//         <p>No products added yet!</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {Products.map((product) => (
//             <div key={product} className="border p-4 rounded">
//               <img src={product.image} alt="" className="w-full h-40 object-cover" />
//               <h3 className="font-semibold mt-2">{product.name}</h3>
//               <p className="text-gray-700">Price: ${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
