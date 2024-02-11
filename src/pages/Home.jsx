import React from 'react';
import EventItem from '../components/EventItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <section className='hero-section'>
            <article>
                <h1>
                    Hello World 👋
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, repudiandae doloremque sint laboriosam architecto porro non velit libero quis officia quo error exercitationem accusantium?
                </p>
            </article>
        </section>
        <section className='event-section'>
            <div className='pill'>
                ✨Events
            </div>
            <h2>
                Upcoming Event!
            </h2>
            <EventItem img={"/event1.jpg"} name={'DevXperience'} date={'12 Jan 2024'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, repudiandae doloremque sint laboriosam architecto porro non velit libero quis officia quo error exercitationem accusantium?'} />
        </section>
        <section className='staff-section'>
            <div className='pill'>
                👨‍🏫 Staff
            </div>
            <h2>
                Our Coordinators
            </h2>
            <aside>
                <div>
                    <img src="https://crescent.education/wp-content/uploads/2022/09/Mr.N.Gopinath.jpg" alt="Sir" />
                    <h3>Mr.N.Gopinath</h3>
                    <h4>Assistant Professor</h4>
                    <p>Dept. of CSE</p>
                </div>
                <div>
                    <img src="https://crescent.education/wp-content/uploads/2022/09/S.R.SENTHILKUMAR.jpg" alt="Sir" />
                    <h3>S.R.Senthilkumar</h3>
                    <h4>Assistant Professor</h4>
                    <p>Dept. of CSE</p>
                </div>
            </aside>
        </section>
        <section className='photo-section'>
            <div className='pill'>
                📸 Moments
            </div>
            <h2>
                Lorem ipsum dolor sit.
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
            <Link to="/gallery">
                See More...
            </Link>
        </section>
    </main>
  )
}

export default Home;