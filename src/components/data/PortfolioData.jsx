import filmfy from '../../assets/images/Filmfy.webp';
import SheAndShine from '../../assets/images/SheAndShine.webp'

const portfolioData = [
    {
        id: 1,
        title: "Filmfy",
        category: "OTT",
        description: "A modern OTT platform with a clean and watch available movies trailers. ",
        image: filmfy,
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        liveLink: "https://filmfy.netlify.app",
        githubLink: "https://github.com/example/vibee",
    },
    {
        id: 2,
        title: "E-Commerce",
        category: "E-Commerce",
        description: "A modern E-commerce website with a clean and interactive ui/ux design.",
        image: SheAndShine,
        technologies: [ "Node.js", "Express", "MongoDB", "Hbs" ],
        liveLink: "https://she-and-shine.onrender.com",
        githubLink: "https://github.com/example/vibee",
    },
];

export default portfolioData;