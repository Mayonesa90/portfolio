import './App.css'
import { Header } from './components/header'
import { DropDown } from './components/dropdown'

function App() {

  return (
    <div className=' w-full mx-auto relative max-h-screen flex flex-col overflow-hidden'>
      <Header />
      <DropDown />
    </div>
  )
}

export default App
