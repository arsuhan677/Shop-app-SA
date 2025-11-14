import React from "react";

function Fotter(props) {
  return (
    <footer class="bg-gray-900 text-gray-300 py-10">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">

    {/* <!-- Left Section --> */}
    <div className="">
      <h2 class="text-xl font-bold text-white mb-3">SuhanShop</h2>
      <p class="text-sm">High quality products at your doorstep.</p>
    </div>

    {/* < Middle Section (Links)  */}
    <div className="">
      <h3 class="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition">Home</a></li>
        <li><a href="#" class="hover:text-white transition">Products</a></li>
        <li><a href="#" class="hover:text-white transition">About</a></li>
        <li><a href="#" class="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Right Section (Social Links) --> */}
    <div className="">
      <h3 class="text-lg font-semibold text-white mb-3">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white text-xl transition">🌐</a>
        <a href="#" class="hover:text-white text-xl transition">📘</a>
        <a href="#" class="hover:text-white text-xl transition">📸</a>
      </div>
    </div>

  </div>

  <div class="text-center text-gray-500 border-t border-gray-700 mt-10 pt-4 text-sm">
    © 2025 SuhanShop. All rights reserved.
  </div>
</footer>

  );
}

export default Fotter;
