type SectionLayoutProps = {
  isFullPage?: boolean;
  title?: string;
  subTitle?: string;
  position?: "left" | "center";
  description?: string;
  subTitleColor?: "base" | "point";
  children?: React.ReactNode;
};

export default function SectionLayout({
  isFullPage = true,
  title,
  subTitle,
  position = "left",
  description,
  children,
  subTitleColor = "base",
}: SectionLayoutProps) {
  const titlePosition = position === "left" ? "text-left" : "text-center";
  const subColor = subTitleColor === "base" ? "text-black" : "text-[#4FD5FF]";
  const fullPage = isFullPage ? "h-screen w-screen" : "";

  return (
    <section
      className={`px-[20px] py-[40px] md:px-15 lg:px-7 lg:py-[5.625rem] ${fullPage}`}
    >
      {(title || subTitle) && (
        <div className={`pb-10 ${titlePosition}`}>
          {title && <h2 className="text font-bold text-[#4FD5FF]">{title}</h2>}
          {subTitle && (
            <h3 className={`text-2xl font-semibold ${subColor}`}>{subTitle}</h3>
          )}
          {description && <p className="text-sm">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

{
  /* <SectionLayout
        isFullPage="true"
        title="partnership Review"
        subTitle="Fit만의 솔루션"
        position="center"
        subTitleColor="point"
        description="수많은 기업에서 이미 사용하고 있어요요"
      >
        <h1>하위 내용</h1>
      </SectionLayout> */
}
