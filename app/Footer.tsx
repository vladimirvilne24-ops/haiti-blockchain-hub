export default function Footer() {
  return (
    <footer className="bg-bgSecondary border-t border-accentCyan/20 text-gray-400 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-4 h-4 bg-accentCyan rounded-full shadow-[0_0_12px_#00F2FE]"></div>
            <span className="font-bold tracking-wider text-lg text-textMain">
              HBIL & Haiti Blockchain Week
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            The premier institutional hub bridging decentralized architecture, academic cybersecurity research, and high-impact web3 execution.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-accentCyan font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#research" className="hover:text-accentCyan transition-colors">Research Repository</a></li>
            <li><a href="#sponsors" className="hover:text-accentCyan transition-colors">Strategic Partners</a></li>
            <li><a href="#admin" className="hover:text-accentCyan transition-colors">Admin Dashboard</a></li>
            <li><a href="#summit" className="hover:text-accentCyan transition-colors">Summit Passes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-accentGold font-bold mb-4">Ecosystem Hub</h4>
          <p className="text-xs text-gray-400 mb-2">Palo Alto • Boston • Port-au-Prince</p>
          <p className="text-xs text-gray-400">contact@hbil.org</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-bgPrimary flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 Haiti Blockchain Innovation Lab & Haiti Blockchain Week. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <span className="hover:text-accentCyan cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-accentCyan cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}