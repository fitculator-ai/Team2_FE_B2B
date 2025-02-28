import SectionLayout from "@/components/Layout/SectionLayout";

import Slide from "@/components/Swiper/Swiper";

export default function TeamInfoSection() {
  return (
    <SectionLayout
      title="Professional"
      subTitle="운동 생리학 박사가 직접 만들고 설계한 FITCULATOR"
    >
      <Slide type="team" />
    </SectionLayout>
  );
}
