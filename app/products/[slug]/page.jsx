import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "@/components/SubHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import { products } from "@/lib/siteData";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default function ProductDetailPage({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const engineeringBadge = product.slug === "automation-machinery" ? "Custom" : "ISO 9001";

  return <>
    <SubHero eyebrow="제품소개" title={product.title} description={`${product.kicker} 적용 제품의 주요 사양과 기술 정보를 확인할 수 있습니다.`} />
    <section className="page-shell"><div className="container product-detail-top">
      <div className="product-detail-visual">
        <PlaceholderImage title="제품 이미지 영역" description={`${product.title} 대표 이미지 등록 예정`} variant="tall" />
      </div>
      <div className="product-detail-copy"><span className="product-kicker">{product.kicker}</span><h2>{product.title}</h2><p>{product.description}</p><div className="spec-badges"><div className="spec-badge"><strong>{product.temperature}</strong><span>TEMPERATURE / FEATURE</span></div><div className="spec-badge"><strong>{product.pressure}</strong><span>PRESSURE / OPERATION</span></div><div className="spec-badge"><strong>{product.size}</strong><span>SIZE / PROJECT BASIS</span></div><div className="spec-badge"><strong>{engineeringBadge}</strong><span>ENGINEERING BASIS</span></div></div><div className="standard-line">Applicable Standards / Basis · {product.standard}</div><div style={{display:"flex", gap:10, marginTop:24, flexWrap:"wrap"}}><Link className="btn btn-primary" href="/support/contact">제품 문의</Link><Link className="btn btn-light" href="/support/library">카탈로그 다운로드</Link></div></div>
    </div></section>

    {product.media?.length > 0 && <section className="product-media-section"><div className="container"><div className="content-title"><span className="eyebrow">Product Media</span><h2>제품 이미지 및 작동 자료</h2><p>기획서의 제품 상세 레이아웃을 유지하면서 사진·시험영상·작동영상이 들어갈 영역을 구분했습니다.</p></div><div className="product-media-grid">{product.media.map(([title, description]) => <div className="product-media-card" key={title}><PlaceholderImage title={title} description={description} variant="compact" /></div>)}</div></div></section>}

    <section className="section soft"><div className="container"><div className="content-title"><span className="eyebrow">Standard Specification</span><h2>주요 사양</h2><p>{product.slug === "automation-machinery" ? "자동화기계는 현장과 프로젝트 요구조건에 따라 상세 구성을 검토합니다." : "제품 카탈로그에 수록된 대표 사양을 기준으로 정리했으며, 프로젝트 및 사용자 요구조건에 따라 상세 사양을 검토할 수 있습니다."}</p></div><table className="spec-table"><tbody>{product.specs.map(([key, value]) => <tr key={key}><th>{key}</th><td>{value}</td></tr>)}</tbody></table></div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow light">Technical Support</span><strong>사용 조건과 적용 목적을 알려주시면 제품 적용성을 검토합니다.</strong><p>밸브·필터는 유체, 압력, 온도, Size, Rating을, 자동화기계는 현장 조건과 요구 기능을 기준으로 검토합니다.</p></div><div className="cta-actions"><Link className="btn btn-green" href="/support/contact">기술 문의하기</Link></div></div></section>
  </>;
}
