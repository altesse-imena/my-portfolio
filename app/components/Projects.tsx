"use client"

import { motion } from "framer-motion"

const projects = [
  { id: 1, title: "Real Estate Market Assessment Application", description: "Built a data-driven application using Python, Django, FastAPI, JavaScript, React, and MySQL to integrate and analyze real estate data from multiple sources, delivering insights for market sentiment and property evaluation." },
  { id: 2, title: "Events Management System Desktop Application", description: "A Developed a cross-platform Events Management System desktop application using C# and the MAUI framework, integrating a robust database for seamless CRUD operations and efficient event management. app built with Next.js and GraphQL" },
  { id: 3, title: "Personal Finance Management System", description: "A responsive portDesigned a personal finance application using Python, featuring an AI-based chatbot for personalized financial advice, income tracking, and goal-oriented budgeting to optimize money management.folio website using Gatsby and Tailwind CSS" },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-secondary">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

