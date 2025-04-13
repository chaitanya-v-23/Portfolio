import { motion } from 'framer-motion';

const About = () => (
    <motion.section className="px-6 py-20 max-w-4xl mx-auto" id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
            I'm a frontend web developer driven to turn ideas into creative solutions. I specialize in creating seamless and intuitive user experiences. My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
        </p>
    </motion.section>
);

export default About;