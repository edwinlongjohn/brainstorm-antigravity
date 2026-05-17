import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

const JOBS = [
  { id: 1, title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: 2, title: "Product Designer", department: "Design", location: "Lagos, Nigeria", type: "Full-time" },
  { id: 3, title: "Content Marketing Manager", department: "Marketing", location: "Remote", type: "Full-time" },
  { id: 4, title: "Customer Success Specialist", department: "Support", location: "Lagos, Nigeria", type: "Part-time" },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Help us democratize education and build the future of learning.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Why Work With Us?</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            At Brainstorm, we believe that education is the ultimate equalizer. We are a team of passionate educators, engineers, and creators working together to make high-quality learning accessible to everyone. We offer competitive salaries, flexible working hours, and a culture that encourages continuous learning.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {JOBS.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 sm:flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                    </div>
                  </div>
                  <Button className="mt-4 sm:mt-0 bg-brand hover:bg-brand-dark text-white">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
