import Accordion from "./Accordion";

const faqContents = [
  {
    id: 0,
    question: "기존 건강 복지 프로그램과 어떻게 연계할 수 있나요?",
    content:
      "귀사의 건강검진, EAP 등 기존 프로그램과 자연스럽게 연계되도록 맞춤형 설계해 드립니다.",
  },
  {
    id: 1,
    question: "참여율을 높이기 위한 전략이 있나요?",
    content:
      "개인화된 목표 설정, 팀 기반 챌린지, 인센티브 시스템 등 검증된 참여 전략을 제공합니다.",
  },
  {
    id: 2,
    question: "어떤 종류의 스마트워치를 지원하나요?",
    content:
      "애플워치, 갤럭시워치, 가민, 핏빗 등 주요 스마트워치 데이터를 모두 지원합니다.",
  },
  {
    id: 3,
    question: "ROI는 어떻게 측정하나요?",
    content:
      "참여율, 건강지표 개선, 만족도 조사, 장기적 의료비 절감 등 다양한 지표로 측정합니다.",
  },
];

export default function FAQSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-8 sm:px-8">
      <h1 aria-label="자주 묻는 질문" className="text-4xl font-semibold sm:text-5xl">
        FAQ
      </h1>
      <span className="text-lg font-light sm:text-xl">
        자주 물어보신 질문들만 모아둔 FAQ를 참고해 주세요.
      </span>
      <article className="w-full max-w-4xl">
        <ul>
          {faqContents.map(({ question, content, id }) => (
            <li key={id}>
              <Accordion question={question} content={content} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
