import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "YouTube-powered video lessons",
  "Structured learning paths",
  "Progress tracking & certificates",
  "Expert-curated content",
];

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand/10 blur-3xl" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
          Ready to Start <span className="text-brand">Learning</span>?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
          Join over 50,000 students already learning on Brainstorm. Start your journey today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="h-4 w-4 text-brand" />
              <span>{f}</span>
            </div>
          ))}
        </div>
        <Button size="lg" className="bg-brand hover:bg-brand-dark text-white px-10 h-12 text-base font-semibold" asChild>
          <Link to="/auth/register">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  );
}
