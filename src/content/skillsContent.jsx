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
                <h3 className="font-work-sans-semi-bold text-xl">FRONTEND</h3>
                <ul className="font-work-sans-light text-gray">
                    <li className="text-gray hover:text-black hover:text-xl">HTML</li>
                    <li className="text-gray hover:text-black hover:text-xl">CSS</li>
                    <li className="text-gray hover:text-black hover:text-xl">JavaScript</li>
                    <li className="text-gray hover:text-black hover:text-xl">React</li>
                    <li className="text-gray hover:text-black hover:text-xl">Typescript</li>
                    <li className="text-gray hover:text-black hover:text-xl">Accessibility</li>
                    <li className="text-gray hover:text-black hover:text-xl">Responsive Design</li>
                    <li className="text-gray hover:text-black hover:text-xl">WCAG</li>
                    <li className="text-gray hover:text-black hover:text-xl">Figma</li>
                    <li className="text-gray hover:text-black hover:text-xl">Git</li>
                    <li className="text-gray hover:text-black hover:text-xl">Tailwind</li>
                </ul>
            </section>
            <section className="text-right">
                <h3 className="font-work-sans-semi-bold text-xl">BACKEND</h3>
                <ul className="font-work-sans-light">
                    <li className="text-gray hover:text-black hover:text-xl">Node.js</li>
                    <li className="text-gray hover:text-black hover:text-xl">Express</li>
                    <li className="text-gray hover:text-black hover:text-xl">SQL/NoSQL</li>
                    <li className="text-gray hover:text-black hover:text-xl">PHP</li>
                    <li className="text-gray hover:text-black hover:text-xl">AWS Cloudwatch</li>
                    <li className="text-gray hover:text-black hover:text-xl">AWS DynamoDB</li>
                    <li className="text-gray hover:text-black hover:text-xl">AWS Lambda</li>
                    <li className="text-gray hover:text-black hover:text-xl">AWS API Gateway</li>
                    <li className="text-gray hover:text-black hover:text-xl">RESTful API</li>
                </ul>
            </section>
        </motion.div>
    )
}