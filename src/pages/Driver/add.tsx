import { FaUser } from "react-icons/fa";
import Header from "../../components/Header";
import { MdEmail } from "react-icons/md";

const AddDriver = () => {
  return (
    <div>
      <Header isDescription={false}></Header>

      <div className=" bg-white rounded-sm w-full p-6 mt-10">
        <div className=" flex gap-2 items-center border border-title px-2 py-3 rounded-sm my-2">
          <FaUser className=" text-primary" />

          <input
            className=" border-none outline-none font-light"
            placeholder="Nama Driver"
            type="text"
          />
        </div>
        <div className=" flex gap-2 items-center border border-title px-2 py-3 rounded-sm my-2">
          <MdEmail className=" text-primary" />

          <input
            className=" border-none outline-none font-light"
            placeholder="Email Driver"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default AddDriver;
