import React, { useState } from 'react';

const POLICY_CASES = [
  { domain: "Education", title: "Kenya's Free Primary Education (2003)", outcome: "success", keywords: ["education", "school", "learning", "teacher", "student", "curriculum", "access"], lesson: "Rapid access expansion succeeded but strained infrastructure — implementation capacity must match policy ambition." },
  { domain: "Education", title: "UNESCO Education for All (1990-2015)", outcome: "mixed", keywords: ["education", "school", "global", "access", "quality", "benchmark"], lesson: "Global commitments need strong national accountability mechanisms to translate into real outcomes." },
  { domain: "Healthcare", title: "Rwanda's Mutuelle de Santé (1999)", outcome: "success", keywords: ["health", "insurance", "community", "coverage", "hospital", "clinic"], lesson: "Community-based models with low premiums achieved 90%+ coverage — trust and proximity drive uptake." },
  { domain: "Healthcare", title: "WHO COVAX Initiative (2020)", outcome: "mixed", keywords: ["vaccine", "health", "global", "distribution", "pandemic", "equity"], lesson: "Global health equity requires addressing supply chain and political barriers, not just funding." },
  { domain: "Environment", title: "Ethiopia's Green Legacy (2019)", outcome: "success", keywords: ["environment", "tree", "forest", "climate", "land", "reforestation"], lesson: "Mass mobilization campaigns can produce dramatic results but require long-term institutional follow-through." },
  { domain: "Environment", title: "Paris Agreement (2015)", outcome: "mixed", keywords: ["climate", "carbon", "emission", "environment", "global", "temperature"], lesson: "International agreements without enforcement mechanisms struggle to achieve binding commitments." },
  { domain: "Taxes", title: "Ghana's e-Levy (2022)", outcome: "mixed", keywords: ["tax", "mobile", "digital", "revenue", "informal", "economy"], lesson: "Technically sound digital taxes can underperform due to public backlash — behavioral feasibility matters." },
  { domain: "Taxes", title: "OECD Global Minimum Corporate Tax (2021)", outcome: "ongoing", keywords: ["tax", "corporate", "multinational", "revenue", "global", "reform"], lesson: "Multilateral tax reform is possible but requires sustained political will across competing national interests." },
  { domain: "Technology", title: "Rwanda's Drone Delivery/Zipline (2016)", outcome: "success", keywords: ["technology", "drone", "delivery", "health", "innovation", "rural"], lesson: "Leapfrog technology works best when paired with clear government mandate and strong private partnership." },
  { domain: "Technology", title: "EU AI Act (2024)", outcome: "ongoing", keywords: ["ai", "technology", "regulation", "digital", "algorithm", "data"], lesson: "Risk-based regulation of emerging technology sets global standards but must balance innovation and safety." },
  { domain: "Economy", title: "Botswana's Mineral Revenue Policy (1970s)", outcome: "success", keywords: ["economy", "revenue", "mineral", "resource", "development", "investment"], lesson: "Resource wealth can drive development when institutions are strong and revenues are strategically invested." },
  { domain: "Economy", title: "IMF SDR Allocation (2021)", outcome: "success", keywords: ["economy", "finance", "recovery", "global", "currency", "debt"], lesson: "Emergency economic tools work best when deployed quickly and targeted at the most vulnerable economies." },
  { domain: "Housing", title: "South Africa's RDP Housing (1994)", outcome: "mixed", keywords: ["housing", "home", "shelter", "urban", "poor", "construction"], lesson: "Large-scale housing programmes risk trading quantity for quality — design and location matter as much as numbers." },
  { domain: "Housing", title: "UN-Habitat New Urban Agenda (2016)", outcome: "ongoing", keywords: ["housing", "urban", "city", "affordable", "infrastructure", "sustainable"], lesson: "Global urban frameworks need strong local implementation capacity to move from commitment to delivery." },
  { domain: "Energy", title: "Morocco's Noor Solar Complex (2016)", outcome: "success", keywords: ["energy", "solar", "renewable", "electricity", "climate", "power"], lesson: "Bold renewable energy investment pays off when backed by long-term political commitment and strategic location." },
  { domain: "Trade", title: "AfCFTA (2021)", outcome: "ongoing", keywords: ["trade", "africa", "market", "tariff", "economic", "integration"], lesson: "Continental trade integration requires harmonizing regulations across diverse institutional contexts." },
  { domain: "Labor", title: "South Africa's Employment Equity Act (1998)", outcome: "mixed", keywords: ["labor", "employment", "equity", "discrimination", "workplace", "affirmative"], lesson: "Affirmative action policies require ongoing monitoring and enforcement to achieve lasting structural change." },
  { domain: "Immigration", title: "Uganda's Refugee Policy (ongoing)", outcome: "success", keywords: ["refugee", "migration", "asylum", "integration", "displacement", "immigration"], lesson: "Self-reliance refugee models outperform camp containment when backed by land access and economic rights." },
  { domain: "Justice", title: "Rwanda's Gacaca Courts (2001-2012)", outcome: "mixed", keywords: ["justice", "court", "crime", "community", "accountability", "reconciliation"], lesson: "Community justice mechanisms can process high volumes of cases but must carefully manage trauma and fairness." },
  { domain: "Social Welfare", title: "Kenya's GiveDirectly UBI Pilot (2016)", outcome: "success", keywords: ["welfare", "cash", "poverty", "income", "transfer", "basic"], lesson: "Unconditional cash transfers improve wellbeing significantly — trust in beneficiaries drives better outcomes." },
  { domain: "Public Health", title: "Africa CDC establishment (2017)", outcome: "success", keywords: ["health", "disease", "pandemic", "surveillance", "africa", "public"], lesson: "Continental health institutions need sustained investment before crises hit to be effective during them." },
  { domain: "Drugs", title: "South Africa Cannabis Decriminalization (2018)", outcome: "ongoing", keywords: ["drug", "cannabis", "decriminalization", "criminal", "justice", "reform"], lesson: "Court-led drug reform can trigger broader policy change but needs legislative follow-through to stick." },
  { domain: "Immigration", title: "UN Global Compact for Refugees (2018)", outcome: "ongoing", keywords: ["refugee", "migration", "global", "burden", "sharing", "displacement"], lesson: "Non-binding global compacts raise standards but require domestic champions to drive real implementation." },
];

function scorePolicy(text) {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);

  // Problem Clarity Score
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

  // Find matching analog cases
  const scored = POLICY_CASES.map(c => {
    const matches = c.keywords.filter(k => lower.includes(k)).length;
    return { ...c, matches };
  }).sort((a, b) => b.matches - a.matches);

  const topAnalogs = scored.slice(0, 2);

  // PSF Score based on analog outcomes and keyword matches
  let psfScore = 35;
  if (topAnalogs[0]?.matches > 0) psfScore += topAnalogs[0].matches * 6;
  if (topAnalogs[0]?.outcome === 'success') psfScore += 15;
  if (topAnalogs[0]?.outcome === 'mixed') psfScore += 8;
  if (hasCause) psfScore += 10;
  if (hasTarget) psfScore += 8;
  psfScore = Math.min(psfScore, 100);

  // Feedback
  const clarityFeedback = `Your policy scores ${clarityScore}/100 on clarity. ${
    !hasProblem ? 'Try stating the root problem more explicitly. ' : 'The problem is reasonably defined. '
  }${!hasEvidence ? 'Adding data or evidence would strengthen the problem statement.' : 'Good use of evidence to ground the proposal.'}`;

  const psfFeedback = `Your solution scores ${psfScore}/100 on problem-solution fit. ${
    topAnalogs[0]?.matches > 2
      ? `Strong alignment with ${topAnalogs[0].domain} domain cases. `
      : 'The connection between problem and solution could be made more explicit. '
  }${psfScore < 60 ? 'Consider addressing root causes more directly in the intervention design.' : 'The intervention logic is reasonably well aligned with the stated problem.'}`;

  return { clarityScore, psfScore, clarityFeedback, psfFeedback, topAnalogs };
}

function App() {
  const [policyText, setPolicyText] = useState('');
  const [result, setResult] = useState(null);

  const analyzePolicy = () => {
    if (!policyText.trim()) return;
    const analysis = scorePolicy(policyText);
    setResult(analysis);
  };

  return (
    <div style={{ maxWidth: 800, margin: '60px auto', padding: '0 20px', fontFamily: 'Georgia, serif' }}>

      <h1 style={{ fontSize: 32, marginBottom: 8 }}>PolicyIQ</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>
        AI-powered policy feasibility and problem-solution fit engine
      </p>

      {!result ? (
        <>
          <label style={{ fontSize: 14, fontWeight: 'bold' }}>
            Paste your policy proposal:
          </label>
          <textarea
            style={{ display: 'block', width: '100%', height: 160, marginTop: 8, padding: 12, fontSize: 14, borderRadius: 6, border: '1px solid #ccc', boxSizing: 'border-box' }}
            placeholder="e.g. We propose a teacher training programme in rural Uganda to improve STEM outcomes for girls aged 13-17..."
            value={policyText}
            onChange={e => setPolicyText(e.target.value)}
          />
          <button
            style={{ marginTop: 16, padding: '12px 28px', fontSize: 14, background: '#222', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}
            onClick={analyzePolicy}
          >
            Analyze Policy →
          </button>
        </>
      ) : (
        <div>
          <button
            onClick={() => { setResult(null); setPolicyText(''); }}
            style={{ marginBottom: 24, padding: '8px 16px', cursor: 'pointer', borderRadius: 6, border: '1px solid #ccc', background: 'white' }}
          >
            ← New Analysis
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
            <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 'bold', color: '#2a5bd7' }}>{result.clarityScore}</div>
              <div style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Problem Clarity Score</div>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{result.clarityFeedback}</p>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 'bold', color: '#c8a228' }}>{result.psfScore}</div>
              <div style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Problem–Solution Fit</div>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{result.psfFeedback}</p>
            </div>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: 24 }}>
            <h3 style={{ marginTop: 0, marginBottom: 16 }}>Most Relevant Policy Analogs</h3>
            {result.topAnalogs.map((a, i) => (
              <div key={i} style={{ borderTop: i > 0 ? '1px solid #eee' : 'none', paddingTop: i > 0 ? 16 : 0, marginTop: i > 0 ? 16 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>{a.title}</span>
                  <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 20, background: a.outcome === 'success' ? '#e6f4ea' : '#fff8e6', color: a.outcome === 'success' ? '#2e7d32' : '#b45309' }}>
                    {a.outcome === 'success' ? '✓ Success' : a.outcome === 'mixed' ? '~ Mixed' : '→ Ongoing'}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>{a.lesson}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;