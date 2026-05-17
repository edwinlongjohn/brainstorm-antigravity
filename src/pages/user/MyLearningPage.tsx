import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { enrollments } from "@/data/mock-data";
import { Play, Award, BookOpen } from "lucide-react";

export default function MyLearningPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">My Learning</h1>

      {enrollments.length > 0 ? (
        <div className="grid gap-4">
          {enrollments.map((enrollment) => (
            <Card key={enrollment.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-56 h-36 sm:h-auto bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {enrollment.course.thumbnail ? (
                    <img src={enrollment.course.thumbnail} alt={enrollment.course.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  ) : (
                    <BookOpen className="h-10 w-10 text-brand/40" />
                  )}
                </div>
                <CardContent className="flex-1 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-1">{enrollment.course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{enrollment.course.instructor.name}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Progress value={enrollment.progress} className="h-2 flex-1 max-w-xs" />
                        <span className="text-sm font-medium">{enrollment.progress}%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Last accessed: {enrollment.lastAccessedDate}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {enrollment.progress === 100 ? (
                        <>
                          <Badge className="bg-green-500 text-white">Completed</Badge>
                          <Button size="sm" variant="outline" className="text-brand border-brand"><Award className="h-4 w-4 mr-1" />Certificate</Button>
                        </>
                      ) : (
                        <Button size="sm" className="bg-brand hover:bg-brand-dark text-white" asChild>
                          <Link to={`/courses/${enrollment.course.slug}`}><Play className="h-4 w-4 mr-1" />Continue</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No courses yet</h2>
          <p className="text-muted-foreground mb-4">Start learning by enrolling in a course</p>
          <Button asChild className="bg-brand hover:bg-brand-dark text-white"><Link to="/courses">Browse Courses</Link></Button>
        </div>
      )}
    </div>
  );
}
