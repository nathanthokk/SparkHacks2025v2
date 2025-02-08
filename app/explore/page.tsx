"use client";
import { useState } from "react";
import { investments } from "@/lib/data";

export default function ExplorePage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % investments.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Businesses</h1>
      <div className="relative w-96 h-96 border rounded-lg shadow-lg bg-white p-6 text-center">
        <img src={investments[index].imageUrl} alt={investments[index].name} className="w-full h-40 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold">{investments[index].name}</h2>
        <p className="text-gray-600">{investments[index].industry}</p>
        <p>Founded: {investments[index].founded}</p>
        <p>Quarterly Revenue: {investments[index].quarterlyRevenue}</p>
        <p>Employees: {investments[index].employees}</p>
        <p className="text-green-500 font-bold">Risk: {investments[index].riskAssessment}</p>
      </div>
      <button onClick={handleNext} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
}
