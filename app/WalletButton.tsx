// app/WalletButton.tsx
'use client';
import { useState } from 'react';

export default function WalletButton() {
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window === 'undefined') return;

    const { ethereum } = window as any;

    if (!ethereum) {
      alert('No Web3 wallet detected. Please install MetaMask or another compatible provider.');
      return;
    }

    setLoading(true);
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err: any) {
      // Catch any rejection or error gracefully and log to standard info instead of throwing a disruptive console error
      console.info('Wallet connection was cancelled or dismissed by the user.');
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <div>
      {account ? (
        <button
          onClick={disconnectWallet}
          className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-emerald-500/20 transition-all flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{formatAddress(account)}</span>
        </button>
      ) : (
        <button
          onClick={connectWallet}
          disabled={loading}
          className="px-5 py-2.5 bg-accentCyan/10 border border-accentCyan/40 text-accentCyan font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-accentCyan/20 transition-all shadow-[0_0_10px_rgba(0,242,254,0.2)] disabled:opacity-50"
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}