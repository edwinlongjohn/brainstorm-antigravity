import { Link } from "react-router-dom";
import { GraduationCap, Globe, MessageCircle, Camera, Briefcase, Play } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/data/site-content";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const socialIcons = [
    { icon: Globe, href: SITE.social.facebook, label: "Facebook" },
    { icon: MessageCircle, href: SITE.social.twitter, label: "Twitter" },
    { icon: Camera, href: SITE.social.instagram, label: "Instagram" },
    { icon: Briefcase, href: SITE.social.linkedin, label: "LinkedIn" },
    { icon: Play, href: SITE.social.youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg gradient-brand flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-background">{SITE.name}</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-4 max-w-xs">{SITE.description.slice(0, 150)}...</p>
            <p className="text-xs text-background/40">{SITE.rcNumber}</p>
            <div className="flex items-center gap-3 mt-4">
              {socialIcons.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-brand transition-colors">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-background text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-background/60 hover:text-brand transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-background/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">{SITE.copyright}</p>
          <div className="flex items-center gap-4 text-xs text-background/40">
            <Link to="/about" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-brand transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-brand transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
