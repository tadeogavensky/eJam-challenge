import logo from "../assets/logo.svg";
import mcafee from "../assets/mcafee.svg";
import norton from "../assets/norton.svg";

export const Navbar = () => {
  return (
    <div className="bg-white flex justify-between lg:px-24 px-6 py-8">
      <div className=" lg:w-[14%] w-[8rem] flex items-center">
        <img src={logo} alt="logo" className="w-full" />
      </div>

      <div className="flex items-center gap-8 ">
        <div className="w-12 lg:w-full flex items-center">
          <img src={mcafee} alt="mcafee" />
        </div>
        <div className="w-12 lg:w-full flex items-center">
          <img src={norton} alt="norton" />
        </div>
      </div>
    </div>
  );
};
