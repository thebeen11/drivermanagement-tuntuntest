import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

// Define the properties for the PaginationNav component
interface PaginationNavProps {
  isFirstPage: boolean;
  isLastPage: boolean;
  next: () => void;
  prev: () => void;
}

// Functional component to display pagination navigation buttons
const PaginationNav = ({
  isFirstPage,
  isLastPage,
  next,
  prev,
}: PaginationNavProps) => {
  return (
    <div className=" w-full flex justify-center space-x-16">
      {/* Container with flex layout, centered content, and space between buttons */}
      <button
        className=" flex gap-1 items-center font-semibold disabled:font-normal disabled:text-title disabled:cursor-not-allowed"
        disabled={isFirstPage}
        onClick={prev} // Handle previous page click
      >
        <MdNavigateBefore /> {/* Previous page icon */}
        Previous Page
      </button>
      <button
        className=" flex gap-1 items-center font-semibold disabled:font-normal disabled:text-title disabled:cursor-not-allowed"
        disabled={isLastPage}
        onClick={next} //Handle next page click
      >
        Next Page
        <MdNavigateNext />
        {/* Next page icon */}
      </button>
    </div>
  );
};

export default PaginationNav;
