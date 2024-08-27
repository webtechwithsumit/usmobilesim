import React from 'react'
import Wlogo from '../assets/images/white-logo.png'

const Header = () => {
  return (
    <div className="">

      <div className="container ">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid p-0">

            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <img src={Wlogo} alt="" className='navimg' />
            </div>


            <div class="collapse navbar-collapse bg-body-tertiary mx-3 rounded-3" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
             
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>

            <a class="navbar-brand mobile-hidden" href="#">Cart</a>
            </div>
            <a class="navbar-brand desktop-hidden"  href="#">Cart</a>

          </div>
        </nav>
      </div>
    </div>

  )
}

export default Header