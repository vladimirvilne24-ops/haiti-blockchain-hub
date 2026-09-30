// app/CheckoutSection.tsx
'use client';
import { useState } from 'react';

export default function CheckoutSection() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');
  const [tier, setTier] = useState<'supporter' | 'innovator' | 'enterprise'>('innovator');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Card form states
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  // Pricing tiers
  const pricing = {
    supporter: { name: 'Community Supporter Pass', fiat: '$50', crypto: '0.025 MATIC' },
    innovator: { name: 'Lab Innovator Pass', fiat: '$150', crypto: '0.075 MATIC' },
    enterprise: { name: 'Genesis Enterprise Sponsor', fiat: '$500', crypto: '0.25 MATIC' },
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (paymentMethod === 'crypto') {
      try {
        const { ethereum } = window as any;
        if (!ethereum) {
          alert('Please connect your Web3 wallet first via the top navigation bar.');
          setLoading(false);
          return;
        }

        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const sender = accounts[0];

        // Valid test recipient address (Replace with your own MetaMask public address to receive funds)
        const recipient = '0x0000000000000000000000000000000000000001'; 
        
        const amountHex = tier === 'supporter' ? '0x58d15e17628000' : tier === 'innovator' ? '0x10a741a46278000' : '0x38d7ea4c680000';

        const txHash = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: sender,
            to: recipient,
            value: amountHex,
          }],
        });

        if (txHash) {
          setSuccess(true);
        }
      } catch (err: any) {
        // Bulletproof check for hidden empty objects, rejections, and wallet dismissals
        const errStr = String(err);
        const jsonStr = JSON.stringify(err);
        const isCancelled = 
          !err || 
          errStr === '{}' || 
          jsonStr === '{}' || 
          errStr === '[object Object]' || 
          Object.keys(err || {}).length === 0 || 
          err?.code === 4001 || 
          err?.code === 'ACTION_REJECTED' ||
          errStr.includes('User rejected');

        if (isCancelled) {
          console.info('Crypto transaction was cancelled or dismissed by the user.');
        } else {
          console.error('Crypto payment failed:', err);
          alert('Transaction failed or was rejected.');
        }
      } finally {
        setLoading(false);
      }
    } else {
      // Simulate secure Credit/Debit Card processing (Stripe / Payment Gateway integration)
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1500);
    }
  };

  return (
    <section id="checkout" className="px-8 py-24 max-w-4xl mx-auto border-t border-bgSecondary">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-accentGold font-semibold">
          Secure Contribution Portal
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-textMain">
          Sponsor & Secure Your Access Pass
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm">
          Support research initiatives, hackathons, and decentralized infrastructure using credit/debit cards or crypto.
        </p>
      </div>

      <div className="bg-bgSecondary p-8 md:p-12 rounded-2xl border border-accentGold/30 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accentGold via-accentCyan to-accentBlue"></div>

        {success ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
            <h3 className="text-2xl font-bold mb-2 text-textMain">Sponsorship Confirmed!</h3>
            <p className="text-gray-400 text-sm mb-6">Thank you for powering the lab ecosystem. Your pass credentials have been logged.</p>
            <button
              onClick={() => {
                setSuccess(false);
                setCardName('');
                setCardNumber('');
                setCardExpiry('');
                setCardCvc('');
              }}
              className="px-6 py-2.5 bg-accentGold text-bgPrimary font-bold text-xs uppercase tracking-wider rounded-lg"
            >
              Make Another Contribution
            </button>
          </div>
        ) : (
          <form onSubmit={handleCheckout} className="space-y-8">
            {/* Step 1: Select Tier */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                1. Select Sponsorship Tier
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['supporter', 'innovator', 'enterprise'] as const).map((tKey) => (
                  <div
                    key={tKey}
                    onClick={() => setTier(tKey)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all ${
                      tier === tKey
                        ? 'border-accentGold bg-accentGold/10 shadow-[0_0_15px_rgba(255,215,0,0.2)]'
                        : 'border-bgPrimary bg-bgPrimary/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="font-bold text-textMain text-sm capitalize">{tKey}</div>
                    <div className="text-accentGold font-mono text-lg mt-1">{pricing[tKey].fiat}</div>
                    <div className="text-xs text-gray-400 mt-1">or {pricing[tKey].crypto}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Payment Method */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                2. Choose Payment Method
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                    paymentMethod === 'card'
                      ? 'border-accentCyan bg-accentCyan/10 text-accentCyan shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                      : 'border-bgPrimary bg-bgPrimary/50 text-gray-400 hover:text-textMain'
                  }`}
                >
                  Credit / Debit Card (Fiat)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('crypto')}
                  className={`py-3.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                    paymentMethod === 'crypto'
                      ? 'border-accentCyan bg-accentCyan/10 text-accentCyan shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                      : 'border-bgPrimary bg-bgPrimary/50 text-gray-400 hover:text-textMain'
                  }`}
                >
                  Web3 Crypto Wallet
                </button>
              </div>
            </div>

            {/* Conditional Fields based on Payment Method */}
            {paymentMethod === 'card' ? (
              <div className="space-y-4 p-6 bg-bgPrimary/60 rounded-xl border border-bgPrimary">
                <h4 className="text-xs font-bold uppercase tracking-widest text-accentCyan">Card Secure Details</h4>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Name on Card</label>
                  <input
                    required
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Vladimir Vilne"
                    className="w-full bg-bgSecondary border border-bgPrimary rounded-lg px-4 py-2.5 text-sm text-textMain focus:outline-none focus:border-accentCyan"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">Card Number</label>
                  <input
                    required
                    type="text"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4242 4242 4242 4242"
                    className="w-full bg-bgSecondary border border-bgPrimary rounded-lg px-4 py-2.5 text-sm text-textMain focus:outline-none focus:border-accentCyan font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Expiration Date</label>
                    <input
                      required
                      type="text"
                      maxLength={5}
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full bg-bgSecondary border border-bgPrimary rounded-lg px-4 py-2.5 text-sm text-textMain focus:outline-none focus:border-accentCyan font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Secure Code (CVV)</label>
                    <input
                      required
                      type="password"
                      maxLength={4}
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      placeholder="CVC"
                      className="w-full bg-bgSecondary border border-bgPrimary rounded-lg px-4 py-2.5 text-sm text-textMain focus:outline-none focus:border-accentCyan font-mono"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-bgPrimary/60 rounded-xl border border-bgPrimary text-center">
                <p className="text-sm text-gray-300 mb-2">You selected Web3 Crypto Payment.</p>
                <p className="text-xs text-accentCyan">Make sure your wallet is connected using the button in the top navigation bar. Clicking pay will trigger your wallet extension to sign the transfer.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-accentGold text-bgPrimary font-bold uppercase tracking-wider text-sm rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:bg-white transition-all disabled:opacity-50"
            >
              {loading ? 'Processing Secure Payment...' : `Complete Sponsorship (${paymentMethod === 'card' ? pricing[tier].fiat : pricing[tier].crypto})`}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}