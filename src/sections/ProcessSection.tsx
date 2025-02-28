"use client";

import ProcessStep from "./ProcessStep";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "@/components/Icon/Icon";
import SectionLayout from "../components/Layout/SectionLayout";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const processStepData = [
  { id: 0, title: "초기 상담", content: "귀사의 니즈 및 현재 건강 복지 현황 파악" },
  { id: 1, title: "맞춤형 제안", content: "기업 환경에 최적화된 솔루션 설계" },
  { id: 2, title: "파일럿 테스트", content: "소규모 그룹 대상 4주 무료 체험" },
  { id: 3, title: "성과 분석", content: "참여율, 만족도, 건강지표 개선 측정" },
  { id: 4, title: "전체 도입", content: "성공적인 파일럿 이후 확장 적용" },
];

export default function ProcessSection() {
  return (
    <SectionLayout title="Process" isFullPage={false}>
      <section className="mx-auto flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold">FITCULATOR를 간편하게 도입해 보세요</h1>
        {/* <span>임직원의 운동 관리를 돕고 기업에 운동 데이터를 제공합니다.</span> */}
        <article className="relative mx-auto w-full max-w-[1200px]">
          <Swiper
            modules={[Navigation]}
            direction={"horizontal"}
            loop={true}
            navigation={{
              nextEl: ".review-next-button",
              prevEl: ".review-prev-button",
            }}
            spaceBetween={40}
            slidesPerView={1}
            className="h-auto"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
          >
            {processStepData.map(({ id, title, content }) => (
              <SwiperSlide key={id} className="px-auto mb-[3rem]">
                <ProcessStep title={title} content={content} />
              </SwiperSlide>
            ))}
            <div className="flex items-center justify-center gap-[0.75rem]">
              <button className="review-prev-button flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-[0.25rem] border border-[#505050] bg-[#fff]">
                <Icon name="icon-arrow-left" color="#000" fontSize={1} />
              </button>
              <button className="review-next-button flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-[0.25rem] border border-[#505050] bg-[#fff]">
                <Icon name="icon-arrow-right" color="#000" fontSize={1} />
              </button>
            </div>
          </Swiper>
        </article>
      </section>
    </SectionLayout>
  );
}
