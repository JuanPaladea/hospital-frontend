interface PaginationComponentProps {
  page: number;
  size: number;
  totalPages: number;
  handleSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePrevious: () => void;
  handleNext: () => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({ page, size, totalPages, handleSize, handlePrevious, handleNext }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={handlePrevious}
        disabled={page <= 1}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={page >= totalPages}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
      <div className="ml-4">
        <select value={size} onChange={handleSize} className="border p-2 rounded">
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>
    </div>
  )
}