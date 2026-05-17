import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Globe, Lightbulb, Award, Users } from "lucide-react";
import { ABOUT, SITE } from "@/data/site-content";

const iconMap: Record<string, React.ElementType> = { Globe, Lightbulb, Award, Users };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">{ABOUT.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{ABOUT.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-brand">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-4 text-brand">{ABOUT.mission.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{ABOUT.mission.description}</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-brand-gray">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-4">{ABOUT.vision.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{ABOUT.vision.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">{ABOUT.story.title}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{ABOUT.story.description}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.values.map((value) => {
              const Icon = iconMap[value.icon] || Globe;
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 mx-auto mb-4 rounded-xl bg-brand/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarFallback className="bg-brand/10 text-brand text-xl font-bold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading font-semibold">{member.name}</h3>
                  <p className="text-sm text-brand mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
