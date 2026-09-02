import PlaceholderImage from "@/components/PlaceholderImage";
import SubHero from "@/components/SubHero";

const areas = [
  {
    id: "valve", title: "Valve",
    lines: ["게이트, 버터플라이, 글로브, 볼 밸브", "극저온 및 고온·고압 제어밸브"],
    bullets: ["LNG, LN2, LH2, Methanol, Ammonia 등 다양한 유체 대응", "극저온부터 고온·고압 환경까지 프로젝트 조건 검토", "고객 사양에 최적화된 설계 및 제작"],
  },
  {
    id: "automation", title: "Automation Machinery",
    lines: ["Auto Back Wash Filter", "폐어구 무인 반납장치", "파쇄기 및 자동화 설비"],
    bullets: ["Automation Machinery & Fluid Device 사업영역", "현장 목적에 맞춘 자동화 설비 설계·제작", "필터 및 해양 분야 자동화 장비 적용"],
  },
  {
    id: "engineering", title: "Technical Support &\nEngineering Service",
    lines: ["내진해석 · 유동해석 · 구동해석", "밸브 및 장비 설계 검토·평가"],
    bullets: ["Seismic Analysis / Flow Analysis / Actuation Analysis", "발전·원자력·조선 분야 설계 및 기술지원", "장비 설계·제작·시험 및 유지보수 지원"],
  },
  {
    id: "rnd", title: "R&D",
    lines: ["LNG용 양방향 밀봉장치 개발 ('20~'21)", "수소 생산·공급 설비용 자동 제어밸브 개발"],
    bullets: ["액체 수소용 자동 제어밸브 개발", "극저온 액화가스용 제어밸브 기술개발", "차세대 원자력·자동화 분야 연구개발 확대"],
  },
];

const rndRows = [
  ["2020 ~ 2021", "LNG용 양방향 밀봉장치 개발", "2020.01 ~ 2021.12", "LNG용 환경에서 양방향 밀봉이 가능한 밸브 구조 및 밀봉 기술 개발", "한국가스공사"],
  ["2021 ~ 현재", "수소 생산·공급 설비용 자동 제어밸브 개발", "2021.01 ~ 진행중", "수소 생산·공급 설비에 적용 가능한 자동 제어밸브 개발", "한국가스공사"],
  ["2021.06 ~ 2023.05", "액체 수소용 자동 제어밸브 개발", "2021.06 ~ 2023.05", "액체 수소 환경에 적합한 자동 제어밸브 설계 및 성능 검증", "산업통상자원부"],
  ["2023.07 ~ 2025.06", "극저온 액화가스용 능동 제어밸브 개발", "2023.07 ~ 2025.06", "극저온 액화가스 환경에서 능동 제어가 가능한 밸브 개발 및 실증", "중소벤처기업부"],
];

export default function BusinessPage() {
  return (
    <div id="top" className="reference-page">
      <SubHero
        eyebrow="사업분야"
        title="Business Area"
        description="Valve, Automation Machinery, Engineering Service, R&D를 중심으로 산업 현장의 요구조건에 맞는 솔루션을 제공합니다."
      />

      <section className="business-reference-content">
        <div className="container">
          <div className="business-reference-grid">
            {areas.map((area) => (
              <article className="business-reference-card" id={area.id} key={area.id}>
                <div className="business-reference-image"><PlaceholderImage title="사업분야 이미지" description={`${area.title.replace("\n", " ")} 비주얼 등록 예정`} variant="compact" /></div>
                <div className="business-reference-text">
                  <h2>{area.title.split("\n").map((part, i) => <span key={part}>{part}{i === 0 && area.title.includes("\n") ? <br /> : null}</span>)}</h2><i></i>
                  {area.lines.map((line) => <p key={line}>{line}</p>)}
                  <ul>{area.bullets.map((line) => <li key={line}>{line}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>

          <div className="rnd-performance">
            <h2>R&D 실적</h2>
            <div className="responsive-table"><table><thead><tr><th>연도</th><th>과제명</th><th>과제 기간</th><th>주요 내용</th><th>발주처</th></tr></thead><tbody>{rndRows.map((row) => <tr key={row[0] + row[1]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
          </div>

          <div className="business-message"><span>♙</span><p><b>(주)투와이젠은 지속적인 연구개발과 기술혁신을 통해</b><br />에너지·원자력·해양 산업의 미래를 선도하는 기업이 되겠습니다.</p></div>
        </div>
      </section>
    </div>
  );
}
