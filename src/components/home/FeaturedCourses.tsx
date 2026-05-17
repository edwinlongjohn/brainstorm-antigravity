import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/shared/CourseCard";
import { getFeaturedCourses } from "@/data/mock-data";
import { ArrowRight } from "lucide-react";

export function FeaturedCourses() {
  const featured = getFeaturedCourses();

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-2">Featured Courses</h2>
            <p className="text-muted-foreground">Hand-picked courses recommended by our experts</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex text-brand hover:text-brand-dark" asChild>
            <Link to="/courses">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center">
          <Button variant="outline" className="text-brand border-brand hover:bg-brand/10" asChild>
            <Link to="/courses">View All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
