import { Metadata } from "next";
import Swiper from "@/components/Swiper/Swiper";

export const metadata: Metadata = {
  title: "Fitculator",
  description: "운동에 진심인 당신을 위한 운동량 계산기",
};

export default function RootPage() {
  return (
    <>
      <h1 className="text-xl font-bold underline"> Root Page!</h1>
      <Swiper />
    </>
  );
}
