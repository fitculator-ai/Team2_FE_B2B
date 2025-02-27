import Image from "next/image";
import SectionLayout from "@/components/Layout/SectionLayout";

export default function MainSection() {
  return (
    <SectionLayout sectionId="home">
      <div className="relative">
        <div className="h-full pt-[20vh]">
          <h1 className="pb-2 text-[1.25rem] font-bold md:text-[1.875rem] lg:text-[2.5rem]">
            FITCULATOR 기업 복지 솔루션
          </h1>
          <p className="md:text-[1.5rem] lg:text-[1.625rem]">
            과학적으로 증명된 적정 운동량 관리로 임직원 건강을 혁신하세요
          </p>
        </div>
        <Image
          src="/image/bg_main.webp"
          alt="밝은 분위기의 그룹 트레이닝 회원들"
          width={0}
          height={0}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 350px, 250px"
          className="objet-cover absolute -top-9 left-[40vh] h-full w-full"
        />
      </div>
    </SectionLayout>
  );
}
