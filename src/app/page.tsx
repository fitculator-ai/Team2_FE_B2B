import MainSection from "@/sections/MainSection";
import SubBannerSection from "@/sections/SubBannerSection";
import ReviewSection from "@/sections/ReviewSection";
import SolutionSection from "@/sections/SolutionSection";
import AboutSection from "@/sections/AboutSection";
import SlideSolutionSection from "@/sections/SlideSolutionSection";
import StatisticsSection from "@/sections/StatisticsSection";
import TeamInfoSection from "@/sections/TeamInfoSection";
import ProcessSection from "@/sections/ProcessSection";
import FAQSection from "@/sections/FAQSection";
import ContactUsSection from "@/sections/ContactUsSection";

export default function RootPage() {
  return (
    <>
      <MainSection />
      <SubBannerSection />
      <ReviewSection />
      <SolutionSection />
      <AboutSection />
      <SlideSolutionSection />
      <StatisticsSection />
      <TeamInfoSection />
      <ProcessSection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
