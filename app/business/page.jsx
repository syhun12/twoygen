import Link from "next/link";
import SubHero from "@/components/SubHero";
import { businessAreas } from "@/lib/siteData";

export default function BusinessPage() {
  return <>
    <SubHero eyebrow="사업분야" title="Business Area" description="제품 중심이 아니라 고객의 운전 조건과 기술 대응 범위를 기준으로 사업영역을 설명합니다." />
    <section className="page-shell">
      <div className="container">
        <div className="content-title"><span className="eyebrow">What We Do</span><h2>설계·제작·제어·연구개발까지<br />하나의 흐름으로 연결합니다.</h2><p>투와이젠의 4대 사업영역은 제품과 기술서비스를 유기적으로 연결해 프로젝트 대응력을 높이는 데 초점을 둡니다.</p></div>
        <div className="business-grid">
          {businessAreas.map((item) => <article className="business-card" data-no={item.no} id={item.id} key={item.id}><div className="card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.copy}</p><p style={{marginTop:12, color:"#1268ad"}}>{item.detail}</p></article>)}
        </div>
      </div>
    </section>
    <section className="section soft"><div className="container content-grid"><div className="image-panel"></div><div className="prose"><span className="eyebrow">Engineering Workflow</span><h2>요구조건을 제품 사양으로 변환하는 엔지니어링</h2><p>유체 종류, 운전 온도와 압력, 연결 규격, 제어방식, 적용 표준을 검토한 뒤 적합한 제품과 설계 범위를 제안합니다.</p><p>필요 시 도면 검토, 재질 선정, 시험 조건, 현장 적용성까지 함께 검토하여 고객이 필요한 기술 정보를 명확하게 확인할 수 있도록 지원합니다.</p><Link className="btn btn-primary" href="/support/contact">프로젝트 상담하기</Link></div></div></section>
  </>;
}
