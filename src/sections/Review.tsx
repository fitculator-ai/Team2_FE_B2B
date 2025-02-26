import SectionLayout from "@/components/Layout/SectionLayout";
import Slide from "@/components/Swiper/Swiper";

export default function Review() {
  return (
    <SectionLayout
      isFullPage="true"
      title="Partnership Review"
      position="left"
      subTitleColor="point"
      description="수많은 기업에서 이미 FITCLATOR를 경험하고 있습니다."
    >
      <Slide type="review" />
    </SectionLayout>
  );
}
