import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../../public/image/logo_text.png";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 flex w-full justify-between bg-white px-6 py-5 sm:px-10 md:px-12 lg:px-18">
      <Link href="/#home">
        <Image
          src={mainLogo}
          className="h-[1.5rem] w-[9.625rem] md:h-[1.5625rem] md:w-[10.125rem]"
          alt="fitculator 로고"
          aria-label="핏큘레이터"
        />
      </Link>

      <ul className="flex gap-5 font-medium sm:gap-6 md:gap-10">
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
