import Image from "next/image";
import Icon from "@/components/Icon/Icon";

interface solutionType {
  imgSrc: string;
  title: string;
  desc: string;
}

export default function Solution({ imgSrc, title, desc }: solutionType) {
  return (
    <div className="bg-opacity-[68%] flex h-full w-full flex-col items-center justify-center gap-[5rem] bg-[#F2F6F8] px-[1.5rem] pt-[3rem] pb-[5rem] md:px-[1.5rem] lg:flex-row">
      <div className="w-200px relative md:w-[300px] lg:w-[400px]">
        <Image
          src={imgSrc}
          alt={title}
          width={0}
          height={0}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 350px, 250px"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col items-center gap-[1rem] md:gap-[1.5rem] lg:gap-[1.875rem]">
        <h1 className="text-center text-[1.5rem] font-bold md:text-[1.75rem] lg:text-[2rem]">
          {title}
        </h1>
        <p className="text-center text-[0.8rem] md:text-[1rem] lg:text-[1.25rem]">
          {desc}
        </p>
      </div>
    </div>
  );
}
