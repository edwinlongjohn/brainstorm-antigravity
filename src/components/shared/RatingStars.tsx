import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  totalRatings?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}

export function RatingStars({ rating, totalRatings, size = "md", showCount = true, className }: RatingStarsProps) {
  const sizeMap = { sm: "h-3 w-3", md: "h-4 w-4", lg: "h-5 w-5" };
  const textMap = { sm: "text-xs", md: "text-sm", lg: "text-base" };
  const iconSize = sizeMap[size];
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className={cn("font-semibold text-amber-600", textMap[size])}>{rating.toFixed(1)}</span>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < full) return <Star key={i} className={cn(iconSize, "fill-amber-400 text-amber-400")} />;
          if (i === full && hasHalf) return <StarHalf key={i} className={cn(iconSize, "fill-amber-400 text-amber-400")} />;
          return <Star key={i} className={cn(iconSize, "text-gray-300")} />;
        })}
      </div>
      {showCount && totalRatings !== undefined && (
        <span className={cn("text-muted-foreground", textMap[size])}>({totalRatings.toLocaleString()})</span>
      )}
    </div>
  );
}
