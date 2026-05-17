import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { courses, formatPrice } from "@/data/mock-data";
import { Lock, CreditCard } from "lucide-react";
import type { FormEvent } from "react";

export default function CheckoutPage() {
  const cartItems = courses.slice(0, 2);
  const total = cartItems.reduce((sum, c) => sum + (c.discountPrice ?? c.price), 0);

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); alert("Payment processing... (Paystack integration pending)"); };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-2"><CreditCard className="h-5 w-5 text-brand" />Payment Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2"><Label htmlFor="chk-email">Email</Label><Input id="chk-email" type="email" placeholder="your@email.com" required /></div>
              <div className="space-y-2"><Label htmlFor="chk-name">Full Name</Label><Input id="chk-name" placeholder="John Doe" required /></div>
              <Separator />
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2"><Lock className="h-4 w-4 text-brand" /><span className="text-sm font-medium">Secure Payment via Paystack</span></div>
                <p className="text-xs text-muted-foreground">Your payment information is encrypted and secure. We support cards, bank transfers, and mobile money.</p>
              </div>
              <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white h-12 font-semibold text-base">
                Pay {formatPrice(total)}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="h-fit">
          <CardContent className="p-6">
            <h2 className="font-heading text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              {cartItems.map((c) => (
                <div key={c.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground line-clamp-1 flex-1 mr-2">{c.title}</span>
                  <span className="font-medium">{formatPrice(c.discountPrice ?? c.price)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-bold text-lg"><span>Total</span><span>{formatPrice(total)}</span></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
