import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonials } from "@/data/mock-data";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-3">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Join thousands of satisfied learners who transformed their careers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">"{t.comment}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-brand/10 text-brand text-sm font-semibold">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
