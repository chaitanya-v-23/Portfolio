import { motion } from 'framer-motion';

const Contact = () => (
    <motion.section className="px-6 py-20 max-w-4xl mx-auto" id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p>If you'd like to discuss a project or just say hi, feel free to reach out:</p>
        <a href="mailto:youremail@example.com" className="text-yellow-400 mt-2 inline-block">youremail@example.com</a>
    </motion.section>
);

export default Contact;