import Link from "next/link";
import SubHero from "@/components/SubHero";
import { products } from "@/lib/siteData";

export default function ProductsPage() {
  return <>
    <SubHero eyebrow="제품소개" title="Product Portfolio" description="극저온·고압 가스와 발전·플랜트 환경에 대응하는 주요 제품군입니다." />
    <section className="page-shell soft"><div className="container">
      <div className="filter-row"><span className="filter-chip active">ALL</span><span className="filter-chip">LNG / LN₂</span><span className="filter-chip">LH₂ / H₂</span><span className="filter-chip">Methanol / Ammonia</span><span className="filter-chip">Steam / Plant</span><span className="filter-chip">Sea Water</span></div>
      <div className="product-grid">{products.map((product) => <Link className="product-card" href={`/products/${product.slug}`} key={product.slug}><div className="product-visual"><div className="valve-shape"></div></div><div className="product-card-body"><small>{product.kicker}</small><h3>{product.title}</h3><p>{product.temperature} · {product.pressure}</p></div></Link>)}</div>
    </div></section>
  </>;
}
