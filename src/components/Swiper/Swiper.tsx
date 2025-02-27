"use client";

import React from "react";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "@/components/Swiper/Review/Review";
import Solution from "@/components/Swiper/Solution/Solution";
import Team from "@/components/Swiper/Team/Team";
import Icon from "@/components/Icon/Icon";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface typeProp {
  type: "review" | "solution" | "team";
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

const teamData = [
  {
    id: 1,
    name: "류현지",
    nickname: "@ryoohyun",
    careers: [
      "연세대학교 체육학과 박사 졸업",
      "연세대학교 체육교육학과 강사",
      "국민체육진흥공단 건강운동관리사 연수원 강사",
    ],
  },
  {
    id: 2,
    name: "박영진",
    nickname: "@vpak.9",
    careers: [
      "연세대학교 체육학과 석사 졸업",
      "연세대학교 융합체육과학선도 연구소 보조 연구원",
      "대한축구협회 피트니스 트레이닝 자격 보유",
    ],
  },
  {
    id: 3,
    name: "최재하",
    nickname: "@jaeha_pool",
    careers: [
      "서울대학교 체육교육과 학사",
      "National Academy of Sport Medicine Personal Trainer Certificate",
      "University of Arizona Fitness & Wellness Coach",
    ],
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
            spaceBetween={30}
            slidesPerView={1.5}
            className="h-auto"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
          >
            {reviewData.map((review) => (
              <SwiperSlide key={review.id} className="mb-[3rem]">
                <Review name={review.name} rank={review.rank} desc={review.desc} />
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
        </div>
      );
    case "solution":
      return (
        <div className="relative h-full w-full">
          <Swiper
            modules={[Navigation, Mousewheel, Pagination]}
            direction={"horizontal"}
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
            speed={1000}
            className="relative z-10 h-full lg:h-[41.25rem]"
            breakpoints={{
              768: {
                direction: "horizontal",
              },
              1024: {
                direction: "vertical",
              },
            }}
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
            <div className="absolute right-1/2 bottom-[2rem] z-30 flex translate-x-1/2 flex-row items-center justify-center gap-[1rem] md:bottom-[1rem] lg:top-1/2 lg:right-[3rem] lg:-translate-y-1/2 lg:flex-col lg:items-center lg:justify-center lg:gap-[5rem]">
              <button className="custom-prev-button flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50">
                <Icon name="icon-arrow-top" color="#000" fontSize={1} />
              </button>
              <div
                className="solution-pagination flex flex-row items-center gap-[0.5rem] py-[0.5rem] lg:w-[2rem] lg:translate-y-0 lg:transform-none lg:flex-col"
                style={{ transform: "none" }}
              ></div>
              <button className="custom-next-button flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50">
                <Icon name="icon-arrow-down" color="#000" fontSize={1} />
              </button>
            </div>
          </Swiper>
        </div>
      );

    case "team":
      return (
        <div className="mx-auto w-full max-w-[1200px]">
          <Swiper
            modules={[Navigation]}
            direction={"horizontal"}
            navigation={{
              nextEl: ".team-next-button",
              prevEl: ".team-prev-button",
            }}
            spaceBetween={30}
            slidesPerView={1.5}
            className="h-auto"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {teamData.map((team) => (
              <SwiperSlide key={team.id} className="mb-[3rem]">
                <Team name={team.name} nickname={team.nickname} careers={team.careers} />
              </SwiperSlide>
            ))}

            <div className="flex items-center justify-center gap-[0.75rem]">
              <button className="team-prev-button flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-[0.25rem] border border-[#505050] bg-[#fff]">
                ←
              </button>
              <button className="team-next-button flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-[0.25rem] border border-[#505050] bg-[#fff]">
                →
              </button>
            </div>
          </Swiper>
        </div>
      );
  }
}
