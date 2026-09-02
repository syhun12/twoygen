import { notFound } from "next/navigation";
import Link from "next/link";
import SubHero from "@/components/SubHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import { products } from "@/lib/siteData";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default function ProductDetailPage({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  return <>
    <SubHero eyebrow="제품소개" title={product.title} description={`${product.kicker} 적용 제품의 주요 사양과 기술 정보를 확인할 수 있습니다.`} />
    <section className="page-shell"><div className="container product-detail-top">
      <div className="product-detail-visual">
        <PlaceholderImage title="제품 이미지 영역" description={`${product.title} 이미지 등록 예정`} variant="tall" />
      </div>
      <div className="product-detail-copy"><span className="product-kicker">{product.kicker}</span><h2>{product.title}</h2><p>{product.description}</p><div className="spec-badges"><div className="spec-badge"><strong>{product.temperature}</strong><span>TEMPERATURE / FEATURE</span></div><div className="spec-badge"><strong>{product.pressure}</strong><span>PRESSURE / OPERATION</span></div><div className="spec-badge"><strong>{product.size}</strong><span>SIZE RANGE</span></div><div className="spec-badge"><strong>ISO 9001</strong><span>QUALITY SYSTEM</span></div></div><div className="standard-line">Applicable Standards · {product.standard}</div><div style={{display:"flex", gap:10, marginTop:24, flexWrap:"wrap"}}><Link className="btn btn-primary" href="/support/contact">제품 문의</Link><Link className="btn btn-light" href="/support/library">카탈로그 다운로드</Link></div></div>
    </div></section>
    <section className="section soft"><div className="container"><div className="content-title"><span className="eyebrow">Standard Specification</span><h2>주요 사양</h2><p>제품 카탈로그에 수록된 대표 사양을 기준으로 정리했으며, 프로젝트 및 사용자 요구조건에 따라 상세 사양을 검토할 수 있습니다.</p></div><table className="spec-table"><tbody>{product.specs.map(([key, value]) => <tr key={key}><th>{key}</th><td>{value}</td></tr>)}</tbody></table></div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow light">Technical Support</span><strong>사용 조건을 알려주시면 제품 적용성을 검토합니다.</strong><p>유체 · 압력 · 온도 · Size · Rating 기준으로 문의할 수 있습니다.</p></div><div className="cta-actions"><Link className="btn btn-green" href="/support/contact">기술 문의하기</Link></div></div></section>
  </>;
}
