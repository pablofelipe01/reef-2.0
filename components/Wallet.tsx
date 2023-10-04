import {
    ConnectionProvider,
    WalletProvider
  } from "@solana/wallet-adapter-react";
  import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter
  } from "@solana/wallet-adapter-wallets";
  import React, { FC, useMemo } from "react";
  
  export const DEFAULT_ENDPOINT = "https://burned-greatest-fog.solana-mainnet.discover.quiknode.pro/0425966952b79163bedcb98cf74e00a4097771c2/"
  
  // Default styles that can be overridden by your app
  require("@solana/wallet-adapter-react-ui/styles.css");
  
  export const Wallet: FC = ({ children }) => {
 
    const wallets = useMemo(
      () => [
        new PhantomWalletAdapter(),
        // new SlopeWalletAdapter(),
        // new SolflareWalletAdapter(),
        // new TorusWalletAdapter(),
        // new LedgerWalletAdapter(),
        // new SolletWalletAdapter({}),
        // new SolletExtensionWalletAdapter({}),
      ],
      []
    );
  
  
    return (
      <ConnectionProvider endpoint={DEFAULT_ENDPOINT}>
        <WalletProvider wallets={wallets} autoConnect>
          {children}
        </WalletProvider>
      </ConnectionProvider>
    );
  };
  