import { FaSearch } from "react-icons/fa";
import DriverCard from "../../components/DriverCard";
import Header from "../../components/Header";
import PaginationNav from "../../components/PaginationNav";
import usePagination from "../../hooks/usePagination";
import useStore from "../../store";
import { GoPlus } from "react-icons/go";

const Driver = () => {
  const { search, drivers } = useStore((state) => ({
    search: state.search,
    drivers: state.drivers,
  }));

  const { paginatedData, isFirstPage, isLastPage, next, prev } =
    usePagination(drivers);

  return (
    <div className=" flex flex-col gap-5">
      <Header>
        <div className=" flex gap-3">
          <div className=" flex gap-2 items-center border border-title px-2 py-3 rounded-sm">
            <FaSearch className=" text-primary" />
            <input
              className=" border-none outline-none font-light"
              placeholder="Cari Driver"
              type="text"
              onChange={(v) => search(v.target.value)}
            />
          </div>
          <button className=" flex items-center gap-2 bg-primary text-white font-light uppercase px-2 py-3">
            Tambah Driver
            <GoPlus />
          </button>
        </div>
      </Header>

      {paginatedData.length > 0 ? (
        <div className=" grid grid-cols-5 gap-5 w-full">
          {paginatedData?.map((driver) => (
            <DriverCard key={driver.cell} driver={driver} />
          ))}
        </div>
      ) : (
        <>
          <div className=" w-full justify-center flex">Data Not Found</div>
        </>
      )}

      <PaginationNav
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default Driver;
