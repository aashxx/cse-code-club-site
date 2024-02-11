import React from 'react';

const EventItem = ({ img, name, description, date }) => {
  return (
    <div className='event-item'>
        <img src={img} alt="NaN" />
        <aside>
            <div>
                <h2>
                    {name}
                </h2>
                <article>
                    {date}
                </article>
            </div>
            <p>
                {description}
            </p>
        </aside>
    </div>
  )
}

export default EventItem;