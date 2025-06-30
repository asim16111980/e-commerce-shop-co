import { Heart } from "lucide-react";
import Image from "next/image";
import RatingStars from "./ratingStars";
import { ProductCardProps } from "@/types/components";

const ProductCard = ({
  discount,
  hasWishlistIcon,
  image,
  rating,
  title,
  netPrice,
  price,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex flex-col p-4 bg-gray-100">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="px-3.5 py-1 bg-white text-gray-900 text-base font-bold rounded">
              NEW
            </span>
            <span className="px-3.5 py-1 bg-green-400 text-gray-50 text-base font-bold rounded">
              {discount}
            </span>
          </div>
          {hasWishlistIcon && (
            <button
              type="button"
              className="size-8 p-1.5 rounded-full bg-white text-gray-600 filter drop-shadow-md"
            >
              <Heart />
            </button>
          )}
        </div>
        <Image src="/public/images/products/product-1.png" alt="" fill className="mix-blend-multiply"/>
        <button
          type="button"
          className="absolute inset-4 w-full h-16 bg-gray-900 text-gray-50 rounded-lg text-base font-medium"
        >
          Add to cart
        </button>
      </div>
      <div>
        <RatingStars rating={rating} />
        <h3>{title}</h3>
        <p>
          <span>{netPrice}</span>
          {price && <span> {price}</span>}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
