export default function Button({ children, type, isActive }) {
  return (
    <button
      type={type}
      className="mx-auto w-xs cursor-pointer rounded-md bg-[#1E88E5] p-2 text-white disabled:cursor-default disabled:bg-gray-300"
      disabled={isActive}
    >
      {children}
    </button>
  );
}
