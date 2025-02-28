interface SpeechBubbleType {
  id?: number;
  text: string;
}

export default function SpeechBubble({ text }: SpeechBubbleType) {
  return (
    <div className="relative transform rounded-[0.5rem] bg-[rgba(79,213,255,0.3)] px-[2rem] py-[1rem] text-center font-bold whitespace-nowrap text-[#000] md:text-[1.15rem] lg:text-[1.25rem] [&:nth-child(2)]:md:translate-x-[6rem] [&:nth-child(3)]:md:translate-x-[3rem]">
      {text}
    </div>
  );
}
