import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "@/components/SubHero";
import { technologies } from "@/lib/siteData";

export default function TechnologyPage({ params }) {
  const tech = technologies[params.slug];
  if (!tech) notFound();
  return <>
    <SubHero eyebrow="기술력" title={tech.title} description="제품이 적용되는 극한 환경과 품질 검증 체계를 기술 중심으로 설명합니다." />
    <section className="page-shell"><div className="container">
      <div className="technology-hero-panel"><div><span className="eyebrow light">{tech.eyebrow}</span><h2>{tech.headline}</h2><p>{tech.intro}</p></div><div className="technology-metric-grid">{tech.metrics.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></div>
      <div className="tech-point-grid">{tech.points.map(([title, desc], index) => <div className="tech-point-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></div>)}</div>
    </div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow light">Related Solution</span><strong>기술 조건과 제품을 함께 확인하세요.</strong><p>관련 제품 페이지와 프로젝트 문의로 바로 연결할 수 있습니다.</p></div><div className="cta-actions"><Link className="btn btn-green" href="/products">제품 보기</Link><Link className="btn btn-outline" href="/support/contact">문의하기</Link></div></div></section>
  </>;
}
