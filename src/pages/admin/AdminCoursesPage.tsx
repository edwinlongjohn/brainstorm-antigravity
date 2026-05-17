import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { courses, formatPrice } from "@/data/mock-data";
import { Search, Plus, Edit, Trash2, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage all platform courses</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-9" />
          </div>
          <Button className="bg-brand hover:bg-brand-dark text-white"><Plus className="h-4 w-4 mr-2" />Add Course</Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Course</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Instructor</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Price</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Students</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Rating</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="py-3 px-4">
                      <div className="max-w-[250px]">
                        <p className="font-medium truncate">{course.title}</p>
                        <div className="flex gap-1 mt-1">
                          {course.isBestseller && <Badge className="bg-amber-500 text-white text-[10px]">Bestseller</Badge>}
                          {course.isFeatured && <Badge variant="outline" className="text-[10px]">Featured</Badge>}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4"><Badge variant="secondary">{course.category.name}</Badge></td>
                    <td className="py-3 px-4 text-muted-foreground">{course.instructor.name}</td>
                    <td className="py-3 px-4 font-medium">{formatPrice(course.discountPrice ?? course.price)}</td>
                    <td className="py-3 px-4">{course.totalStudents.toLocaleString()}</td>
                    <td className="py-3 px-4">⭐ {course.rating}</td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Edit className="h-4 w-4 mr-2" />Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive"><Trash2 className="h-4 w-4 mr-2" />Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
