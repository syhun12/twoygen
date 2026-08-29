export const navGroups = [
  {
    label: "회사소개",
    href: "/company/greeting",
    description: "기업의 신뢰와 기술 성장의 기록",
    items: [
      { label: "인사말", href: "/company/greeting" },
      { label: "주요연혁", href: "/company/history" },
      { label: "인증·특허", href: "/company/certification" },
      { label: "오시는 길", href: "/company/location" },
    ],
  },
  {
    label: "사업분야",
    href: "/business",
    description: "Valve · Actuator · Engineering · R&D",
    items: [
      { label: "Valve", href: "/business#valve" },
      { label: "Actuator", href: "/business#actuator" },
      { label: "Engineering Service", href: "/business#engineering" },
      { label: "R&D", href: "/business#rnd" },
    ],
  },
  {
    label: "제품소개",
    href: "/products",
    description: "극한 환경을 위한 제품 포트폴리오",
    items: [
      { label: "Cryogenic Valve", href: "/products/cryogenic" },
      { label: "Special Valve for Gas", href: "/products/special-gas" },
      { label: "Liquid Hydrogen Valve", href: "/products/liquid-hydrogen" },
      { label: "High Temp. & High Pr.", href: "/products/high-temp" },
      { label: "Back Wash Filter", href: "/products/back-wash-filter" },
    ],
  },
  {
    label: "기술력",
    href: "/technology/cryogenic",
    description: "극저온·초고압·품질 검증 기술",
    items: [
      { label: "극저온·초고압 기술", href: "/technology/cryogenic" },
      { label: "설계개발·엔지니어링", href: "/technology/engineering" },
      { label: "품질·시험·인증 체계", href: "/technology/quality" },
    ],
  },
  {
    label: "납품실적",
    href: "/performance",
    description: "산업 현장에서 검증된 프로젝트",
    items: [
      { label: "주요 프로젝트", href: "/performance" },
      { label: "LNG / 가스", href: "/performance#projects" },
      { label: "수소 / 암모니아", href: "/performance#projects" },
      { label: "수출·공급 이력", href: "/performance#projects" },
    ],
  },
  {
    label: "고객지원",
    href: "/support/notice",
    description: "공지·자료·기술 상담을 빠르게",
    items: [
      { label: "공지사항", href: "/support/notice" },
      { label: "자료실", href: "/support/library" },
      { label: "온라인 문의", href: "/support/contact" },
      { label: "오시는 길", href: "/company/location" },
    ],
  },
];

export const businessAreas = [
  { id: "valve", no: "01", title: "Valve", copy: "극저온 및 고압 가스용 특수 밸브 설계·제작", detail: "LNG · LN2 · LH2 · Methanol · Ammonia · H₂ · NG", icon: "V" },
  { id: "actuator", no: "02", title: "Actuator", copy: "정밀 제어를 위한 자동제어 밸브 및 구동 솔루션", detail: "Pneumatic · Electric · On/Off · Control", icon: "A" },
  { id: "engineering", no: "03", title: "Technical Support & Engineering Service", copy: "요구조건 검토부터 설계·제작·시험까지 고객 맞춤형 기술지원", detail: "Design Review · Selection · Drawing · Technical Support", icon: "E" },
  { id: "rnd", no: "04", title: "R&D", copy: "차세대 에너지 환경을 위한 극한 조건 밸브 기술 개발", detail: "Cryogenic · Hydrogen · Ammonia · High Pressure", icon: "R" },
];

export const products = [
  {
    slug: "cryogenic",
    title: "Cryogenic Valve",
    kicker: "LNG · LN2",
    temperature: "-196℃",
    pressure: "350 bar",
    size: "1/2” – 16”",
    standard: "ASME B16.34 · ISO 21011 · KGS AA335",
    description: "LNG, LN2 등 극저온 유체 환경에서 안정적인 밀봉과 작동 성능을 제공하는 밸브 제품군입니다.",
    accent: "cyan",
    specs: [["Valve Type", "Globe & Angle"], ["Body Rating", "ASME B16.34, #150–#2500"], ["Body Material", "A182-F316(L), A351-CF8M"], ["Trim Material", "STS316, STS410, Special Alloy"], ["Seat Leakage", "Soft Seat / ANSI Class VI / Metal Seat"]],
  },
  {
    slug: "special-gas",
    title: "Special Valve for Gas",
    kicker: "H₂ · NG · Methanol · Ammonia",
    temperature: "Gas Service",
    pressure: "1000 bar",
    size: "3/4” – 16”",
    standard: "ASME B16.34 · API 598 · KGS AA317",
    description: "수소·천연가스·메탄올·암모니아 등 다양한 가스 설비에 대응하는 고신뢰 특수 밸브입니다.",
    accent: "blue",
    specs: [["Application", "H₂ / NG / Methanol / Ammonia"], ["Maximum Pressure", "Up to 1000 bar for H₂ service"], ["Body Rating", "#150–#4500"], ["Test Standard", "API 598 / ISO 5208"], ["Control", "Manual / Pneumatic / Electric"]],
  },
  {
    slug: "liquid-hydrogen",
    title: "Cryogenic Valve for Liquid Hydrogen",
    kicker: "LH₂",
    temperature: "-253℃",
    pressure: "Special",
    size: "1” – 3”",
    standard: "KR10-2509774 · ISO 21011 · KGS AA335",
    description: "액화수소의 초극저온 환경을 고려한 일체형 Body, Bellows Seal, Vacuum Jacket 구조를 적용합니다.",
    accent: "violet",
    specs: [["Service", "Liquid Hydrogen (LH₂)"], ["Temperature", "Down to -253℃"], ["Body / Bonnet", "F316(L)"], ["Design Feature", "Integral Body / Vacuum Jacket"], ["Patent", "KR10-2509774"]],
  },
  {
    slug: "high-temp",
    title: "High Temp. & High Pressure Control Valve",
    kicker: "Steam · Plant",
    temperature: "600℃",
    pressure: "500 bar",
    size: "1/2” – 20”",
    standard: "ASME B16.34 · KEPIC MGG · API 598",
    description: "발전·플랜트의 고온 증기 및 고압 공정 조건에 대응하도록 설계된 제어밸브 제품군입니다.",
    accent: "green",
    specs: [["Service", "Steam / High Temperature Process"], ["Temperature", "-40℃ – 600℃"], ["Pressure", "Up to 500 bar"], ["Rating", "#150–#4500 / JIS 10K·20K"], ["Control", "Modulating / On-Off"]],
  },
  {
    slug: "back-wash-filter",
    title: "Back Wash Filter",
    kicker: "Sea Water · Fresh Water",
    temperature: "Auto Clean",
    pressure: "Design Based",
    size: "Custom",
    standard: "ASME Sec. III / VIII · API 598",
    description: "운전 중 자동 역세척으로 이물질을 제거하며 해수·담수 계통의 안정적인 유량 확보를 지원합니다.",
    accent: "orange",
    specs: [["Fluid", "Sea Water / Fresh Water"], ["Operation", "Automatic Back Washing"], ["Body Material", "Project Specification"], ["Mesh", "Project-specific micron size"], ["Data", "Flow / ΔP / Backwash Time"]],
  },
];

export const projects = [
  { slug: "lng-bunkering", year: "2024", country: "대한민국", title: "LNG 벙커링 설비 초저온 밸브 공급", product: "Cryogenic Valve", summary: "LNG 이송라인의 극저온 조건에 대응하는 밸브 설계 및 공급", tag: "LNG / GAS" },
  { slug: "liquid-hydrogen", year: "2025", country: "대한민국", title: "액화수소 설비용 극저온 제어밸브 공급", product: "Liquid Hydrogen Valve", summary: "-253℃ 액화수소 환경을 고려한 극저온 밸브 적용", tag: "HYDROGEN" },
  { slug: "india-nuclear-filter", year: "2025", country: "인도", title: "인도 원전용 Back Wash Filter 공급", product: "Back Wash Filter", summary: "원전 보조계통용 자동 역세척 여과장치 설계·제작", tag: "EXPORT" },
  { slug: "high-pressure-plant", year: "2024", country: "대한민국", title: "고온·고압 플랜트 제어밸브 공급", product: "High Temp. & High Pressure Control Valve", summary: "고온 증기 및 고압 라인 조건에 대응하는 제어밸브 공급", tag: "PLANT" },
  { slug: "bv-cryogenic", year: "2023", country: "대한민국", title: "BV 인증 대응 초저온 밸브 제작", product: "Cryogenic Valve", summary: "선박 및 가스 설비 적용을 위한 초저온 밸브 제작·시험", tag: "MARINE" },
  { slug: "hydrogen-control", year: "2024", country: "대한민국", title: "수소 생산·공급설비 자동제어 밸브 개발", product: "Special Valve for Gas", summary: "고압 수소 공정의 제어 안정성과 기밀성을 고려한 밸브 개발", tag: "R&D" },
];

export const technologies = {
  cryogenic: {
    eyebrow: "Technology 01",
    title: "극저온·초고압 기술",
    headline: "Extreme Environment Valve Technology",
    intro: "-196℃ LNG/LN2부터 -253℃ LH₂, 최대 1000bar 수소가스까지 극한 운전 조건에서도 안정적인 작동을 목표로 설계합니다.",
    metrics: [["-253℃", "Liquid Hydrogen"], ["1000 bar", "Hydrogen Gas"], ["500 bar", "High Pressure"], ["600℃", "High Temperature"]],
    points: [["Cryogenic Design", "열전달 최소화와 장축 구조를 고려한 극저온 설계"], ["Leak Prevention", "Bellows Seal, 양방향 밀봉, 일체형 Body 구조"], ["Vacuum Insulation", "Vacuum Jacket 적용을 통한 외부 열 유입 저감"], ["Material Engineering", "사용 유체·온도·압력에 맞춘 재질 및 Trim 선정"]],
  },
  engineering: {
    eyebrow: "Technology 02",
    title: "설계개발·엔지니어링",
    headline: "From Requirement to Reliable Operation",
    intro: "유체, 온도, 압력, 규격, 연결방식과 현장 조건을 검토하여 제품 선정부터 설계·시험·기술지원까지 연결합니다.",
    metrics: [["01", "Requirement"], ["02", "Engineering"], ["03", "Manufacturing"], ["04", "Testing"]],
    points: [["요구조건 검토", "P&ID, Datasheet, 운전 조건 및 적용 규격 검토"], ["설계·도면", "고객 요구에 맞춘 제품 선정 및 도면 검토"], ["제작·조립", "공정 및 품질 기준에 따른 제작과 조립"], ["시험·지원", "성능시험, 누설시험 및 납품 후 기술지원"]],
  },
  quality: {
    eyebrow: "Technology 03",
    title: "품질·시험·인증 체계",
    headline: "Verified Quality for Critical Applications",
    intro: "국제 표준과 프로젝트 요구조건을 기준으로 설계·제작·시험 이력을 관리하고 제품별 품질 검증 체계를 운영합니다.",
    metrics: [["ISO 9001", "Quality System"], ["API 598", "Valve Inspection"], ["ISO 5208", "Pressure Testing"], ["KGS", "Gas Equipment"]],
    points: [["Design Standard", "ASME B16.34, ISO 21011, BS 6364 등 적용"], ["Performance Test", "압력·누설·작동 성능 시험 및 검사"], ["Cryogenic Test", "극저온 조건을 고려한 성능 검증"], ["Traceability", "재질, 제작, 검사 데이터 추적 및 문서화"]],
  },
};
