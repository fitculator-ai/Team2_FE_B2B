// import SectionLayout from "@/components/Layout/SectionLayout";
import ProcessSection from "@/components/ProcessSection";
import ContactUsSection from "@/components/ContactUsSection";
import FAQSection from "@/components/FAQSection";
import Review from "@/sections/Review";
import Solution from "@/sections/Solution";

export default function RootPage() {
  return (
    <>
      {/* <SectionLayout
        isFullPage="true"
        title="partnership Review"
        subTitle="Fit만의 솔루션"
        position="center"
        subTitleColor="point"
        description="수많은 기업에서 이미 사용하고 있어요요"
      >
        <h1>하위 내용</h1>
      </SectionLayout> */}
      <Review></Review>
      <Solution></Solution>
      <ProcessSection></ProcessSection>
      <FAQSection></FAQSection>
      <ContactUsSection></ContactUsSection>
    </>
  );
}
