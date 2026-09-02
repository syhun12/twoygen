import Link from "next/link";
import SubHero from "@/components/SubHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import { products } from "@/lib/siteData";

const productImages = {
  cryogenic: "/assets/product-cryogenic.svg",
  "high-temp": "/assets/product-high-temp.svg",
  "special-gas": "/assets/product-special-gas.svg",
  "back-wash-filter": "/assets/product-filter.svg",
};

const featuredProducts = products.filter((product) => product.featured !== false);

export default function ProductsPage() {
  return <>
    <SubHero eyebrow="제품소개" title="Product Portfolio" description="Cryogenic Valve, High Temperature & High Pressure Control Valve, Special Valve for Gas, Auto Back Wash Filter, Automation Machinery를 소개합니다." />
    <section className="page-shell soft"><div className="container">
      <div className="filter-row"><span className="filter-chip active">ALL</span><span className="filter-chip">Cryogenic</span><span className="filter-chip">High Temp. / High Pr.</span><span className="filter-chip">Special Gas</span><span className="filter-chip">Filter</span><span className="filter-chip">Automation Machinery</span></div>
      <div className="product-grid">{featuredProducts.map((product) => <Link className="product-card" href={`/products/${product.slug}`} key={product.slug}><div className="product-visual">{productImages[product.slug] ? <img src={productImages[product.slug]} alt={product.title} style={{width:"88%",height:"88%",objectFit:"contain"}} /> : <PlaceholderImage title="제품 이미지" description="자동화기계 대표 이미지 등록 예정" variant="compact" />}</div><div className="product-card-body"><small>{product.kicker}</small><h3>{product.title}</h3><p>{product.temperature} · {product.pressure}</p></div></Link>)}</div>
    </div></section>
  </>;
}
