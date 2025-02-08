"use client";
import { investorProfile } from "@/lib/data";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Investor Profile</h1>
      <div className="flex items-center gap-6">
        <img src={investorProfile.profileImage} alt="Investor" className="w-24 h-24 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{investorProfile.name}</h2>
          <p>Email: {investorProfile.email}</p>
          <p>Phone: {investorProfile.phone}</p>
          <p>LinkedIn: <a href={`https://${investorProfile.linkedin}`} className="text-blue-500">{investorProfile.linkedin}</a></p>
          <p>Max Investment Value: {investorProfile.maxInvestmentValue}</p>
          <p>Investor Type: {investorProfile.investorType}</p>
        </div>
      </div>
    </div>
  );
}
