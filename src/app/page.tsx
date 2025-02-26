import Review from "@/sections/Review";
import Solution from "@/sections/Solution";
import StatisticsSection from "@/components/StatisticsSection";
import TeamInfoSection from "@/components/TeamInfoSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactUsSection from "@/components/ContactUsSection";

export default function RootPage() {
  return (
    <>
      {/* <h1 className="text-xl font-bold underline"> Root Page!</h1> */}
      <Review />
      <Solution />
      <StatisticsSection />
      <TeamInfoSection />
      <ProcessSection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
