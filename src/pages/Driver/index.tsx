import DriverCard from "../../components/DriverCard";
import Header from "../../components/Header";
import usePagination from "../../hooks/usePagination";
import useStore from "../../store";

const Driver = () => {
  const { search, drivers } = useStore((state) => ({
    search: state.search,
    drivers: state.drivers,
  }));

  const { paginatedData, isFirstPage, isLastPage, next, prev } =
    usePagination(drivers);

  return (
    <div>
      <Header title="Driver" subTitle="ini driver list">
        <input
          className=" border border-red-300"
          type="text"
          onChange={(v) => search(v.target.value)}
        />
      </Header>
      <div className=" grid grid-cols-5">
        {paginatedData?.map((driver) => (
          <DriverCard key={driver.cell} driver={driver} />
        ))}

        <button disabled={isFirstPage} onClick={prev}>
          prev
        </button>
        <button disabled={isLastPage} onClick={next}>
          next
        </button>
        <div>
          {isLastPage}
          {isFirstPage}
        </div>
      </div>
    </div>
  );
};

export default Driver;
