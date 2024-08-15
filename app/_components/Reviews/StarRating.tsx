import Star from "./Star";

interface IStarRatingProps {
  rating: number;
  maxRating?: number;
  color?: string;
  defaultRating?: number;
}

function StarRating({
  maxRating = 5,
  color = "#dfb300",
  rating,
}: IStarRatingProps) {
  return (
    <div className="flex items-center gap-3 mt-3">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} full={rating >= i + 1} color={color} />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
