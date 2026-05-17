import { useParams, Link } from "react-router-dom";
import { getCourseBySlug, formatPrice, reviews } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/shared/RatingStars";
import { ShoppingCart, Heart, Play, Clock, Users, BookOpen, Globe, Award, ChevronDown, ChevronUp, Lock } from "lucide-react";
import { useState } from "react";

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <Button asChild><Link to="/courses">Browse Courses</Link></Button>
      </div>
    );
  }

  const hasDiscount = course.discountPrice !== undefined;
  const displayPrice = hasDiscount ? course.discountPrice! : course.price;
  const courseReviews = reviews.filter((r) => r.courseId === course.id);
  const totalLessons = course.sections.reduce((acc, s) => acc + s.subsections.length, 0);
  const videoId = course.previewVideoUrl ? new URL(course.previewVideoUrl).searchParams.get("v") : null;

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-brand/20 text-brand border-brand/30">{course.category.name}</Badge>
              {course.isBestseller && <Badge className="bg-amber-500 text-white">Bestseller</Badge>}
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-3">{course.title}</h1>
            <p className="text-gray-300 text-lg mb-4">{course.subtitle}</p>
            <RatingStars rating={course.rating} totalRatings={course.totalRatings} size="md" />
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-300">
              <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.totalStudents.toLocaleString()} students</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.totalDuration}</span>
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{totalLessons} lessons</span>
              <span className="flex items-center gap-1"><Globe className="h-4 w-4" />{course.language}</span>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Created by <span className="text-brand underline">{course.instructor.name}</span> • Last updated {course.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="prose max-w-none">
                    <h2 className="font-heading text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{course.description}</p>
                    <h3 className="font-heading text-xl font-bold mb-3">What You'll Learn</h3>
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {["Build real-world projects", "Understand core concepts", "Best practices and patterns", "Deployment strategies"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum">
                  <h2 className="font-heading text-2xl font-bold mb-4">Course Curriculum</h2>
                  <p className="text-sm text-muted-foreground mb-6">{course.sections.length} sections • {totalLessons} lessons • {course.totalDuration}</p>
                  <div className="space-y-2">
                    {course.sections.map((section) => (
                      <Card key={section.id}>
                        <button onClick={() => toggleSection(section.id)} className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-accent/50 transition-colors rounded-lg">
                          <div className="flex items-center gap-2">
                            {expandedSections.includes(section.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            <span className="font-medium text-sm">{section.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{section.subsections.length} lessons</span>
                        </button>
                        {expandedSections.includes(section.id) && (
                          <CardContent className="px-4 pb-3 pt-0">
                            <div className="space-y-1 ml-6">
                              {section.subsections.map((sub) => (
                                <div key={sub.id} className="flex items-center justify-between py-2 text-sm">
                                  <div className="flex items-center gap-2">
                                    {sub.isPreview ? <Play className="h-3.5 w-3.5 text-brand" /> : <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
                                    <span className={sub.isPreview ? "text-brand" : ""}>{sub.title}</span>
                                    {sub.isPreview && <Badge variant="outline" className="text-xs">Preview</Badge>}
                                  </div>
                                  <span className="text-xs text-muted-foreground">{sub.duration}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="instructor">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-20 w-20 flex-shrink-0">
                      <AvatarFallback className="bg-brand/10 text-brand text-xl font-bold">{course.instructor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-heading text-2xl font-bold">{course.instructor.name}</h2>
                      <p className="text-brand mb-2">{course.instructor.title}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span>⭐ {course.instructor.rating} Rating</span>
                        <span>👥 {course.instructor.totalStudents.toLocaleString()} Students</span>
                        <span>📚 {course.instructor.totalCourses} Courses</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{course.instructor.bio}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <h2 className="font-heading text-2xl font-bold mb-6">Student Reviews</h2>
                  {courseReviews.length > 0 ? (
                    <div className="space-y-4">
                      {courseReviews.map((review) => (
                        <Card key={review.id}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <Avatar><AvatarFallback className="bg-brand/10 text-brand text-sm">{review.user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback></Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-sm">{review.user.name}</span>
                                  <span className="text-xs text-muted-foreground">{review.date}</span>
                                </div>
                                <RatingStars rating={review.rating} size="sm" showCount={false} className="my-1" />
                                <p className="text-sm text-muted-foreground">{review.comment}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar – Purchase Card */}
            <div>
              <Card className="sticky top-20 overflow-hidden">
                {isPlayingPreview && videoId ? (
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Course Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    className="w-full aspect-video bg-muted relative group cursor-pointer flex items-center justify-center overflow-hidden" 
                    onClick={() => setIsPlayingPreview(true)}
                  >
                    {course.thumbnail ? (
                      <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <BookOpen className="h-16 w-16 text-muted-foreground/30" />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                        <Play className="h-8 w-8 text-white fill-white ml-1" />
                      </div>
                      <span className="font-medium text-white text-sm">Preview this course</span>
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{formatPrice(displayPrice)}</span>
                      {hasDiscount && <span className="text-muted-foreground line-through text-lg">{formatPrice(course.price)}</span>}
                    </div>
                    {hasDiscount && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        {Math.round(((course.price - course.discountPrice!) / course.price) * 100)}% off — Limited time!
                      </p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-brand hover:bg-brand-dark text-white h-11 font-semibold">
                      <ShoppingCart className="mr-2 h-4 w-4" />Add to Cart
                    </Button>
                    <Button variant="outline" className="w-full h-11">
                      <Heart className="mr-2 h-4 w-4" />Add to Wishlist
                    </Button>
                  </div>
                  <Separator className="my-5" />
                  <div className="space-y-3 text-sm">
                    <h4 className="font-heading font-semibold">This course includes:</h4>
                    <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-brand" />{course.totalDuration} of video content</div>
                    <div className="flex items-center gap-2 text-muted-foreground"><BookOpen className="h-4 w-4 text-brand" />{totalLessons} lessons</div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Globe className="h-4 w-4 text-brand" />Access on mobile & desktop</div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Award className="h-4 w-4 text-brand" />Certificate of completion</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
