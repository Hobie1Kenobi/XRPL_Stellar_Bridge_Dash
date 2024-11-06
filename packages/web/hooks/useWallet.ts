import { useState, useCallback } from "react";

interface WalletState {
  connected: boolean;
  address: string | null;
  network: string | null;
}

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    address: null,
    network: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Implement actual wallet connection
      setWallet({
        connected: true,
        address: "demo-address",
        network: "testnet"
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect wallet");
    } finally {
      setLoading(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setWallet({
      connected: false,
      address: null,
      network: null
    });
  }, []);

  return {
    wallet,
    loading,
    error,
    connect,
    disconnect
  };
}
