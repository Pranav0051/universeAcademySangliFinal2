export interface Course {
  id?: string;
  title: string;
  duration: string;
  mode: string;
  icon: string;
  careers: string;
  color: string;
  accent: string;
  img: string;
  category?: string;
  popular?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface PlacedStudent {
  name: string;
  course: string;
  company: string;
  role: string;
  salary: string;
  story: string;
  initials: string;
  color: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  exp: string;
  specialization: string;
  courses: string;
  color: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  course: string;
  rating: number;
  text: string;
  placed: string;
  initials: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  label: string;
  span: string;
}

export interface Batch {
  course: string;
  start: string;
  duration: string;
  timing: string;
  seats: number;
  color: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  read: string;
  img: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
}
