"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import RatingStars from "./RatingStars";
import { ProductCardProps } from "@/types/components";
import { useState } from "react";
import clsx from "clsx";

const ProductCard = ({
  discount,
  hasWishlistIcon,
  image,
  rating,
  title,
  netPrice,
  price,
}: ProductCardProps) => {
  const [isWished, setIsWished] = useState<boolean>(false);

  return (
    <div className="w-[clamp(230px,5vw,260px)] h-[clamp(390px,5vw,430px)] flex flex-col gap-4">
      <div className="relative flex-1 flex flex-col p-4 bg-gray-100 group">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="px-3.5 py-1 bg-white text-gray-900 text-base font-bold rounded">
              NEW
            </span>
            <span className="px-3.5 py-1 bg-green-400 text-gray-50 text-base font-bold rounded">
              -{discount}%
            </span>
          </div>
          {hasWishlistIcon && (
            <button
              type="button"
              onClick={() => setIsWished((val) => !val)}
              className="flex items-center justify-center size-8 p-1.5 rounded-full bg-white text-gray-600 filter drop-shadow-lg cursor-pointer"
            >
              <Heart
                className={clsx(isWished ? "fill-green-700" : "fill-white")}
              />
            </button>
          )}
        </div>
        <Image
          src="/images/products/product-1.png"
          alt=""
          fill
          className="mix-blend-multiply"
        />
        <button
          type="button"
          className="absolute start-4 end-4 bottom-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 h-[clamp(40px,5vw,46px)] bg-gray-900 text-gray-50 rounded-lg text-base font-medium transition duration-300"
        >
          Add to cart
        </button>
      </div>
      <div className="w-full h-[72px] flex flex-col justify-between">
        <RatingStars rating={rating} />
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="flex gap-3">
          <span className="text-sm font-semibold text-gray-900">
            ${netPrice}
          </span>
          {price && <span className="text-sm text-gray-600">${price}</span>}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
