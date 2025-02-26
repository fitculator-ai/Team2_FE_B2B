"use client";
import AboutCard from "@/components/Card/AboutCard";
import SectionLayout from "@/components/Layout/SectionLayout";

const aboutData = [
  {
    id: 0,
    imgSrc: "/image/about-0.webp",
    title: "맞춤형 건강 챌린지",
    desc: [
      "선택 가능**: ① 운동만 챌린지 ② 운동+식단 챌린지",
      "유연한 설계*: 팀/파트/전사 단위뿐만 아니라 동아리, 소모임도 가능!",
      "*전문 코치 피드백**으로 지속적인 동기 부여",
    ],
  },
  {
    id: 1,
    imgSrc: "/image/about-0.webp",
    title: "맞춤형 건강 챌린지",
    desc: [
      "선택 가능**: ① 운동만 챌린지 ② 운동+식단 챌린지",
      "유연한 설계*: 팀/파트/전사 단위뿐만 아니라 동아리, 소모임도 가능!",
      "*전문 코치 피드백**으로 지속적인 동기 부여",
    ],
  },
  {
    id: 2,
    imgSrc: "/image/about-0.webp",
    title: "맞춤형 건강 챌린지",
    desc: [
      "선택 가능**: ① 운동만 챌린지 ② 운동+식단 챌린지",
      "유연한 설계*: 팀/파트/전사 단위뿐만 아니라 동아리, 소모임도 가능!",
      "*전문 코치 피드백**으로 지속적인 동기 부여",
    ],
  },
];

export default function About() {
  return (
    <SectionLayout isFullPage={false} title="About" position="left" subTitleColor="point">
      <AboutCard aboutData={aboutData} />
    </SectionLayout>
  );
}
