import { useEffect, useRef } from 'react'
import data from '@emoji-mart/data'

function EmojiPicker(props = {}) {
  const ref = useRef()
  const addEmoji = props.addEmoji

  useEffect(() => {
    import('emoji-mart').then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref })
    })
  }, [props])

  return<div className="emoji-pack" onSelect={addEmoji} title="Holla" ref={ref}></div>
}

export default EmojiPicker