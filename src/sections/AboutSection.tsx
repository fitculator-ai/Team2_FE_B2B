"use client";
import AboutCard from "@/components/Card/AboutCard";
import SectionLayout from "@/components/Layout/SectionLayout";

const ABOUT_DATA = [
  {
    id: 0,
    imgSrc: "/image/about-0.webp",
    title: "객관적인 데이터 기반 접근",
    desc: [
      "스마트워치 데이터를 활용한 정확한 운동량 측정",
      "개인별 맞춤형 적정 운동량 가이드",
    ],
  },
  {
    id: 1,
    imgSrc: "/image/about-0.webp",
    title: "전문성과 신뢰성",
    desc: ["운동생리학 박사 직접 설계 프로그램", "대학 강의 수준의 교육 컨텐츠 제공"],
  },
  {
    id: 2,
    imgSrc: "/image/about-0.webp",
    title: "기존 복지 시스템과의 연계성",
    desc: [
      "건강검진 결과와 연동한 맞춤형 프로그램",
      "기존 건강 복지 프로그램의 효과 극대화",
    ],
  },
  {
    id: 3,
    imgSrc: "/image/about-0.webp",
    title: "가시적인 성과 측정",
    desc: ["개인 및 기업 단위 건강지표 개선 리포트", "참여율 및 지속성 데이터 제공"],
  },
];

export default function About() {
  return (
    <SectionLayout isFullPage={false} title="About" position="left" subTitleColor="point">
      <AboutCard aboutData={ABOUT_DATA} />
    </SectionLayout>
  );
}
