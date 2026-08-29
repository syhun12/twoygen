import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid-bg"></div>
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.svg" alt="TWOYGEN" />
          <p>극저온·고압 가스 밸브 및 엔지니어링 솔루션 전문기업</p>
          <div className="footer-contact">
            <span>부산광역시 강서구 녹산산단382로 25번길 73</span>
            <span>TEL. 051-832-3630 · FAX. 051-832-3631</span>
            <span>twoygen@twoygen.com</span>
          </div>
        </div>
        <div className="footer-links">
          <div><strong>회사소개</strong><Link href="/company/greeting">인사말</Link><Link href="/company/history">주요연혁</Link><Link href="/company/certification">인증·특허</Link></div>
          <div><strong>사업/기술</strong><Link href="/business">사업분야</Link><Link href="/technology/cryogenic">극저온·초고압 기술</Link><Link href="/performance">납품실적</Link></div>
          <div><strong>제품소개</strong><Link href="/products/cryogenic">Cryogenic Valve</Link><Link href="/products/liquid-hydrogen">Liquid Hydrogen Valve</Link><Link href="/products/back-wash-filter">Back Wash Filter</Link></div>
          <div><strong>고객지원</strong><Link href="/support/notice">공지사항</Link><Link href="/support/library">자료실</Link><Link href="/support/contact">온라인 문의</Link></div>
        </div>
        <div className="footer-cta">
          <span>Technical Inquiry</span>
          <strong>프로젝트 조건에 맞는 밸브가 필요하신가요?</strong>
          <Link className="btn btn-green" href="/support/contact">문의하기 <span>→</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© TWOYGEN Co., Ltd. All rights reserved.</span>
        <span>Technical Innovation, Sustainable Tomorrow</span>
      </div>
    </footer>
  );
}
