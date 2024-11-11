import React from 'react'
import './AppDownload.css'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        For the best food ordering experience, Download<br />
        <p className='p-fastfood'>Fastfood</p>
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
import './AppDownload.css'
import { assets } from '../../assets/assets'
export default AppDownload
