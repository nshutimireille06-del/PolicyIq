import React, { useState } from 'react';
import { POLICY_CASES } from './cases';
import { POLICY_CASES_2 } from './cases2';

const SECTORS = ["All Sectors", "Education", "Healthcare", "Environment", "Drugs", "Taxes", "Technology", "Economy", "Housing", "Energy", "Trade", "Labor", "Immigration", "Justice", "Social Welfare", "Public Health"];

function scorePolicy(text) {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  let clarityScore = 40;
  const hasProblem = /problem|issue|challenge|gap|lack|fail|poor|low|high rate|burden/.test(lower);
  const hasTarget = /women|men|children|youth|rural|urban|poor|farmer|worker|patient|student|girl|boy/.test(lower);
  const hasEvidence = /\d+%|\d+ million|\d+ thousand|data|research|study|evidence|survey/.test(lower);
  const hasLocation = /africa|uganda|kenya|rwanda|nigeria|ghana|global|national|regional|district/.test(lower);
  const hasCause = /because|due to|caused by|result of|driven by|lack of|absence of/.test(lower);
  if (hasProblem) clarityScore += 12;
  if (hasTarget) clarityScore += 12;
  if (hasEvidence) clarityScore += 12;
  if (hasLocation) clarityScore += 8;
  if (hasCause) clarityScore += 10;
  if (words.length > 50) clarityScore += 6;
  clarityScore = Math.min(clarityScore, 100);

  const ALL_CASES = [...POLICY_CASES, ...POLICY_CASES_2];
const scored = ALL_CASES.map(c => ({ ...c, matches: c.keywords.filter(k => lower.includes(k)).length })).sort((a, b) => b.matches - a.matches);
  const topAnalogs = scored.slice(0, 3);

  let psfScore = 35;
  if (topAnalogs[0]?.matches > 0) psfScore += topAnalogs[0].matches * 6;
  if (topAnalogs[0]?.outcome === 'success') psfScore += 15;
  if (topAnalogs[0]?.outcome === 'mixed') psfScore += 8;
  if (hasCause) psfScore += 10;
  if (hasTarget) psfScore += 8;
  psfScore = Math.min(psfScore, 100);

  const clarityFeedback = `${!hasProblem ? 'Try stating the root problem more explicitly. ' : 'The problem is reasonably defined. '}${!hasEvidence ? 'Adding data or evidence would strengthen the statement.' : 'Good use of evidence to ground the proposal.'}`;
  const psfFeedback = `${topAnalogs[0]?.matches > 2 ? `Strong alignment with ${topAnalogs[0].domain} domain cases. ` : 'The connection between problem and solution could be more explicit. '}${psfScore < 60 ? 'Consider addressing root causes more directly.' : 'The intervention logic is reasonably well aligned.'}`;

  const impactReport = {
    economic: topAnalogs[0]?.economicImpact || 'neutral',
    socialEquity: topAnalogs[0]?.socialEquityImpact || 'neutral',
    environmental: topAnalogs[0]?.environmentalImpact || 'neutral',
    political: topAnalogs[0]?.politicalImpact || 'neutral',
    gender: topAnalogs[0]?.genderImpact || 'neutral',
    positiveImpacts: topAnalogs[0]?.positiveImpacts || [],
    negativeImpacts: topAnalogs[0]?.negativeImpacts || [],
    shortTerm: topAnalogs[0]?.shortTerm || '',
    longTerm: topAnalogs[0]?.longTerm || '',
    stakeholders: topAnalogs[0]?.stakeholders || [],
  };

  return { clarityScore, psfScore, clarityFeedback, psfFeedback, topAnalogs, impactReport };
}

const s = {
  page: { background: '#f0f0f0', minHeight: '100vh', fontFamily: "'Times New Roman', Times, serif" },
  topbar: { background: '#1a3a6b', padding: '8px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  topbarText: { color: '#a8c0e8', fontSize: 11, letterSpacing: '0.08em' },
  header: { background: 'white', borderBottom: '3px solid #1a3a6b', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logoArea: { display: 'flex', alignItems: 'center', gap: 14 },
  logoText: { fontSize: 26, fontWeight: 'bold', color: '#1a3a6b' },
  logoSub: { fontSize: 11, color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 },
  nav: { display: 'flex', gap: 8 },
  navBtn: (active) => ({ background: active ? '#1a3a6b' : 'white', color: active ? 'white' : '#1a3a6b', border: '1px solid #1a3a6b', padding: '7px 18px', fontSize: 12, cursor: 'pointer', letterSpacing: '0.05em', fontFamily: "'Times New Roman', serif" }),
  hero: { background: '#1a3a6b', padding: '36px 40px', color: 'white' },
  heroTitle: { fontSize: 26, fontWeight: 'bold', marginBottom: 8, color: 'white' },
  heroSub: { fontSize: 13, color: '#a8c0e8', lineHeight: 1.6, maxWidth: 580 },
  main: { maxWidth: 900, margin: '32px auto', padding: '0 40px' },
  label: { fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a3a6b', marginBottom: 8, borderLeft: '3px solid #1a3a6b', paddingLeft: 10, display: 'block' },
  card: { background: 'white', border: '1px solid #c8d4e8', padding: 24, marginBottom: 20 },
  select: { border: '1px solid #c8d4e8', padding: '9px 14px', fontSize: 13, fontFamily: "'Times New Roman', serif", color: '#333', marginTop: 8, width: '100%', outline: 'none' },
  textarea: { display: 'block', width: '100%', height: 110, border: '1px solid #c8d4e8', padding: 12, fontSize: 13, fontFamily: "'Times New Roman', serif", color: '#333', resize: 'vertical', outline: 'none', boxSizing: 'border-box', marginTop: 8 },
  btn: { background: '#1a3a6b', color: 'white', border: 'none', padding: '10px 24px', fontSize: 12, fontFamily: "'Times New Roman', serif", cursor: 'pointer', letterSpacing: '0.05em', marginTop: 12 },
  outlineBtn: { background: 'white', color: '#1a3a6b', border: '1px solid #1a3a6b', padding: '8px 16px', fontSize: 11, fontFamily: "'Times New Roman', serif", cursor: 'pointer', letterSpacing: '0.05em' },
  scoreCard: { background: 'white', border: '1px solid #c8d4e8', borderTop: '4px solid #1a3a6b', padding: 20 },
  scoreNum: { fontSize: 48, color: '#1a3a6b', fontWeight: 'bold', lineHeight: 1 },
  scoreLabel: { fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', margin: '6px 0 10px' },
  barBg: { height: 4, background: '#e5eaf3', marginBottom: 12 },
  scoreText: { fontSize: 12, color: '#444', lineHeight: 1.65 },
  impactDot: (val) => ({ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: val === 'positive' ? '#2e6b35' : val === 'negative' ? '#9b1c1c' : val === 'mixed' ? '#92400e' : '#888', marginRight: 6 }),
  countryChip: (selected) => ({ display: 'inline-block', margin: '4px', padding: '5px 12px', fontSize: 12, border: `1px solid ${selected ? '#1a3a6b' : '#c8d4e8'}`, background: selected ? '#1a3a6b' : 'white', color: selected ? 'white' : '#333', cursor: 'pointer' }),
  badge: (outcome) => ({ fontSize: 10, padding: '2px 8px', background: outcome === 'success' ? '#e6f4ea' : outcome === 'mixed' ? '#fdf3e0' : '#e8eaf6', color: outcome === 'success' ? '#2e6b35' : outcome === 'mixed' ? '#7d5a0a' : '#3949ab', border: `1px solid ${outcome === 'success' ? '#b8d9bc' : outcome === 'mixed' ? '#f0d494' : '#c5cae9'}` }),
  stakeholderBadge: (effect) => ({ fontSize: 10, padding: '2px 8px', background: effect === 'wins' ? '#e6f4ea' : effect === 'loses' ? '#fde8e8' : '#fdf3e0', color: effect === 'wins' ? '#2e6b35' : effect === 'loses' ? '#9b1c1c' : '#7d5a0a', border: `1px solid ${effect === 'wins' ? '#b8d9bc' : effect === 'loses' ? '#f5c6c6' : '#f0d494'}` }),
  footer: { background: '#1a3a6b', color: '#a8c0e8', textAlign: 'center', padding: 16, fontSize: 11, marginTop: 40, letterSpacing: '0.06em' },
};

function ScaleLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <line x1="22" y1="8" x2="22" y2="36" stroke="#1a3a6b" strokeWidth="2"/>
      <line x1="10" y1="8" x2="34" y2="8" stroke="#1a3a6b" strokeWidth="2"/>
      <line x1="22" y1="14" x2="10" y2="22" stroke="#1a3a6b" strokeWidth="1.5"/>
      <line x1="22" y1="14" x2="34" y2="22" stroke="#1a3a6b" strokeWidth="1.5"/>
      <rect x="5" y="22" width="10" height="6" rx="1" fill="#1a3a6b" fillOpacity="0.15" stroke="#1a3a6b" strokeWidth="1.2"/>
      <rect x="29" y="22" width="10" height="6" rx="1" fill="#1a3a6b" fillOpacity="0.15" stroke="#1a3a6b" strokeWidth="1.2"/>
      <line x1="14" y1="36" x2="30" y2="36" stroke="#1a3a6b" strokeWidth="2"/>
    </svg>
  );
}

function ImpactReport({ report, analogTitle }) {
  const dimensions = [
    { key: 'economic', label: 'Economic Impact' },
    { key: 'socialEquity', label: 'Social Equity Impact' },
    { key: 'environmental', label: 'Environmental Impact' },
    { key: 'political', label: 'Political & Institutional Impact' },
    { key: 'gender', label: 'Gender Impact' },
  ];

  return (
    <div style={s.card}>
      <span style={s.label}>Impact Report — Based on {analogTitle}</span>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 12, margin: '16px 0' }}>
        {dimensions.map(d => (
          <div key={d.key} style={{ textAlign: 'center', padding: 12, background: '#f8f9fc', border: '1px solid #e0e8f4' }}>
            <div style={s.impactDot(report[d.key])} />
            <div style={{ fontSize: 10, color: '#1a3a6b', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{d.label}</div>
            <div style={{ fontSize: 11, fontWeight: 'bold', color: report[d.key] === 'positive' ? '#2e6b35' : report[d.key] === 'negative' ? '#9b1c1c' : '#7d5a0a', marginTop: 4, textTransform: 'capitalize' }}>{report[d.key]}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 'bold', color: '#2e6b35', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Positive Impacts</div>
          {report.positiveImpacts.map((p, i) => (
            <div key={i} style={{ fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 6, paddingLeft: 12, borderLeft: '2px solid #2e6b35' }}>{p}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 'bold', color: '#9b1c1c', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Negative Impacts</div>
          {report.negativeImpacts.map((n, i) => (
            <div key={i} style={{ fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 6, paddingLeft: 12, borderLeft: '2px solid #9b1c1c' }}>{n}</div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div style={{ background: '#f8f9fc', border: '1px solid #e0e8f4', padding: 16 }}>
          <div style={{ fontSize: 10, color: '#888', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Short-Term Outlook</div>
          <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{report.shortTerm}</div>
        </div>
        <div style={{ background: '#f8f9fc', border: '1px solid #e0e8f4', padding: 16 }}>
          <div style={{ fontSize: 10, color: '#888', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Long-Term Outlook</div>
          <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{report.longTerm}</div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 11, fontWeight: 'bold', color: '#1a3a6b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Stakeholder Analysis</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {report.stakeholders.map((st, i) => (
            <div key={i} style={{ background: '#f8f9fc', border: '1px solid #e0e8f4', padding: '8px 14px', fontSize: 12 }}>
              <span style={{ color: '#333' }}>{st.group}</span>
              <span style={{ ...s.stakeholderBadge(st.effect), marginLeft: 8 }}>{st.effect === 'wins' ? 'Benefits' : st.effect === 'loses' ? 'Harmed' : 'Mixed'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('analyze');
  const [policyText, setPolicyText] = useState('');
  const [result, setResult] = useState(null);
  const [showImpact, setShowImpact] = useState(false);
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [compareText, setCompareText] = useState('');
  const [compareLabel, setCompareLabel] = useState('');
  const [selectedAnalog, setSelectedAnalog] = useState(null);

  const analyzePolicy = () => {
    if (!policyText.trim()) return;
    setResult(scorePolicy(policyText));
    setShowImpact(false);
  };

  const addToComparison = () => {
    if (!compareText.trim()) return;
    const r = scorePolicy(compareText);
    setSubmissions(prev => [...prev, { label: compareLabel || `Submission ${prev.length + 1}`, text: compareText, ...r }]);
    setCompareText('');
    setCompareLabel('');
  };

  const filteredCases = selectedSector === 'All Sectors' ? POLICY_CASES : POLICY_CASES.filter(c => c.domain === selectedSector);
  const countriesInSector = [...new Set(filteredCases.map(c => c.country))];
  const countryCases = selectedCountry ? filteredCases.filter(c => c.country === selectedCountry) : [];

  return (
    <div style={s.page}>
      <div style={s.topbar}>
        <span style={s.topbarText}>Policy Intelligence Platform</span>
        <span style={s.topbarText}>Version 1.0 | 2026</span>
      </div>

      <div style={s.header}>
        <div style={s.logoArea}>
          <ScaleLogo />
          <div>
            <div style={s.logoText}>PolicyIQ</div>
            <div style={s.logoSub}>Policy Feasibility & Intelligence Engine</div>
          </div>
        </div>
        <div style={s.nav}>
          {['analyze', 'sectors', 'compare'].map(t => (
            <button key={t} style={s.navBtn(tab === t)} onClick={() => setTab(t)}>
              {t === 'analyze' ? 'Analysis' : t === 'sectors' ? 'Sector Explorer' : 'Compare'}
            </button>
          ))}
        </div>
      </div>

      <div style={s.hero}>
        <h1 style={s.heroTitle}>Is your policy solving the right problem?</h1>
        <p style={s.heroSub}>Submit any policy proposal and receive a scored assessment of problem clarity and problem–solution fit, benchmarked against 30 documented policy cases across 15 domains.</p>
      </div>

      <div style={s.main}>

        {tab === 'analyze' && (
          <>
            {!result ? (
              <div style={s.card}>
                <span style={s.label}>Policy Submission</span>
                <label style={{ fontSize: 14, fontWeight: 'bold', color: '#222', marginTop: 12, display: 'block' }}>Paste your policy proposal below</label>
                <textarea style={s.textarea} placeholder="e.g. We propose a nationwide teacher training programme targeting rural secondary schools in Uganda..." value={policyText} onChange={e => setPolicyText(e.target.value)} />
                <button style={s.btn} onClick={analyzePolicy}>Submit for Analysis →</button>
              </div>
            ) : (
              <>
                <button style={{ ...s.outlineBtn, marginBottom: 20 }} onClick={() => { setResult(null); setPolicyText(''); setShowImpact(false); }}>← New Submission</button>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  <div style={s.scoreCard}>
                    <div style={s.scoreNum}>{result.clarityScore}</div>
                    <div style={s.scoreLabel}>Problem Clarity Score</div>
                    <div style={s.barBg}><div style={{ height: 4, width: `${result.clarityScore}%`, background: '#1a3a6b' }} /></div>
                    <div style={s.scoreText}>{result.clarityFeedback}</div>
                  </div>
                  <div style={s.scoreCard}>
                    <div style={s.scoreNum}>{result.psfScore}</div>
                    <div style={s.scoreLabel}>Problem–Solution Fit</div>
                    <div style={s.barBg}><div style={{ height: 4, width: `${result.psfScore}%`, background: '#1a3a6b' }} /></div>
                    <div style={s.scoreText}>{result.psfFeedback}</div>
                  </div>
                </div>

                <div style={s.card}>
                  <span style={s.label}>Most Relevant Policy Analogs</span>
                  {result.topAnalogs.map((a, i) => (
                    <div key={i} style={{ borderTop: i > 0 ? '1px solid #f0f0f0' : 'none', paddingTop: i > 0 ? 14 : 8, marginTop: i > 0 ? 14 : 8 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 13, color: '#1a3a6b' }}>{a.title}</span>
                        <span style={s.badge(a.outcome)}>{a.outcome === 'success' ? 'Success' : a.outcome === 'mixed' ? 'Mixed' : 'Ongoing'}</span>
                      </div>
                      <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6, marginBottom: 8 }}>{a.lesson}</div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button style={{ ...s.outlineBtn, fontSize: 10 }} onClick={() => { setSelectedAnalog(a); setTab('compare'); }}>Compare against this case →</button>
                        {i === 0 && <button style={{ ...s.outlineBtn, fontSize: 10, background: showImpact ? '#1a3a6b' : 'white', color: showImpact ? 'white' : '#1a3a6b' }} onClick={() => setShowImpact(!showImpact)}>
                          {showImpact ? 'Hide Impact Report' : 'View Impact Report →'}
                        </button>}
                      </div>
                    </div>
                  ))}
                </div>

                {showImpact && result.impactReport && (
                  <ImpactReport report={result.impactReport} analogTitle={result.topAnalogs[0]?.title} />
                )}
              </>
            )}
          </>
        )}

        {tab === 'sectors' && (
          <>
            <div style={s.card}>
              <span style={s.label}>Sector Explorer</span>
              <label style={{ fontSize: 13, fontWeight: 'bold', color: '#222', marginTop: 12, display: 'block' }}>Select a policy sector</label>
              <select style={s.select} value={selectedSector} onChange={e => { setSelectedSector(e.target.value); setSelectedCountry(null); }}>
                {SECTORS.map(sec => <option key={sec}>{sec}</option>)}
              </select>
            </div>

            {selectedSector !== 'All Sectors' && (
              <div style={s.card}>
                <span style={s.label}>Countries with {selectedSector} Policies</span>
                <div style={{ marginTop: 12 }}>
                  {countriesInSector.map(c => (
                    <span key={c} style={s.countryChip(selectedCountry === c)} onClick={() => setSelectedCountry(selectedCountry === c ? null : c)}>{c}</span>
                  ))}
                </div>
              </div>
            )}

            {selectedCountry && countryCases.length > 0 && (
              <div style={s.card}>
                <span style={s.label}>{selectedSector} Policies — {selectedCountry}</span>
                {countryCases.map((c, i) => (
                  <div key={i} style={{ borderTop: i > 0 ? '1px solid #f0f0f0' : 'none', paddingTop: i > 0 ? 14 : 8, marginTop: i > 0 ? 14 : 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontWeight: 'bold', fontSize: 13, color: '#1a3a6b' }}>{c.title}</span>
                      <span style={s.badge(c.outcome)}>{c.outcome === 'success' ? 'Success' : c.outcome === 'mixed' ? 'Mixed' : 'Ongoing'}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6 }}>{c.lesson}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {tab === 'compare' && (
          <>
            <div style={s.card}>
              <span style={s.label}>Compare Submissions</span>
              <label style={{ fontSize: 13, fontWeight: 'bold', color: '#222', marginTop: 12, display: 'block' }}>Submission label (optional)</label>
              <input style={{ ...s.textarea, height: 36, marginBottom: 8 }} placeholder="e.g. Uganda Teacher Training Policy" value={compareLabel} onChange={e => setCompareLabel(e.target.value)} />
              <label style={{ fontSize: 13, fontWeight: 'bold', color: '#222', display: 'block' }}>Paste policy text</label>
              <textarea style={s.textarea} placeholder="Paste a policy proposal to score and compare..." value={compareText} onChange={e => setCompareText(e.target.value)} />
              <button style={s.btn} onClick={addToComparison}>Add to Comparison →</button>
            </div>

            {submissions.length > 0 && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(submissions.length, 3)}, 1fr)`, gap: 16, marginBottom: 20 }}>
                  {submissions.map((sub, i) => (
                    <div key={i} style={s.scoreCard}>
                      <div style={{ fontSize: 12, fontWeight: 'bold', color: '#1a3a6b', marginBottom: 12, borderBottom: '1px solid #e0e8f4', paddingBottom: 8 }}>{sub.label}</div>
                      <div style={{ marginBottom: 12 }}>
                        <div style={s.scoreNum}>{sub.clarityScore}</div>
                        <div style={s.scoreLabel}>Clarity Score</div>
                        <div style={s.barBg}><div style={{ height: 4, width: `${sub.clarityScore}%`, background: '#1a3a6b' }} /></div>
                      </div>
                      <div>
                        <div style={s.scoreNum}>{sub.psfScore}</div>
                        <div style={s.scoreLabel}>PSF Score</div>
                        <div style={s.barBg}><div style={{ height: 4, width: `${sub.psfScore}%`, background: '#1a3a6b' }} /></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button style={s.outlineBtn} onClick={() => setSubmissions([])}>Clear All →</button>
              </>
            )}

            {selectedAnalog && (
              <div style={{ ...s.card, marginTop: 20 }}>
                <span style={s.label}>Comparison Against Analog Case</span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Your Policy</div>
                    {submissions.length > 0 ? (
                      <>
                        <div style={{ fontSize: 32, fontWeight: 'bold', color: '#1a3a6b' }}>{submissions[submissions.length - 1].clarityScore}</div>
                        <div style={s.scoreLabel}>Clarity Score</div>
                        <div style={{ fontSize: 32, fontWeight: 'bold', color: '#1a3a6b', marginTop: 8 }}>{submissions[submissions.length - 1].psfScore}</div>
                        <div style={s.scoreLabel}>PSF Score</div>
                      </>
                    ) : <div style={{ fontSize: 12, color: '#888' }}>Add a submission above to compare.</div>}
                  </div>
                  <div style={{ borderLeft: '1px solid #e0e8f4', paddingLeft: 20 }}>
                    <div style={{ fontSize: 11, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Analog Case</div>
                    <div style={{ fontWeight: 'bold', fontSize: 13, color: '#1a3a6b', marginBottom: 6 }}>{selectedAnalog.title}</div>
                    <span style={s.badge(selectedAnalog.outcome)}>{selectedAnalog.outcome === 'success' ? 'Success' : selectedAnalog.outcome === 'mixed' ? 'Mixed' : 'Ongoing'}</span>
                    <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6, marginTop: 10 }}>{selectedAnalog.lesson}</div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

      </div>

      <div style={s.footer}>PolicyIQ — Policy Intelligence Platform &nbsp;|&nbsp; Confidential MVP &nbsp;|&nbsp; 2026</div>
    </div>
  );
}