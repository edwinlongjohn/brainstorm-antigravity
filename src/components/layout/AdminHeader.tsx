import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Bell, LogOut, User, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen, CreditCard, MessageSquare, Settings, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const mobileNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Courses", href: "/admin/courses", icon: BookOpen },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Comments", href: "/admin/comments", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background/95 backdrop-blur flex items-center justify-between px-4 lg:px-6">
      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Admin Navigation</SheetTitle>
          <div className="flex items-center gap-2 h-16 px-4 border-b">
            <div className="h-8 w-8 rounded-lg gradient-brand flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <span className="font-heading font-bold">Admin Panel</span>
          </div>
          <nav className="py-4 px-2 space-y-1">
            {mobileNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-brand/10 text-brand" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <h1 className="font-heading font-semibold text-lg lg:text-xl hidden lg:block">Admin Panel</h1>
      <div className="lg:hidden" />

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
          <Link to="/" target="_blank"><ExternalLink className="h-4 w-4 mr-2" />View Site</Link>
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-brand text-[10px] text-white flex items-center justify-center">3</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-brand/10 text-brand text-sm font-semibold">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild><Link to="/profile" className="flex items-center gap-2"><User className="h-4 w-4" />Profile</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link to="/auth/login" className="flex items-center gap-2"><LogOut className="h-4 w-4" />Log Out</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
