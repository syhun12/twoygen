import Link from "next/link";
import SubHero from "@/components/SubHero";
import { projects } from "@/lib/siteData";

export default function PerformancePage() {
  return <>
    <SubHero eyebrow="납품실적" title="Project Reference" description="다양한 산업 현장에 적용된 주요 공급·개발 프로젝트를 간결하게 제공합니다." />
    <section className="page-shell soft" id="projects"><div className="container">
      <div className="content-title"><span className="eyebrow">Reference</span><h2>주요 프로젝트</h2><p>복잡한 분류 정보는 줄이고 프로젝트명, 연도, 국가, 핵심 내용 위주로 확인할 수 있도록 구성했습니다.</p></div>
      <div className="filter-row"><span className="filter-chip active">전체</span><span className="filter-chip">2025</span><span className="filter-chip">2024</span><span className="filter-chip">2023</span></div>
      <div className="project-grid">{projects.map((project) => <Link className="project-card" href={`/performance/${project.slug}`} key={project.slug}><div className="project-image"></div><div className="project-body"><div className="project-meta"><span>{project.year}</span><span>{project.country}</span></div><h3>{project.title}</h3><p>{project.summary}</p></div></Link>)}</div>
    </div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow light">Reference Inquiry</span><strong>유사 프로젝트 적용 가능성을 문의해보세요.</strong><p>프로젝트 상세는 그누보드 글쓰기 운영을 고려해 이미지 상단 + 텍스트 하단의 단순 구조로 설계했습니다.</p></div><div className="cta-actions"><Link className="btn btn-green" href="/support/contact">프로젝트 문의</Link></div></div></section>
  </>;
}
