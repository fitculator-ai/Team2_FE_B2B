import Image from "next/image";
import mainLogo from "../../../public/image/logo_text.png";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 flex w-full justify-between bg-white p-4">
      <button>
        <Image
          src={mainLogo}
          className="h-[1.5625rem] w-[10.125rem]"
          width={162}
          height={25}
          alt="fitculator 로고"
          aria-label="핏큘레이터"
        />
      </button>

      <ul className="flex gap-8">
        <li>
          <a href="\">스튜디오 제휴</a>
        </li>
        <li>
          <button>문의하기</button>
        </li>
      </ul>
    </nav>
  );
}
