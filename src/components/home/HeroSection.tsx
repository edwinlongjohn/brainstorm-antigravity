import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/shared/SearchBar";
import { HERO } from "@/data/site-content";
import { Play, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-brand/20 text-brand border-brand/30 hover:bg-brand/30 text-sm px-4 py-1.5">
            {HERO.badge}
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            {HERO.headline.split(",").map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {part.includes("Limits") || part.includes("Boundaries") ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">{part}</span>
                ) : part}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {HERO.subheadline}
          </p>

          <div className="flex justify-center mb-10">
            <SearchBar variant="hero" placeholder="What do you want to learn today?" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-brand hover:bg-brand-dark text-white px-8 h-12 text-base font-semibold" asChild>
              <Link to="/courses">{HERO.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base" asChild>
              <Link to="/about"><Play className="mr-2 h-4 w-4" />{HERO.ctaSecondary}</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-brand">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
