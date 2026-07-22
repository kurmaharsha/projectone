import { PersonalData, SkillCategory, Project, ExperienceItem, Achievement } from '../types';

export const personalData: PersonalData = {
  name: "KURMA HARSHAVARDHAN",
  title: "Artificial Intelligence & Data Science Student",
  college: "Mahendra Engineering College",
  department: "Artificial Intelligence and Data Science",
  experience: "Fresher",
  careerObjective: "A passionate Artificial Intelligence and Data Science student with strong problem-solving skills and a deep interest in Machine Learning, Data Science, Software Development, and Generative AI. Looking for opportunities to build impactful AI solutions and continuously learn modern technologies.",
  typingTitles: [
    "Python Developer",
    "AI Enthusiast",
    "Machine Learning Learner",
    "Future AI Engineer"
  ],
  location: "Tamil Nadu, India",
  email: "kurmaharshav@gmail.com",
  phone: "+91 9347067640",
  github: "https://github.com/girish119628/Minor_project_1/blob/main/Girish_Minor_project_1.ipynb",
  linkedin: "https://www.linkedin.com/in/kurma-harsha-vardhan-3a6080338/",
  leetcode: "https://github.com/kurmaharsha/projectone",
  profileImage: "/profile.jpg",
  cgpa: "8.79"
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90, icon: "Code2", color: "text-amber-400" },
      { name: "Java", level: 78, icon: "Coffee", color: "text-orange-500" },
      { name: "C", level: 75, icon: "Cpu", color: "text-blue-400" },
      { name: "JavaScript", level: 82, icon: "FileCode", color: "text-yellow-400" },
      { name: "SQL", level: 85, icon: "Database", color: "text-cyan-400" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 92, icon: "Layout", color: "text-orange-400" },
      { name: "CSS3", level: 88, icon: "Palette", color: "text-blue-500" },
      { name: "JavaScript (ES6+)", level: 82, icon: "Braces", color: "text-yellow-300" },
      { name: "Responsive Web Design", level: 90, icon: "Smartphone", color: "text-teal-400" }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", level: 85, icon: "GitBranch", color: "text-red-400" },
      { name: "GitHub", level: 88, icon: "Github", color: "text-purple-400" },
      { name: "VS Code", level: 92, icon: "Terminal", color: "text-blue-400" },
      { name: "Jupyter Notebook", level: 90, icon: "BookOpen", color: "text-orange-500" },
      { name: "Google Colab", level: 90, icon: "Cloud", color: "text-amber-500" }
    ]
  },
  {
    category: "AI & Learning Domain",
    skills: [
      { name: "Machine Learning", level: 85, icon: "Brain", color: "text-indigo-400" },
      { name: "Deep Learning", level: 75, icon: "Network", color: "text-cyan-400" },
      { name: "Data Analytics", level: 88, icon: "BarChart3", color: "text-emerald-400" },
      { name: "Artificial Intelligence", level: 82, icon: "Sparkles", color: "text-purple-400" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-phishing-detection",
    title: "AI Phishing Detection System",
    description: "An intelligent web application that detects malicious & phishing websites using Machine Learning and NLP techniques to safeguard users against online fraud.",
    techStack: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/kurmaharshavardhan/ai-phishing-detection",
    liveDemoUrl: "#demo-scanner",
    isInteractiveDemo: true,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    badge: "Featured AI Project",
    highlights: [
      "NLP Feature extraction from site URLs and metadata",
      "95%+ precision classification model trained on malicious datasets",
      "Interactive real-time URL risk analysis dashboard"
    ]
  },
  {
    id: "automobile-analytics",
    title: "Automobile Market Analytics Dashboard",
    description: "A comprehensive data dashboard analyzing automobile market trends, pricing patterns, sales volume, and customer preferences using data visualization libraries.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/kurmaharshavardhan/automobile-market-analytics",
    liveDemoUrl: "https://github.com/kurmaharshavardhan/automobile-market-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    badge: "Data Science",
    highlights: [
      "Exploratory Data Analysis (EDA) on 10,000+ car market records",
      "Statistical modeling for vehicle depreciation & price estimation",
      "Interactive chart visualizations & market segmentation reports"
    ]
  },
  {
    id: "student-attendance",
    title: "Student Attendance Management System",
    description: "A digital attendance recording and management application that simplifies tracking student attendance records efficiently with SQL database persistence.",
    techStack: ["Python", "SQL", "HTML", "CSS"],
    githubUrl: "https://github.com/kurmaharshavardhan/student-attendance-system",
    liveDemoUrl: "https://github.com/kurmaharshavardhan/student-attendance-system",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    badge: "Software Engineering",
    highlights: [
      "Relational SQL schema for students, classes, and daily logs",
      "Automated attendance percentage calculations and exportable reports",
      "Clean UI for faculty and administrator role access"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2023 - Present",
    role: "B.Tech in Artificial Intelligence & Data Science",
    organization: "Mahendra Engineering College",
    description: "Currently pursuing B.Tech degree with coursework focusing on Data Structures, Algorithms, Machine Learning, Database Management, and Software Engineering.",
    type: "education",
    icon: "GraduationCap",
    bullets: [
      "Specializing in AI algorithms, Predictive Modeling, and Data Analytics",
      "Active participant in technical symposiums and university coding events",
      "Building practical software projects applying classroom concepts"
    ]
  },
  {
    period: "Ongoing",
    role: "AI & Software Development Self-Driven Journey",
    organization: "Independent Learner & Creator",
    description: "Continuously refining hands-on programming, machine learning, and web development skills through real-world projects, tutorials, and competitive hackathons.",
    type: "experience",
    icon: "Code",
    bullets: [
      "Developed 3+ major full-stack and AI data analytics applications",
      "Mastered Python AI stack (Pandas, NumPy, Matplotlib, Scikit-learn)",
      "Collaborated in 24-hour hackathons building rapid software prototypes"
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "hackathon",
    title: "24-Hour National Level Hackathon",
    subtitle: "Mahendra Engineering College",
    description: "Participated and successfully completed an intensive 24-Hour National Level Hackathon, building an innovative tech solution within strict deadlines.",
    date: "National Event",
    badge: "Hackathon Finisher",
    icon: "Trophy",
    stat: "24 Hrs",
    statLabel: "Continuous Coding Challenge"
  },
  {
    id: "ai-learning",
    title: "AI & ML Skill Mastery",
    subtitle: "Continuous Learning",
    description: "Actively studying modern Machine Learning, Deep Learning architectures, and Generative AI principles with hands-on Python projects.",
    date: "Active",
    badge: "Specialization",
    icon: "BrainCircuit",
    stat: "100%",
    statLabel: "Dedication to Learning"
  },
  {
    id: "software-projects",
    title: "Real-World Software Portfolio",
    subtitle: "Hands-on Applications",
    description: "Designed, engineered, and documented functional software tools ranging from ML security systems to SQL database applications.",
    date: "Current",
    badge: "Creator",
    icon: "FolderCheck",
    stat: "3+",
    statLabel: "Major Featured Projects"
  }
];
