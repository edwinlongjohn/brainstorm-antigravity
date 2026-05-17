import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/50 to-background p-4">
      <Outlet />
    </div>
  );
}
