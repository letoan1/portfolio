import React from 'react'
import './_testimonials.scss'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVT1,
    name: 'Declan Rice',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque ullam omnis saepe ducimus doloremque repellendus, iste dignissimos ea eos voluptatibus totam est possimus impedit sint rerum cum veritatis eligendi.',
  },
  {
    avatar: AVT2,
    name: 'Mason Mount',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque ullam omnis saepe ducimus doloremque repellendus, iste dignissimos ea eos voluptatibus totam est possimus impedit sint rerum cum veritatis eligendi.',
  },
  {
    avatar: AVT3,
    name: 'Ben Chillwell',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque ullam omnis saepe ducimus doloremque repellendus, iste dignissimos ea eos voluptatibus totam est possimus impedit sint rerum cum veritatis eligendi.',
  },
  {
    avatar: AVT4,
    name: 'Reece Jamse',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque ullam omnis saepe ducimus doloremque repellendus, iste dignissimos ea eos voluptatibus totam est possimus impedit sint rerum cum veritatis eligendi.',
  },
]

export default function Testimonials() {
  return (
	  <section id="testimonials">
      <h5 style={{textAlign: 'center'}}>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data?.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
