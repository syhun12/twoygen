import Link from "next/link";
import { businessAreas, products, projects } from "@/lib/siteData";

export default function HomePage() {
  return (
    <>
      <section className="main-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">SPECIAL VALVE & ENGINEERING SOLUTION</span>
            <h1>Technical Innovation,<br />Sustainable Tomorrow</h1>
            <p>극저온·고압 가스 환경에서 요구되는 신뢰성과 정밀한 제어 성능. 투와이젠은 설계부터 제작, 시험, 기술지원까지 산업 현장에 필요한 밸브 솔루션을 제공합니다.</p>
            <div className="hero-tags">
              <span>LNG</span><span>LN₂</span><span>LH₂</span><span>Methanol</span><span>Ammonia</span><span>Hydrogen</span>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/products">제품 보기 <span>→</span></Link>
              <Link className="btn btn-outline" href="/support/library">카탈로그 다운로드</Link>
              <Link className="btn btn-outline" href="/support/contact">기술 문의</Link>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-center">Extreme<br />Environment</div>
            <div className="orbit-chip">LNG</div><div className="orbit-chip">LN₂</div><div className="orbit-chip">LH₂</div><div className="orbit-chip">NH₃</div><div className="orbit-chip">H₂</div>
          </div>
        </div>
        <div className="hero-business-strip">
          {businessAreas.map((item) => (
            <Link className="hero-business-item" href={`/business#${item.id}`} key={item.id}>
              <div className="mini-icon">{item.icon}</div>
              <div><strong>{item.title}</strong><span>{item.copy}</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">
              <span className="eyebrow">Business Area</span>
              <h2>산업의 극한 조건을 이해하는<br />엔지니어링 파트너</h2>
              <p>제품만 공급하는 것이 아니라 운전 조건과 적용 환경을 검토하여 필요한 기술 범위를 함께 제안합니다.</p>
            </div>
            <Link className="text-link" href="/business">사업분야 전체보기 <span>→</span></Link>
          </div>
          <div className="business-grid">
            {businessAreas.map((item) => (
              <Link id={item.id} className="business-card" href={`/business#${item.id}`} data-no={item.no} key={item.id}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div className="section-title">
              <span className="eyebrow">Core Products</span>
              <h2>에너지 산업을 위한<br />전문 제품 포트폴리오</h2>
              <p>LNG, 수소, 암모니아, 발전·플랜트까지 다양한 유체와 운전 조건에 대응합니다.</p>
            </div>
            <Link className="text-link" href="/products">제품 전체보기 <span>→</span></Link>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <Link className="product-card" href={`/products/${product.slug}`} key={product.slug}>
                <div className="product-visual"><div className="valve-shape"></div></div>
                <div className="product-card-body">
                  <small>{product.kicker}</small>
                  <h3>{product.title}</h3>
                  <p>{product.temperature} · {product.pressure}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="container tech-band">
          <div>
            <span className="eyebrow light">Technology Highlight</span>
            <div className="section-title">
              <h2>Extreme Environment<br />Valve Technology</h2>
              <p>극저온부터 초고압, 고온 환경까지 핵심 운전 조건을 수치와 검증 체계로 설명합니다.</p>
            </div>
            <div className="tech-list">
              <Link href="/technology/cryogenic">극저온·초고압 기술 <span>→</span></Link>
              <Link href="/technology/engineering">설계개발·엔지니어링 <span>→</span></Link>
              <Link href="/technology/quality">품질·시험·인증 체계 <span>→</span></Link>
            </div>
          </div>
          <div className="tech-metrics">
            <div className="tech-metric"><strong>-253℃</strong><span>LIQUID HYDROGEN</span></div>
            <div className="tech-metric"><strong>1000 bar</strong><span>HYDROGEN GAS</span></div>
            <div className="tech-metric"><strong>600℃</strong><span>HIGH TEMPERATURE</span></div>
            <div className="tech-metric"><strong>ISO 9001</strong><span>QUALITY SYSTEM</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">
              <span className="eyebrow">Reference</span>
              <h2>현장에서 검증되는<br />투와이젠의 기술</h2>
              <p>대표 공급·개발 프로젝트를 간결한 카드 형태로 확인할 수 있습니다.</p>
            </div>
            <Link className="text-link" href="/performance">납품실적 보기 <span>→</span></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <Link className="project-card" href={`/performance/${project.slug}`} key={project.slug}>
                <div className="project-image"></div>
                <div className="project-body">
                  <div className="project-meta"><span>{project.year}</span><span>{project.country}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div><span className="eyebrow light">Contact</span><strong>프로젝트 조건에 맞는 제품을 함께 검토해보세요.</strong><p>유체, 온도, 압력, 규격을 알려주시면 적합한 제품과 기술 대응 범위를 확인할 수 있습니다.</p></div>
          <div className="cta-actions"><Link className="btn btn-green" href="/support/contact">기술 문의하기</Link><Link className="btn btn-outline" href="/support/library">자료 다운로드</Link></div>
        </div>
      </section>
    </>
  );
}
