import { Response } from "../../interface/driver";
import { axiosInstance } from "../instance";

export async function getDrivers(count: number) {
  // Send a GET request to the API endpoint with specified count
  const res = await axiosInstance.get<Response>("/api", {
    params: { results: count }, // Include count as a query parameter
  });

  // Return the results from the response
  return res.data.results;
}
