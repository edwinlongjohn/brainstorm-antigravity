import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of EdTech in Africa: What to Expect in 2026",
    excerpt: "Explore how technology is reshaping the educational landscape and making learning more accessible than ever before.",
    category: "Technology",
    author: "Adebayo Ogundimu",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    id: 2,
    title: "10 React Hooks You Should Be Using Right Now",
    excerpt: "A deep dive into advanced React hooks that will make your components cleaner, faster, and more maintainable.",
    category: "Development",
    author: "Emeka Obi",
    date: "May 8, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: 3,
    title: "How to Build a Portfolio That Gets You Hired",
    excerpt: "Tips and tricks from top industry recruiters on how to stand out in a crowded tech job market.",
    category: "Career",
    author: "Chioma Nwankwo",
    date: "May 1, 2026",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
  },
  {
    id: 4,
    title: "Understanding UI vs UX: A Beginner's Guide",
    excerpt: "Demystifying the core concepts of User Interface and User Experience design for aspiring product designers.",
    category: "Design",
    author: "Fatima Bello",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Insights, tutorials, and news from the Brainstorm team.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-[2/1] overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <Badge className="absolute top-4 left-4 bg-brand text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-brand transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground mb-5 line-clamp-2">{post.excerpt}</p>
                  <Button variant="outline" className="w-fit" asChild>
                    <Link to={`/blog/${post.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
