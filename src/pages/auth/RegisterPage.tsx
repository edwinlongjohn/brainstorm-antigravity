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

export default function RegisterPage() {
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
          <h1 className="font-heading text-2xl font-bold">Create Account</h1>
          <p className="text-muted-foreground text-sm mt-1">Start your learning journey on {SITE.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="reg-first">First Name</Label>
              <Input id="reg-first" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-last">Last Name</Label>
              <Input id="reg-last" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-email">Email</Label>
            <Input id="reg-email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-password">Password</Label>
            <Input id="reg-password" type="password" placeholder="Min. 8 characters" required />
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="terms" className="mt-0.5" />
            <Label htmlFor="terms" className="text-sm text-muted-foreground leading-snug">
              I agree to the <Link to="/about" className="text-brand hover:underline">Terms of Service</Link> and <Link to="/about" className="text-brand hover:underline">Privacy Policy</Link>
            </Label>
          </div>
          <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white h-11 font-semibold">Create Account</Button>
        </form>

        <Separator className="my-6" />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-brand font-medium hover:underline">Sign in</Link>
        </p>
      </CardContent>
    </Card>
  );
}
