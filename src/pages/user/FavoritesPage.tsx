import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/shared/CourseCard";
import { courses } from "@/data/mock-data";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const favorited = courses.slice(0, 3); // Mock favorites

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">My Favorites</h1>
      {favorited.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorited.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <Heart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-muted-foreground mb-4">Save courses you love for easy access later</p>
          <Button asChild className="bg-brand hover:bg-brand-dark text-white"><Link to="/courses">Browse Courses</Link></Button>
        </div>
      )}
    </div>
  );
}
