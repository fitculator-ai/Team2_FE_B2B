"use client";

import Image from "next/image";
import SectionLayout from "@/components/Layout/SectionLayout";
import SpeechBubble from "@/components/SpeechBubble";
import { motion } from "motion/react";

const SpeechBubbleText = [
  {
    id: 0,
    text: "직원들의 운동 지속도가 낮은데 어떻게 해야하지?",
  },
  {
    id: 1,
    text: "MZ세대가 선호하는 맞춤형 복지가 없을까?",
  },
  {
    id: 2,
    text: "직원들의 업무 몰입도 저하를 줄일 수 없을까?",
  },
];

export default function SubBannerSection() {
  return (
    <SectionLayout isFullPage={false}>
      <div className="flex flex-col gap-[3rem]">
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            <figure className="flex flex-col items-center">
              <Image src="/image/person.webp" alt="person" width={300} height={300} />
              <figcaption className="font-bold md:text-[1.2rem] lg:text-[1.5rem]">
                기업 인사팀 직원 A씨
              </figcaption>
            </figure>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              y: { duration: 1 },
            }}
          >
            <div className="relative flex flex-col gap-[2.25rem]">
              {SpeechBubbleText.map((data) => (
                <SpeechBubble key={data.id} text={data.text} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex h-full w-full items-center justify-center bg-[#F7F9FB] px-[1rem] py-[2rem] font-bold md:p-[3.75rem]">
          <p className="text=[#000] text-center text-[1rem] md:text-[1.875rem] lg:text-[2.5rem]">
            데이터 기반의 맞춤 건강관리 시스템을 통해
            <br />
            조직의 건강 문화를 혁신하세요.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
