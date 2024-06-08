import { useCallback, useEffect } from "react";
import { getDrivers } from "../service/api/driver";
import useStore from "../store";

const useDriver = () => {
  const setDriverData = useStore((state) => state.setDriverData);

  const getData = useCallback(async () => {
    try {
      const res = await getDrivers(30);
      setDriverData(res);
      localStorage.setItem("driver", JSON.stringify(res));
    } catch (error) {
      console.error(error);
    }
  }, [setDriverData]);

  useEffect(() => {
    const isExist = localStorage.getItem("driver");

    if (!isExist) {
      getData();
    } else {
      try {
        setDriverData(JSON.parse(isExist));
      } catch (error) {
        console.log(error);
      }
    }
  }, [setDriverData, getData]);
};

export default useDriver;
