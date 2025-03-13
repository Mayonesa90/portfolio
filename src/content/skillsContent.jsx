import {motion} from 'framer-motion'

export function SkillsContent(){
    return (
        <motion.div 
            className="flex place-content-between max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <section>
                <h3 className="font-Lato font-extra-bold italic text-xl">FRONTEND</h3>
                <ul className="font-Lato text-gray tracking-wide">
                    <li className="text-gray hover:text-black ">HTML</li>
                    <li className="text-gray hover:text-black ">CSS</li>
                    <li className="text-gray hover:text-black ">JavaScript</li>
                    <li className="text-gray hover:text-black ">React</li>
                    <li className="text-gray hover:text-black ">Typescript</li>
                    <li className="text-gray hover:text-black ">Accessibility</li>
                    <li className="text-gray hover:text-black ">Responsive Design</li>
                    <li className="text-gray hover:text-black ">WCAG</li>
                    <li className="text-gray hover:text-black ">Figma</li>
                    <li className="text-gray hover:text-black ">Git</li>
                    <li className="text-gray hover:text-black ">Tailwind</li>
                </ul>
            </section>
            <section className="text-right">
                <h3 className="font-Lato font-extra-bold italic  text-xl">BACKEND</h3>
                <ul className="font-Lato tracking-wide">
                    <li className="text-gray hover:text-black ">Node.js</li>
                    <li className="text-gray hover:text-black ">Express</li>
                    <li className="text-gray hover:text-black ">SQL/NoSQL</li>
                    <li className="text-gray hover:text-black ">PHP</li>
                    <li className="text-gray hover:text-black ">AWS Cloudwatch</li>
                    <li className="text-gray hover:text-black ">AWS DynamoDB</li>
                    <li className="text-gray hover:text-black ">AWS Lambda</li>
                    <li className="text-gray hover:text-black ">AWS API Gateway</li>
                    <li className="text-gray hover:text-black ">RESTful API</li>
                </ul>
            </section>
        </motion.div>
    )
}