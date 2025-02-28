export default function ProcessStep({ title, content }) {
  return (
    <div className="flex h-full min-h-[18.5rem] max-w-[500px] flex-col gap-6 bg-[url(/svg/process_diagram.svg)] bg-contain bg-no-repeat px-5 pt-7 break-normal">
      <span className="block text-xl font-semibold text-[#1E88E5]">{title}</span>
      <span className="text-md block font-light">{content}</span>
    </div>
  );
}
