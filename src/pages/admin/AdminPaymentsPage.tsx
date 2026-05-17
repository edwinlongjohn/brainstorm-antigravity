import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { payments, formatPrice } from "@/data/mock-data";
import { Search } from "lucide-react";

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl font-bold">Payments</h1>
          <p className="text-muted-foreground">Track all platform transactions</p>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search payments..." className="pl-9" />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Reference</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Course</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Method</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="py-3 px-4 font-mono text-xs">{p.reference}</td>
                    <td className="py-3 px-4 font-medium">{p.userName}</td>
                    <td className="py-3 px-4 text-muted-foreground max-w-[200px] truncate">{p.courseTitle}</td>
                    <td className="py-3 px-4 font-medium">{formatPrice(p.amount)}</td>
                    <td className="py-3 px-4 text-muted-foreground">{p.method}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        p.status === "completed" ? "bg-green-100 text-green-700" :
                        p.status === "pending" ? "bg-amber-100 text-amber-700" :
                        p.status === "failed" ? "bg-red-100 text-red-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>{p.status}</span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{p.date}</td>
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
