import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">My Profile</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Avatar Card */}
        <Card>
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <Avatar className="h-28 w-28">
                <AvatarFallback className="bg-brand/10 text-brand text-3xl font-bold">JD</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="font-heading font-bold text-lg">John Doe</h2>
            <p className="text-sm text-muted-foreground">john@example.com</p>
            <Separator className="my-4" />
            <div className="grid grid-cols-3 text-center gap-2">
              <div><span className="font-bold">3</span><p className="text-xs text-muted-foreground">Courses</p></div>
              <div><span className="font-bold">2</span><p className="text-xs text-muted-foreground">Certificates</p></div>
              <div><span className="font-bold">4.8</span><p className="text-xs text-muted-foreground">Avg Rating</p></div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Form */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="font-heading text-xl font-bold mb-6">Edit Profile</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label htmlFor="prof-first">First Name</Label><Input id="prof-first" defaultValue="John" /></div>
                <div className="space-y-2"><Label htmlFor="prof-last">Last Name</Label><Input id="prof-last" defaultValue="Doe" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="prof-email">Email</Label><Input id="prof-email" type="email" defaultValue="john@example.com" /></div>
              <div className="space-y-2"><Label htmlFor="prof-phone">Phone</Label><Input id="prof-phone" defaultValue="+234 800 000 0000" /></div>
              <div className="space-y-2"><Label htmlFor="prof-bio">Bio</Label><Textarea id="prof-bio" rows={3} defaultValue="Passionate learner exploring web development and data science." /></div>
              <Button className="bg-brand hover:bg-brand-dark text-white">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
