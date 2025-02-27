interface teamType {
  name: string;
  nickname: string;
  careers: string[];
  image: string;
}

export default function Team({ name, nickname, careers, image}: teamType) {
  return (
    <div className="h-[410px] max-w-[358px] rounded-2xl px-8 py-4 shadow-lg">
      <div className="flex items-center gap-2 pb-5">
        <div className="h-14 w-14 rounded-[100%] bg-gray-200"></div>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{nickname}</p>
          <img src={image} alt={name} width={10} height={10}/>
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
