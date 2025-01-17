export const DownloadButton = () => {
  return (
    <a
      href="/Rudi_Aj_CV.pdf"
      download="Rudi_Aj_CV.pdf"
      className={
        "whitespace-nowrap rounded-full border border-black px-4 py-2 text-black font-medium text-sm tracking-wide transition-all duration-300 ease-out hover:bg-black hover:text-white cursor-pointer inline-block bg-white"
      }
    >
      Get Resume (PDF)
    </a>
  );
};
