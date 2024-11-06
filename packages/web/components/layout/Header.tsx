import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-background-dark border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">XRP/Stellar Platform</h1>
        <nav className="space-x-4">
          <button className="button-secondary">Connect Wallet</button>
        </nav>
      </div>
    </header>
  );
}
