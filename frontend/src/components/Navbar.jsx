import { FC, useMemo } from 'react';
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
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import logo from "../assets/1.jpg"

// Use import instead of require for styles
import '@solana/wallet-adapter-react-ui/styles.css';

const Navbar = () => {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // Add multiple wallets to the list
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className='flex justify-between bg-stone-600'>
                        <div className='p-2 flex items-center'>
                            <img src={logo} alt="" width={60} />
                            <span className='pl-3 font-extrabold text-4xl'>CrowdFunding</span>
                        </div>
                        <div className='flex justify-between gap-4 items-center'>
                            <WalletMultiButton />
                            <WalletDisconnectButton />
                        </div>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default Navbar;
