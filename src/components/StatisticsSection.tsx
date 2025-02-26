import SectionLayout from "@/components/Layout/SectionLayout";

export default function StatisticsSection() {
  const statsData = [
    {
      title: "체력 증가 데이터",
      value: "5000",
      changeRate: "10",
      percentage: "80",
    },
    {
      title: "통계",
      value: "12000",
      changeRate: "15",
      percentage: "70",
    },
    {
      title: "통계",
      value: "1000",
      changeRate: "8",
      percentage: "68",
    },
  ];

  return (
    <SectionLayout
      subTitle="기업의 건강 운동 관리 파트너"
      description="임직원의 체력과 효율 상승을 경험해보세요"
      position="center"
    >
      <div className="grid grid-cols-3 gap-4">
        {statsData.map((stats, index) => (
          <div key={index} className="rounded-2xl px-4 py-3 shadow-lg">
            <p>{stats.title}</p>

            <div className="flex flex-col items-center">
              <p>{stats.value}</p>
              <p>+{stats.changeRate}%</p>

              <div className="">
                <div className="h-20 w-20 rounded-full border-5 border-[#E9EDF0]"></div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#3A5AFE] bg-conic-90">
                  <p>{stats.percentage}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
