import { Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { copyToClipboard } from '@/lib/lib'
import { toast } from 'sonner'

export function ButtonCopy({ text }: { text: string }) {
  const handleClick = () => {
    copyToClipboard(text)
    toast('Скопировано в буфер обмена!')
  }

  return (
    <Button title='Скопировать' onClick={handleClick} variant='outline' size='icon'>
      <Copy color='#888888' className='h-4 w-4' />
    </Button>
  )
}
