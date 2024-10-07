import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
    LedgerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletMultiButton,
    WalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import logo from "../assets/1.jpg";
import '@solana/wallet-adapter-react-ui/styles.css';

const Navbar = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
    ], [network]);

    return (
        <div className='flex justify-between bg-stone-600 p-4 items-center'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" width={60} />
                <h1 className='text-white font-bold text-2xl ml-3'>CrowdFunding</h1>
            </div>
            <div className='flex space-x-4'>
                <WalletMultiButton />
                <WalletDisconnectButton />
            </div>
        </div>
    );
};

export default Navbar;
