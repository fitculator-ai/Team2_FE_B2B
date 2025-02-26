import Accordion from "./Accordion";

export default function FAQSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <h1 aria-label="자주 묻는 질문" className="text-5xl font-bold">
        FAQ
      </h1>
      <span className="text-xl font-light">
        자주 물어보신 질문들만 모아둔 FAQ를 참고해 주세요.
      </span>
      <article>
        <Accordion
          question="어떤 서비스를 선택해야 할지 모르겠어요."
          content="운동을 처음 시작하시거나 전반적인 건강 관리가 목적이시라면 PLUS를 추천드립니다.
특정한 운동 목표가 있으시거나(근력 향상, Hyrox 대회 준비 등), 체계적인 1:1 코칭이 필요하신 분들께는 PRO 서비스가 적합합니다.
언제든 PLUS에서 PRO로 업그레이드가 가능하니, 편하신 단계에서 시작하셔도 좋습니다."
        />
        <Accordion
          question="어떤 서비스를 선택해야 할지 모르겠어요."
          content="운동을 처음 시작하시거나 전반적인 건강 관리가 목적이시라면 PLUS를 추천드립니다.
특정한 운동 목표가 있으시거나(근력 향상, Hyrox 대회 준비 등), 체계적인 1:1 코칭이 필요하신 분들께는 PRO 서비스가 적합합니다.
언제든 PLUS에서 PRO로 업그레이드가 가능하니, 편하신 단계에서 시작하셔도 좋습니다."
        />
        <Accordion
          question="어떤 서비스를 선택해야 할지 모르겠어요."
          content="운동을 처음 시작하시거나 전반적인 건강 관리가 목적이시라면 PLUS를 추천드립니다.
특정한 운동 목표가 있으시거나(근력 향상, Hyrox 대회 준비 등), 체계적인 1:1 코칭이 필요하신 분들께는 PRO 서비스가 적합합니다.
언제든 PLUS에서 PRO로 업그레이드가 가능하니, 편하신 단계에서 시작하셔도 좋습니다."
        />
        <Accordion
          question="어떤 서비스를 선택해야 할지 모르겠어요."
          content="운동을 처음 시작하시거나 전반적인 건강 관리가 목적이시라면 PLUS를 추천드립니다.
특정한 운동 목표가 있으시거나(근력 향상, Hyrox 대회 준비 등), 체계적인 1:1 코칭이 필요하신 분들께는 PRO 서비스가 적합합니다.
언제든 PLUS에서 PRO로 업그레이드가 가능하니, 편하신 단계에서 시작하셔도 좋습니다."
        />
      </article>
    </section>
  );
}
