import './App.css'
import { Header } from './components/header'
import { DropDown } from './components/dropdown'

function App() {

  return (
    <div className='wrapper w-full font-main-font mx-auto relative min-h-full flex flex-col'>
      <Header />
      <DropDown />
    </div>
  )
}

export default App
