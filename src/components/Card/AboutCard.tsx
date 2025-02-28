import { motion } from "motion/react";
import Image from "next/image";

interface AboutCardType {
  aboutData: {
    id: number;
    imgSrc: string;
    title: string;
    desc: string[];
    buttonText?: string;
  }[];
}

export default function AboutCard({ aboutData }: AboutCardType) {
  return (
    <div className="flex flex-col gap-[1.5rem] lg:gap-[0.5rem]">
      {aboutData.map((item) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
          }}
          key={item.id}
        >
          <div className="flex flex-col items-center justify-between gap-[1.25rem] rounded-[1.25rem] bg-[#F7F9FB] px-[2rem] py-[2rem] md:px-[4rem] lg:flex-row lg:justify-center lg:gap-[10rem] lg:px-[6.25rem] lg:py-[1.25rem]">
            <Image src={item.imgSrc} alt={item.title} width={200} height={200} />
            <div className="flex flex-col gap-[1.875rem] text-center">
              <h3 className="text-[1.5rem] font-bold text-[#000] md:w-[400px] md:text-[2rem] lg:text-[2.2rem]">
                {item.title}
              </h3>
              <ul>
                {item.desc.map((i, index) => (
                  <li
                    className="text-[1rem] whitespace-nowrap text-[#000] md:text-[1.125rem] lg:text-[1.25rem]"
                    key={index}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
