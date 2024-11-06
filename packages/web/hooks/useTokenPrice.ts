import { useState, useEffect } from "react";

interface TokenPrice {
  symbol: string;
  price: number;
  change24h: number;
}

export const useTokenPrice = (symbol: string) => {
  const [price, setPrice] = useState<TokenPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // TODO: Implement actual price fetching
        setPrice({
          symbol,
          price: 1.0,
          change24h: 0.5
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch price");
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [symbol]);

  return { price, loading, error };
}
