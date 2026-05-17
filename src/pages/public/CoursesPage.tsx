import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CourseCard } from "@/components/shared/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses, categories } from "@/data/mock-data";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function CoursesPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...courses];

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q) || c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category.slug === selectedCategory);
    }
    if (selectedLevel !== "all") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    switch (sortBy) {
      case "popular": result.sort((a, b) => b.totalStudents - a.totalStudents); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "newest": result.sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated)); break;
      case "price-low": result.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)); break;
      case "price-high": result.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)); break;
    }

    return result;
  }, [query, selectedCategory, selectedLevel, sortBy]);

  const clearFilters = () => { setQuery(""); setSelectedCategory("all"); setSelectedLevel("all"); setSortBy("popular"); };

  const hasActiveFilters = query || selectedCategory !== "all" || selectedLevel !== "all";

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-3">Explore Courses</h1>
          <p className="text-gray-300 mb-6 max-w-xl">Discover courses that match your goals and interests</p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search courses, topics, instructors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-brand"
            />
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4 mr-2" />Filters
            </Button>
            <div className={`${showFilters ? "flex" : "hidden"} lg:flex flex-wrap items-center gap-3 w-full lg:w-auto`}>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-44 h-9"><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((c) => <SelectItem key={c.id} value={c.slug}>{c.name}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-40 h-9"><SelectValue placeholder="Level" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 h-9"><SelectValue placeholder="Sort by" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                  <X className="h-3 w-3 mr-1" />Clear
                </Button>
              )}
            </div>
            <div className="ml-auto text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{filtered.length}</span> {filtered.length === 1 ? "course" : "courses"} found
            </div>
          </div>

          {/* Active Filter Badges */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {query && <Badge variant="secondary" className="gap-1">{query}<X className="h-3 w-3 cursor-pointer" onClick={() => setQuery("")} /></Badge>}
              {selectedCategory !== "all" && <Badge variant="secondary" className="gap-1">{categories.find(c => c.slug === selectedCategory)?.name}<X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} /></Badge>}
              {selectedLevel !== "all" && <Badge variant="secondary" className="gap-1">{selectedLevel}<X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLevel("all")} /></Badge>}
            </div>
          )}

          {/* Course Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg font-medium mb-2">No courses found</p>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <Button variant="outline" onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
