import './Portfolio.css';

const projects = [
    {
        title: "Employee Database",
        description: "The Employee Database is a structured system designed to manage information about employees created using TypeScript.",
        repo: "https://github.com/mauricek12d/Employee-Database",
        image: "/images/pexels-rebrand-cities-581004-1367269.jpg",
    },
    {
        title: "Vehicle-Builder",
        description: "The Vehicle-Builder is a structured system designed to manage information about vehicles created using TypeScript.",
        repo: "https://github.com/mauricek12d/Vehicle-Builder",
        image: "/images/Benz.jpg",
    },
    {
        title: "README Generator",
        description: "The README Generator is a structured system designed to manage information about projects created using JavaScript.",
        repo: "https://github.com/mauricek12d/README-Generator",
        image : "/images/Screen Shot ReadMe.png",
    },
    {
        title: "Apollo Greek Taverna",
        description: "A website for a fictional restaurant created using HTML, CSS, and JavaScript.",
        repo: "https://github.com/mauricek12d/apollogreektavern",
        image: "/images/Apollo Greek.jpg",
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="portfolio-title">Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.repo} className="project-repo" target="_blank" rel="noopener noreferrer">
                            View Repository
                        </a>
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.title} Screenshot`}
                                className="project-image"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

