/* ============================================================
   Brainstorm Learning Centre – Type Definitions
   ============================================================ */

// ── Course ─────────────────────────────────────────────────────
export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  previewVideoUrl: string;
  price: number;
  discountPrice?: number;
  currency: string;
  category: Category;
  instructor: Instructor;
  rating: number;
  totalRatings: number;
  totalStudents: number;
  totalDuration: string;
  totalLessons: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  language: string;
  lastUpdated: string;
  isFeatured: boolean;
  isBestseller: boolean;
  sections: Section[];
  tags: string[];
}

export interface Section {
  id: string;
  title: string;
  order: number;
  subsections: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
  youtubeUrl: string;
  duration: string;
  isPreview: boolean;
  order: number;
}

// ── Category ───────────────────────────────────────────────────
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  courseCount: number;
  description: string;
}

// ── Instructor ─────────────────────────────────────────────────
export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  totalStudents: number;
  totalCourses: number;
  rating: number;
}

// ── User ───────────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "student" | "admin";
  joinedDate: string;
  bio: string;
}

// ── Review / Comment ───────────────────────────────────────────
export interface Review {
  id: string;
  user: Pick<User, "id" | "name" | "avatar">;
  courseId: string;
  rating: number;
  comment: string;
  date: string;
  replies?: Reply[];
}

export interface Reply {
  id: string;
  user: Pick<User, "id" | "name" | "avatar">;
  comment: string;
  date: string;
}

// ── Cart ───────────────────────────────────────────────────────
export interface CartItem {
  courseId: string;
  course: Course;
  addedAt: string;
}

// ── Payment ────────────────────────────────────────────────────
export interface Payment {
  id: string;
  userId: string;
  userName: string;
  courseId: string;
  courseTitle: string;
  amount: number;
  currency: string;
  status: "completed" | "pending" | "failed" | "refunded";
  method: string;
  date: string;
  reference: string;
}

// ── Enrollment / Progress ──────────────────────────────────────
export interface Enrollment {
  id: string;
  courseId: string;
  course: Course;
  progress: number;          // 0–100
  completedLessons: string[]; // subsection IDs
  enrolledDate: string;
  lastAccessedDate: string;
  certificateUrl?: string;
}

// ── Testimonial ────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
}

// ── Stats ──────────────────────────────────────────────────────
export interface PlatformStats {
  totalStudents: number;
  totalCourses: number;
  totalInstructors: number;
  successRate: number;
}

// ── Admin Stats ────────────────────────────────────────────────
export interface AdminStats {
  totalUsers: number;
  totalCourses: number;
  totalRevenue: number;
  totalPayments: number;
  recentPayments: Payment[];
  monthlyRevenue: { month: string; revenue: number }[];
  topCourses: { title: string; students: number; revenue: number }[];
}

// ── Navigation ─────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}
