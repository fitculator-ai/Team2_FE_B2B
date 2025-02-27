interface teamType {
  name: string;
  nickname: string;
  careers: [];
  image: string;
}

export default function Team({ name, nickname, careers, image }: teamType) {
  return (
    <div className="rounded-2xl px-8 py-4 shadow-lg">
      <div className="flex gap-2 pb-5">
        <div className="h-10 w-10 rounded-[100%] bg-pink-400"></div>

        <div>
          <p>{name}</p>
          <p className="text-sm">{nickname}</p>
        </div>
      </div>

      <ul className="list-disc pl-5">
        {careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
    </div>
  );
}
