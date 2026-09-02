import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "@/components/SubHero";

const notices = [
  ["공지", "투와이젠 홈페이지 리뉴얼 및 서비스 오픈 안내", "일반", "2026.08.30", "258"],
  ["127", "2026년 하계 휴가 일정 안내", "일반", "2026.08.20", "186"],
  ["126", "품질경영시스템(ISO 9001) 인증 갱신 안내", "인증", "2026.08.16", "312"],
  ["125", "국제 전시회 참가 안내", "전시/행사", "2026.08.10", "421"],
  ["124", "협력사 등록 절차 및 제출 서류 안내", "일반", "2026.08.03", "153"],
  ["123", "개인정보처리방침 개정 안내", "일반", "2026.07.30", "209"],
  ["122", "2026년 품질 점검 완료 안내", "안내", "2026.07.25", "178"],
];

const library = [
  ["CATALOG", "TWOYGEN Product Catalog", "주요 밸브 및 Back Wash Filter 제품군 소개 자료"],
  ["BROCHURE", "Company Brochure", "기업 소개, 사업영역, 기술 역량을 정리한 브로슈어"],
  ["TECHNICAL DATA", "Cryogenic Valve Datasheet", "극저온 밸브 주요 사양 및 적용 기준 자료"],
  ["CERTIFICATE", "Quality & Certification", "공개 가능한 인증·품질 관련 자료 모음"],
  ["TECHNICAL DATA", "Liquid Hydrogen Valve", "LH₂ 환경 대응 기술 및 핵심 사양 자료"],
  ["BROCHURE", "Back Wash Filter Reference", "역세척 여과장치 제품 및 적용 사례 자료"],
];

function SupportTabs({ current }) {
  return <div className="filter-row"><Link className={`filter-chip ${current === "notice" ? "active" : ""}`} href="/support/notice">공지사항</Link><Link className={`filter-chip ${current === "library" ? "active" : ""}`} href="/support/library">자료실</Link><Link className={`filter-chip ${current === "contact" ? "active" : ""}`} href="/support/contact">온라인 문의</Link></div>;
}

export default function SupportPage({ params }) {
  const slug = params.slug;
  if (!["notice", "library", "contact"].includes(slug)) notFound();

  if (slug === "notice") return <><SubHero eyebrow="고객지원" title="공지사항" description="투와이젠의 새로운 소식과 공지사항을 확인하세요." /><section className="page-shell"><div className="container"><SupportTabs current={slug} /><div className="board-tools"><select className="select" defaultValue="all"><option value="all">전체 분류</option><option>일반</option><option>인증</option><option>전시/행사</option></select><input className="input" placeholder="제목 또는 내용을 입력하세요." /><button className="btn btn-primary" type="button">검색</button></div><div className="board"><div className="board-row header"><span>번호</span><span>제목</span><span>분류</span><span>등록일</span><span>조회수</span></div>{notices.map((item) => <div className="board-row" key={item[0] + item[1]}><span>{item[0] === "공지" ? <span className="notice-badge">공지</span> : item[0]}</span><span className="board-title">{item[1]}</span><span className="board-muted">{item[2]}</span><span className="board-muted">{item[3]}</span><span className="board-muted">{item[4]}</span></div>)}</div><div className="pagination"><span>‹</span><span className="active">1</span><span>2</span><span>3</span><span>›</span></div></div></section></>;

  if (slug === "library") return <><SubHero eyebrow="고객지원" title="자료실" description="카탈로그, 브로슈어, 기술자료 등 필요한 자료를 확인할 수 있습니다." /><section className="page-shell soft"><div className="container"><SupportTabs current={slug} /><div className="filter-row"><span className="filter-chip active">ALL</span><span className="filter-chip">CATALOG</span><span className="filter-chip">BROCHURE</span><span className="filter-chip">TECHNICAL DATA</span><span className="filter-chip">CERTIFICATE</span></div><div className="library-grid">{library.map(([type, title, desc]) => <article className="library-card" key={title}><div className="library-thumb">DOCUMENT PREVIEW</div><div className="library-body"><span className="library-label">{type}</span><h3>{title}</h3><p>{desc}</p><button className="btn btn-light" type="button">다운로드 ↓</button></div></article>)}</div></div></section></>;

  return <><SubHero eyebrow="고객지원" title="온라인 문의" description="제품 견적, 기술 상담, 자료 요청과 프로젝트 문의를 접수하는 화면입니다." /><section className="page-shell"><div className="container"><SupportTabs current={slug} /><div className="contact-layout"><div className="contact-form"><div className="content-title"><span className="eyebrow">Inquiry Form</span><h2>프로젝트 정보를 알려주세요.</h2><p>현재는 UI 프로토타입으로 제출 버튼은 실제 전송되지 않습니다.</p></div><div className="form-grid"><div className="form-field"><label>문의 유형 *</label><select className="select" defaultValue="product"><option value="product">제품 문의</option><option>기술 상담</option><option>견적 요청</option><option>자료 요청</option></select></div><div className="form-field"><label>회사명 *</label><input className="input" placeholder="회사명을 입력하세요." /></div><div className="form-field"><label>담당자명 *</label><input className="input" placeholder="담당자명" /></div><div className="form-field"><label>이메일 *</label><input className="input" placeholder="name@company.com" /></div><div className="form-field"><label>연락처</label><input className="input" placeholder="051-000-0000" /></div><div className="form-field"><label>관심 제품</label><select className="select" defaultValue="cryogenic"><option value="cryogenic">Cryogenic Valve</option><option>Special Valve for Gas</option><option>Liquid Hydrogen Valve</option><option>High Temp. & High Pressure</option><option>Back Wash Filter</option></select></div><div className="form-field full"><label>사용 조건 / 문의 내용 *</label><textarea placeholder="유체, 온도, 압력, Size, Rating 및 문의 내용을 입력하세요."></textarea></div><div className="form-field full"><button className="btn btn-primary" type="button">문의 접수 UI</button></div></div></div><aside className="contact-side"><div className="info-card"><small>CONTACT</small><strong>051-832-3630</strong><p>평일 09:00 – 18:00<br />twoygen@twoygen.com</p></div><div className="info-card light"><small>DOWNLOAD</small><strong>제품 카탈로그가 필요하신가요?</strong><p>제품 개요와 주요 사양을 자료실에서 확인할 수 있습니다.</p><Link className="text-link" href="/support/library">자료실 바로가기 →</Link></div><div className="info-card light"><small>LOCATION</small><strong>부산광역시 강서구</strong><p>녹산산단382로 25번길 73</p><Link className="text-link" href="/company/location">오시는 길 →</Link></div></aside></div></div></section></>;
}
