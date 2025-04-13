import { motion } from 'framer-motion';

const Projects = () => (
    <motion.section className="px-6 py-20 max-w-4xl mx-auto" id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold">Project One</h3>
                <p className="text-gray-300">A web app built with React and Firebase for managing personal tasks.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Project Two</h3>
                <p className="text-gray-300">Responsive portfolio site using Tailwind CSS and Next.js.</p>
            </div>
        </div>
    </motion.section>
);

export default Projects;