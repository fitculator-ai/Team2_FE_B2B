import Image from "next/image";
import { useMemo } from "react";

interface solutionType {
  imgSrc: string;
  title: string;
  subTitle: string;
  desc: string[];
}

export default function Solution({ imgSrc, title, subTitle, desc }: solutionType) {
  const solutionContent = useMemo(() => {
    return (
      <div className="bg-opacity-[68%] flex h-full w-full flex-col items-center justify-center gap-[5rem] bg-[#F2F6F8] px-[1.5rem] pt-[3rem] pb-[5rem] md:gap-[3rem] md:px-[1.5rem] lg:flex-row">
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
          <span className="text-[0.8rem] md:text-[1rem] lg:text-[1.15rem]">
            {subTitle}
          </span>
          <ul></ul>
          {desc.map((item, index) => (
            <li
              className="text-center text-[1rem] md:text-[1.15rem] lg:text-[1.25rem]"
              key={index}
            >
              {item}
            </li>
          ))}
        </div>
      </div>
    );
  }, [imgSrc, title, subTitle, desc]);

  return solutionContent;
}
