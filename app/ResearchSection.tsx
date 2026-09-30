// app/ResearchSection.tsx
'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function ResearchSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'repository' | 'submit'>('repository');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [university, setUniversity] = useState('');
  const [abstract, setAbstract] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // PDF Preview Modal State
  const [previewPdf, setPreviewPdf] = useState<{ title: string; fileUrl: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title, 
          author, 
          university, 
          abstract, 
          fileName: selectedFile ? selectedFile.name : 'No file attached' 
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('An error occurred while transmitting your research.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="research" className="px-8 py-24 max-w-5xl mx-auto border-t border-bgSecondary relative">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-accentCyan font-semibold">
          {t.researchSub}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-textMain">
          {t.researchTitle}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          {t.researchDesc}
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center mt-8">
          <div className="bg-bgSecondary p-1.5 rounded-lg border border-accentCyan/20 flex space-x-2">
            <button
              onClick={() => setActiveTab('repository')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'repository'
                  ? 'bg-accentCyan text-bgPrimary shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                  : 'text-gray-400 hover:text-textMain'
              }`}
            >
              {t.browsePapers}
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'submit'
                  ? 'bg-accentCyan text-bgPrimary shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                  : 'text-gray-400 hover:text-textMain'
              }`}
            >
              {t.submitResearch}
            </button>
          </div>
        </div>
      </div>

      {/* REPOSITORY VIEW */}
      {activeTab === 'repository' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Paper 1 */}
          <div className="bg-bgSecondary p-8 rounded-2xl border border-accentCyan/20 flex flex-col justify-between hover:border-accentCyan transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accentCyan to-accentBlue"></div>
            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accentCyan px-3 py-1 bg-accentCyan/10 rounded-full">
                  Decentralized Protocol
                </span>
                <span className="text-xs text-gray-400">June 2026</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-textMain">HaitiAidShield: Practice-Based Anti-Corruption Framework</h3>
              <p className="text-gray-400 text-sm mb-6">
                Technical whitepaper exploring trust-minimized tracking of institutional aid flows deployed as an MVP on the Polygon Amoy testnet.
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setPreviewPdf({ title: 'HaitiAidShield Whitepaper', fileUrl: '/sample-whitepaper.pdf' })}
                className="flex-1 py-3 bg-accentCyan/10 border border-accentCyan/40 text-accentCyan font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-accentCyan/20 transition-all"
              >
                View PDF Viewer
              </button>
              <a 
                href="#download" 
                className="px-5 py-3 bg-accentCyan text-bgPrimary font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_10px_rgba(0,242,254,0.3)] hover:bg-white transition-all text-center flex items-center justify-center"
              >
                Download
              </a>
            </div>
          </div>

          {/* Paper 2 */}
          <div className="bg-bgSecondary p-8 rounded-2xl border border-accentBlue/40 flex flex-col justify-between hover:border-accentBlue transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accentBlue to-accentCyan"></div>
            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accentBlue px-3 py-1 bg-accentBlue/20 rounded-full">
                  Digital Forensics & OSINT
                </span>
                <span className="text-xs text-gray-400">May 2026</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-textMain">Verifiable Evidence Chains on IPFS & Streamlit</h3>
              <p className="text-gray-400 text-sm mb-6">
                Architectural breakdown of cryptographic verification models for civil society documentation and secure legal logging.
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setPreviewPdf({ title: 'Verifiable Evidence Chains', fileUrl: '/sample-evidence.pdf' })}
                className="flex-1 py-3 bg-accentBlue/10 border border-accentBlue/40 text-accentCyan font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-accentBlue/20 transition-all"
              >
                View PDF Viewer
              </button>
              <a 
                href="#download" 
                className="px-5 py-3 bg-accentCyan text-bgPrimary font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_10px_rgba(0,242,254,0.3)] hover:bg-white transition-all text-center flex items-center justify-center"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SUBMISSION FORM VIEW */}
      {activeTab === 'submit' && (
        <div className="bg-bgSecondary p-8 md:p-12 rounded-2xl border border-accentCyan/30 max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accentCyan via-accentBlue to-accentGold"></div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-accentCyan/20 text-accentCyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
              <h3 className="text-2xl font-bold mb-2 text-textMain">Submission Received Successfully</h3>
              <p className="text-gray-400 text-sm mb-6">Your research abstract and PDF document have been securely queued for admin review.</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setTitle('');
                  setAuthor('');
                  setUniversity('');
                  setAbstract('');
                  setSelectedFile(null);
                }}
                className="px-6 py-2.5 bg-accentCyan text-bgPrimary font-bold text-xs uppercase tracking-wider rounded-lg"
              >
                Submit Another Document
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mt-2">
              <h3 className="text-xl font-bold mb-2 text-center text-textMain">Secure Student Research Portal</h3>
              <p className="text-gray-400 text-sm text-center mb-6">Upload your academic papers, technical abstracts, or CVs directly to the HBIL backend.</p>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Full Name / Author</label>
                <input
                  required
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Vladimir Vilne"
                  className="w-full bg-bgPrimary border border-bgSecondary rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accentCyan"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Institutional Affiliation / University</label>
                <input
                  required
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  placeholder="Franklin Cummings Tech"
                  className="w-full bg-bgPrimary border border-bgSecondary rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accentCyan"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Research Title</label>
                <input
                  required
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter research title..."
                  className="w-full bg-bgPrimary border border-bgSecondary rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accentCyan"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Abstract Summary</label>
                <textarea
                  required
                  rows={4}
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  placeholder="Enter your abstract summary..."
                  className="w-full bg-bgPrimary border border-bgSecondary rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accentCyan"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Upload PDF Document (Max 25MB)</label>
                <input
                  required
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:uppercase file:bg-accentCyan/10 file:text-accentCyan hover:file:bg-accentCyan/20 cursor-pointer"
                />
                {selectedFile && (
                  <p className="text-xs text-accentCyan mt-2">Selected File: {selectedFile.name}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-accentCyan text-bgPrimary font-bold uppercase tracking-wider text-sm rounded-lg shadow-[0_0_20px_rgba(0,242,254,0.5)] hover:bg-white transition-all disabled:opacity-50"
              >
                {loading ? 'Transmitting...' : 'Transmit Research to Admin Backend'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* PDF PREVIEW MODAL */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-bgSecondary border border-accentCyan/40 w-full max-w-4xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-bgPrimary flex justify-between items-center border-b border-accentCyan/20">
              <div>
                <span className="text-[10px] uppercase font-bold text-accentCyan tracking-widest">Document Viewer</span>
                <h3 className="text-lg font-bold text-textMain">{previewPdf.title}</h3>
              </div>
              <button 
                onClick={() => setPreviewPdf(null)}
                className="w-8 h-8 rounded-full bg-bgSecondary text-gray-400 hover:text-textMain flex items-center justify-center font-bold text-lg transition-colors border border-accentCyan/20"
              >
                ✕
              </button>
            </div>
            
            {/* Modal Body / PDF Frame */}
            <div className="flex-1 bg-bgPrimary/50 p-4 flex items-center justify-center">
              <iframe
                src={previewPdf.fileUrl}
                title={previewPdf.title}
                className="w-full h-full rounded-lg border border-accentCyan/20 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}