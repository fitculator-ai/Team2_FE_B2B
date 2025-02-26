"use client";
import { motion } from "motion/react";
import SectionLayout from "@/components/Layout/SectionLayout";
import SolutionCard from "@/components/Card/SolutionCard";

const SolutionData = [
  {
    id: 0,
    title: "기업 관리자 대시보드",
  },
  {
    id: 1,
    title: "전문가 교육 프로그램",
  },
  {
    id: 2,
    title: "데이터기반 건강관리",
  },
  {
    id: 3,
    title: "맞춤형 건강 챌린지",
  },
];

export default function Solution() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <SectionLayout
        isFullPage={false}
        title="FITCULATOR 만의 솔루션"
        position="center"
        subTitleColor="point"
      >
        <SolutionCard SolutionData={SolutionData} />
      </SectionLayout>
    </motion.div>
  );
}
