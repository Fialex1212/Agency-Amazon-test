import React from "react";
import ReviewsSlider from "../ReviewsSlider";
import Image from "next/image";

const ReveiwsList = () => {
  return (
    <div className="w-full flex relative">
      <ReviewsSlider />
      <div className="swiper-button-prev-custom absolute top-2/5 left-[-60px] z-10 cursor-pointer">
        <Image width={32} height={32} src="/images/icons/prev.svg" alt="prev" />
      </div>
      <div className="swiper-button-next-custom absolute top-2/5 right-[-50px] z-10 cursor-pointer">
        <Image width={32} height={32} src="/images/icons/next.svg" alt="next" />
      </div>
    </div>
  );
};

export default ReveiwsList;
