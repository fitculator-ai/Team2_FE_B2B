export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <button>로고</button>
      <ul className="flex gap-4">
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
