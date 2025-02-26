export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="mx-auto w-xs rounded-md bg-gray-300 p-2 text-white hover:cursor-pointer hover:bg-[#4FD5FF]"
    >
      {children}
    </button>
  );
}
