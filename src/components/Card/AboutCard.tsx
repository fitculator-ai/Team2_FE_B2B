import Image from "next/image";

interface AboutCardType {
  aboutData: {
    id: number;
    imgSrc: string;
    title: string;
    desc: string[];
  }[];
}

export default function AboutCard({ aboutData }: AboutCardType) {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      {aboutData.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center gap-[12.5rem] rounded-[1.25rem] bg-[#F7F9FB] py-[1.25rem]"
        >
          <Image src={item.imgSrc} alt={item.title} width={200} height={200} />
          <div className="flex flex-col gap-[1.875rem] text-center">
            <h3 className="text-[2.5rem] font-bold text-[#000]">{item.title}</h3>
            <ul>
              {item.desc.map((i, index) => (
                <li key={index} className="text-[1.25rem] text-[#000]">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
