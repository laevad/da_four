import './App.css'
import Board from './components/Board'
import logo from './assets/logo.svg'

function App() {
  return (
    <>
     <h1>Da Four</h1>
    {/* logo responsive */}
    <div className="flex justify-center">
    <img src={logo} className="w-1/2 md:w-1/4 lg:w-1/6" alt="logo" />
    </div>

    {/* Board */}
    <div className="mt-3">
    <Board />
    </div>
    </>
  )
}

export default App
