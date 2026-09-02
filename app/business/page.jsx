import PlaceholderImage from "@/components/PlaceholderImage";
import SubHero from "@/components/SubHero";

const areas = [
  {
    id: "valve", title: "Valve",
    lines: ["게이트, 버터플라이, 글로브, 볼 밸브", "극저온 및 고압 드롭 제어 밸브"],
    bullets: ["LNG, LIN, LH2, Methanol, Ammonia 등 다양한 유체 대응", "극저온(-196℃) ~ 고온/고압 환경 대응", "고객 사양에 최적화된 설계 및 제작"],
  },
  {
    id: "engineering", title: "Technical Support &\nEngineering Service",
    lines: ["밸브 유동·응력 해석 및 설계 평가", "LNG 밸브 재료·구조 설계"],
    bullets: ["장비 설계·제작·유지보수", "발전·조선 분야 R&D 및 기술 지원", "발전 설비·장비 설계 지원"],
  },
  {
    id: "actuator", title: "Actuator",
    lines: ["모터식 액추에이터 (MOV)", "에어 모터식 액추에이터 (AOV)", "공압식 액추에이터 (POV)", "유압식 액추에이터 (HOV)"],
    bullets: ["다양한 구동 방식 제공", "안정성 및 신뢰성 확보", "고객 환경에 최적화된 제어 솔루션"],
  },
  {
    id: "rnd", title: "R&D",
    lines: ["LNG용 양방향 밀봉장치 개발 ('20~'21)", "수소 생산·공급 설비용 자동 제어밸브 개발 ('21~)"],
    bullets: ["액체 수소용 자동 제어밸브 개발 (21.06~23.05)", "극저온 액화가스용 능동 제어밸브 개발 (23.07~25.06)"],
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
        description="극저온·고압·가스 분야의 핵심 기술 역량을 바탕으로 고객 맞춤형 솔루션을 제공합니다."
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

          <div className="business-message"><span>♙</span><p><b>(주)투와이젠은 지속적인 연구개발과 기술혁신을 통해</b><br />에너지 산업의 미래를 선도하는 기업이 되겠습니다.</p></div>
        </div>
      </section>
    </div>
  );
}
