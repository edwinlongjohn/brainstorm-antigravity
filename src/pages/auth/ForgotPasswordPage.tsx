import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { SITE } from "@/data/site-content";
import type { FormEvent } from "react";

export default function ForgotPasswordPage() {
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); alert("Password reset link sent to your email!"); };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg gradient-brand flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          </Link>
          <h1 className="font-heading text-2xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground text-sm mt-1">Enter your email to receive a password reset link</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email">Email Address</Label>
            <Input id="reset-email" type="email" placeholder="your@email.com" required />
          </div>
          <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white h-11 font-semibold">Send Reset Link</Button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/auth/login" className="text-sm text-brand hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" />Back to Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
