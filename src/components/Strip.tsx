import heart from "../assets/heart.svg";
import truck from "../assets/truck.svg";
import syncCheckmark from "../assets/sync-checkmark.svg";
import starbust from "../assets/starbust.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";

export const Strip = () => {
  const props = [
    { img: starbust, text: "30-day satisfaction guarantee" },
    { img: truck, text: "Free delivery on orders over $40.00" },
    { img: heart, text: "50,000+ HAPPY CUSTOMERS" },
    { img: syncCheckmark, text: "100% Money Back Guarantee" },
  ];

  return (
    <div className="bg-primary  py-3">
      <ul className="hidden font-manrope tex lg:flex items-center justify-center gap-24 ">
        {props.map((prop, index) => {
          return (
            <li className="flex items-center gap-2 " key={index}>
              <img src={prop.img} alt="" className="w-5" />
              <p className="uppercase text-xs font-[500] text-white">{prop.text}</p>
            </li>
          );
        })}
      </ul>
      <Swiper
        navigation
        className="flex font-manrope text-white lg:hidden items-center justify-center gap-24 "
      >
        {props.map((prop, index) => {
          return (
            <SwiperSlide className="flex justify-center items-center">
              <li className=" flex items-center gap-2 " key={index}>
                <img src={prop.img} alt="" className="w-5" />
                <p className="uppercase text-xs font-[500]">{prop.text}</p>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
