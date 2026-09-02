import Link from "next/link";
import MainHeroCarousel from "@/components/MainHeroCarousel";
import { businessAreas, products } from "@/lib/siteData";

const productImages = {
  cryogenic: "/assets/product-cryogenic.svg",
  "special-gas": "/assets/product-special-gas.svg",
  "liquid-hydrogen": "/assets/product-lh2.svg",
  "high-temp": "/assets/product-high-temp.svg",
  "back-wash-filter": "/assets/product-filter.svg",
};

const technologyItems = [
  ["극저온 기술", "-253℃ 액화수소 밸브", "-196℃ LNG, LN₂ 밸브", "⌁"],
  ["고압 가스 대응", "수소가스 밸브", "최대 1000bar 적용", "◴"],
  ["고온·고압 제어", "고온·고압 제어밸브", "최대 600℃ / 500bar", "◇"],
  ["특허 & 인증", "핵심 기술 특허 보유", "각종 인증 및 등록 보유", "▤"],
];

const certs = [
  ["ISO 9001", "품질경영시스템"], ["벤처기업확인서", "Venture Company"], ["소재·부품·장비", "전문기업 확인서"], ["특허 제10-2295871호", "가스용 밸브 밀봉장치"], ["특허 제10-2509774호", "극저온 액화가스용 밸브"], ["KGS-AA335 / AA317", "제조등록 및 인증"],
];

const refs = [
  ["고성 LNG 벙커링 설비용", "초저온 밸브 공급", "LNG"],
  ["액화수소 설비용", "제어밸브 공급", "LH₂"],
  ["인도 원전용 BW Filter", "설계 및 공급", "FILTER"],
  ["극저온·초고압(700bar)", "액화가스용 밸브", "H₂"],
  ["액화 암모니아 가스용", "자동밸브 시제품", "NH₃"],
];

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
              <div><strong>{item.title === "Technical Support & Engineering Service" ? "Engineering Service" : item.title}</strong><p>{item.id === "valve" ? "고성능 특수 밸브\n설계·제작" : item.id === "actuator" ? "정밀 액추에이터\n설계·제작" : item.id === "engineering" ? "기술지원 및 엔지니어링\n서비스" : "연구개발을 통한\n기술 혁신"}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section products-section">
        <div className="container">
          <div className="ref-section-heading"><h2>PRODUCTS</h2><i></i></div>
          <div className="ref-product-grid">
            {products.map((product) => (
              <Link className="ref-product-card" href={`/products/${product.slug}`} key={product.slug}>
                <div className="ref-product-image"><img src={productImages[product.slug]} alt={product.title} /></div>
                <div className="ref-product-body">
                  <h3>{product.title}</h3>
                  <p>{product.slug === "cryogenic" ? "극저온 밸브\n-196℃ 환경 대응" : product.slug === "special-gas" ? "가스용 특수 밸브\nLPG, NG, H2, Methanol, Ammonia 등 적용" : product.slug === "liquid-hydrogen" ? "액화수소용 밸브\n-253℃ 초극저온 환경 대응" : product.slug === "high-temp" ? "고온·고압 제어밸브\n최대 600℃ / 500bar 환경 대응" : "역세척 여과장치\n현장 및 플랜트 적용 수출형 제품"}</p>
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
          {technologyItems.map(([title, l1, l2, icon]) => <Link href="/technology/cryogenic" className="technology-strip-item" key={title}><b>{icon}</b><div><strong>{title}</strong><p>{l1}<br />{l2}</p></div></Link>)}
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
