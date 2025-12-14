export const personalInfo = {
  name: 'Anshul Pandey',
  title: 'Sr. Cloud & Platform Engineer',
  tagline: 'Not just your average DevOps guy. I build infrastructure that scales.',
  location: 'Pune, India',
  email: 'anshul@anshulpandey.in',
  photo: '/assets/img/my-photo.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/yosoyanshul',
    github: 'https://github.com/yosoyanshul',
    youtube: 'https://www.youtube.com/@freecloudcamp',
  },
};

export const aboutContent = {
  intro: "Born in 2000. It all started with a desktop PC at 14.",
  description:
    "I'm not here to just run kubectl apply. I architect systems. From hacking torrents to architecting easy-to-use platforms for Volkswagen, my journey has been about taking control of the machine.",
  passionAreas: [
    'Automating everything',
    'Building for scale',
    'Teaching cloud (Free Cloud Camp)',
  ],
};

// Placeholder images for timeline
const schoolImage = '/assets/img/school-placeholder.jpg';
const collegeImage = '/assets/img/college-placeholder.jpg';
// We would ideally have placeholder images for work too, but text suffices for now.

export const timelineOrder = [
  {
    year: '2000',
    title: 'The Beginning',
    role: 'Player 1',
    description: 'Born in the turn of the millennium. The world was about to change, and so was I.',
    type: 'personal',
  },
  {
    year: '2014',
    title: 'The Desktop Era',
    role: 'Gamer / Tinkerer',
    description: 'Dad bought me my first Desktop PC. It wasn\'t just for homework. I spent thousands of hours in GTA Vice City, San Andreas, Prince of Persia, and IGI. I also learned the dark arts of torrents, patches, and hacks because, well, I was broke.',
    type: 'personal',
  },
  {
    year: 'Apr 2018',
    title: 'School Captain',
    role: 'Leader',
    company: 'St Mary Champion School',
    description: 'Completed my PCM schooling. Served as House Captain—my first taste of leadership and organizing chaos.',
    image: schoolImage,
    type: 'education',
  },
  {
    year: 'Jul 2018',
    title: 'B.Tech Journey',
    role: 'Student / Event Manager',
    company: 'Acropolis Institute',
    description: 'Started Computer Science. To fund the fun, I worked part-time as an Event Manager at a travel agency. Learned that logistics in real life is harder than in code.',
    image: collegeImage,
    type: 'education',
  },
  {
    year: 'Dec 2020',
    title: 'Web Developer Intern',
    role: 'Intern',
    company: 'Biomech Healthcare',
    description: 'Built responsive web apps. Realized that making things look good is half the battle.',
    type: 'work',
  },
  {
    year: 'May 2021',
    title: 'Full Stack Developer',
    role: 'Employee of the Year',
    company: 'Fealty Technologies',
    description: 'Employee of the Year Award recipient. Built full-stack apps with Vue.js and FastAPI. Learned that "Full Stack" just means you blame yourself for both frontend and backend bugs.',
    type: 'work',
  },
  {
    year: 'Jul 2022',
    title: 'Cloud Engineer',
    role: 'Employee of the Year (2024)',
    company: 'Blazeclan Technologies',
    description: 'Awarded Employee of the Year 2024. Architected AWS Landing Zones for 100+ accounts using Control Tower and Terraform. I turned manual chaos into automated order.',
    type: 'work',
  },
  {
    year: 'Nov 2024',
    title: 'Platform Engineer',
    role: 'Debutant of the Year (2025)',
    company: 'Volkswagen Group',
    description: 'Awarded Debutant of the Year 2025. Building multi-tenant Kubernetes platforms for autonomous driving. Integrating Cluster Addons, Crossplane, Argo, and Istio. It\'s big scale stuff.',
    type: 'work',
  },
];

export const skillCategories = [
  {
    title: 'Platform & Cloud',
    description:
      'I don\'t just use the cloud; I define it. Terraform expert, AWS Solutions Architect, and CNCF ecosystem navigator.',
    technologies: ['Terraform', 'AWS', 'Kubernetes', 'ArgoCD', 'Crossplane', 'Istio', 'Cluster Addons'],
  },
  {
    title: 'Backend & ML',
    description:
      'I can build the app, not just deploy it. Python expert with deep knowledge of MLOps pipelines.',
    technologies: ['Python', 'FastAPI', 'Express', 'Next.js', 'MLOps', 'PostgreSQL'],
  },
];

export const projects = [
  {
    title: 'Multi-tenant Autonomous Platform',
    description:
      'Architected a massive Kubernetes platform for autonomous driving workloads at Volkswagen. Namespace isolation, resource quotas, and GitOps at scale.',
    technologies: ['Kubernetes', 'ArgoCD', 'Kyverno', 'Istio', 'Crossplane'],
    link: null,
  },
  {
    title: 'AWS Enterprise Landing Zone',
    description:
      'Built the foundational AWS architecture for 100+ accounts. Automated everything with Terraform and Control Tower.',
    technologies: ['AWS', 'Terraform', 'Control Tower', 'Python'],
    link: null,
  },
  {
    title: 'Free Cloud Camp',
    description:
      'My YouTube channel where I teach engineers how to actually build this stuff. No fluff, just code.',
    technologies: ['Education', 'Content Creation', 'Community'],
    link: 'https://www.youtube.com/@freecloudcamp',
  },
];

export const blogPosts = [
  {
    title: 'Building Multi-tenant Kubernetes Platforms',
    description:
      'A deep dive into designing and implementing multi-tenant Kubernetes platforms with proper isolation and security.',
    date: '2024-06-15',
    link: 'https://medium.com/@yosoyanshul',
  },
  {
    title: 'AWS Landing Zones: A Practical Guide',
    description:
      'How to set up enterprise-grade AWS Landing Zones with Control Tower and custom guardrails.',
    date: '2024-03-20',
    link: 'https://medium.com/@yosoyanshul',
  },
  {
    title: 'GitOps with ArgoCD: Best Practices',
    description:
      'Implementing GitOps workflows with ArgoCD for reliable and auditable deployments.',
    date: '2024-01-10',
    link: 'https://medium.com/@yosoyanshul',
  },
];
