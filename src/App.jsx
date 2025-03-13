import './App.css'
import { Header } from './components/header'
import { DropDown } from './components/dropdown'
import { Mailbox } from './components/mailbox'

function App() {

  return (
    <div className='wrapper w-full font-main-font mx-auto relative h-full flex flex-col'>
      <Header />
      <DropDown />
      <Mailbox />
    </div>
  )
}

export default App
