import Link from "next/link";

export default function SubHero({ eyebrow, title, description }) {
  return (
    <section className="sub-hero">
      <div
        className="sub-hero-art"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(2,18,39,.92) 0%, rgba(4,31,60,.72) 42%, rgba(4,31,60,.34) 72%, rgba(2,16,34,.46) 100%), url('/assets/subhero-industrial.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container sub-hero-content">
        <div className="breadcrumbs"><Link href="/">HOME</Link><span>›</span><span>{eyebrow}</span></div>
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
