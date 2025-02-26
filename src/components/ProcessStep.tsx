export default function ProcessStep({ title, content }) {
  return (
    <>
      <div className="top-0 flex h-80 flex-col gap-6 bg-[url(../../public/svg/process.svg)] bg-contain bg-no-repeat px-5 pt-7 break-normal">
        <span className="block text-xl font-semibold text-[#4FD5FF]">{title}</span>
        <span className="text-md block font-light">{content}</span>
      </div>
    </>
  );
}
