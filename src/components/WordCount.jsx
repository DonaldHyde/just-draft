import React from 'react'

function clearPunctuation(text) {
  const punctuationRegex = /[.,?!'’""“”\\/<>;:]\[\]{}_=+-]/g
  return text.replace(punctuationRegex, '')
}

function getWordCount(text) {
  return text.split(' ').reduce((total, word) => {
    if (!word.length) return total
    total.push(word)
    return total
  }, []).length
}

function WordCount(props) {
  const punctuationFreeText = clearPunctuation(props.textContent)
  const wordCount = getWordCount(punctuationFreeText)
  return <p className="word-count">{`${wordCount} words`}</p>
}

export { WordCount }
