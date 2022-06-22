import React from 'react'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'
import "./PastPaper.css"

const PastPaper = () => {
  return (
    <div className='pastpaper-page'>
      <Header/>
      <div className='pastpaper-icon-text'>
      <i class="fas fa-paperclip" aria-hidden="true"></i>
      <h4>Past Paper</h4>
      </div>
      <Footer/>
    </div>
  )
}

export default PastPaper