import React, { useEffect, useRef } from 'react'

function ContentOutput(props) {
  const writeRef = useRef(null)

  const resetScrollEffect = ({ element }) => {
    element.current.scrollTop = element.current.scrollHeight
  }

  useEffect(() => resetScrollEffect({ element: writeRef }))

  return (
    <div ref={writeRef} className="writable-area">
      {props.textContent}
    </div>
  )
}

export { ContentOutput }
