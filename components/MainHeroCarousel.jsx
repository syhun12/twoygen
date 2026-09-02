"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./MainHeroCarousel.module.css";

const slides = [
  {
    eyebrow: "SPECIAL VALVE TECHNOLOGY",
    title: <>Technical Innovation,<br /><em>Sustainable Tomorrow</em></>,
    subtitle: <>Cryogenic · High Pressure · Special Gas Valve<br />LNG · LN2 · LH2 · Methanol · Ammonia</>,
    description: <>극저온·고압·특수가스 운전환경에 대응하는<br />투와이젠의 정밀 밸브 기술을 제공합니다.</>,
    primary: { label: "밸브 제품 보기", href: "/products" },
    secondary: { label: "제품 문의하기", href: "/support/contact" },
    background: "/assets/hero-main-valve.svg",
  },
  {
    eyebrow: "NUCLEAR & FLUID CONTROL ENGINEERING",
    title: <>Reliable Engineering,<br /><em>Critical Applications</em></>,
    subtitle: <>Nuclear · Auto Back Wash Filter · Fluid Device<br />Engineering & Supply Experience</>,
    description: <>원자력 설비의 유체제어 및 여과 시스템을 중심으로<br />설계·제작·시험·공급까지 프로젝트 요구조건에 대응합니다.</>,
    primary: { label: "납품실적 보기", href: "/performance" },
    secondary: { label: "Back Wash Filter", href: "/products/back-wash-filter" },
    background: "/assets/hero-main-nuclear.svg",
  },
  {
    eyebrow: "AUTOMATION MACHINERY & FLUID DEVICE",
    title: <>Smart Automation,<br /><em>Built for Industry</em></>,
    subtitle: <>Automation Machinery · Fluid Device · Control System<br />Design · Manufacturing · Technical Support</>,
    description: <>자동화기계와 산업용 Fluid Device를 기반으로<br />현장 조건에 맞는 장비와 제어 시스템을 설계·제작합니다.</>,
    primary: { label: "자동화 설비 보기", href: "/products/automation-machinery" },
    secondary: { label: "사업분야 보기", href: "/business" },
    background: "/assets/hero-main-automation.svg",
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
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <article
            className={`${styles.slide} ${index === active ? styles.active : ""}`}
            aria-hidden={index !== active}
            key={slide.eyebrow}
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className={styles.shade}></div>
            <div className={`container ${styles.slideInner}`}>
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
            </div>
          </article>
        ))}
      </div>

      <div className={`container ${styles.overlay}`}>
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
