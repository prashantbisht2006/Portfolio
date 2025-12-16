const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  // {
  //   id: "photos",
  //   name: "Gallery", // was "Photos"
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "Spiral Matrix: The problem asks you to simulate a specific path through a 2D grid. ",
    image: "/images/blog1.png",
    link: "https://leetcode.com/problems/spiral-matrix/solutions/7314089/spiral-matrix-by-prashantbisht284-6jqz/",
  },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js,", "Next.js,", "JavaScript"],
  },
  {
    category: "Problem-Solving",
    items: ["Python,", "Java"],
  },
  {
    category: "Styling",
    items: ["Tailwindcss,","CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js,", "Express,", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB,", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git,", "GitHub,", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/prashantbisht2006",
  },
  {
    id: 2,
    text: "Leetcode",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/prashantbisht284/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/prashant200Vl",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/prashantbisht2006/",
  },
];



export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  
  
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Startup_Nxt",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Startup_Nxt.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Overview",
           
            "  Startup Next serves as a scalable, SEO-optimized web application powered by Next.js 14+. It leverages the flexibility of Sanity CMS alongside Server-Side Rendering (SSR) and Static Site Generation (SSG) to handle dynamic content without compromising on load speeds or performance.",
            "⚙️ Features",
            "Beyond the frontend, the app utilizes a clean React structure and integrated API routes for seamless backend logic. Styled with Tailwind CSS and hosted on Vercel, it offers a polished, responsive interface designed for immediate growth.",
          ],
        },
        {
          id: 2,
          name: "Startup_Nxt.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://startupnext.vercel.app/",
          position: " top-5 left-70",
        },
        {
          id: 4,
          name: "Startup_Nxt.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60  left-10",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Github repo.",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/prashantbisht2006/Nextjs-project",
          position: "top-60 left-70",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Startup_Nxt",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Startup_Nxt.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Overview",
           
            "  Startup Next serves as a scalable, SEO-optimized web application powered by Next.js 14+. It leverages the flexibility of Sanity CMS alongside Server-Side Rendering (SSR) and Static Site Generation (SSG) to handle dynamic content without compromising on load speeds or performance.",
            "⚙️ Features",
            "Beyond the frontend, the app utilizes a clean React structure and integrated API routes for seamless backend logic. Styled with Tailwind CSS and hosted on Vercel, it offers a polished, responsive interface designed for immediate growth.",
          ],
        },
        {
          id: 2,
          name: "Startup_Nxt.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://startupnext.vercel.app/",
          position: " top-5 left-70",
        },
        {
          id: 4,
          name: "Startup_Nxt.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60  left-10",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Github repo.",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/prashantbisht2006/Nextjs-project",
          position: "top-60 left-70",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Startup_Nxt",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Startup_Nxt.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Overview",
           
            "  Startup Next serves as a scalable, SEO-optimized web application powered by Next.js 14+. It leverages the flexibility of Sanity CMS alongside Server-Side Rendering (SSR) and Static Site Generation (SSG) to handle dynamic content without compromising on load speeds or performance.",
            "⚙️ Features",
            "Beyond the frontend, the app utilizes a clean React structure and integrated API routes for seamless backend logic. Styled with Tailwind CSS and hosted on Vercel, it offers a polished, responsive interface designed for immediate growth.",
          ],
        },
        {
          id: 2,
          name: "Startup_Nxt.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://startupnext.vercel.app/",
          position: " top-5 left-70",
        },
        {
          id: 4,
          name: "Startup_Nxt.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60  left-10",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Github repo.",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/prashantbisht2006/Nextjs-project",
          position: "top-60 left-70",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/prashant.PNG",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Prashant's Portfolio",
      
      description: [
"Hello, I’m Prashant Bisht, an engineering student based in Nainital, Uttarakhand, India, with a strong interest in modern web development.",
"I am currently pursuing my studies at VIT Bhopal University, where I focus on building a solid foundation in software engineering and problem-solving.",
"My core learning areas include Node.js and the React framework, with an emphasis on creating efficient, scalable, and user-focused web applications.",
"Beyond academics, I actively explore tools and technologies such as Git and Docker to strengthen my development workflow and deepen my technical understanding."
]

    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };