import {motion} from 'framer-motion'

export function AboutContent () {
    return (
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="no-scrollbar max-w-xl flex text-justify font-Lato tracking-wide overflow-x-scroll max-h-[50vh]"
        >
            I thrive on problem-solving and have a passion for clean, inclusive design that enhances the user experience.
            <br /><br />
            I create interactive prototypes in Figma with a strong focus on accessibility and develop SPAs in React and Angular, integrating APIs and styling with Tailwind CSS. I build responsive layouts with Flexbox and Grid, develop servers with Node.js, Express, and PHP, and work with AWS S3 for serverless solutions. I also handle databases with DynamoDB and MySQL, manage state with Redux, Zustand, and NGXS, and create animations with Framer Motion and Anime.js.
            <br /><br />
            I enjoy collaboration and efficient workflows, managing version control in GitHub and working agilely with Scrum. While I love working in a team, I am also comfortable working independently and taking initiative when needed.
            <br /><br />
            I’m curious, solution-oriented, and eager to learn. I listen, communicate clearly, and adapt easily to challenges while staying focused on shared goals. Optimistic and easygoing, yet driven and ambitious, I bring both creativity and technical expertise to every project.
            <br /><br />
        </motion.p>
    )
}