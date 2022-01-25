import { KeyValue } from '../../lib/keyboard_bg'
import { getStatuses } from '../../lib/statuses_bg'
import { Key } from './Key_bg'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="Ч" onClick={onClick} status={charStatuses['Ч']} />
        <Key value="Я" onClick={onClick} status={charStatuses['Я']} />
        <Key value="В" onClick={onClick} status={charStatuses['В']} />
        <Key value="Е" onClick={onClick} status={charStatuses['Е']} />
        <Key value="Р" onClick={onClick} status={charStatuses['Р']} />
        <Key value="Т" onClick={onClick} status={charStatuses['Т']} />
        <Key value="Ъ" onClick={onClick} status={charStatuses['Ъ']} />
        <Key value="У" onClick={onClick} status={charStatuses['У']} />
        <Key value="И" onClick={onClick} status={charStatuses['И']} />
        <Key value="О" onClick={onClick} status={charStatuses['О']} />
        <Key value="П" onClick={onClick} status={charStatuses['П']} />
        <Key value="Ш" onClick={onClick} status={charStatuses['Ш']} />
        <Key value="Щ" onClick={onClick} status={charStatuses['Щ']} />
        <Key value="Ю" onClick={onClick} status={charStatuses['Ю']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="А" onClick={onClick} status={charStatuses['А']} />
        <Key value="С" onClick={onClick} status={charStatuses['С']} />
        <Key value="Д" onClick={onClick} status={charStatuses['Д']} />
        <Key value="Ф" onClick={onClick} status={charStatuses['Ф']} />
        <Key value="Г" onClick={onClick} status={charStatuses['Г']} />
        <Key value="Х" onClick={onClick} status={charStatuses['Х']} />
        <Key value="Й" onClick={onClick} status={charStatuses['Й']} />
        <Key value="К" onClick={onClick} status={charStatuses['К']} />
        <Key value="Л" onClick={onClick} status={charStatuses['Л']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key value="З" onClick={onClick} status={charStatuses['З']} />
        <Key value="Ц" onClick={onClick} status={charStatuses['Ц']} />
        <Key value="Ж" onClick={onClick} status={charStatuses['Ж']} />
        <Key value="Б" onClick={onClick} status={charStatuses['Б']} />
        <Key value="Н" onClick={onClick} status={charStatuses['Н']} />
        <Key value="М" onClick={onClick} status={charStatuses['М']} />

        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}
