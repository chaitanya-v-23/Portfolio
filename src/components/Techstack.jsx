import React from 'react';
import tailwindCss from '../assets/tailwindcss.jpeg';
import { motion } from 'framer-motion';

const techStack = {
    'Frontend Technologies': [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    'Frameworks': [
        { name: 'Tailwind CSS', logo: tailwindCss },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
    'Languages': [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
    'Tools': [
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Vite.js', logo: 'https://vitejs.dev/logo.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ]
};

const TechStack = () => {
    return (
        <motion.section className="px-6 py-10 max-w-4xl mx-auto" id="techStack"

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            < h2 className="text-3xl font-bold mb-4" >Tech Stack</h2 >
            {
                Object.entries(techStack).map(([category, items]) => (
                    <div key={category} className="mb-12">
                        <h3 className="text-xl font-semibold mb-4 text-yellow-400">{category}</h3>
                        <div className="flex flex-wrap gap-6">
                            {items.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center w-20">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md"
                                    >
                                        <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                                    </motion.div>

                                    <span className="mt-2 text-sm text-center">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </motion.section >
    );
};

export default TechStack;
