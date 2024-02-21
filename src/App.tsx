import './App.css'
import Header from './components/header'
import Home from './pages/Home'

function App() {
  return (
    <div className='min-h-screen flex flex-col font-display'>
      <Header />
      <main className='flex-1'>
        <Home />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
