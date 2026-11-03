const projects = [
  {
    id: 1,
    slug: "vesper",
    title: "VESPER",
    tagline: "Clean landing page with smooth micro-interactions",
    description:
      "A simple and clean landing page built with HTML5, CSS3 and vanilla JavaScript.",
    longDescription:
      "VESPER is a modern landing page focused on clean typography, generous spacing and subtle motion. It was built from scratch with plain HTML5, CSS3 and JavaScript to practice responsive layout techniques, smooth scrolling and interactive UI details without relying on any framework.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Fully responsive layout for mobile, tablet and desktop",
      "Smooth scroll and scroll-triggered animations",
      "Hand-written CSS with no framework dependency",
      "Optimized for fast load times",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    github: "https://github.com/AmnaMehmood801/VESPER.git",
    live: "https://amnamehmood801.github.io/VESPER/",
  },
  {
    id: 2,
    slug: "nexora",
    title: "NEXORA",
    tagline: "Minimal landing page with a bold hero section",
    description:
      "A simple and clean landing page using HTML5, CSS3 and JS.",
    longDescription:
      "NEXORA is a minimal, bold landing page built to showcase a product-style hero section, feature highlights and a call-to-action flow. It's built with plain HTML, CSS and JavaScript, with an emphasis on clear visual hierarchy and consistent spacing.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Bold, product-style hero section",
      "Custom CSS animations on scroll and hover",
      "Mobile-first responsive design",
      "Cross-browser tested layout",
    ],
    gradient: "from-cyan-500 to-blue-600",
    github: "https://github.com/AmnaMehmood801/NEXORA.git",
    live: "https://amnamehmood801.github.io/NEXORA/",
  },
  {
    id: 3,
    slug: "streamly",
    title: "Streamly",
    tagline: "Modern responsive portfolio starter for developers",
    description:
      "Modern responsive portfolio website for developers.",
    longDescription:
      "Streamly is a modern, responsive portfolio template built with React, Tailwind CSS and Framer Motion. It focuses on smooth page-load animations, a component-based structure and a design system that's easy to re-theme for different developers.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Component-based React architecture",
      "Framer Motion powered entrance animations",
      "Fully responsive grid layouts",
      "Easily themeable color system with Tailwind",
    ],
    gradient: "from-emerald-500 to-teal-500",
    github: "https://github.com/AmnaMehmood801/Streamly.git",
    live: "https://amnamehmood801.github.io/Streamly/",
  },
  {
    id: 4,
    slug: "nova-studio",
    title: "Nova Studio",
    tagline: "Studio-style portfolio with animated sections",
    description:
      "Modern responsive portfolio website for developers.",
    longDescription:
      "Nova Studio is a creative-agency style portfolio built with React, Tailwind CSS and Framer Motion. It features animated section transitions, a project showcase grid and a design language inspired by modern design studio websites.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Studio-inspired visual design language",
      "Animated section reveals on scroll",
      "Reusable card and button components",
      "Optimized for desktop and mobile viewing",
    ],
    gradient: "from-orange-500 to-pink-500",
    github: "https://github.com/AmnaMehmood801/NOVA-Studio.git",
    live: "https://amnamehmood801.github.io/NOVA-Studio/",
  },
  {
    id: 5,
    slug: "portfolio-website",
    title: "Portfolio Website",
    tagline: "This very portfolio — built with React & Tailwind",
    description:
      "Modern responsive portfolio website for developers.",
    longDescription:
      "This is the portfolio website you're currently viewing. It's built with React, Tailwind CSS and Framer Motion, featuring animated sections, a skills showcase, a project gallery with detail pages, and a contact section — all wrapped in a clean, modern design.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      "Fully responsive, animated single-page layout",
      "Dedicated detail page for every project",
      "Reusable UI components (cards, buttons, section titles)",
      "Smooth scroll navigation and section transitions",
    ],
    gradient: "from-indigo-500 to-cyan-500",
    github: "#",
    live: "#",
  },
];

export default projects;
