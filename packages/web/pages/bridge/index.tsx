import type { NextPage } from "next";
import { BridgeInterface } from "../components/bridge/BridgeInterface";

const BridgePage: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Cross-Chain Bridge
      </h1>
      <BridgeInterface />
    </div>
  );
};

export default BridgePage;
