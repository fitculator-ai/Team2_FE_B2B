type SectionLayoutProps = {
  isFullPage: "true" | "false";
  title?: string;
  subTitle?: string;
  position?: "left" | "center";
  description?: string;
  subTitleColor?: "base" | "point";
  children: React.ReactNode;
};

export default function SectionLayout({
  isFullPage,
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
    <section className={`px-20 py-14 ${fullPage}`}>
      {(title || subTitle) && (
        <div className={`pb-10 ${titlePosition}`}>
          {title && <h2 className="text-[#4FD5FF]">{title}</h2>}
          {subTitle && <h3 className={`text-3xl ${subColor}`}>{subTitle}</h3>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
