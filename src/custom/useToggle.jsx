import { useState } from 'react'

const useToggle = () => {
  const [open, setOpen] = useState(false)

  const openElement = () => {
    setOpen(true)
  }

  const closeElement = () => {
    setOpen(false)
  }

  return {
    open,
    openElement,
    closeElement
  }
}

export default useToggle
