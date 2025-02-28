import Image from "next/image";
import Form from "./Form";
import mainLogo from "../../public/image/logo_text.png";
import SectionLayout from "./Layout/SectionLayout";

export default function ContactUsSection() {
  return (
    <SectionLayout isFullPage={false}>
      <h1 className="sr-only">문의하기</h1>
      <article className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
        <h2 className="mt-20 flex flex-col items-center text-center max-[1170px]:flex-col min-[1171px]:flex-row min-[1171px]:text-left">
          <Image
            src={mainLogo}
            className="h-12 w-72"
            width={600}
            height={600}
            alt="fitculator 로고"
            aria-label="핏큘레이터"
          />
          <span className="mt-2 inline-block text-3xl font-black min-[1171px]:ml-3 md:mt-0">
            와 함께 해보세요
          </span>
        </h2>

        <Form />
      </article>
    </SectionLayout>
  );
}
