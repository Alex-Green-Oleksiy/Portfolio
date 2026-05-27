import { useEffect, useState } from 'react'
import { CODE_SNIPPETS } from './codeSnippets'
import { previewHost } from '@/config/projects'

const PAUSE_BEFORE_FLIP = 700
const PREVIEW_DURATION = 3400

export function useMacBookCycle(enabled = true) {
  const [text, setText] = useState(() => (enabled ? '' : CODE_SNIPPETS[0].code))
  const [slide, setSlide] = useState('editor')

  const snippet = CODE_SNIPPETS[0]
  const full = snippet.code

  useEffect(() => {
    if (!enabled) {
      setText(full)
      setSlide('editor')
      return undefined
    }

    if (slide !== 'editor' || text === full) return undefined

    const timeout = setTimeout(() => {
      setText(full.slice(0, text.length + 1))
    }, 26)

    return () => clearTimeout(timeout)
  }, [text, full, slide, enabled])

  useEffect(() => {
    if (!enabled || slide !== 'editor' || text !== full) return undefined

    const timeout = setTimeout(() => setSlide('browser'), PAUSE_BEFORE_FLIP)
    return () => clearTimeout(timeout)
  }, [text, full, slide, enabled])

  useEffect(() => {
    if (!enabled || slide !== 'browser') return undefined

    const timeout = setTimeout(() => {
      setSlide('editor')
      setText('')
    }, PREVIEW_DURATION)

    return () => clearTimeout(timeout)
  }, [slide, enabled])

  return {
    text,
    file: snippet.file,
    slide,
    preview: {
      image: snippet.previewImage,
      url: snippet.previewUrl,
      host: previewHost(snippet.previewUrl),
      title: snippet.previewTitle,
    },
    deskIndex: slide === 'browser' ? 1 : 0,
  }
}
