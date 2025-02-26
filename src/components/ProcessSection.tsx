import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  return (
    <section className="mx-auto flex flex-col items-center gap-5">
      <h1 className="text-4xl font-semibold">FITCULATOR를 간편하게 도입해 보세요</h1>
      {/* <span>임직원의 운동 관리를 돕고 기업에 운동 데이터를 제공합니다.</span> */}
      <ul className="flex flex-row gap-3">
        <li>
          <ProcessStep
            title="1. 도입 문의"
            content="조직규모와 구성원에
알맞는 프로그램을 제안합니다."
          />
        </li>
        <li>
          <ProcessStep
            title="2. 어플 연동 및 대시보드 관리"
            content="조직규모와 구성원에
알맞는 프로그램을 제안합니다."
          />
        </li>
        <li>
          <ProcessStep
            title="3. 임직원 체력 데이터 제공"
            content="조직규모와 구성원에
알맞는 프로그램을 제안합니다."
          />
        </li>
      </ul>
    </section>
  );
}
