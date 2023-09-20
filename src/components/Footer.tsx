import lock from "../assets/lock.svg";

export const Footer = () => {
  return (
    <footer className="text-white bg-primary text-sm text-center lg:text-base font-manrope flex items-center justify-center lg:justify-between flex-wrap gap-5 py-8 lg:px-20">
      <div className="flex items-center gap-4">
        <p className="whitespace-nowrap">Copyright (c) 2023</p>
        <span className="">|</span>
        <p className="whitespace-nowrap">Clarifionsupport@clarifion.com</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={lock} alt="lock" />
        <p className="whitespace-nowrap">Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  );
};
