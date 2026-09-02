import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "@/components/SubHero";
import PlaceholderImage from "@/components/PlaceholderImage";

const companyTabs = [
  ["greeting", "인사말"], ["history", "주요연혁"], ["certification", "인증·특허"], ["location", "오시는 길"],
];

const history = [
  { year: "2025", events: [["03", "해외 프로젝트 대응 및 공급 역량 확대"], ["06", "액화수소 설비용 극저온 제어밸브 공급"], ["09", "차세대 에너지용 밸브 기술개발 고도화"]] },
  { year: "2024", events: [["05", "수소가스 생산·공급설비용 자동제어 밸브 개발"], ["08", "초저온 밸브 관련 등록 및 품질체계 확대"], ["10", "LNG 벙커링 설비용 밸브 공급"]] },
  { year: "2023", events: [["03", "소재·부품·장비 전문기업 확인 및 특허 등록"], ["05", "본사 및 공장 확장 이전"], ["09", "극저온 가스 설비용 밸브 개발·공급 확대"]] },
  { year: "2020–2022", events: [["01", "법인 설립 및 가스 밸브 사업 기반 구축"], ["07", "LNG 및 수소 대응 밸브 제품 개발"], ["12", "산업용 밸브 설계·제작·시험 체계 구축"]] },
];

const certificates = [
  ["ISO 9001", "품질경영시스템"], ["Venture Company", "벤처기업확인"], ["Material · Parts · Equipment", "소재·부품·장비 전문기업"], ["KGS Registration", "가스용품·특정설비 관련 등록"], ["KR10-2295871", "가스용 밸브 양방향 밀봉장치"], ["KR10-2509774", "극저온 액화가스용 밸브"],
];

function Tabs({ current }) {
  return <div className="filter-row">{companyTabs.map(([slug, label]) => <Link key={slug} className={`filter-chip ${current === slug ? "active" : ""}`} href={`/company/${slug}`}>{label}</Link>)}</div>;
}

export default function CompanyPage({ params }) {
  const slug = params.slug;
  if (!companyTabs.some(([key]) => key === slug)) notFound();

  if (slug === "greeting") {
    return <>
      <SubHero eyebrow="회사소개" title="인사말" description="기술과 신뢰로, 지속가능한 에너지의 미래를 열어갑니다." />
      <section className="page-shell"><div className="container"><Tabs current={slug} /><div className="content-grid">
        <div className="prose"><span className="eyebrow">About TWOYGEN</span><h2>에너지 산업의 내일을 설계하는 기업, 투와이젠</h2><p>안녕하십니까. 투와이젠은 극저온·고압 가스 밸브와 엔지니어링 솔루션을 중심으로 산업 현장의 요구조건에 대응하는 기술 중심 기업입니다.</p><p>LNG, LN₂, LH₂, Methanol, Ammonia 등 다양한 가스 환경에서 안전과 성능을 우선으로 하며, 제품 선정부터 설계·제작·시험·기술지원까지 고객의 프로젝트에 필요한 범위를 함께 검토합니다.</p><p>앞으로도 기술 혁신과 품질 향상을 통해 신뢰할 수 있는 에너지 산업 파트너로 성장하겠습니다.</p><div className="signature"><strong>대표이사</strong><em>TWOYGEN</em></div></div>
        <PlaceholderImage title="회사 소개 이미지" description="기업 소개 비주얼 등록 예정" variant="tall" />
      </div><div className="stat-row"><div className="stat"><strong>2020</strong><span>설립연도</span></div><div className="stat"><strong>-253℃</strong><span>극저온 대응</span></div><div className="stat"><strong>1000 bar</strong><span>수소가스 대응</span></div><div className="stat"><strong>Engineering</strong><span>맞춤형 기술지원</span></div></div></div></section>
    </>;
  }

  if (slug === "history") {
    return <><SubHero eyebrow="회사소개" title="주요연혁" description="기술 혁신과 도전의 역사를 이어갑니다." /><section className="page-shell"><div className="container"><Tabs current={slug} /><div className="content-title"><span className="eyebrow">History</span><h2>Technical Innovation Timeline</h2><p>법인 설립 이후 기술개발, 특허, 인증, 공급 프로젝트를 중심으로 주요 이력을 정리했습니다.</p></div><div className="timeline">{history.map((item) => <div className="timeline-row" key={item.year}><div className="timeline-year">{item.year}</div><div className="timeline-events">{item.events.map(([month, text]) => <div className="timeline-event" key={month + text}><span>{month}</span><p>{text}</p></div>)}</div></div>)}</div></div></section></>;
  }

  if (slug === "certification") {
    return <><SubHero eyebrow="회사소개" title="인증·특허" description="검증된 기술력과 품질로 신뢰를 약속합니다." /><section className="page-shell soft"><div className="container"><Tabs current={slug} /><div className="content-title"><span className="eyebrow">Certification & Patent</span><h2>기술의 근거를 보여주는<br />인증과 지식재산</h2><p>대외 공개용 UI 기준의 샘플 카드이며, 실제 구축 시 관리자 등록 이미지와 파일로 교체할 수 있습니다.</p></div><div className="cert-grid">{certificates.map(([title, desc]) => <div className="cert-card" key={title}><PlaceholderImage title="인증서 이미지" description="인증·특허 이미지 등록 예정" variant="compact" /><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section></>;
  }

  return <><SubHero eyebrow="회사소개" title="오시는 길" description="고객과의 만남을 소중히 생각합니다." /><section className="page-shell"><div className="container"><Tabs current={slug} /><div className="map-shell"><div className="location-info"><span className="eyebrow">Contact Information</span><div className="location-item"><small>ADDRESS</small><strong>부산광역시 강서구 녹산산단382로 25번길 73</strong></div><div className="location-item"><small>TEL</small><strong>051-832-3630</strong></div><div className="location-item"><small>FAX</small><strong>051-832-3631</strong></div><div className="location-item"><small>E-MAIL</small><strong>twoygen@twoygen.com</strong></div><div style={{marginTop:24}}><Link className="btn btn-primary" href="/support/contact">문의하기</Link></div></div><div className="map-placeholder"><div className="map-pin"><span>TWOYGEN</span></div></div></div></div></section></>;
}
