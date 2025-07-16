"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReveiwsItem from "../ReviewsItem";

type User = {
  name: string;
  post: string;
  avatar: string;
};

type Review = {
  img: string;
  imgAlt: string;
  text: string;
  user: User;
};

const reviews: Review[] = [
  {
    img: "/images/products/serene_living_products.jpg",
    imgAlt: "serene living products",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    user: {
      name: "Ethan Morgan",
      post: "Founder and CEO, Serene Living Products",
      avatar: "/images/avatars/Ethan_Morgan.jpg",
    },
  },
  {
    img: "/images/products/starlight_creations.jpg",
    imgAlt: "starlight creations",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    user: {
      name: "Olivia Hayes",
      post: "Owner, Starlight Creations",
      avatar: "/images/avatars/Olivia_Hayes.jpg",
    },
  },
  {
    img: "/images/products/opulnt_living_group.jpg",
    imgAlt: "opulnt living group",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    user: {
      name: "Alexander Reed",
      post: "Co-Founder, Opulent Living Group",
      avatar: "/images/avatars/Alexander_Reed.jpg",
    },
  },
  {
    img: "/images/products/serene_living_products.jpg",
    imgAlt: "serene living products",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    user: {
      name: "Ethan Morgan",
      post: "Founder and CEO, Serene Living Products",
      avatar: "/images/avatars/Ethan_Morgan.jpg",
    },
  },
  {
    img: "/images/products/starlight_creations.jpg",
    imgAlt: "starlight creations",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    user: {
      name: "Olivia Hayes",
      post: "Owner, Starlight Creations",
      avatar: "/images/avatars/Olivia_Hayes.jpg",
    },
  },
  {
    img: "/images/products/opulnt_living_group.jpg",
    imgAlt: "opulnt living group",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    user: {
      name: "Alexander Reed",
      post: "Co-Founder, Opulent Living Group",
      avatar: "/images/avatars/Alexander_Reed.jpg",
    },
  },
];

const ReviewsSlider = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 gap-[16px]">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          800: { slidesPerView: 2, slidesPerGroup: 2 },
          1280: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            className="flex flex-col justify-center items-center mr-0!"
            key={index}
          >
            <div className="w-fit shadow rounded-lg h-full">
              <ReveiwsItem review={review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;
