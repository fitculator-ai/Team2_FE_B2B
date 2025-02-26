import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactUsSection from "@/components/ContactUsSection";

export default function RootPage() {
  return (
    <>
      {/* <h1 className="text-xl font-bold underline"> Root Page!</h1> */}
      <ProcessSection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
