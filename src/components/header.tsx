import { ModeToggle } from './ui/mode-toggle'

const Header = () => {
  return (
    <header className='font-display'>
      <div className='max-w-screen-xl p-4 h-full m-auto flex items-center justify-between '>
        <h1 className='scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl '>
          Генератор случайных Маркичей
        </h1>
        <div className='w-10 flex items-center justify-center ml-2'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
