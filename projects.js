const projects = [
  {
    title: "EpiEat",
    description:
      " Won Best Use of BackBoard for HackDavis. </br> Developed with Neal Conway and Sanghyun Lee. </br> EpiScanner is a mobile app that lets users point their camera at any restaurant menu to instantly translate it, detect allergens based on their personal profile, and even place orders in the local language; making eating out safe for people with food allergies, especially when traveling abroad.",
    technologies: [
      "Figma",
      "React",
      "Vite",
      "Express",
      "Gemini API",
      "BackBoard",
      "MongoDB",
      "ElevenLabs",
    ],
    image: "images/epieat2.png",
    link: "https://devpost.com/software/episcanner",
    date: "May 2026",
  },
  {
    title: "Taste Without Trouble",
    description:
      "A recipe and wellness blog featuring allergen-free desserts and snacks for people managing celiac disease, EOE, and GERD. Raises awareness about gastrointestinal health and its connection to disordered eating patterns.",
    technologies: ["React", "Typescript", "Material UI", "Vite", "Firebase"],
    link: "https://github.com/6YuQing6/taste-without-trouble",
    image: "images/taste-without-trouble.png",
    date: "March 2026 - In Development",
  },
  {
    title: "BellaHanArt",
    description:
      "A portfolio website and e-commerce store for an artist showcasing their work and providing information about upcoming exhibitions.",
    technologies: ["React", "Typescript", "Vite", "Cloudinary", "Vercel"],
    link: "https://bellahanart.vercel.app/",
    image: "images/bellahanart.png",
    date: "February 2026 - In Development",
  },
  {
    title: "UCSC Amazon",
    description:
      "Developed in a team of 6 for my computer science capstone. UCSC Amazon is a full-stack e-commerce web app that reproduces core Amazon features using React, GraphQL, and PostgreSQL. It was deployed on AWS EC2 with CI/CD pipelines via GitHub Actions and Docker for automated testing and deployment.",
    technologies: ["React", "GraphQL", "Nodejs", "PostgreSQL", "AWS", "Docker"],
    link: "https://github.com/ucsc-amazon/ucsc-amazon",
    image: "images/sammytheslug.png",
    date: "January 2024 - August 2024",
  },
];

const games = [
  {
    title: "Draw a Perfect Ellipse",
    description:
      "This is a mini project inspired by neal.fun/perfect-circle. Draw a perfect ellipse with 99.9% accuracy.",
    technologies: ["HTML", "Javascript", "CSS"],
    image: "images/perfectellipse.png",
    link: "https://6yuqing6.github.io/perfectellipse/",
    date: "April 2026",
  },
  {
    title: "Mind Palace: Running Out of Time",
    description:
      "Submission for Mystery Game Jam 2026. I designed the UI and created the background assets.",
    technologies: ["Phaser", "Javascript", "HTML", "Figma"],
    image: "images/mindpalace.png",
    link: "https://corvuscorae.itch.io/mind-palace-running-out-of-time",
    date: "April 2026",
  },
  // {
  //   title: "From Stray to Slay",
  //   description:
  //     "Top-down Unity 2D game cat cafe visual novel game prototype. Created in a team of 6.",
  //   technologies: ["Unity", "C#"],
  //   image: "https:/img.itch.zone/aW1nLzIwNDMwMjgzLnBuZw==/347x500/jDGQQF.png",
  //   link: "https://darkyarti.itch.io/from-stray-to-stay",
  //   date: "March 2025",
  // },
  {
    title: "It's Raining Frogs",
    description:
      "A mini project I created for a class. Play as a gliding frog on their journey into the clouds. Last as long as possible without falling, and try to beat your previous high scores.",
    technologies: ["Phaser", "Javascript", "HTML"],
    image: "images/Froggo.gif",
    link: "https://6yuqing6.github.io/Frog-Game/",
    date: "January 2024",
  },
];

function renderProjects(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  list.forEach((project) => {
    const techList = project.technologies.join(", ");
    container.innerHTML += `
      <div class="box-project">
        <div class="img-project">
          <img src="${project.image}" alt="${project.title} preview">
        </div>
        <div class="project-info">
          <h4>${project.title}</h4>
          <h5>${techList}</h5>
          <h6>${project.date}</h6>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Project</a>
        </div>
      </div>
    `;
  });
}

renderProjects(projects, "projects-list");
renderProjects(games, "games-list");
