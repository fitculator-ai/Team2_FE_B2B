import ReviewSection from "@/sections/ReviewSection";
import SolutionSection from "@/sections/SolutionSection";
import AboutSection from "@/sections/AboutSection";
import SlideSolutionSection from "@/sections/SlideSolutionSection";
import StatisticsSection from "@/components/StatisticsSection";
import TeamInfoSection from "@/sections/TeamInfoSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactUsSection from "@/components/ContactUsSection";

export default function RootPage() {
  return (
    <>
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
