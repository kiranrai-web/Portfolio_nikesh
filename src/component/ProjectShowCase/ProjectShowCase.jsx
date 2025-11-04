import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants/projects"; // import your projects array
import "./ProjectShowCase.css";

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "Featured Videos",
    "Short-form Videos",
    "Long-form Videos",
    "Reels",
  ];

  const filteredProjects =
    activeFilter === "Featured Videos"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3); // show 3 videos by default

  return (
    <div className="container">
      <div className="wrapper">
        <div className="filterContainer">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveFilter(category); setShowAll(false); }}
              className={`filterButton ${activeFilter === category ? "activeButton" : "inactiveButton"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projectsGrid">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                className="projectCard"
                layout
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="imageContainer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.thumbnail || "https://via.placeholder.com/600x400?text=Video"}
                      alt={project.title || "Video"}
                      className="image"
                    />
                  </a>
                </div>
                <div className="cardContent">
                  <span className="category">{project.category.join(", ")}</span>
                  {project.title && <h3 className="title">{project.title}</h3>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 3 && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="showAllButton" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
