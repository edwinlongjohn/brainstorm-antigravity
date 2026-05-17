import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/mock-data";
import { Code, BarChart3, Palette, Briefcase, Smartphone, Cloud, Shield, Brain } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code, BarChart3, Palette, Briefcase, Smartphone, Cloud, Shield, Brain,
};

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-3">Browse by Category</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Explore our wide range of expertly curated course categories</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code;
            return (
              <Link to={`/courses?category=${cat.slug}`} key={cat.id}>
                <Card className="group h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-brand/30 cursor-pointer">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="h-14 w-14 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground">{cat.courseCount} courses</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
