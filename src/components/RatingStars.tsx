import { Star, StarHalf } from "lucide-react";

const RatingStars = ({ rating }: { rating: number }) => {
  const starCount = Math.ceil(rating);
  const isFraction = !Number.isInteger(rating);
  return (
    <div className="flex gap-px">
      {[...Array(Math.ceil(rating))].map((_, index) =>
        isFraction && index === starCount - 1 ? (
          <StarHalf key={index} className="size-4 fill-yellow-400 stroke-none" />
        ) : (
          <Star key={index} className="size-4 fill-yellow-400 stroke-none" />
        )
      )}
    </div>
  );
};

export default RatingStars;
