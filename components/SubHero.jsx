import Link from "next/link";

export default function SubHero({ eyebrow, title, description }) {
  return (
    <section className="sub-hero">
      <div className="sub-hero-art"></div>
      <div className="container sub-hero-content">
        <div className="breadcrumbs"><Link href="/">HOME</Link><span>›</span><span>{eyebrow}</span></div>
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
