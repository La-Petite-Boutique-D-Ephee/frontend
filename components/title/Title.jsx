export function Title({ title, subtitle, styleTitle, h2, styleSubtitle }) {
  return (
    <div className={`flex flex-col gap-4 text-center ${styleTitle}`}>
      <h2
        className={`text-heading 320:text-2xl 388:text-3xl md:text-4xl lg:text-6xl ${h2}`}
      >
        {title}
      </h2>
      <span
        className={`text-base font-medium text-primary-500 ${styleSubtitle}`}
      >
        {subtitle}
      </span>
    </div>
  );
}
