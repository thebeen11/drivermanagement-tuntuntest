import { FaSearch } from "react-icons/fa";
import DriverCard from "../../components/DriverCard";
import Header from "../../components/Header";
import PaginationNav from "../../components/PaginationNav";
import usePagination from "../../hooks/usePagination";
import useDriverStore from "../../store/useDriverStore";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Driver = () => {
  const { search, drivers } = useDriverStore((state) => ({
    search: state.search,
    drivers: state.drivers,
  }));

  const { paginatedData, isFirstPage, isLastPage, next, prev } =
    usePagination(drivers);

  return (
    <div className=" flex flex-col gap-5">
      <Header
        title="Driver Management"
        description="Data driver yang bekerja dengan Anda."
      >
        <div className=" flex flex-col lg:flex-row gap-3 w-full">
          <Input
            Icon={FaSearch}
            type="text"
            placeholder="Cari Driver"
            onChange={(v) => search(v.target.value)}
            className=""
          />

          <Link
            to={`/driver-management/add`}
            className=" flex items-center gap-2 bg-primary text-white font-light uppercase px-2 py-3"
          >
            Tambah Driver
            <GoPlus />
          </Link>
        </div>
      </Header>

      {paginatedData.length > 0 ? (
        <div className=" grid lg:grid-cols-5 grid-cols-1 gap-5 w-full">
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
