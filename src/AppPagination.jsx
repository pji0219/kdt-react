import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Pagination from "./components/pagination/Pagination";
import List from "./components/pagination/List";

function AppPagination() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const totalPages = data.length / 2;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    setData(DUMMY_DATA);
  }, []);

  const dataPerPage = data.slice((Number(currentPage) - 1) * 2, Number(currentPage) * 2);

  const handlePageChange = pageNumber => {
    setSearchParams({ page: pageNumber });
  };

  return (
    <>
      <List data={dataPerPage} />
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default AppPagination;

const DUMMY_DATA = [
  {
    id: 1,
    text: 1,
  },
  {
    id: 2,
    text: 2,
  },
  {
    id: 3,
    text: 3,
  },
  {
    id: 4,
    text: 4,
  },
  {
    id: 5,
    text: 5,
  },
  {
    id: 6,
    text: 6,
  },
  {
    id: 7,
    text: 7,
  },
  {
    id: 8,
    text: 8,
  },
  {
    id: 9,
    text: 9,
  },
  {
    id: 10,
    text: 10,
  },
];
