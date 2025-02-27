import SectionLayout from "./SectionLayout";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../../public/image/logo_text.png";
import Icon from "../Icon/Icon";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9]">
      <SectionLayout isFullPage={false}>
        <nav className="flex flex-col gap-11 pb-10 md:flex-row md:justify-between md:gap-12 md:pb-20">
          <Link href="/#home">
            <Image
              src={mainLogo}
              className="h-[1.75rem] w-[11.0625rem]"
              alt="fitculator 로고"
              aria-label="핏큘레이터"
            />
          </Link>

          <ul className="flex flex-col gap-3 font-bold text-[#625C5C] md:flex-row md:gap-6 lg:gap-9 lg:text-lg">
            <li>
              <a href="https://airtable.com/apprBZkCTk4gpMmSW/pagWPcKsiuiwaS8zs/form">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="https://fitculator.notion.site/Team-Fitculator-e403f49b2528426fb2447835567eadd0">
                TEAM
              </a>
            </li>
            <li>
              <a href="https://airtable.com/apprBZkCTk4gpMmSW/pagWPcKsiuiwaS8zs/form">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy-policy">개인정보처리방침</a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col-reverse gap-10 text-[#625C5C] md:flex-row md:justify-between">
          <ul>
            <li>Fitculator (핏큘레이터)</li>
            <li>사업자등록번호: 262-67-00523 | 대표:류현지</li>
            <li>통신판매신고: 2023-서울서대문-0576</li>
            <li>고객센터: 010-7977-1101</li>
            <li>서울특별시 중구 청계천로 100 (시그니처타워) 서관 10층 1029호</li>
            <li>©2024 Fitculator. All rights reserved.</li>
          </ul>

          <ul className="flex gap-4">
            <li>
              <a href="mailto:info@fitculator.io">
                <Icon name="icon-email" fontSize={1.3}></Icon>
              </a>
            </li>
            <li>
              <a href="https://www.threads.net/@fitculator_official">
                <Icon name="icon-threads" fontSize={1.3}></Icon>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/fitculator_official/">
                <Icon name="icon-instagram" fontSize={1.3}></Icon>
              </a>
            </li>
          </ul>
        </div>
      </SectionLayout>
    </footer>
  );
}
