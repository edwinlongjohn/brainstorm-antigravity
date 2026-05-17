import { Card, CardContent } from "@/components/ui/card";
import { courses, payments } from "@/data/mock-data";
import { Users, BookOpen, CreditCard, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { title: "Total Users", value: "12,456", change: "+12%", up: true, icon: Users },
  { title: "Total Courses", value: String(courses.length), change: "+3", up: true, icon: BookOpen },
  { title: "Revenue", value: "₦4.2M", change: "+18%", up: true, icon: TrendingUp },
  { title: "Payments", value: String(payments.length * 20), change: "+8%", up: true, icon: CreditCard },
];

const recentPayments = payments.slice(0, 5);

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl lg:text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{stat.title}</span>
                <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-brand" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className={`text-xs font-medium flex items-center ${stat.up ? "text-green-600" : "text-red-500"}`}>
                  {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Payments */}
      <Card>
        <CardContent className="p-5">
          <h2 className="font-heading text-lg font-bold mb-4">Recent Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Course</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((p) => (
                  <tr key={p.id} className="border-b last:border-0">
                    <td className="py-3 px-2 font-medium">{p.userName}</td>
                    <td className="py-3 px-2 text-muted-foreground max-w-[200px] truncate">{p.courseTitle}</td>
                    <td className="py-3 px-2">₦{p.amount.toLocaleString()}</td>
                    <td className="py-3 px-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        p.status === "completed" ? "bg-green-100 text-green-700" :
                        p.status === "pending" ? "bg-amber-100 text-amber-700" :
                        "bg-red-100 text-red-700"
                      }`}>{p.status}</span>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">{p.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Top Courses */}
      <Card>
        <CardContent className="p-5">
          <h2 className="font-heading text-lg font-bold mb-4">Top Courses by Students</h2>
          <div className="space-y-3">
            {courses.slice(0, 5).sort((a, b) => b.totalStudents - a.totalStudents).map((c, i) => (
              <div key={c.id} className="flex items-center gap-3">
                <span className="text-sm font-bold text-muted-foreground w-6">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.instructor.name}</p>
                </div>
                <span className="text-sm font-medium">{c.totalStudents.toLocaleString()} students</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
