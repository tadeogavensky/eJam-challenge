import smallProduct from "../assets/small-product.png";
import bigProduct from "../assets/big-product.png";

import star from "../assets/star.svg";
import line from "../assets/line.svg";
import service from "../assets/service.png";
import visa from "../assets/visa.svg";
import shopPay from "../assets/shop pay.svg";
import paypal from "../assets/paypal.svg";
import mastercard from "../assets/mastercard.svg";
import googlePay from "../assets/gpay.svg";
import applePay from "../assets/apple pay.svg";
import amex from "../assets/amex.svg";
import verify from "../assets/verify.svg";
import tickCircle from "../assets/tick-circle.svg";

import stars from "../assets/stars.svg";

import grayLock from "../assets/gray-lock.svg";

import reviewer from "../assets/reviewer.png";

import percentage from "../assets/percentage.svg";

export const Product = () => {
  return (
    <div className="lg:bg-[#FAFAFA] rounded-[10px] flex flex-col lg:flex-row  my-8 font-manrope gap-10 lg:p-8">
      <div className="lg:flex flex-col hidden justify-around">
        <div className=" flex justify-center">
          <img className="" src={bigProduct} alt="" />
        </div>
        <div className="bg-white rounded-[10px] flex flex-col p-6 gap-5 mt-5">
          <div className="flex justify-start items-center gap-[13px] ">
            <img src={reviewer} className="rounded-full w-14 h-14" alt="" />
            <div className="flex flex-col gap-1">
              <div>
                <img src={stars} className="w-[78.109px]" alt="" />
              </div>
              <div className="flex flex-row gap-[10px]">
                <p className="font-bold">Ken T.</p>
                <img src={verify} alt="" />
                <p className="text-[#5BB59A]">Verified Customer</p>
              </div>
            </div>
          </div>

          <p className="text-[#4D5254] text-[19px] text-start  self-stretch leading-6">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-around">
        <p className="lg:text-[32px] text-2xl lg:max-w-xl lg:text-left text-center capitalize lg:leading-[44.8px] ">
          <span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price
          for 6 extra Clarifion for only
          <span className="text-[#2C7EF8]"> $14 each </span>
          ($84.00 total!)
        </p>
        <div className=" flex justify-center my-6 lg:hidden">
          <img className="" src={bigProduct} alt="" />
        </div>
        <div className="flex flex-row gap-4 lg:gap-6 lg:my-8 ">
          <div className=" hidden lg:block ">
            <img src={smallProduct} alt="" className="object-contain" />
          </div>
          <div className="w-[25%] lg:hidden">
            <img src={smallProduct} alt="" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-3 ">
            <div className="flex flex-row justify-between items-center self-stretch gap-8 ">
              <p className="text-[14px] lg:text-xl whitespace-nowrap">
                Clarifion Air Ionizer
              </p>
              <p className="text-[#2C7EF8] text-[14px] lg:text-[22px] font-[600] flex items-center gap-[10px]">
                <span className="text-[#969696] text-[10px] lg:text-[16px] font-[600] line-through">
                  $180
                </span>
                $84
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 lg:gap-0">
              <img src={star} className="w-4 lg:w-5" alt="" />
              <img src={star} className="w-4 lg:w-5" alt="" />
              <img src={star} className="w-4 lg:w-5" alt="" />
              <img src={star} className="w-4 lg:w-5" alt="" />
              <img src={star} className="w-4 lg:w-5" alt="" />
            </div>

            <div className="flex justify-start items-center gap-4">
              <div className="flex items-center w-4 h-4 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="h-6 w-6"
                >
                  <ellipse cx="6" cy="6" rx="6" ry="6.00003" fill="#E3EEFF" />
                  <ellipse
                    cx="6"
                    cy="5.99998"
                    rx="3"
                    ry="3.00001"
                    fill="#2C7EF8"
                  />
                </svg>
              </div>

              <p className="text-xs lg:text-base">12 left in Stock</p>
            </div>
            <p className="hidden lg:block  text-[#4D5254] text-left text-base max-w-sm">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>
        <p className=" lg:hidden text-[#4D5254] text-center text-xs mt-4">
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
        <div className="mt-6 lg:mt-0 flex lg:justify-start  items-center ml-2 lg:ml-0">
          <ul>
            <li className="gap-3 flex items-center ">
              <div className="w-3 lg:w-5">
                <img src={tickCircle} alt="" />
              </div>
              <p className="withespace-nowrap text-xs lg:text-base">
                Negative Ion Technology may{" "}
                <span className="font-bold">help with allergens</span>
              </p>
            </li>
            <li className="gap-3 flex items-center my-4">
              <div>
                <div className="w-3 lg:w-5">
                  <img src={tickCircle} alt="" />
                </div>
              </div>
              <p className="withespace-nowrap text-xs lg:text-base">
                Designed for <span className="font-bold">air rejuvenation</span>
              </p>
            </li>
            <li className="gap-3 flex items-center">
              <div className="w-3 lg:w-5">
                <img src={tickCircle} alt="" />
              </div>
              <p className="withespace-nowrap text-xs lg:text-base">
                <span className="font-bold">Perfect for every room</span> in all
                types of places.
              </p>
            </li>
          </ul>
        </div>
        <div className="bg-[#EDF3FD] rounded-[10px] flex items-center justify-center lg:justify-start p-4 gap-4 my-6 lg:my-8">
          <div className="w-12 ">
            <img src={percentage} alt="" />
          </div>
          <p>
            Save <span className="text-[#2C7EF8]">53% </span>and get{" "}
            <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only
            <span className="text-[#2C7EF8]"> $14 Each</span>.
          </p>
        </div>
        <button className="flex items-center justify-center w-full py-4 gap-4 bg-[#59AE43] rounded-[50px] text-white text-[14px] lg:text-[20px]">
          <p className="uppercase font-semibold">Yes - Claim my discount</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512475C10.4059 0.126565 9.78022 0.126565 9.39431 0.512475C9.0084 0.898386 9.0084 1.52407 9.39431 1.90998L14.9843 7.5L9.39431 13.09C9.0084 13.4759 9.0084 14.1016 9.39431 14.4875C9.78022 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381836 8.48819H16.3818V6.51181H0.381836V8.48819Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        <div className="flex flex-wrap items-center justify-center my-3 py-2 px-4 text-[#4D5254] border-[1px] rounded-[10px] border-[#CFCFCF]">
          <div className="gap-3 flex items-center text-xs border-b-2 md:border-none  border-[#CFCFCF] mb-3 pb-3 md:mb-0 md:pb-0">
            <p className="capitalize whitespace-nowrap">Free shipping</p>
            <img src={line} />
            <div className="flex items-center gap-4">
              <img src={grayLock} alt="" className="w-4 h-4" />
              <p className="whitespace-nowrap">
                Secure 256-bit SSL encryption.
              </p>
            </div>
            <div className="hidden md:block">
              <img src={line} />
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512475C10.4059 0.126565 9.78022 0.126565 9.39431 0.512475C9.0084 0.898386 9.0084 1.52407 9.39431 1.90998L14.9843 7.5L9.39431 13.09C9.0084 13.4759 9.0084 14.1016 9.39431 14.4875C9.78022 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381836 8.48819H16.3818V6.51181H0.381836V8.48819Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-1 ">
            <img src={visa} className="w-6" alt="" />
            <img src={shopPay} className="w-6" alt="" />
            <img src={paypal} className="w-6" alt="" />
            <img src={mastercard} className="w-6" alt="" />
            <img src={googlePay} className="w-6" alt="" />
            <img src={applePay} className="w-6" alt="" />
            <img src={amex} className="w-6" alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center lg:mt-5">
          <p className="text-center text-[#F82C2C] text-xs lg:text-[18px] uppercase underline">
            No thanks, I don’t want this.
          </p>
        </div>

        <div className="flex items-start lg:items-center justify-center gap-4 mt-6">
          <div className="w-[90%] lg:w-[50%]">
            <img src={service} alt="" />
          </div>
          <p className="text-[#4D5254] text-sm lg:text-base leading-[16.8px]">
            If you are not completely thrilled with your Clarifion - We have a
            <span className="font-bold"> 30 day satisfaction guarantee</span>.
            Please refer to our return policy at the bottom of the page for more
            details. <br /> Happy Shopping!
          </p>
        </div>
      </div>
    </div>
  );
};
