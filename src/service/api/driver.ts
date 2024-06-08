import { Response } from "../../interface/driver";
import { axiosInstance } from "../instance";

export async function getDrivers(count: number) {
  const res = await axiosInstance.get<Response>("/api", {
    params: { results: count },
  });
  return res.data.results;
}
