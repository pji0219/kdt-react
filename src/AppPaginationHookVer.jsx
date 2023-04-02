import usePagination from "./components/pagination/customHookVer/usePagination";
import List from "./components/pagination/List";
import Pagination from "./components/pagination/Pagination";

function AppPaginationHookVer() {
  const [postPerPage, currentPage, pageNumbers, handlePageChange] =
    usePagination("data/mock_data.json");

  return (
    <>
      <List data={postPerPage} />
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default AppPaginationHookVer;
