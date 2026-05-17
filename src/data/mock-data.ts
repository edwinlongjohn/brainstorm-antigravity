import type { Category, Course, Instructor, Review, Testimonial, Payment, Enrollment } from "@/types";

// ── Instructors ────────────────────────────────────────────────
export const instructors: Instructor[] = [
  {
    id: "inst-1", name: "Dr. Sarah Chen", avatar: "", title: "AI & Machine Learning Expert",
    bio: "Former Google AI researcher with 10+ years teaching experience.", totalStudents: 45000, totalCourses: 12, rating: 4.9,
  },
  {
    id: "inst-2", name: "James Adeyemi", avatar: "", title: "Full-Stack Developer",
    bio: "Senior engineer at Meta, passionate about teaching web development.", totalStudents: 38000, totalCourses: 8, rating: 4.8,
  },
  {
    id: "inst-3", name: "Maria Gonzalez", avatar: "", title: "UX/UI Design Lead",
    bio: "Award-winning designer with experience at Apple and Spotify.", totalStudents: 22000, totalCourses: 6, rating: 4.7,
  },
  {
    id: "inst-4", name: "Oluwaseun Bakare", avatar: "", title: "Data Science Instructor",
    bio: "PhD in Statistics, helping students master data analytics.", totalStudents: 31000, totalCourses: 10, rating: 4.8,
  },
];

// ── Categories ─────────────────────────────────────────────────
export const categories: Category[] = [
  { id: "cat-1", name: "Web Development", slug: "web-development", icon: "Code", courseCount: 145, description: "HTML, CSS, JavaScript, React, Node.js and more" },
  { id: "cat-2", name: "Data Science", slug: "data-science", icon: "BarChart3", courseCount: 98, description: "Python, R, Machine Learning, Deep Learning" },
  { id: "cat-3", name: "Design", slug: "design", icon: "Palette", courseCount: 76, description: "UI/UX, Graphic Design, Figma, Adobe Suite" },
  { id: "cat-4", name: "Business", slug: "business", icon: "Briefcase", courseCount: 112, description: "Marketing, Finance, Entrepreneurship" },
  { id: "cat-5", name: "Mobile Development", slug: "mobile-dev", icon: "Smartphone", courseCount: 64, description: "React Native, Flutter, iOS, Android" },
  { id: "cat-6", name: "Cloud & DevOps", slug: "cloud-devops", icon: "Cloud", courseCount: 53, description: "AWS, Azure, Docker, Kubernetes, CI/CD" },
  { id: "cat-7", name: "Cybersecurity", slug: "cybersecurity", icon: "Shield", courseCount: 41, description: "Ethical Hacking, Network Security, Compliance" },
  { id: "cat-8", name: "AI & Machine Learning", slug: "ai-ml", icon: "Brain", courseCount: 87, description: "Neural Networks, NLP, Computer Vision" },
];

// ── Courses ────────────────────────────────────────────────────
export const courses: Course[] = [
  {
    id: "crs-1", slug: "complete-react-masterclass", title: "The Complete React Masterclass 2025",
    subtitle: "Build modern web apps with React 19, TypeScript, and Next.js",
    description: "Master React from zero to hero. This comprehensive course covers React fundamentals, hooks, state management, routing, testing, and deployment. By the end, you'll build 5 real-world projects.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 49900, discountPrice: 19900, currency: "NGN",
    category: categories[0], instructor: instructors[1],
    rating: 4.8, totalRatings: 2340, totalStudents: 15200, totalDuration: "42h 30m", totalLessons: 285,
    level: "All Levels", language: "English", lastUpdated: "2025-04-15", isFeatured: true, isBestseller: true,
    tags: ["React", "TypeScript", "Next.js", "Frontend"],
    sections: [
      { id: "s1", title: "Getting Started with React", order: 1, subsections: [
        { id: "ss1", title: "Course Introduction", youtubeUrl: "https://youtube.com/watch?v=example1", duration: "5:30", isPreview: true, order: 1 },
        { id: "ss2", title: "Setting Up Your Environment", youtubeUrl: "https://youtube.com/watch?v=example2", duration: "12:45", isPreview: true, order: 2 },
        { id: "ss3", title: "Your First React Component", youtubeUrl: "https://youtube.com/watch?v=example3", duration: "18:20", isPreview: false, order: 3 },
      ]},
      { id: "s2", title: "React Hooks Deep Dive", order: 2, subsections: [
        { id: "ss4", title: "useState & useEffect", youtubeUrl: "https://youtube.com/watch?v=example4", duration: "22:10", isPreview: false, order: 1 },
        { id: "ss5", title: "useContext & useReducer", youtubeUrl: "https://youtube.com/watch?v=example5", duration: "19:35", isPreview: false, order: 2 },
      ]},
      { id: "s3", title: "Advanced Patterns", order: 3, subsections: [
        { id: "ss6", title: "Custom Hooks", youtubeUrl: "https://youtube.com/watch?v=example6", duration: "25:00", isPreview: false, order: 1 },
        { id: "ss7", title: "Performance Optimization", youtubeUrl: "https://youtube.com/watch?v=example7", duration: "20:15", isPreview: false, order: 2 },
      ]},
    ],
  },
  {
    id: "crs-2", slug: "python-data-science-bootcamp", title: "Python for Data Science Bootcamp",
    subtitle: "Learn Python, Pandas, NumPy, and Machine Learning from scratch",
    description: "A complete data science bootcamp using Python. You'll learn data analysis, visualization, machine learning, and real-world project implementation.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 59900, discountPrice: 24900, currency: "NGN",
    category: categories[1], instructor: instructors[3],
    rating: 4.7, totalRatings: 1890, totalStudents: 12800, totalDuration: "56h 15m", totalLessons: 340,
    level: "Beginner", language: "English", lastUpdated: "2025-03-20", isFeatured: true, isBestseller: true,
    tags: ["Python", "Data Science", "Machine Learning", "Pandas"],
    sections: [
      { id: "s4", title: "Python Fundamentals", order: 1, subsections: [
        { id: "ss8", title: "Introduction to Python", youtubeUrl: "https://youtube.com/watch?v=pyex1", duration: "8:00", isPreview: true, order: 1 },
        { id: "ss9", title: "Variables and Data Types", youtubeUrl: "https://youtube.com/watch?v=pyex2", duration: "15:30", isPreview: false, order: 2 },
      ]},
    ],
  },
  {
    id: "crs-3", slug: "ui-ux-design-complete-guide", title: "UI/UX Design: The Complete Guide",
    subtitle: "Design beautiful, user-friendly interfaces with Figma",
    description: "Learn the principles of great UI/UX design. From wireframing to prototyping, master Figma and create stunning designs that users love.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 39900, discountPrice: 14900, currency: "NGN",
    category: categories[2], instructor: instructors[2],
    rating: 4.9, totalRatings: 1560, totalStudents: 9800, totalDuration: "38h 45m", totalLessons: 220,
    level: "Beginner", language: "English", lastUpdated: "2025-04-01", isFeatured: true, isBestseller: false,
    tags: ["UI/UX", "Figma", "Design", "Prototyping"],
    sections: [
      { id: "s5", title: "Design Foundations", order: 1, subsections: [
        { id: "ss10", title: "What is UI/UX?", youtubeUrl: "https://youtube.com/watch?v=uiex1", duration: "10:15", isPreview: true, order: 1 },
      ]},
    ],
  },
  {
    id: "crs-4", slug: "aws-cloud-practitioner", title: "AWS Cloud Practitioner Certification",
    subtitle: "Pass the AWS CCP exam on your first attempt",
    description: "Comprehensive AWS Cloud Practitioner preparation course covering all exam domains with hands-on labs and practice tests.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 44900, currency: "NGN",
    category: categories[5], instructor: instructors[0],
    rating: 4.6, totalRatings: 980, totalStudents: 7200, totalDuration: "28h 10m", totalLessons: 180,
    level: "Beginner", language: "English", lastUpdated: "2025-02-28", isFeatured: false, isBestseller: false,
    tags: ["AWS", "Cloud", "Certification"],
    sections: [
      { id: "s6", title: "Cloud Concepts", order: 1, subsections: [
        { id: "ss11", title: "What is Cloud Computing?", youtubeUrl: "https://youtube.com/watch?v=awsex1", duration: "12:00", isPreview: true, order: 1 },
      ]},
    ],
  },
  {
    id: "crs-5", slug: "digital-marketing-mastery", title: "Digital Marketing Mastery",
    subtitle: "SEO, Social Media, PPC, and Content Marketing",
    description: "Master digital marketing strategies that drive real business results. Learn SEO, social media marketing, Google Ads, and content strategy.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 34900, discountPrice: 12900, currency: "NGN",
    category: categories[3], instructor: instructors[0],
    rating: 4.5, totalRatings: 720, totalStudents: 5400, totalDuration: "32h 00m", totalLessons: 200,
    level: "Intermediate", language: "English", lastUpdated: "2025-03-10", isFeatured: true, isBestseller: false,
    tags: ["Marketing", "SEO", "Social Media"],
    sections: [
      { id: "s7", title: "Marketing Foundations", order: 1, subsections: [
        { id: "ss12", title: "Digital Marketing Overview", youtubeUrl: "https://youtube.com/watch?v=dmex1", duration: "9:30", isPreview: true, order: 1 },
      ]},
    ],
  },
  {
    id: "crs-6", slug: "flutter-mobile-development", title: "Flutter & Dart: Complete Mobile App Development",
    subtitle: "Build iOS and Android apps with a single codebase",
    description: "Learn Flutter and Dart to build beautiful, natively compiled mobile applications for iOS and Android from a single codebase.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 54900, discountPrice: 22900, currency: "NGN",
    category: categories[4], instructor: instructors[1],
    rating: 4.7, totalRatings: 1100, totalStudents: 8100, totalDuration: "45h 20m", totalLessons: 310,
    level: "Intermediate", language: "English", lastUpdated: "2025-04-05", isFeatured: false, isBestseller: true,
    tags: ["Flutter", "Dart", "Mobile", "iOS", "Android"],
    sections: [
      { id: "s8", title: "Dart Basics", order: 1, subsections: [
        { id: "ss13", title: "Introduction to Dart", youtubeUrl: "https://youtube.com/watch?v=fltex1", duration: "11:00", isPreview: true, order: 1 },
      ]},
    ],
  },
  {
    id: "crs-7", slug: "ethical-hacking-complete", title: "Complete Ethical Hacking Bootcamp",
    subtitle: "Learn penetration testing, network security, and bug bounty hunting",
    description: "Become an ethical hacker. Learn penetration testing, network security, web app security, and how to find and report vulnerabilities.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 64900, discountPrice: 29900, currency: "NGN",
    category: categories[6], instructor: instructors[3],
    rating: 4.8, totalRatings: 890, totalStudents: 6300, totalDuration: "50h 00m", totalLessons: 280,
    level: "Intermediate", language: "English", lastUpdated: "2025-03-25", isFeatured: false, isBestseller: false,
    tags: ["Cybersecurity", "Ethical Hacking", "Penetration Testing"],
    sections: [
      { id: "s9", title: "Security Fundamentals", order: 1, subsections: [
        { id: "ss14", title: "Intro to Ethical Hacking", youtubeUrl: "https://youtube.com/watch?v=ehex1", duration: "14:00", isPreview: true, order: 1 },
      ]},
    ],
  },
  {
    id: "crs-8", slug: "deep-learning-specialization", title: "Deep Learning Specialization",
    subtitle: "Neural Networks, TensorFlow, and Computer Vision",
    description: "Dive deep into neural networks and deep learning. Master TensorFlow, build CNNs, RNNs, and deploy AI models to production.",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: 69900, discountPrice: 34900, currency: "NGN",
    category: categories[7], instructor: instructors[0],
    rating: 4.9, totalRatings: 2100, totalStudents: 14500, totalDuration: "60h 30m", totalLessons: 400,
    level: "Advanced", language: "English", lastUpdated: "2025-04-10", isFeatured: true, isBestseller: true,
    tags: ["Deep Learning", "AI", "TensorFlow", "Neural Networks"],
    sections: [
      { id: "s10", title: "Neural Network Basics", order: 1, subsections: [
        { id: "ss15", title: "What is Deep Learning?", youtubeUrl: "https://youtube.com/watch?v=dlex1", duration: "16:00", isPreview: true, order: 1 },
      ]},
    ],
  },
];

// ── Reviews ────────────────────────────────────────────────────
export const reviews: Review[] = [
  { id: "rev-1", user: { id: "u1", name: "Tunde Afolabi", avatar: "" }, courseId: "crs-1", rating: 5, comment: "Best React course I've ever taken! The instructor explains complex concepts so clearly.", date: "2025-04-10" },
  { id: "rev-2", user: { id: "u2", name: "Ngozi Eze", avatar: "" }, courseId: "crs-1", rating: 4, comment: "Very comprehensive. I went from knowing nothing about React to building full apps.", date: "2025-04-08" },
  { id: "rev-3", user: { id: "u3", name: "Yusuf Ibrahim", avatar: "" }, courseId: "crs-2", rating: 5, comment: "The projects are amazing. I landed a data science job after completing this course!", date: "2025-03-28" },
  { id: "rev-4", user: { id: "u4", name: "Amara Osei", avatar: "" }, courseId: "crs-3", rating: 5, comment: "Transformed my design skills completely. Highly recommended for beginners.", date: "2025-04-02" },
  { id: "rev-5", user: { id: "u5", name: "David Okonkwo", avatar: "" }, courseId: "crs-1", rating: 5, comment: "Clear explanations, great projects. Worth every naira!", date: "2025-04-12" },
];

// ── Testimonials ───────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  { id: "t-1", name: "Adaeze Okafor", avatar: "", role: "Software Engineer at Paystack", comment: "Brainstorm helped me transition from a non-tech background to landing my dream job in just 6 months. The structured learning paths made all the difference.", rating: 5 },
  { id: "t-2", name: "Kwame Asante", avatar: "", role: "Data Analyst at MTN", comment: "The quality of courses here rivals paid platforms like Udemy and Coursera, but at a fraction of the cost. Absolutely incredible value.", rating: 5 },
  { id: "t-3", name: "Fatima Abdullahi", avatar: "", role: "UX Designer at Flutterwave", comment: "I completed the UI/UX Design course and immediately applied what I learned to my portfolio. Got hired within 3 weeks!", rating: 5 },
  { id: "t-4", name: "Samuel Nwosu", avatar: "", role: "Freelance Developer", comment: "As a self-taught developer, Brainstorm gave me the structured curriculum I was missing. The certificate also boosted my credibility with clients.", rating: 4 },
];

// ── Payments (admin mock) ──────────────────────────────────────
export const payments: Payment[] = [
  { id: "pay-1", userId: "u1", userName: "Tunde Afolabi", courseId: "crs-1", courseTitle: "The Complete React Masterclass 2025", amount: 19900, currency: "NGN", status: "completed", method: "Paystack", date: "2025-04-15", reference: "PSK_REF_001" },
  { id: "pay-2", userId: "u2", userName: "Ngozi Eze", courseId: "crs-2", courseTitle: "Python for Data Science Bootcamp", amount: 24900, currency: "NGN", status: "completed", method: "Paystack", date: "2025-04-14", reference: "PSK_REF_002" },
  { id: "pay-3", userId: "u3", userName: "Yusuf Ibrahim", courseId: "crs-3", courseTitle: "UI/UX Design: The Complete Guide", amount: 14900, currency: "NGN", status: "pending", method: "Paystack", date: "2025-04-13", reference: "PSK_REF_003" },
  { id: "pay-4", userId: "u4", userName: "Amara Osei", courseId: "crs-1", courseTitle: "The Complete React Masterclass 2025", amount: 19900, currency: "NGN", status: "completed", method: "Bank Transfer", date: "2025-04-12", reference: "PSK_REF_004" },
  { id: "pay-5", userId: "u5", userName: "David Okonkwo", courseId: "crs-6", courseTitle: "Flutter & Dart: Complete Mobile App Development", amount: 22900, currency: "NGN", status: "failed", method: "Paystack", date: "2025-04-11", reference: "PSK_REF_005" },
];

// ── Enrollments (user mock) ────────────────────────────────────
export const enrollments: Enrollment[] = [
  { id: "enr-1", courseId: "crs-1", course: courses[0], progress: 68, completedLessons: ["ss1", "ss2", "ss3", "ss4"], enrolledDate: "2025-03-01", lastAccessedDate: "2025-04-15" },
  { id: "enr-2", courseId: "crs-3", course: courses[2], progress: 35, completedLessons: ["ss10"], enrolledDate: "2025-03-15", lastAccessedDate: "2025-04-14" },
  { id: "enr-3", courseId: "crs-8", course: courses[7], progress: 100, completedLessons: ["ss15"], enrolledDate: "2025-01-10", lastAccessedDate: "2025-04-10", certificateUrl: "/certificates/cert-001.pdf" },
];

// ── Helper ──────────────────────────────────────────────────────
export function formatPrice(amount: number, currency = "NGN"): string {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency, minimumFractionDigits: 0 }).format(amount);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.isFeatured);
}

export function getBestsellerCourses(): Course[] {
  return courses.filter((c) => c.isBestseller);
}
