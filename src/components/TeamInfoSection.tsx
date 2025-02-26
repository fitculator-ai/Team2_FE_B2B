import SectionLayout from "@/components/Layout/SectionLayout";

export default function TeamInfoSection() {
  const teamData = [
    {
      name: "류현지",
      nickname: "@ryoohyun",
      careers: [
        "연세대학교 체육학과 박사 졸업",
        "연세대학교 체육교육학과 강사",
        "국민체육진흥공단 건강운동관리사 연수원 강사",
      ],
      image: "http",
    },
    {
      name: "박영진",
      nickname: "@vpak.9",
      careers: [
        "연세대학교 체육학과 석사 졸업",
        "연세대학교 융합체육과학선도 연구소 보조 연구원",
        "대한축구협회 피트니스 트레이닝 자격 보유",
      ],
      image: "http",
    },
    {
      name: "최재하",
      nickname: "@jaeha_pool",
      careers: [
        "서울대학교 체육교육과 학사",
        "National Academy of Sport Medicine Personal Trainer Certificate",
        "University of Arizona Fitness & Wellness Coach",
      ],
      image: "http",
    },
  ];

  return (
    <SectionLayout
      title="advisor"
      subTitle="운동 생리학 박사가 직접 만들고 설계한 FITCULATOR"
    >
      <div className="grid grid-cols-3 gap-4">
        {teamData.map((member, index) => (
          <div key={index} className="rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex gap-2 pb-5">
              <div className="h-10 w-10 rounded-[100%] bg-pink-400"></div>

              <div>
                <p>{member.name}</p>
                <p className="text-sm">{member.nickname}</p>
              </div>
            </div>

            <ul className="list-disc pl-5">
              {member["careers"].map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
