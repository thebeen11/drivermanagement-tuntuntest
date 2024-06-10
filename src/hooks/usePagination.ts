import { useState } from "react";

const usePagination = <T>(data: T[]) => {
  const [pageNumber, setPageNumber] = useState(1);

  const pageSize: number = 5;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / pageSize);

  // Check if the page is first or last
  const isFirstPage = pageNumber === 1 || totalPages == 0;
  const isLastPage = pageNumber === totalPages || totalPages == 0;

  // Paginate the data
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  // next page if not last page
  const next = () => {
    if (!isLastPage) {
      setPageNumber((prev) => prev + 1);
    }
  };

  // prev page if not first page
  const prev = () => {
    if (!isFirstPage) {
      setPageNumber((prev) => prev - 1);
    }
  };

  return {
    paginatedData,
    isFirstPage,
    isLastPage,
    next,
    prev,
  };
};

export default usePagination;
