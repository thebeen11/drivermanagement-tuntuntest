import Header from "../../components/Header";

const Beranda = () => {
  return (
    <div>
      <Header title="Beranda" />

      <div className=" w-full min-h-96 flex items-center justify-center">
        <h1 className=" text-3xl text-primary font-bold">Selamat Datang,</h1>
      </div>
    </div>
  );
};

export default Beranda;
