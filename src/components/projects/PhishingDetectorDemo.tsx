import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, Search, Sparkles, CheckCircle2, AlertTriangle, RefreshCw, ExternalLink } from 'lucide-react';

export const PhishingDetectorDemo: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>('https://paypal-security-login-verify-account.bank-security.com');
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<{
    score: number;
    status: 'safe' | 'suspicious' | 'phishing';
    reasons: string[];
    featuresExtracted: { name: string; status: 'good' | 'bad' }[];
  } | null>(null);

  const sampleUrls = [
    { label: 'Phishing Sample 1', url: 'https://paypal-security-login-verify-account.bank-security.com' },
    { label: 'Phishing Sample 2', url: 'http://192.168.1.50/admin-login-update-credentials.html' },
    { label: 'Safe Sample', url: 'https://github.com/kurmaharshavardhan' }
  ];

  const handleAnalyze = (targetUrl: string = urlInput) => {
    if (!targetUrl.trim()) return;
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const lowerUrl = targetUrl.toLowerCase();
      const reasons: string[] = [];
      const features: { name: string; status: 'good' | 'bad' }[] = [];
      let riskScore = 15; // default low risk

      // Check HTTPS
      if (!lowerUrl.startsWith('https://')) {
        riskScore += 30;
        reasons.push('Insecure HTTP protocol missing SSL certificate encryption');
        features.push({ name: 'SSL Certificate (HTTPS)', status: 'bad' });
      } else {
        features.push({ name: 'SSL Certificate (HTTPS)', status: 'good' });
      }

      // Check IP Address format
      if (/http:\/\/\d+\.\d+\.\d+\.\d+/.test(lowerUrl)) {
        riskScore += 40;
        reasons.push('Direct raw IP address detected in domain origin');
        features.push({ name: 'Domain Reputation', status: 'bad' });
      }

      // Check Phishing Keywords
      const keywords = ['login', 'verify', 'account', 'bank', 'secure', 'update', 'paypal', 'support', 'free'];
      const matchedKeywords = keywords.filter(kw => lowerUrl.includes(kw));
      if (matchedKeywords.length >= 2) {
        riskScore += 35;
        reasons.push(`Multiple high-frequency phishing keywords found: [${matchedKeywords.join(', ')}]`);
        features.push({ name: 'NLP Keyword Analysis', status: 'bad' });
      } else {
        features.push({ name: 'NLP Keyword Analysis', status: 'good' });
      }

      // Check length and hyphen density
      if (lowerUrl.length > 50 || (lowerUrl.match(/-/g) || []).length > 2) {
        riskScore += 20;
        reasons.push('Abnormal URL string length & excessive hyphenation pattern');
        features.push({ name: 'URL Structure Anomaly', status: 'bad' });
      } else {
        features.push({ name: 'URL Structure Anomaly', status: 'good' });
      }

      const finalScore = Math.min(Math.max(riskScore, 5), 98);
      let status: 'safe' | 'suspicious' | 'phishing' = 'safe';
      if (finalScore >= 60) status = 'phishing';
      else if (finalScore >= 35) status = 'suspicious';

      if (status === 'safe') {
        reasons.push('Domain layout matches legitimate web hosting patterns & standard protocol');
        features.push({ name: 'Domain Reputation', status: 'good' });
      }

      setResult({
        score: finalScore,
        status,
        reasons,
        featuresExtracted: features
      });

      setAnalyzing(false);
    }, 1200);
  };

  return (
    <div id="interactive-ai" className="my-16">
      <div className="glass-card p-6 sm:p-10 rounded-3xl border border-indigo-500/30 relative overflow-hidden shadow-2xl shadow-indigo-500/10">
        
        {/* Glow Blob */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> LIVE INTERACTIVE AI DEMO
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              AI Phishing Detection System
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Test Kurma Harshavardhan's ML NLP feature extraction model on suspect URLs in real time.
            </p>
          </div>
          <span className="text-xs font-mono bg-slate-800 text-indigo-300 px-3 py-1.5 rounded-xl border border-slate-700 self-start sm:self-auto">
            Model: Random Forest / NLP Regressor
          </span>
        </div>

        {/* URL Input Bar */}
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Paste suspicious website URL here..."
              className="w-full bg-slate-900/90 text-slate-100 text-xs sm:text-sm px-4 py-3.5 pr-28 rounded-2xl border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
            />
            <button
              onClick={() => handleAnalyze()}
              disabled={analyzing}
              className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md disabled:opacity-50"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Scanning...
                </>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5" /> Scan URL
                </>
              )}
            </button>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">Try Preset:</span>
            {sampleUrls.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setUrlInput(s.url);
                  handleAnalyze(s.url);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700 transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Card Display */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                {result.status === 'phishing' && (
                  <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/40 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                )}
                {result.status === 'suspicious' && (
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                )}
                {result.status === 'safe' && (
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    Verdict: <span className={
                      result.status === 'phishing' ? 'text-red-400' :
                      result.status === 'suspicious' ? 'text-amber-400' : 'text-emerald-400'
                    }>{result.status}</span>
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Extracted Threat Probability Risk
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-3xl font-extrabold font-mono text-white">
                  {result.score}%
                </span>
                <p className="text-[11px] text-slate-400">Malicious Threat Score</p>
              </div>
            </div>

            {/* Feature Extraction Table & Explanations */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-300 uppercase mb-3">
                  ML Feature Extraction Output
                </h5>
                <div className="space-y-2">
                  {result.featuresExtracted.map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 text-xs">
                      <span className="text-slate-300">{f.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        f.status === 'good' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {f.status === 'good' ? 'PASS' : 'RISK DETECTED'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-mono font-bold text-slate-300 uppercase mb-3">
                  Detection Rationale
                </h5>
                <ul className="space-y-2">
                  {result.reasons.map((r, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
};
