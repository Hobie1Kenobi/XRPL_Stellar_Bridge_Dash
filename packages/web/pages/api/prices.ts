import type { NextApiRequest, NextApiResponse } from "next";

type TokenPrice = {
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TokenPrice[]>
) {
  // Mock data for demonstration
  const prices = [
    {
      symbol: "XRP",
      price: 0.58,
      change24h: 2.45,
      volume24h: 1234567890
    },
    {
      symbol: "XLM",
      price: 0.12,
      change24h: -1.23,
      volume24h: 987654321
    }
  ];

  res.status(200).json(prices);
}
