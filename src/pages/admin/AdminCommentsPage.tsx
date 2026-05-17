import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { reviews } from "@/data/mock-data";
import { Search, CheckCircle, Trash2, Star } from "lucide-react";

export default function AdminCommentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl font-bold">Comments & Reviews</h1>
          <p className="text-muted-foreground">Moderate user comments and reviews</p>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search comments..." className="pl-9" />
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <Avatar><AvatarFallback className="bg-brand/10 text-brand text-sm">{review.user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback></Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div>
                      <span className="font-semibold text-sm">{review.user.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">on course <Badge variant="outline" className="text-xs">{review.courseId}</Badge></span>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex mt-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="text-green-600 hover:text-green-700"><CheckCircle className="h-3.5 w-3.5 mr-1" />Approve</Button>
                    <Button size="sm" variant="outline" className="text-destructive hover:text-destructive"><Trash2 className="h-3.5 w-3.5 mr-1" />Delete</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
