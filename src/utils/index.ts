import dayjs from "dayjs";
import { getDrivers } from "../service/api/driver";
import { DriverInterface } from "../interface/driver";

export const formatDate = (inputDate: string) => {
  const date = dayjs(inputDate);
  return date.format("DD-MM-YYYY");
};

export const getData = async (): Promise<DriverInterface[]> => {
  const isExist = localStorage.getItem("driver");

  if (!isExist) {
    const res = await getDrivers(30);
    localStorage.setItem("driver", JSON.stringify(res));
    return res;
  }
  try {
    return JSON.parse(isExist);
  } catch (error) {
    return [];
  }
};
