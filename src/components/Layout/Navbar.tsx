import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-[#F9F9F9] px-[1.25rem] py-[1.25rem] md:justify-between md:px-15 md:py-5 lg:px-7">
      <Link href="/#home">
        <Image
          src="/image/logo_text.webp"
          alt="fitculator 로고"
          aria-label="핏큘레이터"
          width={162}
          height={25}
        />
      </Link>

      <ul className="flex gap-[0.5rem] text-[0.8rem] font-medium md:gap-10 md:text-[1rem]">
        <li>
          <a href="\">스튜디오 제휴</a>
        </li>
        <li>
          <Link href="/#contactUs">문의하기</Link>
        </li>
      </ul>
    </nav>
  );
}
