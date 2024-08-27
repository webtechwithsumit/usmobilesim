import React from 'react'
import Banner from '../assets/images/home-banner.png'

const Home = () => {
  return (
    <div>

      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Banner} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Banner} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <section className=' ' >

        <div className="container text-light">

          <h1>Shop with Confidence</h1>
          <div className='row'>
            <div className="col-md-3">
              <h4>money Back </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est molestias iste maxime explicabo adipisci consectetur sequi voluptatibus sit earum odio itaque similique hic, facilis veniam eum. Eos, necessitatibus nisi?</p>
            </div>
            <div className="col-md-3">
              <h4>money Back </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est molestias iste maxime explicabo adipisci consectetur sequi voluptatibus sit earum odio itaque similique hic, facilis veniam eum. Eos, necessitatibus nisi?</p>
            </div>
            <div className="col-md-3">
              <h4>money Back </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est molestias iste maxime explicabo adipisci consectetur sequi voluptatibus sit earum odio itaque similique hic, facilis veniam eum. Eos, necessitatibus nisi?</p>
            </div>
            <div className="col-md-3">
              <h4>money Back </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est molestias iste maxime explicabo adipisci consectetur sequi voluptatibus sit earum odio itaque similique hic, facilis veniam eum. Eos, necessitatibus nisi?</p>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Home