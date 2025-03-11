import {motion} from 'framer-motion'

export function AboutContent () {
    return (
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl flex mx-auto text-justify font-Kollektif tracking-wide"
        >
        Hi, I’m a frontend developer passionate about creating intuitive, user-friendly, and accessible web experiences. I specialize in React and TypeScript, crafting solutions like planners, booking systems, and e-commerce features that solve real problems and make life easier for users. Accessibility is a core focus of my work. Growing up with an older brother who has Down syndrome has given me a deep understanding of the importance of designing for everyone, especially those who can’t always advocate for themselves.
        <br></br>
        <br />
        Beyond technical skills, I bring strong communication, organization, and adaptability to every project. As a single mom, I’ve mastered multitasking and staying efficient, which helps me deliver high-quality results even in dynamic environments. I love collaborating with teams to turn ideas into meaningful, impactful applications.
        <br />
        <br />
        If you’re looking for a developer who combines technical expertise with a commitment to inclusion and thoughtful design, I’d love to connect!
        </motion.p>
    )
}