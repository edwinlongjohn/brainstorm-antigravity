import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MoreHorizontal, Shield, Ban } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockUsers = [
  { id: "1", name: "Tunde Afolabi", email: "tunde@email.com", role: "student", courses: 3, joined: "2025-01-15", status: "active" },
  { id: "2", name: "Ngozi Eze", email: "ngozi@email.com", role: "student", courses: 5, joined: "2025-02-10", status: "active" },
  { id: "3", name: "Yusuf Ibrahim", email: "yusuf@email.com", role: "student", courses: 2, joined: "2025-03-01", status: "blocked" },
  { id: "4", name: "Amara Osei", email: "amara@email.com", role: "admin", courses: 0, joined: "2024-12-01", status: "active" },
  { id: "5", name: "David Okonkwo", email: "david@email.com", role: "student", courses: 7, joined: "2025-01-28", status: "active" },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">Manage all platform users</p>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-9" />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Courses</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Joined</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8"><AvatarFallback className="bg-brand/10 text-brand text-xs">{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback></Avatar>
                        <div><p className="font-medium">{user.name}</p><p className="text-xs text-muted-foreground">{user.email}</p></div>
                      </div>
                    </td>
                    <td className="py-3 px-4"><Badge variant={user.role === "admin" ? "default" : "secondary"} className={user.role === "admin" ? "bg-brand" : ""}>{user.role}</Badge></td>
                    <td className="py-3 px-4">{user.courses}</td>
                    <td className="py-3 px-4 text-muted-foreground">{user.joined}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${user.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{user.status}</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Shield className="h-4 w-4 mr-2" />Make Admin</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive"><Ban className="h-4 w-4 mr-2" />{user.status === "active" ? "Block" : "Unblock"}</DropdownMenuItem>
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
