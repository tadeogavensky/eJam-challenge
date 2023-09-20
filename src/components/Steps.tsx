import greenCheck from "../assets/green-check.svg";

export const Steps = () => {
  const props = [
    { status: "check", text: "Cart Review" },
    { status: "check", text: "Checkout" },
    { status: "active", text: "Special Offer" },
    { status: "inactive", text: "Confirmation" },
  ];

  return (
    <div className="mt-10">
      <ul className="flex items-center justify-evenly gap-4">
        {props.map((prop, index) => {
          return (
            <div
              className="flex flex-col lg:flex-row lg:gap-6 gap-4 font-manrope"
              key={index}
            >
              {prop.status === "check" ? (
                <div className="flex flex-col lg:flex-row text-center lg:text-xl whitespace-nowrap justify-center items-center gap-1 lg:gap-3">
                  <img
                    src={greenCheck}
                    className="w-6 lg:w-10 lg:h-10"
                    alt=""
                  />
                  <div className="flex items-center gap-1 text-xs lg:text-xl ">
                    <p className="hidden lg:block">Step {index + 1} : </p>
                    <p>{prop.text}</p>
                  </div>
                </div>
              ) : prop.status === "active" ? (
                <div className="flex flex-col lg:flex-row text-center lg:text-xl whitespace-nowrap items-center justify-center gap-1 lg:gap-3 ">
                  <p className="w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-[#2C7EF8]  text-white flex items-center justify-center">
                    {index + 1}
                  </p>
                  <div className="flex items-center gap-1 font-bold text-xs lg:text-xl">
                    <p className="hidden lg:block ">Step {index + 1} : </p>
                    <p>{prop.text}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row text-center lg:text-xl whitespace-nowrap items-center justify-center gap-1 lg:gap-3">
                  <p className="w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white text-[#2C7EF8] border border-2 flex items-center justify-center">
                    {index + 1}
                  </p>

                  <div className="flex items-center gap-1 text-xs lg:text-xl">
                    <p className="hidden lg:block">Step {index + 1} : </p>
                    <p>{prop.text}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
