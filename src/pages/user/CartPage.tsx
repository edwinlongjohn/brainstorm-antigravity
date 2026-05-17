import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { courses, formatPrice } from "@/data/mock-data";
import { Trash2, ShoppingCart, BookOpen, ArrowRight } from "lucide-react";

export default function CartPage() {
  const cartItems = courses.slice(0, 2); // Mock cart
  const total = cartItems.reduce((sum, c) => sum + (c.discountPrice ?? c.price), 0);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-muted-foreground">{cartItems.length} course{cartItems.length > 1 ? "s" : ""} in cart</p>
            {cartItems.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-40 h-28 bg-gradient-to-br from-brand/20 to-brand/5 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {course.thumbnail ? (
                      <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen className="h-8 w-8 text-brand/40" />
                    )}
                  </div>
                  <div className="flex-1">
                    <Link to={`/courses/${course.slug}`} className="font-heading font-semibold hover:text-brand transition-colors">{course.title}</Link>
                    <p className="text-xs text-muted-foreground mt-1">By {course.instructor.name}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold">{formatPrice(course.discountPrice ?? course.price)}</span>
                      {course.discountPrice && <span className="text-muted-foreground line-through text-sm">{formatPrice(course.price)}</span>}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive self-start"><Trash2 className="h-4 w-4" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <Card className="h-fit sticky top-20">
            <CardContent className="p-6">
              <h2 className="font-heading text-lg font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(total)}</span></div>
                <Separator />
                <div className="flex justify-between font-bold text-lg"><span>Total</span><span>{formatPrice(total)}</span></div>
              </div>
              <Button className="w-full mt-6 bg-brand hover:bg-brand-dark text-white h-11 font-semibold" asChild>
                <Link to="/checkout">Checkout <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="text-center py-20">
          <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-4">Browse our courses and find something to learn</p>
          <Button asChild className="bg-brand hover:bg-brand-dark text-white"><Link to="/courses">Browse Courses</Link></Button>
        </div>
      )}
    </div>
  );
}
