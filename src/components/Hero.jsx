import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="flex flex-col justify-center min-h-screen text-center px-6">
            <motion.h2
                className="text-xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello, I'm
            </motion.h2>
            <motion.h1
                className="text-5xl md:text-6xl font-bold mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 2 }}
            >
                Lakshmi Chaitanya
            </motion.h1>
            <motion.p
                className="text-2xl mt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                Frontend Developer
            </motion.p>
        </section>
    );
}

export default Hero;
