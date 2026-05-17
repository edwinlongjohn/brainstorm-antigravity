/* ============================================================
   Site-Wide Content — Edit text here to update across the site
   ============================================================ */

export const SITE = {
  name: "Brainstorm",
  fullName: "Brainstorm Learning Centre",
  tagline: "Unlock Your Potential Through Expert-Led Courses",
  description:
    "Brainstorm Learning Centre offers world-class online education through curated video courses. Learn from industry experts, earn certificates, and accelerate your career — all at your own pace.",
  rcNumber: "RC: 2655564",
  email: "info@brainstormlearning.com",
  phone: "+234 800 123 4567",
  address: "12 Innovation Drive, Victoria Island, Lagos, Nigeria",
  social: {
    twitter: "https://twitter.com/brainstormlearn",
    facebook: "https://facebook.com/brainstormlearn",
    linkedin: "https://linkedin.com/company/brainstormlearn",
    instagram: "https://instagram.com/brainstormlearn",
    youtube: "https://youtube.com/@brainstormlearn",
  },
  copyright: `© ${new Date().getFullYear()} Brainstorm Learning Centre. All rights reserved.`,
} as const;

export const HERO = {
  badge: "🎓 #1 YouTube-Powered Learning Platform",
  headline: "Learn Without Limits, Grow Without Boundaries",
  subheadline:
    "Access thousands of expert-curated courses powered by YouTube. Learn at your own pace with structured content, progress tracking, and industry-recognized certificates.",
  cta: "Explore Courses",
  ctaSecondary: "Learn More",
  stats: [
    { value: "50K+", label: "Active Learners" },
    { value: "1,200+", label: "Expert Courses" },
    { value: "200+", label: "Instructors" },
    { value: "95%", label: "Success Rate" },
  ],
} as const;

export const ABOUT = {
  title: "About Brainstorm",
  subtitle: "Empowering Minds Through Quality Education",
  mission: {
    title: "Our Mission",
    description:
      "To democratize quality education by curating the best YouTube content into structured, affordable learning paths that help individuals build real-world skills and advance their careers.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To become Africa's leading YouTube-powered learning platform, making world-class education accessible to everyone regardless of their location or economic background.",
  },
  story: {
    title: "Our Story",
    description:
      "Founded in 2024, Brainstorm Learning Centre was born from a simple observation: incredible educational content exists freely on YouTube, but learners lack the structure and guidance to turn that content into meaningful skills. We bridge this gap by organizing, curating, and enhancing YouTube-based courses with quizzes, resources, and certificates. Our team of educators and technologists work tirelessly to create learning experiences that are engaging, effective, and accessible. Today, we serve over 50,000 learners across 30+ countries.",
  },
  values: [
    {
      title: "Accessibility",
      description: "Quality education should be available to everyone, everywhere.",
      icon: "Globe",
    },
    {
      title: "Innovation",
      description: "We leverage technology to create better learning experiences.",
      icon: "Lightbulb",
    },
    {
      title: "Excellence",
      description: "We curate only the highest quality content for our learners.",
      icon: "Award",
    },
    {
      title: "Community",
      description: "Learning is better together — we foster collaborative growth.",
      icon: "Users",
    },
  ],
  team: [
    {
      name: "Adebayo Ogundimu",
      role: "Founder & CEO",
      avatar: "",
      bio: "EdTech visionary with 15+ years in digital education.",
    },
    {
      name: "Chioma Nwankwo",
      role: "Head of Content",
      avatar: "",
      bio: "Former university lecturer passionate about curriculum design.",
    },
    {
      name: "Emeka Obi",
      role: "CTO",
      avatar: "",
      bio: "Full-stack engineer building scalable learning infrastructure.",
    },
    {
      name: "Fatima Bello",
      role: "Head of Growth",
      avatar: "",
      bio: "Marketing strategist focused on learner acquisition and retention.",
    },
  ],
} as const;

export const CONTACT = {
  title: "Get In Touch",
  subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  formFields: {
    name: "Full Name",
    email: "Email Address",
    subject: "Subject",
    message: "Your Message",
    submit: "Send Message",
  },
  info: [
    { icon: "Mail", title: "Email Us", detail: SITE.email },
    { icon: "Phone", title: "Call Us", detail: SITE.phone },
    { icon: "MapPin", title: "Visit Us", detail: SITE.address },
  ],
} as const;

export const FOOTER_LINKS = {
  platform: {
    title: "Platform",
    links: [
      { label: "Browse Courses", href: "/courses" },
      { label: "Categories", href: "/courses" },
      { label: "Pricing", href: "/courses" },
      { label: "For Instructors", href: "/about" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "FAQs", href: "/contact" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms of Service", href: "/about" },
    ],
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
