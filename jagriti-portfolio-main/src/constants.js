// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Education Section Logo's
import dceLogo from './assets/education_logo/dronacharya.jpg';
import bsaLogo from './assets/education_logo/davpublic.png';
import vpsLogo from './assets/education_logo/davpublic.png';

// Project Section Logo's
import sharemyrideLogo from './assets/work_logo/sharemyride.png';
import portfolioLogo from './assets/work_logo/portfolio.png';
import citypizzeriaLogo from './assets/work_logo/citypizzeria.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
    
  export const education = [
    
    {
      id: 1,
      img: dceLogo,
      school: "DCE College , Gurugram",
      date: "Oct 2022 - July 2026",
      grade: "73%",
      desc: "I completed my B.Tech in Computer Science and Information Technology from DCE College, Gurugram. During my studies, I gained a basic understanding of core computer science subjects and worked on some academic projects related to web development and programming. My focus has been on improving my practical skills through hands-on practice and personal projects.",
      degree: "B.tech - Computer Science and Information Technology",
    },
    {
      id: 2,
      img: bsaLogo,
      school: "D.A.V Public School , Gumla",
      date: "Apr 2021 - March 2022",
      grade: "82%",
      desc: "I completed my class 12 education from D.A.V Public School , under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "D.A.V Public School , Gumla",
      date: "Apr 2019 - March 2020",
      grade: "91.8%",
      desc: "I completed my class 10 education from D.A.V Public School, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ShareMyRide",
      description:
        "ShareMyRide is a web app where users can be riders or drivers, create trips, and share rides based on matching locations and timings. Built with the MERN stack and Firebase for real-time ride matching.",
      image: sharemyrideLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Firebase", "OpeenStreetMap"],
      github: "https://github.com/krijagriti30/sharemyride",
      
    },
    {
      id: 1,
      title: "City-Pizzeria",
      description:
        "City-Pizzeria is a pizza ordering web app built with React and Firebase, featuring an interactive menu, cart management, and a simple checkout flow.",
      image: citypizzeriaLogo,
      tags: ["React JS", "Firebase", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/krijagriti30/city-pizzeria",
    
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "Personal Portfolio is a responsive website built with React to showcase my projects, skills, and contact information. It highlights my work as a web developer and provides an easy way to connect with me.",
      image: portfolioLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript","React"],
      github: "https://github.com/krijagriti30",
      
    },
    
    
  ];  