import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

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

type Props = {
  review: Review;
};

const ReveiwsItem = ({ review }: Props) => {
  return (
    <div className="border border-[#b6b1b1] rounded-[16px] py-[20px] px-[20px] w-[380px] min-h-[400px] h-[470px] relative transition-transform duration-300 cursor-pointer hover:shadow-xl hover:scale-[1.02]">
      <div className="relative w-full h-[100px] mb-[20px]">
        <Image
          src={review.img}
          alt={review.imgAlt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p
        className={`${styles.reviewText} text-[#9b9a99] text-[20px] font-[500]`}
      >
        {review.text}
      </p>
      <div className="user flex items-center gap-[10px] absolute bottom-[20px] left-[20px] right-[20px]">
        <div className="relative w-[60px] h-[60px]">
          <Image
            src={review.user.avatar}
            alt={review.user.name}
            fill
            className="object-contain rounded-full"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-col w-[200px]">
          <p className="font-[700] text-[24px]">{review.user.name}</p>
          <p className="font-[500] text-[18px]">{review.user.post}</p>
        </div>
      </div>
    </div>
  );
};

export default ReveiwsItem;
