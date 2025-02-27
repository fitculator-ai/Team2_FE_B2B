import SectionLayout from "@/components/Layout/SectionLayout";
import Slide from "@/components/Swiper/Swiper";

export default function Review() {
  return (
    <SectionLayout
      isFullPage={false}
      title="FITCULATOR 만의 솔루션"
      position="left"
      subTitleColor="point"
    >
      <Slide type="solution" />
    </SectionLayout>
  );
}
