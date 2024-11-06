import React, { useState } from "react";

export const BridgeInterface: React.FC = () => {
  const [fromToken, setFromToken] = useState("XRP");
  const [toToken, setToToken] = useState("XLM");
  const [amount, setAmount] = useState("");

  return (
    <div className="card max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cross-Chain Bridge</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select 
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="w-full bg-background border border-gray-700 rounded-lg p-2"
          >
            <option value="XRP">XRP</option>
            <option value="XLM">XLM</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="w-full bg-background border border-gray-700 rounded-lg p-2"
          >
            <option value="XLM">XLM</option>
            <option value="XRP">XRP</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-background border border-gray-700 rounded-lg p-2"
            placeholder="Enter amount"
          />
        </div>
        <button className="button-primary w-full">
          Bridge Tokens
        </button>
      </div>
    </div>
  );
}
