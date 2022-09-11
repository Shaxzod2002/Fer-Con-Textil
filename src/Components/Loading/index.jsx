import React from 'react';
import './style.css';

export default function Load() {
  window.addEventListener('load', () => {
    document.getElementById('load').style.display = "none"
  })
  return (
    <div id='load' className='row'></div>
  )
}
