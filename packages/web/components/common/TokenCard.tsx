import React from "react";

interface TokenCardProps {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
}

export const TokenCard: React.FC<TokenCardProps> = ({
  symbol,
  name,
  price,
  change24h,
  volume24h,
}) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-400">{symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">${price.toFixed(4)}</p>
          <p className={change24h >= 0 ? "text-green-500" : "text-red-500"}>
            {change24h >= 0 ? "+" : ""}{change24h.toFixed(2)}%
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-400">
          24h Volume: ${volume24h.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
