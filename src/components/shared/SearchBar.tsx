import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  variant?: "default" | "hero";
}

export function SearchBar({ className, placeholder = "Search for courses...", variant = "default" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/courses?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative flex items-center", className)}>
      <div className={cn(
        "relative flex items-center w-full",
        variant === "hero" ? "max-w-2xl" : "max-w-md",
      )}>
        <Search className={cn(
          "absolute left-3 text-muted-foreground",
          variant === "hero" ? "h-5 w-5" : "h-4 w-4",
        )} />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={cn(
            "pl-10 pr-24 border-border/60",
            variant === "hero"
              ? "h-14 text-base rounded-xl shadow-lg border-2 focus-visible:border-brand focus-visible:ring-brand/20"
              : "h-10 text-sm rounded-lg",
          )}
        />
        <Button
          type="submit"
          className={cn(
            "absolute right-1.5 bg-brand hover:bg-brand-dark text-white",
            variant === "hero" ? "h-11 px-6 rounded-lg" : "h-7 px-3 text-xs rounded-md",
          )}
        >
          Search
        </Button>
      </div>
    </form>
  );
}
