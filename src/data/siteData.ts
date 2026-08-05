import { Course, Feature, PlacedStudent, FacultyMember, Testimonial, GalleryItem, Batch, BlogPost, FAQItem } from '../types';

export const COLORS = {
  navy: '#0F3A5A',
  navyLight: '#1F5D8C',
  gold: '#F6C343',
  cream: '#FFF8E8',
  bg: '#F8FAFC',
  text: '#102A43',
  muted: '#5A6573',
  border: '#E8EDF2',
  white: '#FFFFFF',
};

export const COURSES: Course[] = [
  {
    title: 'Full Stack Development',
    duration: '6 Months',
    mode: 'Online/Offline',
    icon: '💻',
    careers: 'Web Dev, Backend Dev, SDE',
    color: '#EEF4FF',
    accent: '#3B82F6',
    img: 'photo-1499750310107-5fef28a66643',
    category: 'Software',
    popular: true
  },
  {
    title: 'Digital Marketing',
    duration: '3 Months',
    mode: 'Online/Offline',
    icon: '📊',
    careers: 'SEO, SEM, Social Media Manager',
    color: '#FFF7ED',
    accent: '#F97316',
    img: 'photo-1432888622747-4eb9a8efeb07',
    category: 'Digital',
    popular: true
  },
  {
    title: 'Python Programming',
    duration: '4 Months',
    mode: 'Online/Offline',
    icon: '🐍',
    careers: 'Data Scientist, ML Engineer',
    color: '#F0FDF4',
    accent: '#22C55E',
    img: 'photo-1587620962725-abab7fe55159',
    category: 'Software',
    popular: true
  },
  {
    title: 'AI & Machine Learning',
    duration: '5 Months',
    mode: 'Online/Offline',
    icon: '🤖',
    careers: 'AI Engineer, Research Analyst',
    color: '#FAF5FF',
    accent: '#A855F7',
    img: 'photo-1677442135703-1787eea5ce01',
    category: 'Software',
    popular: true
  },
  {
    title: 'Cyber Security',
    duration: '4 Months',
    mode: 'Online/Offline',
    icon: '🔐',
    careers: 'Security Analyst, Ethical Hacker',
    color: '#FFF1F2',
    accent: '#F43F5E',
    img: 'photo-1614064641938-3bbee52942c7',
    category: 'Cyber & Cloud',
    popular: true
  },
  {
    title: 'UI/UX Design',
    duration: '3 Months',
    mode: 'Online/Offline',
    icon: '🎨',
    careers: 'UX Designer, Product Designer',
    color: '#ECFDF5',
    accent: '#10B981',
    img: 'photo-1561070791-2526d30994b5',
    category: 'Design & CAD',
    popular: true
  },
  {
    title: 'Cloud Computing',
    duration: '3 Months',
    mode: 'Online/Offline',
    icon: '☁️',
    careers: 'Cloud Architect, DevOps Engineer',
    color: '#F0F9FF',
    accent: '#0EA5E9',
    img: 'photo-1451187580459-43490279c0fa',
    category: 'Cyber & Cloud',
    popular: false
  },
  {
    title: 'Data Analytics',
    duration: '4 Months',
    mode: 'Online/Offline',
    icon: '📈',
    careers: 'Data Analyst, Business Analyst',
    color: '#FEFCE8',
    accent: '#EAB308',
    img: 'photo-1551288049-bebda4e38f71',
    category: 'Software',
    popular: false
  },
  {
    title: 'AutoCAD Civil',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📐',
    careers: 'CAD Operator, Civil Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1503387762-592deb58ef4e',
    category: 'Design & CAD',
    popular: false
  },
  {
    title: 'Graphic Design',
    duration: '3 Months',
    mode: 'Online/Offline',
    icon: '🖌️',
    careers: 'Graphic Designer, Brand Designer',
    color: '#FFF5F5',
    accent: '#EF4444',
    img: 'photo-1626785774573-4b799315345d',
    category: 'Design & CAD',
    popular: false
  },
  {
    title: 'Java Programming',
    duration: '4 Months',
    mode: 'Online/Offline',
    icon: '☕',
    careers: 'Java Developer, Backend Engineer',
    color: '#FFF7ED',
    accent: '#EA580C',
    img: 'photo-1555099962-4199c345e5dd',
    category: 'Software',
    popular: false
  },
  {
    title: 'Networking & Hardware',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🔌',
    careers: 'Network Engineer, IT Support',
    color: '#EFF6FF',
    accent: '#2563EB',
    img: 'photo-1558494949-ef010cbdcc31',
    category: 'Cyber & Cloud',
    popular: false
  }
];

export const FEATURES: Feature[] = [
  {
    icon: '🎓',
    title: 'Industry Expert Trainers',
    desc: 'Learn from professionals with 10+ years of real-world industry experience.'
  },
  {
    icon: '🔬',
    title: 'Hands-on Practical Training',
    desc: 'Every class involves practical exercises, lab sessions and live tool usage.'
  },
  {
    icon: '🚀',
    title: 'Live Projects',
    desc: 'Work on real-world projects and get internship exposure before placement.'
  },
  {
    icon: '📋',
    title: 'Resume Building & Mock Interviews',
    desc: 'Professional resume templates and intensive mock interview sessions with feedback.'
  },
  {
    icon: '🤝',
    title: 'Dedicated Placement Support',
    desc: '120+ hiring partners actively recruit from our student pool every quarter.'
  },
  {
    icon: '📜',
    title: 'Industry Certification',
    desc: 'Receive recognized certifications that strengthen your profile and credibility.'
  }
];

export const RECRUITERS = [
  'TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Tech Mahindra',
  'Cognizant', 'IBM', 'Oracle', 'Persistent', 'LTIMindtree', 'Hexaware'
];

export const PLACED_STUDENTS: PlacedStudent[] = [
  {
    name: 'Priya Sharma',
    course: 'Full Stack Development',
    company: 'TCS',
    role: 'Junior Developer',
    salary: '4.8 LPA',
    story: "Universe Academy's live projects gave me the confidence to crack my first interview. The placement team guided me every step of the way.",
    initials: 'PS',
    color: '#3B82F6'
  },
  {
    name: 'Rahul Patel',
    course: 'Digital Marketing',
    company: 'Infosys BPM',
    role: 'Digital Marketing Analyst',
    salary: '4.2 LPA',
    story: 'The practical campaigns we ran during training became my portfolio. Got placed within 2 weeks of course completion!',
    initials: 'RP',
    color: '#10B981'
  },
  {
    name: 'Aisha Khan',
    course: 'Data Analytics',
    company: 'Wipro',
    role: 'Data Analyst',
    salary: '5.5 LPA',
    story: 'Industry-ready skills and mentorship from experienced trainers made all the difference. Highly recommend Universe Academy!',
    initials: 'AK',
    color: '#F59E0B'
  },
  {
    name: 'Vikram Nair',
    course: 'Cyber Security',
    company: 'Accenture',
    role: 'Security Associate',
    salary: '6.0 LPA',
    story: 'The hands-on labs and real ethical hacking scenarios prepared me better than any book could. Thank you, Universe Academy!',
    initials: 'VN',
    color: '#8B5CF6'
  }
];

export const PLACEMENT_STEPS = [
  'Career Counselling', 'Enrollment', 'Training', 'Live Projects',
  'Resume Building', 'Mock Interviews', 'Interview Scheduling', 'Placement'
];

export const FACULTY: FacultyMember[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Full Stack & Python Expert',
    exp: '12 Years',
    specialization: 'Web Dev, AI/ML',
    courses: 'Python, Full Stack, ML',
    color: '#3B82F6'
  },
  {
    name: 'Sunita Verma',
    role: 'Digital Marketing Strategist',
    exp: '9 Years',
    specialization: 'SEO, SEM, Social Media',
    courses: 'Digital Marketing, Analytics',
    color: '#F97316'
  },
  {
    name: 'Amit Singh',
    role: 'Cybersecurity Professional',
    exp: '11 Years',
    specialization: 'Ethical Hacking, Cloud Security',
    courses: 'Cyber Security, Networking',
    color: '#A855F7'
  },
  {
    name: 'Meera Nair',
    role: 'UI/UX & Design Lead',
    exp: '8 Years',
    specialization: 'Product Design, Motion',
    courses: 'UI/UX, Graphic Design, Motion',
    color: '#10B981'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ananya Gupta',
    course: 'UI/UX Design',
    rating: 5,
    text: 'The design curriculum was incredibly comprehensive. I built a real portfolio during training and landed a job at a top product company. Universe Academy truly delivers what it promises.',
    placed: 'Razorpay',
    initials: 'AG',
    color: '#EC4899'
  },
  {
    name: 'Suresh Reddy',
    course: 'Python & Data Analytics',
    rating: 5,
    text: 'I had zero programming knowledge. After 4 months at Universe Academy, I cracked my first interview and now work as a Data Analyst. The trainers were patient and highly skilled.',
    placed: 'Wipro',
    initials: 'SR',
    color: '#3B82F6'
  },
  {
    name: 'Fatima Begum',
    course: 'Digital Marketing',
    rating: 5,
    text: 'The live campaign projects set me apart from other candidates. I could show real results in my interview. Got placed within 3 weeks after completing the course!',
    placed: 'Dentsu Webchutney',
    initials: 'FB',
    color: '#F59E0B'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'photo-1522071820081-009f0129c71c', label: 'Students Learning', span: 'col-span-1 md:col-span-2' },
  { id: 'photo-1557804506-669a67965ba0', label: 'Training Session', span: 'col-span-1' },
  { id: 'photo-1758691736433-4078b93abd72', label: 'Seminar', span: 'col-span-1' },
  { id: 'photo-1586717791821-3f44a563fa4c', label: 'Lab Session', span: 'col-span-1' },
  { id: 'photo-1551434678-e076c223a692', label: 'Placement Drive', span: 'col-span-1' },
  { id: 'photo-1523240795612-9a054b0db644', label: 'Campus', span: 'col-span-1 md:col-span-2' }
];

export const UPCOMING_BATCHES: Batch[] = [
  {
    course: 'Full Stack Development',
    start: 'Aug 15, 2026',
    duration: '6 Months',
    timing: 'Mon–Sat, 10am–1pm',
    seats: 8,
    color: '#3B82F6'
  },
  {
    course: 'Digital Marketing',
    start: 'Aug 18, 2026',
    duration: '3 Months',
    timing: 'Mon–Sat, 2pm–5pm',
    seats: 5,
    color: '#F97316'
  },
  {
    course: 'Python & AI/ML',
    start: 'Aug 20, 2026',
    duration: '5 Months',
    timing: 'Mon–Sat, 10am–1pm',
    seats: 10,
    color: '#A855F7'
  },
  {
    course: 'Cyber Security',
    start: 'Aug 22, 2026',
    duration: '4 Months',
    timing: 'Mon–Sat, 4pm–7pm',
    seats: 3,
    color: '#F43F5E'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Top 10 Highest-Paying IT Careers in India in 2026',
    category: 'Career Tips',
    date: 'Jul 28, 2026',
    read: '5 min read',
    img: 'photo-1499750310107-5fef28a66643'
  },
  {
    title: 'How to Prepare for a Software Developer Interview',
    category: 'Interview Tips',
    date: 'Jul 15, 2026',
    read: '7 min read',
    img: 'photo-1555099962-4199c345e5dd'
  },
  {
    title: 'AI & Machine Learning: Career Opportunities in 2026',
    category: 'Technology',
    date: 'Jul 5, 2026',
    read: '6 min read',
    img: 'photo-1677442135703-1787eea5ce01'
  }
];

export const FAQS: FAQItem[] = [
  {
    q: 'What is the admission process at Universe Academy?',
    a: 'Simply book a free counselling session, choose your course, and complete enrollment. No entrance tests required — we welcome all motivated learners.'
  },
  {
    q: 'Are the courses available online or offline?',
    a: 'Both! We offer flexible Online, Offline, and Hybrid modes so you can learn comfortably from anywhere or attend our state-of-the-art labs in person.'
  },
  {
    q: 'Do you provide placement assistance after course completion?',
    a: 'Yes, 100%. Our dedicated placement cell works with 120+ hiring partners and provides resume building, mock interviews, and direct interview scheduling until you are placed.'
  },
  {
    q: 'Will I receive a certificate after completing the course?',
    a: 'Yes, every student receives an industry-recognized certification upon successful course completion, which you can add to your LinkedIn profile and resume.'
  },
  {
    q: 'What is the batch size and timings?',
    a: 'We keep batches small (max 20 students) for personalized attention. Batches run in morning, afternoon, and evening slots to suit working professionals and students alike.'
  },
  {
    q: 'Can I switch courses if I change my mind?',
    a: 'Yes, within the first 2 weeks of starting a course, you may switch to a different program at no additional charge, subject to seat availability.'
  }
];
