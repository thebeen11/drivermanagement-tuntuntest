import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface PaginationNavProps {
  isFirstPage: boolean;
  isLastPage: boolean;
  next: () => void;
  prev: () => void;
}

const PaginationNav = ({
  isFirstPage,
  isLastPage,
  next,
  prev,
}: PaginationNavProps) => {
  return (
    <div className=" w-full flex justify-center space-x-16">
      <button
        className=" flex gap-1 items-center font-semibold disabled:font-normal disabled:text-title disabled:cursor-not-allowed"
        disabled={isFirstPage}
        onClick={prev}
      >
        <MdNavigateBefore /> Previous Page
      </button>
      <button
        className=" flex gap-1 items-center font-semibold disabled:font-normal disabled:text-title disabled:cursor-not-allowed"
        disabled={isLastPage}
        onClick={next}
      >
        Next Page <MdNavigateNext />
      </button>
    </div>
  );
};

export default PaginationNav;
