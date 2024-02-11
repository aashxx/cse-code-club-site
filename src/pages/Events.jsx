import React from 'react'
import { EVENTS } from '../lib/constants'
import EventItem from '../components/EventItem'

const Events = () => {
  return (
    <main>
        <section className='events-page'>
            <h2>
                Thrilling Events!
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur quos dolorem ab quas autem fugiat similique voluptates aut, molestias quod fugit laboriosam repudiandae magnam incidunt numquam nam ducimus. Quis, illo architecto.
            </p>
            <div>
                {
                    EVENTS.map((event) => (
                        <EventItem img={event.img} name={event.name} date={event.date} description={event.description} />
                    ))
                }
            </div>
        </section>
    </main>
  )
}

export default Events;