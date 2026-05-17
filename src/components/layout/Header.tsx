import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ShoppingCart, Heart, User, LogIn, GraduationCap } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site-content";
import { SearchBar } from "@/components/shared/SearchBar";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false; // Replace with auth context

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="h-9 w-9 rounded-lg gradient-brand flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl hidden sm:block">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive ? "text-brand bg-brand/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 max-w-sm mx-6">
          <SearchBar />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="mr-2" asChild><Link to="/cart"><ShoppingCart className="h-5 w-5" /></Link></Button>
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" asChild><Link to="/favorites"><Heart className="h-5 w-5" /></Link></Button>
              <Button variant="ghost" size="icon" asChild><Link to="/profile"><User className="h-5 w-5" /></Link></Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild><Link to="/auth/login"><LogIn className="h-4 w-4 mr-2" />Log In</Link></Button>
              <Button size="sm" className="bg-brand hover:bg-brand-dark text-white" asChild><Link to="/auth/register">Sign Up</Link></Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg gradient-brand flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-heading font-bold text-lg">{SITE.name}</span>
                </Link>
              </div>
              <div className="p-4">
                <SearchBar />
              </div>
              <nav className="flex-1 px-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors",
                        isActive ? "text-brand bg-brand/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="border-t my-2" />
                <NavLink to="/favorites" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-muted-foreground hover:text-foreground">
                  <Heart className="h-4 w-4" /> Favorites
                </NavLink>
                <NavLink to="/cart" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-muted-foreground hover:text-foreground">
                  <ShoppingCart className="h-4 w-4" /> Cart
                </NavLink>
                <NavLink to="/my-learning" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-muted-foreground hover:text-foreground">
                  <GraduationCap className="h-4 w-4" /> My Learning
                </NavLink>
              </nav>
              <div className="p-4 border-t flex flex-col gap-2">
                <Button variant="outline" className="w-full" asChild><Link to="/auth/login" onClick={() => setOpen(false)}>Log In</Link></Button>
                <Button className="w-full bg-brand hover:bg-brand-dark text-white" asChild><Link to="/auth/register" onClick={() => setOpen(false)}>Sign Up</Link></Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
