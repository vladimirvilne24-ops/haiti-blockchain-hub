// app/AdminSection.tsx
'use client';
import { useState, useEffect } from 'react';

interface ResearchItem {
  id: string;
  title: string;
  author: string;
  university: string;
  abstract: string;
  status: string;
  date: string;
  fileName?: string;
}

export default function AdminSection() {
  const [submissions, setSubmissions] = useState<ResearchItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch live research submissions from your API route on load
  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const res = await fetch('/api/research');
        const json = await res.json();
        if (json.success) {
          setSubmissions(json.data);
        }
      } catch (err) {
        console.error('Failed to load submissions:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchSubmissions();
  }, []);

  return (
    <section id="admin" className="px-8 py-24 max-w-6xl mx-auto border-t border-bgSecondary">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-accentCyan font-semibold">
          Restricted Access
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-textMain">
          Admin Research Queue & Review Dashboard
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Review incoming student papers, verify academic affiliations, and manage publication statuses.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading secure queue...</div>
      ) : (
        <div className="bg-bgSecondary rounded-2xl border border-accentCyan/20 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accentCyan/20 bg-bgPrimary/50 text-[11px] uppercase tracking-wider text-gray-400">
                  <th className="p-4">Author / University</th>
                  <th className="p-4">Research Title</th>
                  <th className="p-4">Attached File</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bgPrimary text-sm">
                {submissions.map((item) => (
                  <tr key={item.id} className="hover:bg-bgPrimary/30 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-textMain">{item.author}</div>
                      <div className="text-xs text-gray-400">{item.university}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-textMain">{item.title}</div>
                      <div className="text-xs text-gray-400 truncate max-w-xs">{item.abstract}</div>
                    </td>
                    <td className="p-4 text-xs text-accentCyan font-mono">
                      {item.fileName || 'No file attached'}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          item.status === 'Approved'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-gray-400 whitespace-nowrap">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}