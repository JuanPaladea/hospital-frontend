interface PaginationComponentProps {
  page: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({ page, handlePrevious, handleNext }) => {
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
        Page {page}
      </span>
      <button
        onClick={handleNext}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}