import './App.css'
import { Header } from './components/header'
import { Main } from './components/main'
import { DropDown } from './components/dropdown'
import { AboutContent } from './content/aboutContent'
import { SkillsContent } from './content/skillsContent'
import { PortfolioContent } from './content/portfolioContent'

function App() {

  return (
    <div className='wrapper w-full min-h-screen font-main-font'>
     <Header />
     <Main />
     <DropDown title='ABOUT' content={<AboutContent/>}/>
     <DropDown title='SKILLS' content={<SkillsContent />}/>
     <DropDown title='PORTFOLIO' content={<PortfolioContent/>}/>
    </div>
  )
}

export default App
