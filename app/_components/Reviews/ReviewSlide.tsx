import Image from "next/image";
import { ReactNode } from "react";

import StarRating from "./StarRating";

interface IReviewSlideProps {
  photoUrl: string;
  user: string;
  course: string;
  rating: number;
  children: ReactNode;
}

function ReviewSlide({
  course,
  rating,
  user,
  photoUrl,
  children,
}: IReviewSlideProps) {
  return (
    <div className="rounded-3xl bg-secondary p-5 h-full">
      <div className="flex items-center justify-between gap-4">
        <Image
          src={photoUrl}
          alt="User"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="mr-auto">
          <p className="text-white">{user}</p>
          <p className="text-white text-xs">{course}</p>
        </div>

        <svg className="size-6">
          <use href="/icons/symbol-defs.svg#icon-google"></use>
        </svg>
      </div>

      <StarRating rating={rating} />

      <p className="text-white font-light text-sm mt-4">{children}</p>
    </div>
  );
}

export default ReviewSlide;
