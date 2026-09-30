export default function SponsorsSection() {
  return (
    <section id="sponsors" className="px-8 py-24 max-w-6xl mx-auto border-t border-bgSecondary">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-accentCyan font-semibold">
          Ecosystem Collaboration
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
          Sponsors & Strategic Partners
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Uniting international donors, institutional leaders, and web3 builders driving technological sovereignty in Haiti.
        </p>
      </div>

      {/* Tier 1: Diamond / Title Sponsors */}
      <div className="mb-12">
        <h3 className="text-xs uppercase tracking-widest text-accentGold font-bold text-center mb-6">
          Diamond & Title Sponsors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-bgSecondary p-8 rounded-2xl border-2 border-accentGold/60 shadow-[0_0_20px_rgba(242,201,76,0.15)] flex items-center justify-center h-36 group hover:border-accentGold transition-all">
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-accentGold to-yellow-200 bg-clip-text text-transparent">
              [ TITLE SPONSOR SLOT ]
            </span>
          </div>
          <div className="bg-bgSecondary p-8 rounded-2xl border-2 border-accentGold/60 shadow-[0_0_20px_rgba(242,201,76,0.15)] flex items-center justify-center h-36 group hover:border-accentGold transition-all">
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-accentGold to-yellow-200 bg-clip-text text-transparent">
              [ GLOBAL DONOR PARTNER ]
            </span>
          </div>
        </div>
      </div>

      {/* Tier 2: Ecosystem & Gold Partners */}
      <div className="mb-12">
        <h3 className="text-xs uppercase tracking-widest text-accentCyan font-bold text-center mb-6">
          Ecosystem & Gold Partners
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-bgSecondary p-6 rounded-xl border border-accentCyan/30 flex items-center justify-center h-28 hover:border-accentCyan transition-all group"
            >
              <span className="text-sm font-bold text-gray-300 group-hover:text-accentCyan transition-colors">
                Ecosystem Partner {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tier 3: Academic & Community Supporters */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold text-center mb-6">
          Academic & Community Institutions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Franklin Cummings Tech', 'Research Labs', 'Civic Tech Initiative', 'Web3 Community'].map((org, index) => (
            <div
              key={index}
              className="bg-bgSecondary/50 p-4 rounded-lg border border-bgSecondary text-center flex items-center justify-center h-20 hover:border-accentCyan/40 transition-all"
            >
              <span className="text-xs font-semibold text-gray-400">{org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}