import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of EdTech in Africa: What to Expect in 2026",
    content: "The educational landscape in Africa is undergoing a massive transformation. With the proliferation of smartphones and cheaper internet access, millions of people who previously lacked access to quality education are now able to learn online. \\n\\nAt Brainstorm Learning Centre, we've seen firsthand how access to structured, high-quality video content can change lives. In 2026, we expect to see even more personalized learning experiences driven by AI, allowing students to learn at their own pace with tailored feedback.",
    category: "Technology",
    author: "Adebayo Ogundimu",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    id: "2",
    title: "10 React Hooks You Should Be Using Right Now",
    content: "React hooks revolutionized how we write components. While everyone knows useState and useEffect, there are several advanced hooks that can significantly improve your application's performance and code quality. \\n\\nIn this post, we explore useMemo for expensive calculations, useCallback for stable function references, and how to build your own custom hooks to share logic across your application cleanly.",
    category: "Development",
    author: "Emeka Obi",
    date: "May 8, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: "3",
    title: "How to Build a Portfolio That Gets You Hired",
    content: "A strong portfolio is often more important than a traditional resume in the tech industry. It proves you can actually do the work. But what makes a portfolio stand out? \\n\\nFirst, focus on quality over quantity. Three polished projects are better than ten half-finished ones. Second, explain your process. Don't just show the final product; talk about the problems you faced and how you solved them. Finally, make sure the portfolio site itself is fast, accessible, and responsive.",
    category: "Career",
    author: "Chioma Nwankwo",
    date: "May 1, 2026",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
  },
  {
    id: "4",
    title: "Understanding UI vs UX: A Beginner's Guide",
    content: "UI (User Interface) and UX (User Experience) are often used interchangeably, but they refer to completely different aspects of product design. \\n\\nUI is about how a product looks — the colors, typography, buttons, and visual hierarchy. UX is about how a product feels — the user journey, the logical flow from one step to the next, and how easily a user can accomplish their goals. Great products require both to succeed.",
    category: "Design",
    author: "Fatima Bello",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  }
];

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-8 -ml-4" asChild>
          <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
        </Button>

        <div className="mb-8">
          <Badge className="bg-brand text-white mb-4">{post.category}</Badge>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="h-4 w-4" />{post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{post.date}</span>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>
        </div>

        <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-10">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-heading">
          {post.content.split('\\n\\n').map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
