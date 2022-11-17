import React from 'react'

export default function about() {
  return (

    <>

      <div className='about_sec'>
        <div className="heading-mid" data-aos="zoom-out" data-aos-duration="1100">
          <h1><span>
            <i className="fa fa-leaf" aria-hidden="true"></i>
            {/* <i class="fa fa-arrow-down" aria-hidden="true"></i> */}
            About
            {/* <i class="fa fa-arrow-down" aria-hidden="true"></i> */}
            <i className="fa fa-leaf" aria-hidden="true"></i> </span></h1>

          <div className='text'>
            The purpose of Doctor Appointment System is to store their valuable
            data/information for a longer period of timne  with easy accessing
            and manipulation of the same.It also helps the organization for better
            utilization of resources.
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" data-aos="fade-left" data-aos-duration="1000" className="p-3 review carousel slide " data-bs-ride="true">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"> </button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>


        </div>
        <div className="carousel-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <div className="carousel-item active">

            <img src={require('../assets/hospital.webp')}
              class="reimg"

              alt="Disease"
            />

          </div>

          <div className="carousel-item ">

            <img src={require('../assets/gr1.webp')}
              class=""

              alt="Disease"
            />

          </div>
          <div className="carousel-item ">

            <img src={require('../assets/social-media-impact-blog.jpg')}
              class=""

              alt="Disease"

            />

          </div>
          <div className="carousel-item ">

            <img src={require('../assets/maxresdefault.jpg')}

              alt="Disease"
            />

          </div>

          <div className="carousel-item ">

            <img src={require('../assets/do.webp')}
              class=""

              alt="Disease"
            />

          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>




    </>
  )
}
