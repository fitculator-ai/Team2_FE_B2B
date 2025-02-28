import Image from "next/image";

export default function MainSection() {
  return (
    <section id="home" className="relative h-screen w-screen">
      <div className="relative z-20 h-full px-7 pt-[64vh] md:px-15 md:pt-[36vh]">
        <h1 className="text-[1.25rem] font-bold md:pb-2 md:text-[1.875rem] lg:text-[2.5rem]">
          <span className="font-extrabold text-[#43A047]">FITCULATOR</span> 기업 복지
          솔루션
        </h1>
        <p className="md:text-[1.5rem] lg:text-[1.625rem]">
          과학적으로 증명된 적정 운동량 관리로 임직원 건강을 혁신하세요
        </p>
      </div>

      <div>
        <div className="absolute top-0 z-10 h-full bg-gradient-to-r from-white via-white to-transparent md:w-[54%]"></div>

        <Image
          src="/image/bg_main.webp"
          alt="밝은 분위기의 그룹 트레이닝 회원들"
          width={0}
          height={0}
          sizes="(min-width: 1024px) 1400px, (min-width: 768px) 1100px, 700px"
          className="objet-cover absolute top-0 z-0 h-[58%] w-full md:right-0 md:h-full md:w-[72%]"
        />
      </div>
    </section>
  );
}
