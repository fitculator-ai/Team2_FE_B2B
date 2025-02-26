import Image from "next/image";

interface solutionType {
  imgSrc: string;
  title: string;
  desc: string;
}

export default function Solution({ imgSrc, title, desc }: solutionType) {
  return (
    <div className="bg-opacity-[68%] flex h-full w-full items-center justify-center gap-[5rem] bg-[#F2F6F8]">
      <Image src={imgSrc} alt={title} width={400} height={500} />
      <div className="flex flex-col gap-[1.875rem]">
        <h1 className="text-[2rem] font-bold">{title}</h1>
        <p className="text-[1.25rem]">{desc}</p>
      </div>
    </div>
  );
}
