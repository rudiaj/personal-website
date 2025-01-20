export const BioContent = () => {
  return (
    <div className="mb-6">
      <h1 className="font-bold text-lg tracking-wide">Rudi Aj</h1>
      <h2 className="font-medium text-base tracking-wide">
        Senior Frontend Engineer{" "}
        <span className="whitespace-nowrap">(Rijeka, Croatia)</span>
      </h2>
      <p className="font-medium text-sm tracking-wide text-black/60 mb-4">
        10 years of experience specialising in Next.js and React.
      </p>
      <div className="flex flex-col items-start">
        <a
          href="mailto:aj.rudi@gmail.com"
          className="font-medium text-base tracking-wide hover:text-black/70 transition-colors duration-200"
          aria-label="Email me"
        >
          aj.rudi@gmail.com
        </a>
        <a
          href="tel:+385977929943"
          className="font-medium text-base tracking-wide hover:text-black/70 transition-colors duration-200"
          aria-label="Call me"
        >
          +385 97 792 9943
        </a>
      </div>
    </div>
  );
};
