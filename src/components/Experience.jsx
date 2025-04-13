import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Experience = () => (
    <motion.section className="px-6 py-10 max-w-4xl mx-auto" id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="text-lg mb-6">
            <p>Senior Associate Developer at <b className='text-yellow-400'>National Payments Corporation of India</b></p>
            <p className="text-sm text-gray-300">Aug 2022 - Present</p>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">
                    <CountUp end={2} duration={6} />+
                </h3>
                <p>Years Experience</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">
                    <CountUp end={7} duration={3} />+
                </h3>
                <p>Projects Completed</p>
            </div>
        </div> */}
    </motion.section>
);

export default Experience;