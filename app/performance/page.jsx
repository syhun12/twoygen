import Link from "next/link";

const rows = [
  ["01", "2026", "공급·수출", "해수용 액체식 여과장치(BW) 3,4차분 공급계약 및 수출(인도)", "Filter", "-", "green"],
  ["02", "2026", "제작·공급", "폐어구(통발형) 무인반납기 제작 및 공급 - 가덕도 천성항(해양수산부)", "Automation Machinery", "해양수산부", "blue"],
  ["03", "2026", "설계개발", "AI형 CCTV(IP CAM) 설계개발 - KETG", "R&D", "KETG", "teal"],
  ["04", "2026", "사업선정", "K-친환경 수출지원 사업 선정 - 해양수산부", "R&D", "해양수산부", "orange"],
  ["05", "2026", "사업선정", "SMR용 지능형 제어밸브 개발 사업(중기유망기술) 선정 - 중기부", "Valve", "중소벤처기업부", "teal"],
  ["06", "2026", "설계개발", "전기추진선용 동력제어 PCB 설계개발 - KETG", "R&D", "KETG", "teal"],
  ["07", "2026", "공급", "초저온 밸브 5종 공급 - 세진밸브공업", "Valve", "세진밸브공업", "blue"],
  ["08", "2025", "공급·수출", "해수용 액체식 여과장치(BW) 2차분 공급 - 수출(인도)", "Filter", "-", "green"],
  ["09", "2025", "설계개발", "전기추진선용 동력제어 PCB 설계개발 - KETG", "R&D", "KETG", "teal"],
  ["10", "2025", "공급", "극한 환경 수소가스용 BFV 공급 - 세진밸브공업", "Valve", "세진밸브공업", "blue"],
];

export default function PerformancePage() {
  return (
    <div id="top" className="reference-page">
      <section className="performance-hero">
        <div className="container performance-hero-inner">
          <h1>주요실적</h1>
          <p>투와이젠의 공급 및 수행 실적을 확인해보세요.</p>
          <div><Link href="/">HOME</Link><span>›</span><span>실적 및 R&D</span><span>›</span><b>주요실적</b></div>
        </div>
      </section>

      <section className="performance-reference-content">
        <div className="container">
          <div className="performance-filters">
            <label><span>연도</span><select defaultValue="all"><option value="all">전체</option><option>2026</option><option>2025</option></select></label>
            <label><span>구분</span><select defaultValue="all"><option value="all">전체</option><option>공급·수출</option><option>설계개발</option><option>사업선정</option></select></label>
            <label><span>분야</span><select defaultValue="all"><option value="all">전체</option><option>Valve</option><option>Filter</option><option>R&D</option></select></label>
            <div className="performance-search"><input placeholder="실적명, 기관명, 제품명 검색" /><button type="button" aria-label="검색">⌕</button></div>
          </div>

          <div className="performance-table-wrap">
            <table className="performance-table">
              <thead><tr><th>번호</th><th>연도</th><th>구분</th><th>실적명</th><th>분야</th><th>발주처/기관</th><th>더보기</th></tr></thead>
              <tbody>{rows.map((row) => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td><span className={`status-chip ${row[6]}`}>{row[2]}</span></td><td className="performance-name">{row[3]}</td><td>{row[4]}</td><td>{row[5]}</td><td><span className="chevron">›</span></td></tr>)}</tbody>
            </table>
          </div>

          <div className="performance-bottom"><span>전체 <b>12건</b></span><div className="performance-pagination"><b>1</b><span>2</span><span>›</span></div></div>
        </div>
      </section>
    </div>
  );
}
