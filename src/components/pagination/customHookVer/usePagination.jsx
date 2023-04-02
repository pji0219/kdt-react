import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "./postApi";

export default function usePagination(url) {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const totalPage = data.length % 2 !== 0 ? Math.ceil(data.length / 2) : data.length / 2;
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  useEffect(() => {
    const fetchPost = async url => {
      const res = await fetchData(url);
      setData(res);
    };

    fetchPost(url);
  }, [url]);

  const handlePageChange = pageNumber => {
    setSearchParams({ page: pageNumber });
  };

  const postPerPage = data.slice((Number(currentPage) - 1) * 2, Number(currentPage) * 2);

  return [postPerPage, currentPage, pageNumbers, handlePageChange];
}
