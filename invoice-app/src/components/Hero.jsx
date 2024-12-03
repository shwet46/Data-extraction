export default function Hero({ onTryClick }) {
  return (
    <div className="relative bg-white flex overflow-hidden">
      <div className="max-w-100 mx-auto center">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 max-w-[800px] w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-[800px] px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tight text-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Extract Data in one go</span>
                <span className="block font-extrabold my-2 text-indigo-900">Your AI assistant</span>
              </h1>
              <p className="mt-3 text-base text-blue-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We extract your data from pdf, excel sheet to photos and generate the extracted data for you in tabular format
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-[100px] shadow">
                  <button
                    onClick={onTryClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-[100px] text-white bg-blue-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Start with Extraction
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}