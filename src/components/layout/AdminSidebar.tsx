import { NavLink } from "react-router-dom";
import { GraduationCap, LayoutDashboard, Users, BookOpen, CreditCard, MessageSquare, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Courses", href: "/admin/courses", icon: BookOpen },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Comments", href: "/admin/comments", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "hidden lg:flex flex-col border-r bg-sidebar transition-all duration-300",
      collapsed ? "w-[68px]" : "w-64"
    )}>
      {/* Logo */}
      <div className="flex items-center gap-2 h-16 px-4 border-b">
        <div className="h-8 w-8 rounded-lg gradient-brand flex items-center justify-center flex-shrink-0">
          <GraduationCap className="h-4 w-4 text-white" />
        </div>
        {!collapsed && <span className="font-heading font-bold text-lg">Admin</span>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {adminNavItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                collapsed && "justify-center px-2",
                isActive
                  ? "bg-brand/10 text-brand"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              )
            }
            title={collapsed ? item.label : undefined}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-2 border-t">
        <Button variant="ghost" size="sm" className="w-full justify-center" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </aside>
  );
}
