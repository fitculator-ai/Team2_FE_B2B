import SectionLayout from "@/components/Layout/SectionLayout";

export default function StatisticsSection() {
  const statsData = [
    {
      title: "평균 참여율",
      value: "5000",
      changeRate: "10",
      percentage: "85",
    },
    {
      title: "사용자 건강지표 개선율",
      value: "12000",
      changeRate: "15",
      percentage: "78",
    },
  ];

  return (
    <SectionLayout
      subTitle="기업의 건강 운동 관리 파트너"
      description="임직원의 체력과 효율 상승을 경험해보세요"
      position="center"
      isFullPage={false}
    >
      <div className="mx-auto flex max-w-[75rem] gap-4">
        {statsData.map((stats, index) => (
          <div
            key={index}
            className="relative flex h-[18.75rem] w-full flex-col rounded-2xl px-4 py-3 shadow-lg"
          >
            <p className="pb-6 text-left font-semibold text-[#625C5C]">{stats.title}</p>

            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <p className="pb-3 font-bold">{stats.percentage}%</p>

              <div className="relative">
                <div className="absolute h-28 w-28 rounded-full border-4 border-[#E9EDF0]"></div>
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-12 border-[#3A5AFE] bg-conic-90"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
