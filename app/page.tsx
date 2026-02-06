"use client";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing";
};

const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" },
];

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Product Filter</h1>

      {/* Filter Dropdown */}
      <div className="mb-8">
        <label className="mr-3 font-medium">Filter by:</label>
        <select
          className="border px-3 py-2 rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-medium mb-4">${product.price}</p>

            <span
              className={`px-3 py-1 text-sm rounded-full text-white ${
                product.category === "electronics"
                  ? "bg-blue-500"
                  : "bg-indigo-400"
              }`}
            >
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
