import React from 'react'
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <>
      <section className="download top">
        <div className="container flex_space">
          <div className="row">
            <h3>Download Our App</h3>
            <h1>Wow! Get this template App for your mobile.</h1>
            <ul>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Get paperless confirmation</li>
            </ul>
            <div className="img flex">
              <img src="/images/appstore-button.png" alt="" />
              <img src="/images/google-play-button.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadApp