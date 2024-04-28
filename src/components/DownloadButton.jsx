function DownloadButton() {
  const handleDownload = () => {
    console.log("downloading started");
  };
  return (
    <button
      onClick={handleDownload}
      className="mt-10 h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700"
    >
      Download the book
    </button>
  );
}

export default DownloadButton;
