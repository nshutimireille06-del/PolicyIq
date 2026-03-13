export const POLICY_CASES = [
  {
    domain: "Education", country: "Kenya", region: "Africa",
    title: "Kenya's Free Primary Education (2003)",
    outcome: "success",
    keywords: ["education", "school", "learning", "teacher", "student", "curriculum", "access", "primary"],
    lesson: "Rapid access expansion succeeded but strained infrastructure — implementation capacity must match policy ambition.",
    positiveImpacts: ["Enrollment surged by 1.3 million children in year one", "Dramatically improved access for low-income families", "Reduced gender gap in primary enrollment"],
    negativeImpacts: ["Severe strain on teacher supply and classroom infrastructure", "Quality of education declined due to overcrowding", "Rural schools disproportionately under-resourced"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Immediate surge in enrollment but overwhelmed school systems",
    longTerm: "Sustained gains in literacy and workforce participation over 20 years",
    stakeholders: [
      { group: "Low-income families", effect: "wins" },
      { group: "Teachers", effect: "mixed" },
      { group: "Ministry of Education", effect: "wins" },
      { group: "Private schools", effect: "loses" }
    ]
  },
  {
    domain: "Education", country: "Global", region: "Global",
    title: "UNESCO Education for All (1990-2015)",
    outcome: "mixed",
    keywords: ["education", "school", "global", "access", "quality", "benchmark", "literacy", "universal"],
    lesson: "Global commitments need strong national accountability mechanisms to translate into real outcomes.",
    positiveImpacts: ["Shaped national education policy in 164 countries", "Significant reduction in global out-of-school children", "Directly informed SDG 4 on quality education"],
    negativeImpacts: ["Many countries missed key benchmarks by 2015", "Quality improvements lagged far behind access gains", "Poorest countries lacked resources to implement fully"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Increased global political commitment to education access",
    longTerm: "Uneven outcomes — access improved significantly, quality less so",
    stakeholders: [
      { group: "Children in low-income countries", effect: "wins" },
      { group: "Girls and women", effect: "wins" },
      { group: "National governments", effect: "mixed" },
      { group: "International donors", effect: "mixed" }
    ]
  },
  {
    domain: "Healthcare", country: "Rwanda", region: "Africa",
    title: "Rwanda's Mutuelle de Santé (1999)",
    outcome: "success",
    keywords: ["health", "insurance", "community", "coverage", "hospital", "clinic", "maternal", "child"],
    lesson: "Community-based models with low premiums achieved 90%+ coverage — trust and proximity drive uptake.",
    positiveImpacts: ["Over 90% population coverage achieved", "Dramatic reduction in child and maternal mortality", "Reduced catastrophic health expenditure for poor households"],
    negativeImpacts: ["Premium payments remained burdensome for the poorest", "Quality of care lagged behind coverage expansion", "Rural facilities remained understaffed"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Rapid coverage expansion within first five years",
    longTerm: "One of Africa's most remarkable healthcare turnarounds over 25 years",
    stakeholders: [
      { group: "Rural poor", effect: "wins" },
      { group: "Women and children", effect: "wins" },
      { group: "Community health workers", effect: "wins" },
      { group: "Private health providers", effect: "mixed" }
    ]
  },
  {
    domain: "Healthcare", country: "Global", region: "Global",
    title: "WHO COVAX Initiative (2020)",
    outcome: "mixed",
    keywords: ["vaccine", "health", "global", "distribution", "pandemic", "equity", "covid", "immunization"],
    lesson: "Global health equity requires addressing supply chain and political barriers, not just funding.",
    positiveImpacts: ["Delivered over 2 billion doses worldwide", "Prevented millions of deaths in low-income countries", "Built global vaccine distribution infrastructure"],
    negativeImpacts: ["Rich countries hoarded vaccines, exposing deep inequities", "Supply chain fragility caused severe delays", "Many low-income countries received doses too late"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "neutral",
    shortTerm: "Significant delays in vaccine delivery to poorest countries",
    longTerm: "Exposed structural inequities in global health governance",
    stakeholders: [
      { group: "Low-income country populations", effect: "mixed" },
      { group: "Pharmaceutical companies", effect: "wins" },
      { group: "High-income countries", effect: "wins" },
      { group: "WHO and multilateral bodies", effect: "mixed" }
    ]
  },
  {
    domain: "Environment", country: "Ethiopia", region: "Africa",
    title: "Ethiopia's Green Legacy (2019)",
    outcome: "success",
    keywords: ["environment", "tree", "forest", "climate", "land", "reforestation", "green", "soil"],
    lesson: "Mass mobilization campaigns can produce dramatic results but require long-term institutional follow-through.",
    positiveImpacts: ["350 million trees planted in a single day", "Significant reduction in soil erosion in targeted areas", "International recognition driving further climate investment"],
    negativeImpacts: ["Survival rates of planted trees uncertain long-term", "Community land rights sometimes overridden during planting", "Focus on numbers over species diversity raised concerns"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "positive",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "World record tree planting and immediate political momentum",
    longTerm: "Long-term ecological impact depends on survival and maintenance",
    stakeholders: [
      { group: "Rural farming communities", effect: "mixed" },
      { group: "Ethiopian government", effect: "wins" },
      { group: "International climate funders", effect: "wins" },
      { group: "Local land users", effect: "mixed" }
    ]
  },
  {
    domain: "Environment", country: "Global", region: "Global",
    title: "Paris Agreement (2015)",
    outcome: "mixed",
    keywords: ["climate", "carbon", "emission", "environment", "global", "temperature", "ndc", "warming"],
    lesson: "International agreements without enforcement mechanisms struggle to achieve binding commitments.",
    positiveImpacts: ["196 nations committed to limiting warming to 1.5-2°C", "Triggered massive global shift in energy investment", "Created framework for regular national accountability"],
    negativeImpacts: ["No binding enforcement mechanism for missed targets", "Many countries have fallen short of pledges", "Richest emitters continue high emissions"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "positive",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "Strong political signal but limited immediate emissions reductions",
    longTerm: "Structural shift in global energy investment over decades",
    stakeholders: [
      { group: "Small island states", effect: "mixed" },
      { group: "Fossil fuel industries", effect: "loses" },
      { group: "Renewable energy sector", effect: "wins" },
      { group: "Future generations", effect: "wins" }
    ]
  },
  {
    domain: "Drugs", country: "South Africa", region: "Africa",
    title: "South Africa Cannabis Decriminalization (2018)",
    outcome: "ongoing",
    keywords: ["drug", "cannabis", "decriminalization", "criminal", "justice", "reform", "substance"],
    lesson: "Court-led drug reform can trigger broader policy change but needs legislative follow-through to stick.",
    positiveImpacts: ["Reduced criminalization of personal cannabis use", "Triggered broader regional debate on drug reform", "Reduced burden on criminal justice system"],
    negativeImpacts: ["Legislative follow-through has been slow", "Commercialization has benefited wealthy investors more than communities", "Regulatory framework remains incomplete"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "neutral",
    shortTerm: "Immediate reduction in personal use arrests",
    longTerm: "Incomplete without full legislative reform",
    stakeholders: [
      { group: "Cannabis users", effect: "wins" },
      { group: "Criminal justice system", effect: "wins" },
      { group: "Poor communities historically criminalized", effect: "mixed" },
      { group: "Cannabis investors", effect: "wins" }
    ]
  },
  {
    domain: "Drugs", country: "Global", region: "Global",
    title: "UN Single Convention on Narcotic Drugs (1961)",
    outcome: "mixed",
    keywords: ["drug", "narcotic", "convention", "international", "prohibition", "criminal", "substance", "control"],
    lesson: "Prohibition frameworks entrenched globally can produce mass incarceration without reducing use.",
    positiveImpacts: ["Created global coordination on drug control", "Reduced some cross-border trafficking networks"],
    negativeImpacts: ["Drove mass incarceration of drug users globally", "Disproportionately harmed poor and minority communities", "Failed to reduce overall drug use over 60 years"],
    economicImpact: "negative", socialEquityImpact: "negative", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "negative",
    shortTerm: "Rapid global adoption of punitive drug laws",
    longTerm: "60 years of evidence shows prohibition has failed on its own terms",
    stakeholders: [
      { group: "Drug users", effect: "loses" },
      { group: "Poor and minority communities", effect: "loses" },
      { group: "Law enforcement agencies", effect: "wins" },
      { group: "Pharmaceutical industry", effect: "wins" }
    ]
  },
  {
    domain: "Taxes", country: "Ghana", region: "Africa",
    title: "Ghana's e-Levy (2022)",
    outcome: "mixed",
    keywords: ["tax", "mobile", "digital", "revenue", "informal", "economy", "levy", "transaction"],
    lesson: "Technically sound digital taxes can underperform due to public backlash — behavioral feasibility matters.",
    positiveImpacts: ["Innovative attempt to tax the informal economy", "Widened the potential tax base", "Piloted digital taxation model for other African countries"],
    negativeImpacts: ["Significant public backlash and protests", "Revenue targets severely underperformed in year one", "Disproportionately affected low-income mobile money users"],
    economicImpact: "mixed", socialEquityImpact: "negative", environmentalImpact: "neutral",
    politicalImpact: "negative", genderImpact: "negative",
    shortTerm: "Public backlash and revenue underperformance",
    longTerm: "Model may improve with better communication and lower rates",
    stakeholders: [
      { group: "Low-income mobile money users", effect: "loses" },
      { group: "Ghanaian government", effect: "mixed" },
      { group: "Informal sector workers", effect: "loses" },
      { group: "Formal banking sector", effect: "wins" }
    ]
  },
  {
    domain: "Taxes", country: "Global", region: "Global",
    title: "OECD Global Minimum Corporate Tax (2021)",
    outcome: "ongoing",
    keywords: ["tax", "corporate", "multinational", "revenue", "global", "reform", "minimum", "profit"],
    lesson: "Multilateral tax reform is possible but requires sustained political will across competing national interests.",
    positiveImpacts: ["130+ countries agreed on 15% minimum corporate tax", "Targeted profit-shifting to tax havens", "Most significant international tax reform in decades"],
    negativeImpacts: ["Small developing countries may lose tax competition advantages", "Implementation has been slow and uneven", "Large multinationals retain many avoidance mechanisms"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "Political agreement reached but implementation incomplete",
    longTerm: "Potential to redirect billions in revenue to public services globally",
    stakeholders: [
      { group: "High-income country governments", effect: "wins" },
      { group: "Multinational corporations", effect: "loses" },
      { group: "Small tax haven economies", effect: "loses" },
      { group: "Developing country populations", effect: "mixed" }
    ]
  },
  {
    domain: "Technology", country: "Rwanda", region: "Africa",
    title: "Rwanda's Drone Delivery/Zipline (2016)",
    outcome: "success",
    keywords: ["technology", "drone", "delivery", "health", "innovation", "rural", "zipline", "supply"],
    lesson: "Leapfrog technology works best when paired with clear government mandate and strong private partnership.",
    positiveImpacts: ["Blood and medicines delivered within 30 minutes to remote clinics", "Reduced maternal and child mortality from supply shortages", "Model adopted by Ghana, Nigeria and Côte d'Ivoire"],
    negativeImpacts: ["High cost limits scalability without subsidy", "Dependency on single private sector partner creates risk", "Local technology capacity not built alongside deployment"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Immediate improvement in rural medical supply access",
    longTerm: "Global model for last-mile healthcare delivery",
    stakeholders: [
      { group: "Rural patients", effect: "wins" },
      { group: "Pregnant women", effect: "wins" },
      { group: "Zipline (private company)", effect: "wins" },
      { group: "Local logistics workers", effect: "mixed" }
    ]
  },
  {
    domain: "Technology", country: "Global", region: "Global",
    title: "EU Artificial Intelligence Act (2024)",
    outcome: "ongoing",
    keywords: ["ai", "technology", "regulation", "digital", "algorithm", "data", "artificial", "intelligence"],
    lesson: "Risk-based regulation of emerging technology sets global standards but must balance innovation and safety.",
    positiveImpacts: ["First comprehensive legal framework regulating AI by risk", "Banned high-risk applications like social scoring", "Set global regulatory benchmark similar to GDPR"],
    negativeImpacts: ["May disadvantage EU AI companies vs US and China", "Compliance burden heaviest on smaller developers", "Definitions of risk remain contested"],
    economicImpact: "mixed", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Immediate compliance requirements for AI developers",
    longTerm: "Expected to become global standard for AI governance",
    stakeholders: [
      { group: "EU citizens", effect: "wins" },
      { group: "Large AI companies", effect: "mixed" },
      { group: "Small AI startups", effect: "loses" },
      { group: "Civil society", effect: "wins" }
    ]
  },
  {
    domain: "Economy", country: "Botswana", region: "Africa",
    title: "Botswana's Mineral Revenue Policy (1970s)",
    outcome: "success",
    keywords: ["economy", "revenue", "mineral", "resource", "development", "investment", "diamond", "botswana"],
    lesson: "Resource wealth can drive development when institutions are strong and revenues are strategically invested.",
    positiveImpacts: ["Transformed one of world's poorest countries into middle-income nation", "Funded world-class education and infrastructure", "Avoided the resource curse through institutional discipline"],
    negativeImpacts: ["Economy remains heavily dependent on diamonds", "Inequality persists despite aggregate wealth gains", "Diversification has been slow"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "mixed",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "Rapid GDP growth and public investment from diamond revenues",
    longTerm: "Sustained middle-income status but vulnerability to commodity prices",
    stakeholders: [
      { group: "Botswana general population", effect: "wins" },
      { group: "De Beers", effect: "wins" },
      { group: "Rural and San communities", effect: "mixed" },
      { group: "Future generations", effect: "mixed" }
    ]
  },
  {
    domain: "Economy", country: "Global", region: "Global",
    title: "IMF SDR Allocation (2021)",
    outcome: "success",
    keywords: ["economy", "finance", "recovery", "global", "currency", "debt", "imf", "reserve"],
    lesson: "Emergency economic tools work best when deployed quickly and targeted at the most vulnerable economies.",
    positiveImpacts: ["Historic $650B allocation provided liquidity during COVID", "Helped low-income countries avoid debt default", "Largest SDR issuance in IMF history"],
    negativeImpacts: ["Rich countries received lion's share proportional to IMF quotas", "Did not reach poorest countries fast enough", "Created debate about global economic governance equity"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "neutral",
    shortTerm: "Immediate liquidity relief for many economies",
    longTerm: "Exposed need for reform of IMF quota system",
    stakeholders: [
      { group: "Low-income country governments", effect: "mixed" },
      { group: "High-income country governments", effect: "wins" },
      { group: "Global poor", effect: "mixed" },
      { group: "International financial institutions", effect: "wins" }
    ]
  },
  {
    domain: "Housing", country: "South Africa", region: "Africa",
    title: "South Africa's RDP Housing Programme (1994)",
    outcome: "mixed",
    keywords: ["housing", "home", "shelter", "urban", "poor", "construction", "rdp", "apartheid"],
    lesson: "Large-scale housing programmes risk trading quantity for quality — design and location matter as much as numbers.",
    positiveImpacts: ["Over 3 million housing units delivered to low-income families", "Landmark post-apartheid commitment fulfilled", "Reduced homelessness significantly"],
    negativeImpacts: ["Poor construction quality in many units", "Urban peripheralization reinforced spatial apartheid", "Beneficiaries cut off from jobs and services"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "negative",
    politicalImpact: "positive", genderImpact: "mixed",
    shortTerm: "Rapid delivery of housing units and political goodwill",
    longTerm: "Persistent spatial inequality and housing quality failures",
    stakeholders: [
      { group: "Low-income families", effect: "mixed" },
      { group: "Construction companies", effect: "wins" },
      { group: "ANC government", effect: "wins" },
      { group: "Urban poor in peripheral areas", effect: "mixed" }
    ]
  },
  {
    domain: "Housing", country: "Global", region: "Global",
    title: "UN-Habitat New Urban Agenda (2016)",
    outcome: "ongoing",
    keywords: ["housing", "urban", "city", "affordable", "infrastructure", "sustainable", "habitat", "settlement"],
    lesson: "Global urban frameworks need strong local implementation capacity to move from commitment to delivery.",
    positiveImpacts: ["193 countries committed to sustainable urban development", "Integrated affordable housing into global development framework", "Influenced national housing legislation in many countries"],
    negativeImpacts: ["Non-binding nature limits accountability", "Urban inequality has continued to rise since 2016", "Implementation heavily dependent on local capacity"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "positive",
    politicalImpact: "positive", genderImpact: "mixed",
    shortTerm: "Global political commitment without binding enforcement",
    longTerm: "Gradual influence on national housing policies",
    stakeholders: [
      { group: "Urban poor", effect: "mixed" },
      { group: "Local governments", effect: "wins" },
      { group: "Real estate developers", effect: "mixed" },
      { group: "Women in informal settlements", effect: "mixed" }
    ]
  },
  {
    domain: "Energy", country: "Morocco", region: "Africa",
    title: "Morocco's Noor Solar Complex (2016)",
    outcome: "success",
    keywords: ["energy", "solar", "renewable", "electricity", "climate", "power", "noor", "sahara"],
    lesson: "Bold renewable energy investment pays off when backed by long-term political commitment and strategic location.",
    positiveImpacts: ["One of world's largest concentrated solar power plants", "Morocco targeting 52% renewable energy by 2030", "Positions Morocco as Africa's leading renewable exporter"],
    negativeImpacts: ["High upfront cost required international financing", "Benefits concentrated in energy sector, limited local jobs", "Land use displacement of some desert communities"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "positive",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "Significant renewable capacity added",
    longTerm: "Model for African energy leapfrogging fossil fuels",
    stakeholders: [
      { group: "Moroccan energy consumers", effect: "wins" },
      { group: "International climate investors", effect: "wins" },
      { group: "Fossil fuel interests", effect: "loses" },
      { group: "Desert communities", effect: "mixed" }
    ]
  },
  {
    domain: "Energy", country: "Global", region: "Global",
    title: "Global Renewables Pledge COP28 (2023)",
    outcome: "ongoing",
    keywords: ["energy", "renewable", "cop28", "climate", "solar", "wind", "pledge", "capacity"],
    lesson: "Pledges without financing mechanisms and technology transfer remain aspirational for developing nations.",
    positiveImpacts: ["130+ countries committed to triple renewable capacity by 2030", "Reshaping global energy investment flows", "Strong political momentum for clean energy transition"],
    negativeImpacts: ["Developing countries lack financing to meet targets", "No binding enforcement mechanism", "Technology transfer commitments remain weak"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "positive",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "Political commitment without near-term structural change",
    longTerm: "Could reshape global energy mix if financing follows",
    stakeholders: [
      { group: "Renewable energy industry", effect: "wins" },
      { group: "Fossil fuel industry", effect: "loses" },
      { group: "Developing countries", effect: "mixed" },
      { group: "Future generations", effect: "wins" }
    ]
  },
  {
    domain: "Trade", country: "Africa", region: "Africa",
    title: "AfCFTA (2021)",
    outcome: "ongoing",
    keywords: ["trade", "africa", "market", "tariff", "economic", "integration", "afcfta", "continental"],
    lesson: "Continental trade integration requires harmonizing regulations across diverse institutional contexts.",
    positiveImpacts: ["World's largest free trade area by number of countries", "Aims to eliminate tariffs on 90% of goods", "Could boost intra-African trade significantly"],
    negativeImpacts: ["Implementation has been slow and uneven", "Weaker economies risk being flooded by stronger ones", "Non-tariff barriers remain major obstacle"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "mixed",
    shortTerm: "Agreement in place but limited early trade flows",
    longTerm: "Transformative potential for African economic integration",
    stakeholders: [
      { group: "African businesses", effect: "mixed" },
      { group: "Consumers", effect: "wins" },
      { group: "Weaker economies", effect: "mixed" },
      { group: "External trading partners", effect: "mixed" }
    ]
  },
  {
    domain: "Trade", country: "Global", region: "Global",
    title: "WTO Trade Facilitation Agreement (2017)",
    outcome: "success",
    keywords: ["trade", "wto", "customs", "facilitation", "global", "tariff", "multilateral", "agreement"],
    lesson: "Streamlining procedures delivers bigger gains for developing countries than tariff cuts alone.",
    positiveImpacts: ["First multilateral deal under WTO since its founding", "Estimated to reduce global trade costs by 14.3%", "Biggest gains in developing nations"],
    negativeImpacts: ["Requires costly customs modernization that poor countries struggle to fund", "Benefits skewed toward countries with existing infrastructure", "Implementation timelines vary widely"],
    economicImpact: "positive", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "neutral",
    shortTerm: "Gradual customs modernization across member states",
    longTerm: "Significant long-term trade cost reduction globally",
    stakeholders: [
      { group: "Exporting businesses", effect: "wins" },
      { group: "Developing country governments", effect: "mixed" },
      { group: "Customs officials", effect: "mixed" },
      { group: "Small traders", effect: "wins" }
    ]
  },
  {
    domain: "Labor", country: "South Africa", region: "Africa",
    title: "South Africa's Employment Equity Act (1998)",
    outcome: "mixed",
    keywords: ["labor", "employment", "equity", "discrimination", "workplace", "affirmative", "apartheid", "transformation"],
    lesson: "Affirmative action policies require ongoing monitoring and enforcement to achieve lasting structural change.",
    positiveImpacts: ["Most comprehensive affirmative action labor policy in Africa", "Increased representation of Black South Africans in management", "Established legal framework for workplace equity"],
    negativeImpacts: ["Still contested in courts decades later", "Implementation varies widely across sectors", "Has not resolved deep wage inequality"],
    economicImpact: "mixed", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "positive",
    shortTerm: "Legal framework established with uneven early implementation",
    longTerm: "Gradual but incomplete transformation of workplace demographics",
    stakeholders: [
      { group: "Black South African workers", effect: "wins" },
      { group: "Women in workplace", effect: "wins" },
      { group: "White-owned businesses", effect: "mixed" },
      { group: "Labor courts", effect: "mixed" }
    ]
  },
  {
    domain: "Labor", country: "Global", region: "Global",
    title: "ILO Decent Work Agenda (1999)",
    outcome: "ongoing",
    keywords: ["labor", "work", "ilo", "employment", "rights", "social", "protection", "decent"],
    lesson: "Rights-based labor frameworks gain traction when linked to concrete national legislation reform.",
    positiveImpacts: ["Integrated into UN SDG 8 on decent work", "Influenced labor legislation in 180+ countries", "Promoted social protection floors globally"],
    negativeImpacts: ["Informal workers remain largely outside its reach", "Enforcement depends entirely on national political will", "Progress slowest in poorest countries"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "positive",
    shortTerm: "Normative framework established",
    longTerm: "Gradual improvement in formal labor standards globally",
    stakeholders: [
      { group: "Formal sector workers", effect: "wins" },
      { group: "Informal workers", effect: "mixed" },
      { group: "Women workers", effect: "wins" },
      { group: "Employers", effect: "mixed" }
    ]
  },
  {
    domain: "Immigration", country: "Uganda", region: "Africa",
    title: "Uganda's Refugee Policy (ongoing)",
    outcome: "success",
    keywords: ["refugee", "migration", "asylum", "integration", "displacement", "immigration", "uganda", "self-reliance"],
    lesson: "Self-reliance refugee models outperform camp containment when backed by land access and economic rights.",
    positiveImpacts: ["1.5 million refugees given right to work and move freely", "Most progressive refugee policy in Africa", "Economic integration reduces long-term aid dependency"],
    negativeImpacts: ["Strain on local host community resources and land", "Donor funding has not kept pace with refugee numbers", "Host community tensions have increased"],
    economicImpact: "mixed", socialEquityImpact: "positive", environmentalImpact: "mixed",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Immediate rights granted to refugees",
    longTerm: "Model for global refugee policy but requires sustained funding",
    stakeholders: [
      { group: "Refugees", effect: "wins" },
      { group: "Host communities", effect: "mixed" },
      { group: "Ugandan government", effect: "mixed" },
      { group: "International donors", effect: "wins" }
    ]
  },
  {
    domain: "Immigration", country: "Global", region: "Global",
    title: "UN Global Compact for Refugees (2018)",
    outcome: "ongoing",
    keywords: ["refugee", "migration", "global", "burden", "sharing", "displacement", "compact", "protection"],
    lesson: "Non-binding global compacts raise standards but require domestic champions to drive real implementation.",
    positiveImpacts: ["181 countries committed to burden-sharing for refugees", "Shift from purely humanitarian to development-oriented responses", "Elevated long-term solutions over temporary camps"],
    negativeImpacts: ["Non-binding nature severely limits accountability", "Rich countries continue to restrict asylum seekers", "Funding pledges far below commitments"],
    economicImpact: "neutral", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "mixed",
    shortTerm: "Political agreement but limited near-term change",
    longTerm: "Gradual norm shift in refugee governance",
    stakeholders: [
      { group: "Refugees globally", effect: "mixed" },
      { group: "Host countries", effect: "mixed" },
      { group: "High-income countries", effect: "mixed" },
      { group: "UNHCR", effect: "wins" }
    ]
  },
  {
    domain: "Justice", country: "Rwanda", region: "Africa",
    title: "Rwanda's Gacaca Courts (2001-2012)",
    outcome: "mixed",
    keywords: ["justice", "court", "crime", "community", "accountability", "reconciliation", "genocide", "gacaca"],
    lesson: "Community justice mechanisms can process high volumes of cases but must carefully manage trauma and fairness.",
    positiveImpacts: ["Nearly 2 million genocide cases tried", "Largest transitional justice exercise in history", "Enabled community-level truth and reconciliation"],
    negativeImpacts: ["Limitations around survivor trauma and re-traumatization", "Concerns about fairness and due process", "Some perpetrators received light sentences"],
    economicImpact: "neutral", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "mixed",
    shortTerm: "Rapid processing of massive case backlog",
    longTerm: "Mixed legacy — reconciliation gains offset by justice concerns",
    stakeholders: [
      { group: "Genocide survivors", effect: "mixed" },
      { group: "Accused perpetrators", effect: "mixed" },
      { group: "Rwandan government", effect: "wins" },
      { group: "International justice community", effect: "mixed" }
    ]
  },
  {
    domain: "Justice", country: "Global", region: "Global",
    title: "Rome Statute and ICC (2002)",
    outcome: "mixed",
    keywords: ["justice", "icc", "rome", "international", "criminal", "war", "genocide", "accountability"],
    lesson: "International criminal accountability requires both universal jurisdiction and political independence to be effective.",
    positiveImpacts: ["First permanent court for genocide and war crimes", "124 state parties committed to international accountability", "Deterrent effect on some potential perpetrators"],
    negativeImpacts: ["Disproportionate focus on African leaders criticized", "Major powers including US and China not members", "Slow and expensive prosecutions"],
    economicImpact: "neutral", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "mixed",
    shortTerm: "Landmark institution established",
    longTerm: "Limited effectiveness without universal jurisdiction",
    stakeholders: [
      { group: "Victims of atrocities", effect: "mixed" },
      { group: "African heads of state", effect: "loses" },
      { group: "Western governments", effect: "wins" },
      { group: "Civil society", effect: "mixed" }
    ]
  },
  {
    domain: "Social Welfare", country: "Kenya", region: "Africa",
    title: "Kenya's GiveDirectly UBI Pilot (2016)",
    outcome: "success",
    keywords: ["welfare", "cash", "poverty", "income", "transfer", "basic", "ubi", "unconditional"],
    lesson: "Unconditional cash transfers improve wellbeing significantly — trust in beneficiaries drives better outcomes.",
    positiveImpacts: ["Significant improvements in food security and assets", "Improved psychological wellbeing of recipients", "Influencing UBI policy debates globally"],
    negativeImpacts: ["Scale and cost limit full national replication", "Some local price inflation observed in recipient areas", "Political resistance to unconditional transfers"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "positive",
    shortTerm: "Immediate wellbeing improvements for 20,000+ recipients",
    longTerm: "Strongest evidence base globally for UBI effectiveness",
    stakeholders: [
      { group: "Rural poor recipients", effect: "wins" },
      { group: "Women recipients", effect: "wins" },
      { group: "Local businesses", effect: "wins" },
      { group: "Traditional aid organisations", effect: "mixed" }
    ]
  },
  {
    domain: "Social Welfare", country: "Global", region: "Global",
    title: "UN SDG 1 — No Poverty (2015)",
    outcome: "mixed",
    keywords: ["poverty", "welfare", "sdg", "social", "protection", "cash", "transfer", "global"],
    lesson: "Global anti-poverty goals accelerate progress when backed by concrete national social protection systems.",
    positiveImpacts: ["Organized framework for global anti-poverty policy", "Spurred expansion of cash transfers in many countries", "Reduced extreme poverty in many regions"],
    negativeImpacts: ["Progress reversed by COVID-19 and climate shocks", "Poorest countries remain furthest from targets", "2030 deadline will be missed for many indicators"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Political commitment and measurement framework established",
    longTerm: "Uneven progress — significant gains in some regions, stagnation in others",
    stakeholders: [
      { group: "Extreme poor globally", effect: "mixed" },
      { group: "Women and girls", effect: "mixed" },
      { group: "National governments", effect: "mixed" },
      { group: "International donors", effect: "mixed" }
    ]
  },
  {
    domain: "Public Health", country: "Africa", region: "Africa",
    title: "Africa CDC Establishment (2017)",
    outcome: "success",
    keywords: ["health", "disease", "pandemic", "surveillance", "africa", "public", "cdc", "outbreak"],
    lesson: "Continental health institutions need sustained investment before crises hit to be effective during them.",
    positiveImpacts: ["First continental public health agency for Africa", "Played critical coordination role during COVID-19", "Built Africa's disease surveillance capacity"],
    negativeImpacts: ["Underfunded relative to mandate", "COVID-19 exposed over-reliance on external vaccine supply chains", "Uneven capacity across member states"],
    economicImpact: "positive", socialEquityImpact: "positive", environmentalImpact: "neutral",
    politicalImpact: "positive", genderImpact: "positive",
    shortTerm: "Institution established with initial credibility",
    longTerm: "Growing authority but requires sustained AU political and financial support",
    stakeholders: [
      { group: "African populations", effect: "wins" },
      { group: "African Union", effect: "wins" },
      { group: "External health donors", effect: "mixed" },
      { group: "National health ministries", effect: "wins" }
    ]
  },
  {
    domain: "Public Health", country: "Global", region: "Global",
    title: "WHO International Health Regulations (2005)",
    outcome: "mixed",
    keywords: ["health", "who", "pandemic", "regulations", "international", "emergency", "outbreak", "ihr"],
    lesson: "Health security frameworks must be matched by genuine national implementation capacity to function in crises.",
    positiveImpacts: ["196 countries legally bound to report health emergencies", "Created global early warning architecture", "Informed COVID-19 international response coordination"],
    negativeImpacts: ["COVID-19 severely tested and exposed limitations", "Countries withheld information fearing economic consequences", "Enforcement mechanisms remain weak"],
    economicImpact: "mixed", socialEquityImpact: "mixed", environmentalImpact: "neutral",
    politicalImpact: "mixed", genderImpact: "neutral",
    shortTerm: "Framework established but unevenly implemented",
    longTerm: "Reform negotiations underway for stronger post-COVID framework",
    stakeholders: [
      { group: "Global populations", effect: "mixed" },
      { group: "WHO", effect: "mixed" },
      { group: "National governments", effect: "mixed" },
      { group: "Pharmaceutical industry", effect: "wins" }
    ]
  },
];