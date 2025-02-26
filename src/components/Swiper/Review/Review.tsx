interface reviewType {
  name: string;
  rank: string;
  desc: string;
}

export default function Review({ name, rank, desc }: reviewType) {
  return (
    <div className="bg-opacity-68 flex h-full min-h-[22.5rem] flex-col gap-[2.25rem] bg-[#F2F6F8] p-[1.25rem]">
      <div className="flex flex-col gap-[0.25rem] text-[#4FD5FF]">
        <h3 className="text-[1.25rem] font-bold">{name}님</h3>
        <span className="text-[1rem] font-light">{rank}</span>
      </div>
      <p className="text-[1.125rem] text-[#000]">{desc}</p>
    </div>
  );
}
