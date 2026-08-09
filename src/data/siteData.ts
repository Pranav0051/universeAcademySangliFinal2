import { Course, Feature, PlacedStudent, FacultyMember, Testimonial, GalleryItem, Batch, BlogPost, FAQItem, Company, StudentProject } from '../types';

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
  // SOFTWARE & DIGITAL
  {
    title: 'Full Stack Development',
    duration: '3 Months',
    mode: 'Online/Offline',
    icon: '💻',
    careers: 'Web Dev, Backend Dev, SDE',
    color: '#EEF4FF',
    accent: '#3B82F6',
    img: 'photo-1498050108023-c5249f4df085',
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
    img: 'photo-1460925895917-afdab827c52f',
    category: 'Digital',
    popular: true
  },
  {
    title: 'Python Programming',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🐍',
    careers: 'Data Scientist, ML Engineer',
    color: '#F0FDF4',
    accent: '#22C55E',
    img: 'photo-1526374965328-7f61d4dc18c5',
    category: 'Software',
    popular: true
  },
  {
    title: 'Software Testing',
    duration: '3 Months',
    mode: 'Online/Offline',
    icon: '🔐',
    careers: 'Manual testing, Playwright Automation Testing',
    color: '#FFF1F2',
    accent: '#F43F5E',
    img: 'photo-1516321318423-f06f85e504b3',
    category: 'Software',
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
    img: 'photo-1581291518857-4e27b48ff24e',
    category: 'Design & CAD',
    popular: true
  },
  {
    title: 'Devops',
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
    duration: '3 Months',
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
    duration: '2 Months',
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
    title: 'C & C++',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🔌',
    careers: 'Software Engineer, Systems Programmer',
    color: '#EFF6FF',
    accent: '#2563EB',
    img: 'photo-1515879218367-8466d910aaa4',
    category: 'Software',
    popular: false
  },

  // MECHANICAL CAD
  {
    title: 'AutoCAD',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📐',
    careers: 'Mechanical Drafter, CAD Operator',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1503387762-592deb58ef4e',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'Ansys',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🔬',
    careers: 'FEA Analyst, Simulation Engineer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581092580497-e0d23cbdf1dc',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'NX-CAD',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🛠️',
    careers: '3D CAD Designer, Product Engineer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581092580497-e0d23cbdf1dc',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'NX-CAM',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '⚙️',
    careers: 'CAM Engineer, CNC Programmer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581091226825-a6a2a5aee158',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'CATIA',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '✈️',
    careers: 'Aerospace & Automotive Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1537462715879-360eeb61a0ad',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'Revit MEP',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🔧',
    careers: 'MEP Engineer, HVAC Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581094794329-c8112a89af12',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'Inventor',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🔩',
    careers: '3D Mechanical Designer, Assembly Modeler',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581092162384-8987c1d64718',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'Solid Work',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📦',
    careers: 'SolidWorks Modeler, Product Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581094288338-2314dddb7ecc',
    category: 'Mechanical CAD',
    popular: false
  },
  {
    title: 'Creo',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '⚙️',
    careers: 'Parametric CAD Modeler, Design Engineer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581092334651-ddf26d9a09d0',
    category: 'Mechanical CAD',
    popular: false
  },

  // ELECTRICAL CAD
  {
    title: 'Auto CAD Electrical',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📐',
    careers: 'Electrical CAD Drafter, Schematic Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1503387762-592deb58ef4e',
    category: 'Electrical CAD',
    popular: false
  },
  {
    title: 'Advance Electrical',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🔌',
    careers: 'Electrical Design Engineer, Panel Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1555680202-c86f0e12f086',
    category: 'Electrical CAD',
    popular: false
  },
  {
    title: 'Revit MEP Electrical',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '💡',
    careers: 'Electrical MEP Specialist, Conduit Modeler',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1621905251189-08b45d6a269e',
    category: 'Electrical CAD',
    popular: false
  },
  {
    title: 'PLC',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '⚡',
    careers: 'Automation Programmer, PLC Specialist',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581092160607-ee22621dd758',
    category: 'Electrical CAD',
    popular: false
  },
  {
    title: 'SCADA',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🖥️',
    careers: 'SCADA Engineer, Control Systems Specialist',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1518770660439-4636190af475',
    category: 'Electrical CAD',
    popular: false
  },
  {
    title: 'EPLAN',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📐',
    careers: 'EPLAN Engineer, Wiring Diagram Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1517077304055-6e89abbf09b0',
    category: 'Electrical CAD',
    popular: false
  },

  // CIVIL CAD
  {
    title: 'AutoCAD Civil',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📐',
    careers: 'Civil CAD Operator, Blueprint Drafter',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1503387762-592deb58ef4e',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'Sketchup',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🏠',
    careers: '3D Building Modeler, Visualizer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1600585154340-be6161a56a0c',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'Etabs',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🏢',
    careers: 'Structural Engineer, High-rise Analyst',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1486406146926-c627a92ad1ab',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'RCDC',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🏗️',
    careers: 'Concrete Structure Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1513694203232-719a280e022f',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'Revit MEP Plumbing',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🚰',
    careers: 'Plumbing & Pipe Network Modeler',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1581094794329-c8112a89af12',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'Revit Structure',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🧱',
    careers: 'Structural BIM Specialist',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1504307651254-35680f356dfd',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'Revit Arch',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🏛️',
    careers: 'Architectural BIM Modeler',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1600596542815-ffad4c1539a9',
    category: 'Civil CAD',
    popular: false
  },
  {
    title: 'Staad.Pro',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🏗️',
    careers: 'STAAD Structural Analyst',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1504307651254-35680f356dfd',
    category: 'Civil CAD',
    popular: false
  },

  // INTERIOR DESIGN
  {
    title: 'Auto CAD Interior',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📐',
    careers: 'Interior Floor Planner, Furniture Drafter',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1503387762-592deb58ef4e',
    category: 'Interior Design',
    popular: false
  },
  {
    title: 'V-Ray',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '✨',
    careers: '3D Photorealistic Renderer, Lighting Specialist',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1618219908412-a29a1bb7b86e',
    category: 'Interior Design',
    popular: false
  },
  {
    title: 'Lumion',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🌅',
    careers: 'Architectural Animation & Lumion Artist',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1600585154526-990dced4db0d',
    category: 'Interior Design',
    popular: false
  },
  {
    title: 'Revit Interior Arch',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🛋️',
    careers: 'Interior BIM Modeler',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1600607687939-ce8a6c25118c',
    category: 'Interior Design',
    popular: false
  },
  {
    title: 'Photoshop Interior',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🖼️',
    careers: 'Post-Production Artist, Moodboard Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1626785774573-4b799315345d',
    category: 'Interior Design',
    popular: false
  },
  {
    title: 'Sketch Up Interior',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🛋️',
    careers: 'Interior Concept Artist, 3D Layout Designer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1618221195710-dd6b41faaea6',
    category: 'Interior Design',
    popular: false
  },
  {
    title: '3DS MAX',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '🏙️',
    careers: '3ds Max Interior Visualizer',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1600566753376-12c8ab7fb75b',
    category: 'Interior Design',
    popular: false
  },

  // PROJECT MANAGEMENT
  {
    title: 'MS Project',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📅',
    careers: 'Project Planner, Gantt Chart Manager',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1454165804606-c3d57bc86b40',
    category: 'Project Managment',
    popular: false
  },
  {
    title: 'Primavera',
    duration: '2 Months',
    mode: 'Online/Offline',
    icon: '📈',
    careers: 'Construction Project Control Specialist',
    color: '#F8FAFC',
    accent: '#64748B',
    img: 'photo-1507679799987-c73779587ccf',
    category: 'Project Managment',
    popular: false
  },
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
    name: 'Pratiksha Jadhav',
    rating: 5,
    text: 'Best  training institute in Sangli! The practical project work on real industrial machine parts made me confident during technical interviews. Secured a Mechanical CAD Designer role with an attractive package.',
    placed: 'Praj Industries',
    initials: 'PJ',
    color: '#1F5D8C'
  },
  {
    name: 'Rohan Shinde',
    rating: 5,
    text: 'The  curriculum was incredibly comprehensive. I built a real portfolio during training and landed a job at a top product company. Highly recommend this institute!',
    initials: 'AG',
    color: '#EC4899'
  },
  {
    name: 'Rohan Salunkhe',
    rating: 5,
    text: 'I had zero programming knowledge. After 4 months of intensive lab work and mock interviews, I cracked my first interview as a Software Engineer. Trainers were patient and highly skilled.',
    initials: 'SR',
    color: '#3B82F6'
  },
  
 
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
    start: 'Sep 1, 2026',
    duration: '2-3 Months',
    timing: 'Wed–Mon, 9am–8pm',
    seats: 8,
    color: '#3B82F6'
  },
  {
    course: 'Data Analytics',
    start: 'Sep 1, 2026',
    duration: '2-3 Months',
    timing: 'Wed-Mon, 9am–8pm',
    seats: 5,
    color: '#F97316'
  },
  {
    course: 'Software Testing',
    start: 'Sep 1, 2026',
    duration: '2-3 Months',
     timing: 'Wed-Mon, 9am–8pm',
    seats: 5,
    color: '#F97316'
  },
  {
    course: 'C & C++',
    start: 'Sep 1, 2026',
    duration: '2 Months',
    timing: 'Wed-Mon, 9am–8pm',
    seats: 3,
    color: '#F43F5E'
  },
  {
    course: 'JAVA',
    start: 'Sep 1, 2026',
    duration: '2 Months',
    timing: 'Wed-Mon, 9am–8pm',
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

// Helper image formatter for Unsplash IDs
const formatImg = (imgStr: string) =>
  imgStr.startsWith('http')
    ? imgStr
    : `https://images.unsplash.com/${imgStr}?auto=format&fit=crop&w=800&q=80`;

// Helper category slug generator
const getCategorySlug = (cat: string) => {
  const lower = cat.toLowerCase();
  if (lower.includes('software') || lower.includes('cyber')) return 'software';
  if (lower.includes('mechanical') || lower.includes('electrical') || lower.includes('civil') || lower.includes('cad')) return 'cad-engineering';
  if (lower.includes('design') || lower.includes('interior')) return 'design-media';
  if (lower.includes('digital') || lower.includes('project')) return 'business-finance';
  return 'software';
};

// Rich mapping for components requiring full Course objects
export const ALL_COURSES: Course[] = COURSES.map((c, idx) => {
  const categorySlug = getCategorySlug(c.category);
  const fullImg = formatImg(c.img);
  return {
    ...c,
    id: `c-${idx + 1}`,
    category: categorySlug,
    categoryLabel: c.category,
    description: `Industry-oriented practical training in ${c.title}. Master ${c.careers || 'essential skills'} with live project exposure and placement support.`,
    badge: c.popular ? 'High Demand' : undefined,
    rating: 4.9,
    reviewsCount: 180 + (idx * 7) % 300,
    skills: c.careers ? c.careers.split(', ') : [c.title, 'Practical Labs', 'Certification'],
    projectsCount: 4,
    certification: `Universe Certified ${c.title} Specialist`,
    careerRoles: c.careers ? c.careers.split(', ') : [c.title],
    avgSalary: '₹4.5 - ₹8.5 LPA',
    image: fullImg,
    highlights: [
      '100% Practical Lab Exercises',
      'Live Industry Case Studies',
      'Placement Assistance & Mock Interviews'
    ],
    syllabi: [
      { week: 'Month 1', title: 'Fundamentals & Tool Setup', topics: [`Intro to ${c.title}`, 'Essential Concepts', 'Practical Lab Setup'] },
      { week: 'Month 2', title: 'Advanced Concepts & Live Projects', topics: ['Industry Standard Workflows', 'Capstone Live Project', 'Certification Prep'] }
    ]
  };
});

// Backwards compatibility mappings for UI components
export const TRUST_STATS = [
  { value: '5000+', label: 'Students Trained', description: 'Empowered with job-ready practical skills' },
  { value: '3000+', label: 'Successful Placements', description: 'Across top MNCs, startups & core engineering firms' },
  { value: '40+', label: 'Professional Courses', description: 'Designed as per latest industry requirements' },
  { value: '120+', label: 'Hiring Companies', description: 'Active recruitment partners visiting campus' },
  { value: '15+', label: 'Years of Excellence', description: 'Pioneering career-focused IT & technical education' },
];

export const HIRING_COMPANIES: Company[] = RECRUITERS.map((name, i) => ({
  name,
  logo: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80`,
  hiredCount: 150 + i * 20,
  category: 'Top Hiring Partner'
}));

export const PLACEMENT_RECORDS = PLACED_STUDENTS.map((p, idx) => ({
  id: `p-${idx + 1}`,
  name: p.name,
  studentName: p.name,
  studentPhoto: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  ][idx % 4],
  course: p.course,
  courseCompleted: p.course,
  company: p.company,
  companyName: p.company,
  role: p.role,
  designation: p.role,
  salary: p.salary,
  packageLPA: p.salary,
  story: p.story,
  storyQuote: p.story,
  initials: p.initials || p.name.split(' ').map(n => n[0]).join(''),
  color: p.color || '#3B82F6',
  placedYear: '2026'
}));

export const TRAINERS = FACULTY.map((f, idx) => ({
  id: `t-${idx + 1}`,
  name: f.name,
  role: f.role,
  exp: f.exp,
  experienceYears: parseInt(f.exp) || 10,
  specialization: f.specialization,
  courses: f.courses,
  coursesTaught: f.courses.split(', '),
  skills: f.specialization.split(', '),
  previousCompany: 'Industry Expert Veteran',
  image: [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  ][idx % 4],
  color: f.color || '#3B82F6',
  linkedinUrl: 'https://linkedin.com'
}));

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj1',
    title: 'Multi-Tenant E-Commerce Platform',
    category: 'Full Stack',
    course: 'Full Stack Development',
    studentName: 'Priya Sharma',
    description: 'Full-stack online shopping engine with online payments, real-time order tracking, admin dashboard, and user authentication.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67d5707f45?auto=format&fit=crop&w=800&q=80',
    toolsUsed: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind']
  },
  {
    id: 'proj2',
    title: 'SEO Performance Campaign',
    category: 'Digital Marketing',
    course: 'Digital Marketing',
    studentName: 'Rahul Patel',
    description: 'Live SEO optimization and Google Ads strategy yielding a 350% increase in organic traffic and lead conversions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    toolsUsed: ['Google Ads', 'GA4', 'Meta Business Suite', 'SEO']
  },
  {
    id: 'proj3',
    title: '3D Architectural Civil Blueprint',
    category: 'AutoCAD Civil',
    course: 'AutoCAD Civil',
    studentName: 'Aisha Khan',
    description: 'Structural floor plan detailing, elevation drafting, and 3D Revit architectural site layout.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    toolsUsed: ['AutoCAD Civil', 'Revit', '3D Modeling']
  }
];
