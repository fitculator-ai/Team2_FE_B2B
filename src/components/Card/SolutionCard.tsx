interface SolutionCardType {
  SolutionData: {
    id: number;
    title: string;
  }[];
}

export default function SolutionCard({ SolutionData }: SolutionCardType) {
  return (
    <div className="grid grid-cols-2 gap-[0.5rem] md:gap-[1.5rem] lg:gap-[2.5rem]">
      {SolutionData.map((card) => (
        <div
          className="flex h-[14rem] w-full items-end justify-center rounded-[0.5rem] bg-[#F7F9FB] p-[1.875rem] md:h-[20rem] md:justify-start lg:h-[14rem]"
          key={card.id}
        >
          <h3 className="text-center text-[1.3rem] font-semibold text-[#000] lg:text-[1.25rem]">
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
