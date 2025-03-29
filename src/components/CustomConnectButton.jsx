import React from "react";
import { useWallets, useConnectWallet, useCurrentAccount, useDisconnectWallet, ConnectButton} from "@mysten/dapp-kit";

const CustomConnectButton = () => {
  const wallets = useWallets(); // Get available wallets
  const connect = useConnectWallet(); // Connect function
  const account = useCurrentAccount(); // Get currently connected account
  const disconnect = useDisconnectWallet(); // Disconnect function

  return (
    <div className="flex flex-col items-center">
        <ConnectButton className="bg-blue-200" />
    </div>
  );
};

export default CustomConnectButton;
      