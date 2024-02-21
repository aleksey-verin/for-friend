import { Toaster } from 'sonner'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

function App() {
  return (
    <div className='min-h-dvh flex flex-col font-display'>
      <Header />
      <main className='max-w-screen-xl flex-1 p-4 m-auto flex items-center justify-center '>
        <Home />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
