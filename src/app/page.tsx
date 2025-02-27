// import SectionLayout from "@/components/Layout/SectionLayout";
import ProcessSection from "@/components/ProcessSection";
import ContactUsSection from "@/components/ContactUsSection";
import FAQSection from "@/components/FAQSection";
import ReviewSection from "@/sections/ReviewSection";
import SlideSolutionSection from "@/sections/SlideSolutionSection";
import AboutSection from "@/sections/AboutSection";
import SolutionSection from "@/sections/SolutionSection";

export default function RootPage() {
  return (
    <>
      <ReviewSection></ReviewSection>
      <SolutionSection></SolutionSection>
      <AboutSection></AboutSection>
      <SlideSolutionSection></SlideSolutionSection>
      <ProcessSection></ProcessSection>
      <FAQSection></FAQSection>
      <ContactUsSection></ContactUsSection>
    </>
  );
}
