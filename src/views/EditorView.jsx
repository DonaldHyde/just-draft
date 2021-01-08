import React, { useState, useEffect } from 'react'

import '../static/css/EditorView.css'

import { WordCount } from '../components/WordCount'
import { ContentOutput } from '../components/ContentOutput'
import { DownloadButton } from '../components/DownloadButton'

// TODO: Cleanup, implement the return character, deliberate user input strategy
function EditorView(props) {
  const [content, setContent] = useState('')
  const [fileName, setFileName] = useState(props.fileName)

  const localStorage = window.localStorage

  useEffect(() => {
    setContent(localStorage.getItem(`_jd_${fileName}`) || '')
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeystroke)

    return () => {
      document.removeEventListener('keydown', handleKeystroke)
    }
  })

  function handleKeystroke(e) {
    let key = e.key

    if (key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
      if (/[a-zA-z0-9.,/#!$%^&*;:{}=\-_`~()@\W]/.test(key)) {
        addCharacter(key)
      }
    } else {
      switch (key) {
        case 'Backspace':
          e.preventDefault()
          deleteCharacter()
          break
        case 'Enter':
          e.preventDefault()
          // this.newParagraph()
          break
        default:
      }
    }
  }

  const addCharacter = (key) => {
    const newContent = content + key
    setContent(newContent)
    localStorage.setItem(`_jd_${fileName}`, newContent)
  }

  const deleteCharacter = () => {
    const newContent = content.substring(0, content.length - 1)
    setContent(newContent)
    localStorage.setItem(`_jd_${fileName}`, newContent)
  }

  function handleClick(e) {
    setFileName(e.target.dataset.filename)
  }

  function getNav() {
    const navItems = []

    for (let i = 1; i < 6; i++) {
      navItems.push(
        <span
          key={i}
          data-filename={`file${i}`}
          className={fileName === `file${i}` ? 'active' : ''}
          onClick={handleClick}
        >
          {`File ${i}`}
        </span>
      )
    }

    return <nav>{navItems}</nav>
  }

  return (
    <React.Fragment>
      <div className="EditorView">
        <header>
          <div className="app-title">Just Draft</div>
          {getNav()}
        </header>
        <main>
          <WordCount textContent={content} />
          <ContentOutput textContent={content} />
          <DownloadButton fileName={fileName} textContent={content} />
        </main>
      </div>
    </React.Fragment>
  )
}

export { EditorView }
