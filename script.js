const PROJECTS = [
    {
        title: "Landing Page",
        readme: "none",
        view: "https://jhazeel-mmh.github.io/Landing-Page-Odin",
        url: "https://github.com/Jhazeel-mmh/Landing-Page-Odin",
    },
    {
        title: "Rock Papper Scissors",
        readme: "none",
        view: "https://jhazeel-mmh.github.io/rock-paper--scissors-odin/",
        url: "https://github.com/Jhazeel-mmh/rock-paper--scissors-odin",
    },
    {
        title: "Etch a Sketch",
        readme: "none",
        view: "https://jhazeel-mmh.github.io/Etch-a-Sketch",
        url: "https://github.com/Jhazeel-mmh/Etch-a-Sketch",
    },
    {
        title: "Calculator",
        readme: "none",
        view: "https://jhazeel-mmh.github.io/calculator/",
        url: "https://github.com/Jhazeel-mmh/calculator",
    },
    {
        title: "Sign Up Form",
        readme: "This is a sign-up form that is developed all client-side. The purpuse of the form is sign up in a web pague, and has the following inputs that are mandatory before we can submit the form.",
        view: "https://jhazeel-mmh.github.io/Sign-up-Form/",
        url: "https://github.com/Jhazeel-mmh/Sign-up-Form",
    },
    {
        title: "Admin Dashboard",
        readme: "This a Admin Dashboard built with CSS Grid. \nThe purpose of this project is build a good looking page that uses CSS Grid to display all the layout of the pague and gain some practice over this CSS tool.",
        view: "https://jhazeel-mmh.github.io/admin-dashboard/",
        url: "https://github.com/Jhazeel-mmh/admin-dashboard",
    }
];

let projectsGallery = document.querySelector(".projects-gallery");
let projectCard = document.querySelector("#p-1");

let idCount = 2;

PROJECTS.forEach(p => {
    let clonedCard = projectCard.cloneNode(true);
    clonedCard.querySelector(".project-title").textContent = p.title;
    clonedCard.querySelector(".project-content").textContent = p.readme;
    clonedCard.querySelector(".project-view").href = p.view;
    clonedCard.querySelector(".project-url").href = p.url;

    projectsGallery.appendChild(clonedCard);
});


