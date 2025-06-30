import { Star, StarHalf } from "lucide-react";

const RatingStars = ({ rating }: { rating: number }) => {
  const starCount = Math.ceil(rating);
  const isFraction = !Number.isInteger(rating);
  return (
    <div className="flex gap-1">
      {[...Array(Math.ceil(rating))].map((_, index) => (
        <span className="size-4 text-yellow-400">
          {isFraction && index === starCount - 1 ? <StarHalf /> : <Star />}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
