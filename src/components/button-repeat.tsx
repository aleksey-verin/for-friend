import { Button } from './ui/button'
import { RefreshCw, RefreshCwOff } from 'lucide-react'

const ButtonRepeat = ({ autoplay, handleClick }: { autoplay: boolean, handleClick: () => void }) => {
  return (
    <Button title={autoplay ? 'Выключить авто-генерацию' : 'Включить авто-генерацию раз в 10 сек'} onClick={handleClick} variant='outline' size='icon'>
      {autoplay ? <RefreshCw color='#888888' className='h-4 w-4' /> : <RefreshCwOff color='#888888' className='h-4 w-4' />}
    </Button>
  )
}

export default ButtonRepeat
