import Link from "next/link";
import SubHero from "@/components/SubHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import { products } from "@/lib/siteData";
import styles from "./ProductsPage.module.css";

const productImages = {
  cryogenic: "/assets/product-cryogenic.svg",
  "high-temp": "/assets/product-high-temp.svg",
  "special-gas": "/assets/product-special-gas.svg",
  "back-wash-filter": "/assets/product-filter.svg",
};

const featuredProducts = products.filter((product) => product.featured !== false);

const summary = [
  ["CRYOGENIC", "-196℃ 극저온 밸브"],
  ["HIGH TEMP. / PRESSURE", "600℃ · 500bar"],
  ["SPECIAL GAS", "H2 최대 1000bar"],
  ["AUTO BACK WASH", "Sea / Fresh Water"],
  ["AUTOMATION", "Machinery & Fluid Device"],
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <SubHero
        eyebrow="제품소개"
        title="Product Portfolio"
        description="극저온·고온고압·특수가스 환경의 밸브부터 자동 역세척 필터와 자동화 장비까지 투와이젠의 주요 제품군을 소개합니다."
      />

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <span className={styles.kicker}>TWOYGEN PRODUCTS</span>
              <h2>극한 운전 조건에 대응하는<br />제품과 엔지니어링 기술</h2>
            </div>
            <p className={styles.introText}>
              투와이젠은 LNG·LN2 등 극저온 유체, 수소·메탄올·암모니아 등 특수가스,
              증기 및 고온·고압 공정에 적용되는 제어밸브와 Auto Back Wash Filter,
              자동화 설비를 설계·제작합니다. 제품별 상세페이지에서 대표 사양과 적용 기준을 확인할 수 있습니다.
            </p>
          </div>

          <div className={styles.summaryBar}>
            {summary.map(([label, value]) => (
              <div className={styles.summaryItem} key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.catalogHead}>
            <h2>Product Line-up</h2>
            <p>제품을 선택하면 상세 사양과 적용 기준을 확인할 수 있습니다.</p>
          </div>

          <div className={styles.grid}>
            {featuredProducts.map((product, index) => (
              <Link className={styles.card} href={`/products/${product.slug}`} key={product.slug}>
                <div className={styles.visual}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  {productImages[product.slug] ? (
                    <img src={productImages[product.slug]} alt={product.title} />
                  ) : (
                    <PlaceholderImage
                      title="제품 이미지"
                      description="자동화기계 대표 이미지 등록 예정"
                      variant="compact"
                    />
                  )}
                </div>

                <div className={styles.body}>
                  <span className={styles.category}>{product.kicker}</span>
                  <h3>{product.title}</h3>
                  <p className={styles.description}>{product.description}</p>

                  <div className={styles.specs}>
                    <div className={styles.spec}>
                      <span>TEMPERATURE</span>
                      <strong>{product.temperature}</strong>
                    </div>
                    <div className={styles.spec}>
                      <span>PRESSURE</span>
                      <strong>{product.pressure}</strong>
                    </div>
                    <div className={styles.spec}>
                      <span>SIZE / TYPE</span>
                      <strong>{product.size}</strong>
                    </div>
                  </div>

                  <div className={styles.standard}>{product.standard}</div>
                  <div className={styles.more}><span>VIEW DETAILS</span><i></i></div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.guide}>
            <div>
              <strong>프로젝트 조건에 맞는 제품 선정이 필요하신가요?</strong>
              <p>유체, 운전 온도·압력, Size, Rating 등 기본 조건을 전달해주시면 적용 가능한 제품을 검토합니다.</p>
            </div>
            <Link href="/support/contact">제품 문의하기 <span>→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
