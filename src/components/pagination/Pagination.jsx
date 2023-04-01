import "./Pagination.css";

const Pagination = ({ currentPage, pageNumbers, handlePageChange }) => {
  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <button
            className={`page ${String(number) === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(String(number))}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
