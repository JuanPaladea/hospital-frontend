interface PaginationComponentProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  setPage,
  totalPages,
  handlePrevious,
  handleNext,
}) => {
  return (
    <section className="bg-gray-50  p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 ">
              Showing
              <span className="font-semibold text-gray-900  mx-2">{page}</span>
              of
              <span className="font-semibold text-gray-900  mx-2">
                {totalPages}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              {page > 1 && (
                <li>
                  <button
                    onClick={handlePrevious}
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              )}
              {page > 1 && (
                <li>
                  <button
                    onClick={() => setPage(page - 1)}
                    className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                  >
                    {page - 1}
                  </button>
                </li>
              )}
              <li>
                <button className="flex items-center justify-center h-full py-1.5 px-3 text-gray-800 bg-white border border-gray-300">
                  {page}
                </button>
              </li>
              {page + 1 <= totalPages && (
                <li>
                  <button
                    onClick={() => setPage(page + 1)}
                    className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                  >
                    {page + 1}
                  </button>
                </li>
              )}
              {page < totalPages && (
                <li>
                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center h-full py-1.5 px-3 -ml-px text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
