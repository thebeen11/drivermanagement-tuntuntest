import { DriverInterface } from "../interface/driver";
import { formatDate } from "../utils";

interface DriverCardProps {
  driver: DriverInterface;
}

const Identity = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};

const DriverCard = ({ driver }: DriverCardProps) => {
  return (
    <div className=" w-full bg-white flex-col">
      <div>
        <p>
          Driver ID <span>{driver.id.value}</span>
        </p>
      </div>

      <div>
        <img src={driver.picture.thumbnail} alt="" />
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
