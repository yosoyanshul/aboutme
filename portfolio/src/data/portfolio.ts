export const personalInfo = {
  name: 'Anshul Pandey',
  title: 'Sr. Cloud & Platform Engineer',
  tagline: 'I build the platforms that other engineers build on.',
  location: 'Pune, India',
  email: 'sudo.anshul@gmail.com',
  photo: '/assets/img/award_presentation_photo.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/yosoyanshul',
    github: 'https://github.com/yosoyanshul',
    youtube: 'https://www.youtube.com/@freecloudcamp',
  },
};

export const aboutContent = {
  intro: "Born in 2000. It all started with a desktop PC at 14.",
  description:
    "I'm not here to just run kubectl apply. I architect systems. From hacking torrents to architecting GitOps platforms at Volkswagen, my journey has been about automating the machine, improving MTTR, and enabling teams to ship confidently.",
  passionAreas: [
    'Platform Reliability',
    'Automating everything',
    'Teaching cloud (Free Cloud Camp)',
  ],
};

// Placeholder images for timeline
const schoolImage = '/assets/img/school-placeholder.jpg';
const collegeImage = '/assets/img/college-placeholder.jpg';

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
    description: 'Dad bought me my first Desktop PC. Spent thousands of hours in GTA, Prince of Persia, and IGI. I also learned the dark arts of torrents, patches, and hacks because, well, I was broke.',
    type: 'personal',
  },
  {
    year: '2018',
    title: 'School Captain',
    role: 'Leader',
    company: 'St Mary Champion School',
    description: 'Served as House Captain—my first taste of leadership and organizing chaos.',
    image: schoolImage,
    type: 'education',
  },
  {
    year: '2022',
    title: 'B.Tech Journey',
    role: 'Student / Event Manager',
    company: 'Acropolis Institute',
    description: 'Graduated Computer Science. To fund the fun, I worked part-time as an Event Manager at a travel agency. Learned that logistics in real life is harder than in code.',
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
    description: 'Awarded Employee of the Year. Designed AWS infra for 30+ prod apps with 99.9% uptime. Automated deployments with Terraform and ran EKS clusters with strict PCI DSS compliance.',
    type: 'work',
  },
  {
    year: 'Dec 2024 - Present',
    title: 'Platform Engineer',
    role: 'Debutant of the Year (2025)',
    company: 'Volkswagen Group Digital Solutions',
    description: 'Debutant of the Year! Building a GitOps-based platform that chunked ops tickets by 70%. Designing multi-tenant K8s platforms, scaling AWS account provisioning, and keeping MTTR low as an on-call hero.',
    type: 'work',
  },
];

export const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    description:
      'AWS Solutions Architect and Terraform Associate. Building enterprise landing zones and compliant environments at scale.',
    technologies: ['AWS', 'Terraform', 'System Design', 'Linux', 'VPC Networking'],
  },
  {
    title: 'Platform Engineering',
    description:
      'Designing self-service Kubernetes platforms and GitOps workflows that let developers ship without friction.',
    technologies: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Azure DevOps', 'IAM/RBAC'],
  },
  {
    title: 'Reliability & Ops',
    description:
      'I don\'t just deploy; I monitor and respond. Defining SLOs, handling incidents, and writing blameless postmortems.',
    technologies: ['Prometheus', 'Grafana', 'Incident Response', 'Python', 'Go', 'Bash'],
  },
  {
    title: 'Backend Development',
    description:
      'I can build the app, not just run it. Creating robust, end-to-end applications and APIs using modern frameworks at scale.',
    technologies: ['FastAPI', 'Express', 'Django', 'Python', 'Node.js'],
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
