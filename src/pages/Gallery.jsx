import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IMGS } from '../lib/constants';

const Gallery = () => {
  return (
    <main>
      <section className='gallery-page'>
            <h2>
                Moments!
            </h2>
            <Carousel className='carousel' autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
                <img src="/1.JPG" alt="NaN" />
                <img src="/2.JPG" alt="NaN" />
                <img src="/3.JPG" alt="NaN" />
                <img src="/4.jpg" alt="NaN" />
                <img src="/5.jpg" alt="NaN" />
                <img src="/6.jpg" alt="NaN" />
                <img src="/7.jpg" alt="NaN" />
            </Carousel>
            <div className='gallery-opts'>
              {
                IMGS.map((img) => (
                  <aside>
                    <img className='gallery-imgs' src={img} alt="NA" />
                  </aside>
                ))
              }
            </div>
        </section>
    </main>
  )
}

export default Gallery