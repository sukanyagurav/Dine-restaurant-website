import React from 'react'
import Hero from '../components/Hero'
import Footer from "../components/Footer";
const BookingPage = () => {
  return (
    <>
      <Hero h1Text="Reservations" description="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."/>
      <div className="h-[500px] md:h-[400px] blank">

      </div>
      <Footer/>
    </>
  )
}

export default BookingPage
