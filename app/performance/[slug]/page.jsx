import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "@/components/SubHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import { projects } from "@/lib/siteData";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default function PerformanceDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  return <>
    <SubHero eyebrow="납품실적" title="Project Detail" description="그누보드 게시글 편집 방식에 맞춘 단순 상세 레이아웃" />
    <section className="page-shell"><div className="container performance-detail">
      <div className="performance-cover"><PlaceholderImage title="프로젝트 대표 이미지" description="실적 이미지 등록 예정" variant="tall" /></div>
      <div className="performance-summary"><div className="performance-meta"><span>{project.year}</span><span>{project.country}</span></div><h2>{project.title}</h2><p>{project.summary}</p></div>
      <div className="article-body"><h3>프로젝트 개요</h3><p>본 화면은 실제 실적 게시물을 운영할 때 복잡한 2단 구성 없이 상단 대표 이미지와 하단 본문만으로 작성할 수 있도록 설계했습니다. 프로젝트의 공급 배경, 적용 조건, 제품 범위와 핵심 수행 내용을 일반 글쓰기 에디터로 입력하는 구조를 전제로 합니다.</p><h3>적용 제품</h3><p>{project.product} 제품군을 중심으로 프로젝트의 운전 조건과 요구 사양을 검토하여 적용한 사례입니다. 실제 공개 범위에 따라 제품명과 세부 사양은 관리자에서 조정할 수 있습니다.</p><h3>주요 내용</h3><p>요구조건 검토, 제품 선정, 제작 및 품질 확인, 납품 단계의 핵심 내용을 사진과 텍스트로 순차적으로 구성할 수 있습니다. 고객사·금액 등 민감하거나 관리가 어려운 항목은 기본 화면에서 제외했습니다.</p></div>
      <div style={{display:"flex", gap:10, borderTop:"1px solid #dde5ec", paddingTop:28}}><Link className="btn btn-primary" href="/performance">목록으로</Link><Link className="btn btn-light" href="/support/contact">관련 문의</Link></div>
    </div></section>
  </>;
}
