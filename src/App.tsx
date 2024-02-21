import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

function App() {
  return (
    <div className='min-h-screen flex flex-col font-display'>
      <Header />
      <main className='max-w-screen-xl flex-1 p-4 m-auto flex items-center justify-center '>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
