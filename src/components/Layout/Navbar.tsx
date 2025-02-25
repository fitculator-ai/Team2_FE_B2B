export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 flex w-full justify-between bg-white p-4">
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
