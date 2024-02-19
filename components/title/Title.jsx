export function Title({ title, subtitle }) {
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="320:text-2xl 388:text-3xl text-heading md:text-4xl lg:text-6xl">
        {title}
      </h2>
      <span className="text-base font-medium text-primary-500">{subtitle}</span>
    </div>
  );
}
