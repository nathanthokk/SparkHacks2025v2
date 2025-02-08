"use client";
import { investments } from "@/lib/data";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Current Investments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {investments.map((inv) => (
          <div key={inv.id} className="border rounded-lg p-4 shadow bg-white">
            <h2 className="text-xl font-semibold">{inv.name}</h2>
            <p className="text-gray-600">{inv.industry}</p>
            <p>Quarterly Revenue: {inv.quarterlyRevenue}</p>
            <p>Employees: {inv.employees}</p>
            <p className="text-green-500 font-bold">Risk: {inv.riskAssessment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
