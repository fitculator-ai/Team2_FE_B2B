import StatisticsSection from "@/components/StatisticsSection";
import TeamInfoSection from "@/components/TeamInfoSection";
import ProcessSection from "@/components/ProcessSection";
import ContactUsSection from "@/components/ContactUsSection";
import FAQSection from "@/components/FAQSection";

export default function RootPage() {
  return (
    <>
      {/* <h1 className="text-xl font-bold underline"> Root Page!</h1> */}
      <StatisticsSection />
      <TeamInfoSection />
      <ProcessSection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
