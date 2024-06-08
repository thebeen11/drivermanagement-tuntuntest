import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { DriverInterface } from "../interface/driver";
import { formatDate } from "../utils";

interface DriverCardProps {
  driver: DriverInterface;
}

const Identity = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className=" px-4 py-1">
      <p className=" text-xs text-title">{title}</p>
      <p className=" text-sm font-medium line-clamp-1 text-ellipsis ">
        {subTitle}
      </p>
    </div>
  );
};

const DriverCard = ({ driver }: DriverCardProps) => {
  return (
    <div className=" w-full bg-white flex-col py-3 shadow-sm">
      <div className=" py-3  border-b px-4 flex justify-between">
        <p className=" text-sm">
          Driver ID{" "}
          <span className=" text-primary">
            {driver.id.name ? driver.id.name : "Data Not Found"}
          </span>
        </p>
        <HiOutlineDotsHorizontal />
      </div>

      <div className="p-4">
        <img className=" w-20 rounded-full" src={driver.picture.large} alt="" />
      </div>

      <Identity
        title="Nama Driver"
        subTitle={`${driver.name.first} ${driver.name.last}`}
      />

      <Identity title="Telepon" subTitle={driver.phone} />
      <Identity title="Email" subTitle={driver.email} />
      <Identity title="Tanggal lahir" subTitle={formatDate(driver.dob.date)} />
    </div>
  );
};

export default DriverCard;
