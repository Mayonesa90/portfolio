import './App.css'
import { Header } from './components/header'
import { DropDown } from './components/dropdown'
import { AboutContent } from './content/aboutContent'
import { SkillsContent } from './content/skillsContent'
import { PortfolioContent } from './content/portfolioContent'
import { Mailbox } from './components/mailbox'
import { motion } from 'framer-motion'

function App() {

  return (
    <div className='wrapper w-full font-main-font mx-auto relative h-full flex flex-col'>
     <Header />
 
      {/* <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5 }}
        >
          <DropDown title="ABOUT" content={<AboutContent />}  />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5 }}
        >
          <DropDown title='SKILLS' content={<SkillsContent />}  />
      </motion.div>
      <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5 }}
          className='mb-10'
        >
      <DropDown title='PORTFOLIO' content={<PortfolioContent/>} />
      </motion.div> */}
      <DropDown />

      <Mailbox />
    </div>
  )
}

export default App
