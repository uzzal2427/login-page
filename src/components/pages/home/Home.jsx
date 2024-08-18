import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full h-1/2 bg-black flex justify-center items-center absolute inset-0 m-auto">
        <h1 className="text-white text-3xl">This is home page</h1>
      </div>
    </div>
  );
};

export default Home;
