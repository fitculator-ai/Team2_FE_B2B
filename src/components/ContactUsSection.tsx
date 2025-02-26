import Image from "next/image";
import Form from "./Form";
import mainLogo from "../../public/image/logo_text.png";

export default function ContactUsSection() {
  return (
    <section className="flex flex-row items-start justify-between">
      <h1 className="sr-only">문의하기</h1>
      <h2 className="mt-36 flex flex-row items-center">
        <Image
          src={mainLogo}
          className="h-12 w-72"
          width={600}
          height={600}
          alt="fitculator 로고"
          aria-label="핏큘레이터"
        />
        <span className="inline-block text-3xl font-black">와 함께 해보세요</span>
      </h2>

      <Form />
    </section>
  );
}
