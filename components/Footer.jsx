import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-contact-band">
        <div className="container footer-contact-inner">
          <div className="footer-contact-copy">
            <strong>제품 및 기술에 대해 궁금하신가요?</strong>
            <span>전문가가 빠르고 정확하게 상담해 드립니다.</span>
          </div>
          <div className="footer-contact-item"><b>☎</b><span>051-832-3630</span></div>
          <div className="footer-contact-item"><b>✉</b><span>twoygen@twoygen.com</span></div>
          <Link className="footer-contact-btn" href="/support/contact">문의하기 <span>→</span></Link>
        </div>
      </section>

      <div className="container footer-main">
        <div className="footer-company">
          <img src="/assets/twoygen-logo-reference.svg" alt="TWOYGEN DESIGN & ENG" />
          <strong>(주)투와이젠</strong>
          <p>부산광역시 강서구 녹산산단382로 25번길 73</p>
          <p>TEL. 051-832-3630&nbsp;&nbsp; FAX. 051-832-3631</p>
          <p><b>E-mail.</b> twoygen@twoygen.com</p>
          <small>Copyright © TWOYGEN Co., Ltd. All rights reserved.</small>
        </div>

        <div className="footer-sitemap">
          <div><strong>회사소개</strong><Link href="/company/greeting">인사말</Link><Link href="/company/history">주요연혁</Link><Link href="/company/certification">인증/특허</Link><Link href="/company/location">오시는 길</Link></div>
          <div><strong>사업분야</strong><Link href="/business#valve">Valve</Link><Link href="/business#automation">Automation Machinery</Link><Link href="/business#engineering">Engineering Service</Link><Link href="/business#rnd">R&D</Link></div>
          <div><strong>제품소개</strong><Link href="/products/cryogenic">Cryogenic Valve</Link><Link href="/products/high-temp">High Temp. & High Pressure Control Valve</Link><Link href="/products/special-gas">Special Valve for Gas</Link><Link href="/products/back-wash-filter">Auto Back Wash Filter</Link><Link href="/products/automation-machinery">Automation Machinery</Link></div>
          <div><strong>기술력</strong><Link href="/technology/engineering">내진·유동·구동해석</Link><Link href="/technology/cryogenic">극저온·고압 기술</Link><Link href="/products/automation-machinery">자동제어 기계</Link><Link href="/technology/quality">품질·시험</Link></div>
          <div><strong>납품실적</strong><Link href="/performance">주요 적용 분야</Link><Link href="/performance">프로젝트 사례</Link><Link href="/performance">수출·공급 이력</Link></div>
          <div><strong>공지/문의</strong><Link href="/support/notice">공지사항</Link><Link href="/support/contact">상담/문의</Link></div>
        </div>
      </div>
      <a className="top-button" href="#top" aria-label="맨 위로 이동">↑<span>TOP</span></a>
    </footer>
  );
}
