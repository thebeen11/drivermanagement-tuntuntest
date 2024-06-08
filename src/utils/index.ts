import dayjs from "dayjs";

export const formatDate = (inputDate: string) => {
  const date = dayjs(inputDate);
  return date.format("DD-MM-YYYY");
};
