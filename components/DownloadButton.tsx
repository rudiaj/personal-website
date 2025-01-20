export const DownloadButton = () => {
  return (
    <a
      href="/Rudi_Aj_CV.pdf"
      download="Rudi_Aj_CV.pdf"
      className="whitespace-nowrap rounded-full border border-black px-4 py-2 text-black font-medium text-sm tracking-wide transition-all duration-300 ease-out hover:bg-black hover:text-white active:scale-95 cursor-pointer inline-block bg-white no-underline touch-manipulation focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      aria-label="Download Resume (PDF)"
      role="button"
      rel="noopener noreferrer"
    >
      Get Resume (PDF)
    </a>
  );
};
