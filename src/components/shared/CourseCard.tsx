import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/shared/RatingStars";
import { Users, Clock, BookOpen } from "lucide-react";
import { formatPrice } from "@/data/mock-data";
import type { Course } from "@/types";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
  variant?: "default" | "horizontal";
}

export function CourseCard({ course, className, variant = "default" }: CourseCardProps) {
  const hasDiscount = course.discountPrice !== undefined;
  const displayPrice = hasDiscount ? course.discountPrice! : course.price;

  if (variant === "horizontal") {
    return (
      <Link to={`/courses/${course.slug}`} className="block group">
        <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5", className)}>
          <div className="flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-64 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center overflow-hidden">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <BookOpen className="h-12 w-12 text-brand/40" />
                )}
              </div>
              {course.isBestseller && (
                <Badge className="absolute top-2 left-2 bg-amber-500 text-white text-xs">Bestseller</Badge>
              )}
            </div>
            <CardContent className="flex-1 p-4">
              <h3 className="font-heading font-semibold text-lg line-clamp-1 group-hover:text-brand transition-colors">{course.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{course.subtitle}</p>
              <p className="text-xs text-muted-foreground mt-2">{course.instructor.name}</p>
              <div className="flex items-center gap-4 mt-2">
                <RatingStars rating={course.rating} totalRatings={course.totalRatings} size="sm" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{formatPrice(displayPrice)}</span>
                  {hasDiscount && <span className="text-muted-foreground line-through text-sm">{formatPrice(course.price)}</span>}
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/courses/${course.slug}`} className="block group">
      <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full", className)}>
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
          {course.thumbnail ? (
            <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          ) : (
            <BookOpen className="h-16 w-16 text-brand/30" />
          )}
          {course.isBestseller && (
            <Badge className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-medium">Bestseller</Badge>
          )}
          {hasDiscount && (
            <Badge className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium">
              {Math.round(((course.price - course.discountPrice!) / course.price) * 100)}% OFF
            </Badge>
          )}
        </div>
        <CardContent className="p-4 flex flex-col gap-2">
          <h3 className="font-heading font-semibold text-base line-clamp-2 group-hover:text-brand transition-colors leading-snug">{course.title}</h3>
          <p className="text-xs text-muted-foreground">{course.instructor.name}</p>
          <RatingStars rating={course.rating} totalRatings={course.totalRatings} size="sm" />
          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.totalDuration}</span>
            <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.totalStudents.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 pt-2 border-t">
            <span className="font-bold text-lg text-foreground">{formatPrice(displayPrice)}</span>
            {hasDiscount && <span className="text-muted-foreground line-through text-sm">{formatPrice(course.price)}</span>}
          </div>
          <Badge variant="secondary" className="w-fit text-xs mt-1">{course.level}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
