import type { NextPage } from "next";
import { PriceChart } from "../components/charts/PriceChart";
import { VolumeChart } from "../components/charts/VolumeChart";
import { TokenCard } from "../components/common/TokenCard";

const Home: NextPage = () => {
  // Mock data for demonstration
  const mockPriceData = Array.from({ length: 24 }, (_, i) => ({
    timestamp: `${i}:00`,
    price: Math.random() * 100 + 50
  }));

  const mockVolumeData = Array.from({ length: 24 }, (_, i) => ({
    timestamp: `${i}:00`,
    volume: Math.random() * 1000000
  }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TokenCard
          symbol="XRP"
          name="Ripple"
          price={0.58}
          change24h={2.45}
          volume24h={1234567890}
        />
        <TokenCard
          symbol="XLM"
          name="Stellar"
          price={0.12}
          change24h={-1.23}
          volume24h={987654321}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PriceChart data={mockPriceData} />
        <VolumeChart data={mockVolumeData} />
      </div>
    </div>
  );
};

export default Home;
