export function SkillsContent(){
    return (
        <div className="flex place-content-between">
            <section>
                <h3 className="font-work-sans-semi-bold text-xl">FRONTEND</h3>
                <ul className="font-work-sans-light text-gray">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Accessibility</li>
                    <li>Responsive Design</li>
                    <li>WCAG</li>
                    <li>Figma</li>
                    <li>Git</li>
                    <li>Tailwind</li>
                </ul>
            </section>
            <section className="text-right">
                <h3 className="font-work-sans-semi-bold text-xl">BACKEND</h3>
                <ul className="font-work-sans-light text-gray">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL/NoSQL</li>
                    <li>PHP</li>
                    <li>AWS Cloudwatch</li>
                    <li>AWS DynamoDB</li>
                    <li>AWS Lambda</li>
                    <li>AWS API Gateway</li>
                    <li>RESTful API</li>
                </ul>
            </section>
        </div>
    )
}