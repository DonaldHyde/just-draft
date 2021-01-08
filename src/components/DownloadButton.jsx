import React from 'react'

function DownloadButton(props) {
  const downloader = React.createRef()

  function handleClick() {
    if (props.textContent.length > 0) {
      triggerDownload()
    }
  }

  function triggerDownload() {
    downloader.current.click()
  }

  return (
    <React.Fragment>
      <button className="downloader-button" onClick={handleClick}>
        Download File
      </button>
      <a
        href={`data:text/plain;charset=utf-8, ${encodeURIComponent(
          props.textContent
        )}`}
        download={props.fileName}
        ref={downloader}
      ></a>
    </React.Fragment>
  )
}

export { DownloadButton }
