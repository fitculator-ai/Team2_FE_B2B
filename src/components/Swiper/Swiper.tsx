"use client";

import React from "react";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "@/components/Swiper/Review/Review";
import Solution from "@/components/Swiper/Solution/Solution";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface typeProp {
  type: "review" | "solution";
}

const reviewData = [
  {
    id: 1,
    name: "이OO",
    rank: "7년차 인사 팀장",
    desc: "신임 리더로 팀원을 이끌게 되었습니다. 처음해보는 팀원 관리에 고민이 많았는데 코칭으로 리더로서의 제 역할에 대해 깨닫게 되었습니다. 믿을 수 있는 리더가 되어주고 싶다는 목표가 생겼습니다.",
  },
  {
    id: 2,
    name: "김OO",
    rank: "7년차 인사 팀장",
    desc: "신임 리더로 팀원을 이끌게 되었습니다. 처음해보는 팀원 관리에 고민이 많았는데 코칭으로 리더로서의 제 역할에 대해 깨닫게 되었습니다. 믿을 수 있는 리더가 되어주고 싶다는 목표가 생겼습니다.",
  },
  {
    id: 3,
    name: "정OO",
    rank: "7년차 인사 팀장",
    desc: "신임 리더로 팀원을 이끌게 되었습니다. 처음해보는 팀원 관리에 고민이 많았는데 코칭으로 리더로서의 제 역할에 대해 깨닫게 되었습니다. 믿을 수 있는 리더가 되어주고 싶다는 목표가 생겼습니다.",
  },
  {
    id: 4,
    name: "임OO",
    rank: "7년차 인사 팀장",
    desc: "신임 리더로 팀원을 이끌게 되었습니다. 처음해보는 팀원 관리에 고민이 많았는데 코칭으로 리더로서의 제 역할에 대해 깨닫게 되었습니다. 믿을 수 있는 리더가 되어주고 싶다는 목표가 생겼습니다.",
  },
  {
    id: 5,
    name: "황OO",
    rank: "7년차 인사 팀장",
    desc: "신임 리더로 팀원을 이끌게 되었습니다. 처음해보는 팀원 관리에 고민이 많았는데 코칭으로 리더로서의 제 역할에 대해 깨닫게 되었습니다. 믿을 수 있는 리더가 되어주고 싶다는 목표가 생겼습니다.",
  },
];

const solutionData = [
  {
    id: 1,
    imgSrc: "/image/solution-0.webp",
    title: "전문가의 노하우를 반영한 AI 피드백 제공",
    desc: "심박수를 이용해 체력 증가에 대한 실제적인 데이터를 받아보세요.",
  },
  {
    id: 2,
    imgSrc: "/image/solution-0.webp",
    title: "전문가의 노하우를 반영한 AI 피드백 제공",
    desc: "심박수를 이용해 체력 증가에 대한 실제적인 데이터를 받아보세요.",
  },
  {
    id: 3,
    imgSrc: "/image/solution-0.webp",
    title: "전문가의 노하우를 반영한 AI 피드백 제공",
    desc: "심박수를 이용해 체력 증가에 대한 실제적인 데이터를 받아보세요.",
  },
  {
    id: 4,
    imgSrc: "/image/solution-0.webp",
    title: "전문가의 노하우를 반영한 AI 피드백 제공",
    desc: "심박수를 이용해 체력 증가에 대한 실제적인 데이터를 받아보세요.",
  },
  {
    id: 5,
    imgSrc: "/image/solution-0.webp",
    title: "전문가의 노하우를 반영한 AI 피드백 제공",
    desc: "심박수를 이용해 체력 증가에 대한 실제적인 데이터를 받아보세요.",
  },
];

export default function Slide({ type }: typeProp) {
  switch (type) {
    case "review":
      return (
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            direction={"horizontal"}
            loop={true}
            navigation={{
              nextEl: ".review-next-button",
              prevEl: ".review-prev-button",
            }}
            spaceBetween={40}
            slidesPerView={4}
            className="h-auto"
          >
            {reviewData.map((review) => (
              <SwiperSlide key={review.id} className="mb-[3rem]">
                <Review name={review.name} rank={review.rank} desc={review.desc} />
              </SwiperSlide>
            ))}
            <div className="flex items-center justify-center gap-[0.75rem]">
              <button className="review-prev-button flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-[0.25rem] border border-[#505050] bg-[#fff]">
                ←
              </button>
              <button className="review-next-button flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-[0.25rem] border border-[#505050] bg-[#fff]">
                →
              </button>
            </div>
          </Swiper>
        </div>
      );
    case "solution":
      return (
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Mousewheel, Pagination]}
            direction={"vertical"}
            loop={true}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            pagination={{
              el: ".solution-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
            }}
            mousewheel={true}
            spaceBetween={0}
            slidesPerView={1}
            className="relative z-10 h-[41.25rem]"
          >
            {solutionData.map((solution) => (
              <SwiperSlide key={solution.id}>
                <Solution
                  imgSrc={solution.imgSrc}
                  title={solution.title}
                  desc={solution.desc}
                />
              </SwiperSlide>
            ))}
            <div className="absolute top-1/2 right-[5rem] z-50 flex -translate-y-1/2 flex-col items-center justify-center gap-[10rem]">
              <button className="custom-prev-button flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50">
                ↑
              </button>
              <div className="solution-pagination flex w-[2rem] flex-col items-center gap-[0.5rem] py-[0.5rem]"></div>
              <button className="custom-next-button flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50">
                ↓
              </button>
            </div>
          </Swiper>
        </div>
      );
  }
}
