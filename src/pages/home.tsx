import { Button } from '@/components/ui/button'
import { miniDictionary } from '@/db/mini-db'
import { getRandomNumber } from '@/lib/lib'
import { useEffect, useState } from 'react'

function getTargetWord() {
  const words = miniDictionary
  const countOfWords = words.length
  const targetIndex = getRandomNumber(countOfWords - 1)
  const targetWord = words[targetIndex]
  return targetWord
}
const Home = () => {
  const [word, setWord] = useState(getTargetWord())

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        setWord(getTargetWord())
      }
    })
    return () => {
      document.removeEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          setWord(getTargetWord())
        }
      })
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>
        "Маркич - <span style={{wordBreak: 'break-word'}}>{word}{word.endsWith('мар') ? 'кич"' : 'ркич"'}</span>
        
      </h1>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Button onClick={() => setWord(getTargetWord())}>Давай еще!</Button>
        <p className='text-xs text-muted-foreground lg:text-sm'>* кликни или нажми Enter</p>
      </div>
    </div>
  )
}

export default Home
