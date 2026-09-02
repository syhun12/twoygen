"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./MainHeroCarousel.module.css";

const slides = [
  {
    eyebrow: "SPECIAL VALVE & ENGINEERING SOLUTION",
    title: <>Technical Innovation,<br /><em>Sustainable Tomorrow</em></>,
    subtitle: <>LNG · LN2 · LH2 · Methanol · Ammonia<br />Special Valve for Gas</>,
    description: <>투와이젠은 최고 수준의 기술력과 품질로<br />에너지 산업의 새로운 내일을 열어갑니다.</>,
    primary: { label: "제품 문의하기", href: "/support/contact" },
    secondary: { label: "카탈로그 다운로드", href: "/support/library" },
    image: "/assets/hero-reference.svg",
    imageAlt: "투와이젠 밸브 및 산업 설비 이미지",
    visualType: "wide",
  },
  {
    eyebrow: "EXTREME ENVIRONMENT VALVE TECHNOLOGY",
    title: <>Extreme Environment,<br /><em>Reliable Technology</em></>,
    subtitle: <>-253℃ Liquid Hydrogen · 1000bar H2<br />Cryogenic & High Pressure Valve</>,
    description: <>극저온부터 초고압 환경까지 안정적인 제어를 위한<br />투와이젠의 핵심 밸브 기술을 제공합니다.</>,
    primary: { label: "제품 살펴보기", href: "/products" },
    secondary: { label: "기술력 보기", href: "/technology/cryogenic" },
    image: "/assets/product-lh2.svg",
    imageAlt: "액화수소용 극저온 밸브",
    visualType: "product",
  },
  {
    eyebrow: "DESIGN · ENGINEERING · R&D",
    title: <>Engineering Solution,<br /><em>Built for Industry</em></>,
    subtitle: <>Valve · Actuator · Engineering Service · R&D<br />Back Wash Filter & Plant Solution</>,
    description: <>선박·플랜트·발전설비의 운전 조건을 검토하고<br />설계부터 제작·시험·기술지원까지 연결합니다.</>,
    primary: { label: "사업분야 보기", href: "/business" },
    secondary: { label: "기술 문의하기", href: "/support/contact" },
    image: "/assets/product-filter.svg",
    imageAlt: "투와이젠 Back Wash Filter",
    visualType: "product",
  },
];

const fluids = [["LNG", "◉"], ["LN2", "◇"], ["LH2", "◌"], ["Methanol", "△"], ["Ammonia", "♢"]];

export default function MainHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="투와이젠 메인 비주얼"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.slides}>
          {slides.map((slide, index) => (
            <article
              className={`${styles.slide} ${index === active ? styles.active : ""}`}
              aria-hidden={index !== active}
              key={slide.eyebrow}
            >
              <div className={styles.copy}>
                <span className={styles.eyebrow}>{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
                <p>{slide.description}</p>
                <div className={styles.actions}>
                  <Link href={slide.primary.href} className="ref-btn primary">{slide.primary.label} <span>→</span></Link>
                  <Link href={slide.secondary.href} className="ref-btn outline">{slide.secondary.label} <span>→</span></Link>
                </div>
              </div>

              <div className={`${styles.visual} ${styles[slide.visualType]}`}>
                <img src={slide.image} alt={slide.imageAlt} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.fluids} aria-label="적용 유체">
          {fluids.map(([name, icon]) => <div key={name}><b>{icon}</b><span>{name}</span></div>)}
        </div>

        <div className={styles.bottomControls}>
          <div className={styles.pagination} aria-label="슬라이드 선택">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.eyebrow}
                className={index === active ? styles.current : ""}
                onClick={() => goTo(index)}
                aria-label={`${index + 1}번 슬라이드 보기`}
                aria-current={index === active ? "true" : undefined}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <div className={styles.arrows}>
            <button type="button" onClick={prev} aria-label="이전 슬라이드">←</button>
            <button type="button" onClick={next} aria-label="다음 슬라이드">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
