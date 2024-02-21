import { ButtonCopy } from '@/components/button-copy'
import ButtonRepeat from '@/components/button-repeat'
import { Button } from '@/components/ui/button'
import { getTargetPhrase } from '@/lib/lib'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const Home = () => {

  const [phrase, setPhrase] = useState(getTargetPhrase())
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        setPhrase(getTargetPhrase())
      }
    })
    return () => {
      document.removeEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          setPhrase(getTargetPhrase())
        }
      })
    }
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (autoplay) {
      setPhrase(getTargetPhrase())
      timer = setInterval(() => {
        setPhrase(getTargetPhrase())
      }, 10000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [autoplay]);

  const handleClickAutoplay = () => {
    setAutoplay(!autoplay);
   toast(autoplay ? 'Авто-генерация выключена' : 'Включена авто-генерация раз в 10 секунд')
  }

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h1
        style={{ wordBreak: 'break-word' }}
        className='scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-center'
      >
        "{phrase}"
      </h1>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex items-center justify-center gap-2'>
          <ButtonRepeat handleClick={handleClickAutoplay} autoplay={autoplay} />
          <ButtonCopy text={phrase} />
          <Button title='Давай еще!' variant={'outline'} onClick={() => setPhrase(getTargetPhrase())}>
            Давай еще!
          </Button>
        </div>
        <p className='text-xs text-muted-foreground lg:text-sm text-center'>
          * кликни "Давай еще!" или нажми Enter
        </p>
      </div>
    </div>
  )
}

export default Home
