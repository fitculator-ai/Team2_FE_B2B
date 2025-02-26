export default function Footer() {
  return (
    <footer>
      <nav className="flex justify-between pb-4">
        <button>로고</button>

        <ul className="flex gap-1">
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

      <div className="flex justify-between">
        <ul>
          <li>Fitculator (핏큘레이터)</li>
          <li>사업자등록번호: 262-67-00523 | 대표:류현지</li>
          <li>통신판매신고: 2023-서울서대문-0576</li>
          <li>고객센터: 010-7977-1101</li>
          <li>서울특별시 중구 청계천로 100 (시그니처타워) 서관 10층 1029호</li>
          <li>©2024 Fitculator. All rights reserved.</li>
        </ul>

        <ul className="flex gap-1">
          <li>
            <a href="mailto:info@fitculator.io">메시지i</a>
          </li>
          <li>
            <a href="https://www.threads.net/@fitculator_official">오피셜i</a>
          </li>
          <li>
            <a href="https://instagram.com/fitculator_official/">인스타i</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
