import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";
import { SITE } from "@/data/site-content";
import type { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg gradient-brand flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          </Link>
          <h1 className="font-heading text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to continue learning on {SITE.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="login-password">Password</Label>
              <Link to="/auth/forgot-password" className="text-xs text-brand hover:underline">Forgot password?</Link>
            </div>
            <Input id="login-password" type="password" placeholder="••••••••" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-muted-foreground">Remember me</Label>
          </div>
          <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white h-11 font-semibold">Sign In</Button>
        </form>

        <Separator className="my-6" />

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-brand font-medium hover:underline">Sign up free</Link>
        </p>
      </CardContent>
    </Card>
  );
}
