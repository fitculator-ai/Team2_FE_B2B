interface SolutionCardType {
  SolutionData: {
    id: number;
    title: string;
  }[];
}

export default function SolutionCard({ SolutionData }: SolutionCardType) {
  return (
    <div className="grid grid-cols-2 gap-[2.5rem]">
      {SolutionData.map((card) => (
        <div
          className="flex h-[14rem] items-end justify-start rounded-[0.5rem] bg-[#F7F9FB] p-[1.875rem]"
          key={card.id}
        >
          <h3 className="text-[1.25rem] font-semibold text-[#000]">{card.title}</h3>
        </div>
      ))}
    </div>
  );
}
