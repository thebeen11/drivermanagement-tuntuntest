import { FaCalendarAlt, FaUser } from "react-icons/fa";
import Header from "../../components/Header";
import { MdEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import useDriverStore from "../../store/useDriverStore";
import Input from "../../components/Input";
import { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddDriver = () => {
  // Access driver data and actions from zustand
  const { driver, setDriver, addDriver } = useDriverStore();

  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDriver(name, value); // Update driver state with new input value
  };

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addDriver(); // Add new driver data
    alert("Success");
    navigate("/driver-management");
  };
  return (
    <div>
      <Header title="Add Driver Management" />
      <div className=" bg-white rounded-sm w-full p-6 mt-10">
        <form onSubmit={handleSubmit}>
          <div className=" mt-3">
            <Input
              type="text"
              value={driver.name.first}
              onChange={handleChange}
              name="first"
              placeholder="Nama Driver"
              title="Nama Driver"
              Icon={FaUser}
            />
          </div>
          <div className=" mt-3">
            <Input
              type="text"
              value={driver.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              title="Email"
              Icon={MdEmail}
            />
          </div>
          <div className=" mt-3">
            <Input
              type="text"
              value={driver.phone}
              onChange={handleChange}
              placeholder="Telepon"
              title="Telepon"
              name="phone"
              Icon={MdOutlinePhoneEnabled}
            />
          </div>
          <div className=" mt-3">
            <Input
              title="Tanggal Lahir"
              type="date"
              value={driver.dob.date}
              onChange={handleChange}
              placeholder="Tanggal Lahir"
              name="date"
              Icon={FaCalendarAlt}
            />
          </div>

          <div className=" mt-6 flex gap-5">
            <button
              type="submit"
              className=" flex w-40 text-center justify-center items-center gap-2 bg-primary text-white font-light uppercase px-2 py-3"
            >
              Tambah Data
            </button>
            <Link
              to={"/driver-management"}
              className=" flex w-40 text-center justify-center items-center gap-2 border border-primary text-primary font-light uppercase px-2 py-3"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDriver;
