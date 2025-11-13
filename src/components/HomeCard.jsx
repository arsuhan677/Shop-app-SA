import React from "react";

export default function HomeCard() {
  return (
    <div className="">
      {/* <div className='container mx-auto bg-gray-800 py-30 mt-8 rounded-xl border border-gray-400'> */}
      <div className="mt-16 px-3 sm:px-0">
        <div className="container mx-auto flex flex-col rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="py-4">
            <h2 className="text-[18px] uppercase text-gray-400 tracking-[0.25em]">
              Curated objects
            </h2>
            <h1 className="text-4xl font-semibold py-2">Lumen Supply Co.</h1>
            <p className="text-[18px] text-gray-300 py-2">
              Discover daily essentials crafted by independent makers. Add what
              you love to <br /> your cart and keep shopping—your picks stay
              saved thanks to local storage.
            </p>
          </div>

          <div className="bg-cyan-500 hover:bg-cyan-400 cursor-pointer py-3 px-6 rounded-2xl flex items-center space-x-4">
            <h3 className="text-xl font-semibold text-black">View cart</h3>
            <p className="bg-gray-800 py-1 px-3 rounded-xl font-semibold"><span>0</span> items</p>
          </div>
        </div>
      </div>
    </div>
  );
}
