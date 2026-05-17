import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT, SITE } from "@/data/site-content";
import type { FormEvent } from "react";

const iconMap: Record<string, React.ElementType> = { Mail, Phone, MapPin };

export default function ContactPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">{CONTACT.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{CONTACT.subtitle}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {CONTACT.info.map((item) => {
                const Icon = iconMap[item.icon] || Mail;
                return (
                  <Card key={item.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">{CONTACT.formFields.name}</Label>
                      <Input id="contact-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">{CONTACT.formFields.email}</Label>
                      <Input id="contact-email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">{CONTACT.formFields.subject}</Label>
                    <Input id="contact-subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">{CONTACT.formFields.message}</Label>
                    <Textarea id="contact-message" placeholder="Tell us more..." rows={5} required />
                  </div>
                  <Button type="submit" className="bg-brand hover:bg-brand-dark text-white px-8">
                    <Send className="mr-2 h-4 w-4" />{CONTACT.formFields.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
