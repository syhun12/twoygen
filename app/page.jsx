import Link from "next/link";
import MainHeroCarousel from "@/components/MainHeroCarousel";
import PlaceholderImage from "@/components/PlaceholderImage";
import { businessAreas, products } from "@/lib/siteData";

const technologyItems = [
  { title: "극저온 기술", l1: "-253℃ 액화수소 밸브", l2: "-196℃ LNG, LN₂ 밸브", icon: "⌁", href: "/technology/cryogenic" },
  { title: "고압 가스 대응", l1: "수소가스 밸브", l2: "최대 1000bar 적용", icon: "◴", href: "/technology/cryogenic" },
  { title: "고온·고압 제어", l1: "고온·고압 제어밸브", l2: "최대 600℃ / 500bar", icon: "◇", href: "/technology/cryogenic" },
  { title: "자동제어 기계", l1: "Automation Machinery", l2: "Fluid Device & 자동화 설비", icon: "⚙", href: "/products/automation-machinery" },
  { title: "특허 & 인증", l1: "핵심 기술 특허 보유", l2: "각종 인증 및 등록 보유", icon: "▤", href: "/company/certification" },
];

const certs = [
  ["ISO 9001", "품질경영시스템"], ["벤처기업확인서", "Venture Company"], ["소재·부품·장비", "전문기업 확인서"], ["특허 제10-2295871호", "가스용 밸브 밀봉장치"], ["특허 제10-2509774호", "극저온 액화가스용 밸브"], ["KGS-AA335 / AA317", "제조등록 및 인증"],
];

const refs = [
  ["고성 LNG 벙커링 설비용", "초저온 밸브 공급", "LNG"],
  ["인도 원전용 Auto Back Wash Filter", "설계·공급 및 수출", "NUCLEAR"],
  ["내진·유동·구동해석", "Engineering Service", "ANALYSIS"],
  ["액화수소 설비용", "제어밸브 공급", "LH₂"],
  ["폐어구 무인 반납장치", "자동화기계 제작·공급", "AUTO"],
];

const featuredProducts = products.filter((product) => product.featured !== false);

export default function HomePage() {
  return (
    <div id="top">
      <MainHeroCarousel />

      <section className="business-strip-section">
        <div className="container business-strip">
          <div className="business-strip-title"><strong>BUSINESS<br />AREA</strong><i></i></div>
          {businessAreas.map((item) => (
            <Link href={`/business#${item.id}`} className="business-strip-item" key={item.id}>
              <span className="line-icon">{item.icon}</span>
              <div><strong>{item.title === "Technical Support & Engineering Service" ? "Engineering Service" : item.title}</strong><p>{item.id === "valve" ? "고성능 특수 밸브\n설계·제작" : item.id === "automation" ? "자동화기계 및 Fluid Device\n설계·제작" : item.id === "engineering" ? "해석·설계·엔지니어링\n기술지원" : "연구개발을 통한\n기술 혁신"}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section products-section">
        <div className="container">
          <div className="ref-section-heading"><h2>PRODUCTS</h2><i></i></div>
          <div className="ref-product-grid">
            {featuredProducts.map((product) => (
              <Link className="ref-product-card" href={`/products/${product.slug}`} key={product.slug}>
                <div className="ref-product-image">
                  <PlaceholderImage title="제품 이미지" description={`${product.title} 대표 이미지 등록 영역`} variant="compact" />
                </div>
                <div className="ref-product-body">
                  <h3>{product.title}</h3>
                  <p>{product.slug === "cryogenic" ? "극저온 밸브\nCryogenic 환경 대응" : product.slug === "high-temp" ? "고온·고압 제어밸브\n최대 600℃ / 500bar" : product.slug === "special-gas" ? "가스용 특수 밸브\nLPG, NG, H2, Methanol, Ammonia" : product.slug === "back-wash-filter" ? "자동 역세척 여과장치\n해수·담수 설비 적용" : "자동화기계\n폐어구 무인 반납장치·파쇄기"}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-more"><Link href="/products">전체 제품 보기 <span>→</span></Link></div>
        </div>
      </section>

      <section className="technology-strip">
        <div className="container technology-strip-inner">
          <div className="technology-title"><strong>TWOYGEN TECHNOLOGY</strong><i></i></div>
          {technologyItems.map((item) => <Link href={item.href} className="technology-strip-item" key={item.title}><b>{item.icon}</b><div><strong>{item.title}</strong><p>{item.l1}<br />{item.l2}</p></div></Link>)}
        </div>
      </section>

      <section className="home-section certification-section">
        <div className="container">
          <div className="ref-section-heading"><h2>CERTIFICATION & PATENTS</h2><i></i></div>
          <div className="cert-row">{certs.map(([title, desc], idx) => <Link href="/company/certification" className="cert-mini" key={title}><div className="certificate-paper"><span>{idx < 3 ? "CERTIFICATE" : "PATENT"}</span><b>TWOYGEN</b></div><strong>{title}</strong><p>{desc}</p></Link>)}</div>
          <div className="center-more"><Link href="/company/certification">인증·특허 더보기 <span>→</span></Link></div>
        </div>
      </section>

      <section className="home-section projects-section">
        <div className="container">
          <div className="ref-section-heading"><h2>PROJECTS</h2><i></i></div>
          <div className="ref-project-grid">{refs.map(([title, line, tag], idx) => <Link href="/performance" className={`ref-project-card project-bg-${idx + 1}`} key={title}><div className="ref-project-thumb"><span>{tag}</span></div><h3>{title}<br /><b>{line}</b></h3></Link>)}</div>
          <div className="center-more"><Link href="/performance">납품실적 더보기 <span>→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
