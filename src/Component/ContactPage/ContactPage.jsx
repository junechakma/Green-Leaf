import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { FaClock, FaFacebookF, FaGoogle, FaInstagram, FaLocationDot } from "react-icons/fa6";
import HeroPage from "../HeroPage";

import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form';
import { FaPhoneAlt } from "react-icons/fa";
import Reservation from "../Reservation";
import { Link } from "react-router-dom";

function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const closeModal = () => {
    // Step 3: Close Modal
    setIsModalOpen(false);
  };

  const heroData = {
    title: "Contact Us",
    subtitle: "Reach out to us for your quest of culinary!",
    image: "/assets/contact/contact.jpg"
  }

  return (
    <div className="bg-snowDrift">
      <HeroPage title={heroData.title} description={heroData.subtitle} img={heroData.image} />


      {/* banner */}
      <div className="container my-16 rounded-2xl flex  md:flex-row flex-wrap justify-center gap-6 md:justify-between p-4 md:p-10 shadow-xl">
        <div className="flex flex-col gap-2 items-center">
          <MdLocationPin size={32} className="text-green" />
          <p className="text-sm md:text-lg font-semibold">Whitechapel Rd, London E1 1HJ, UK</p>
          <p className="text-sm md:text-lg text-gray-600">GW9P+69 London, United Kingdom</p>
        </div>

        <div className="h-[100px] w-1 bg-green hidden md:block">{""}</div>

        <div className="flex flex-col gap-2 items-center">
          <MdLocationPin size={32} className="text-green" />
          <p className=" text-sm md:text-lg font-semibold">Open 10.00 AM - 11.00 PM</p>
          <p className="text-sm text-gray-600">Restaurant open daily</p>
        </div>

        <div className="h-[100px] w-1 bg-green ">{""}</div>

        <div className="flex flex-col gap-2 items-center">
          <MdPhone size={32} className="text-green" />
          <p className="text-sm md:text-lg font-semibold">+447472915599</p>
          <p className="text-sm text-gray-600">Contact us</p>
        </div>
      </div>

      {/* End of Banner */}


      {/* Contact Form */}
      <section id='form' className='container my-20 flex flex-col-reverse md:flex-row justify-between shadow-md bg-white rounded-3xl p-4 md:p-6'>

        <div className='w-full md:w-1/3 md:h-[75vh] bg-green text-white p-4 md:p-10 rounded-xl flex flex-col justify-between gap-5 bg-gradient-to-br from-[#57BC75] to-[#388650]'>
          <div>
            <h1 className='text-2xl font-bold'>Contact Information</h1>
            <p className='text-base pt-3'>Please fill out this form to contact us about your questions and to knows, anytime!</p>
            <div className='flex flex-col gap-4 text-lg mt-10'>

              <div className="flex items-center gap-3">
                <FaPhoneAlt size={26} className=" text-white" />
                <p className="text-sm md:text-lg">+447472915599</p>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot size={32} className=" text-white" />
                <p className="text-sm md:text-lg">112, 116 Whitechapel Rd, London
                  E1 1HJ, United Kingdom<br /> </p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail size={26} className=" text-white" />
                <p className="text-sm md:text-lg">cafegreenleaf@gmail.com</p>
              </div>
            </div>
          </div>


          <div className="flex space-x-2 self-start">
            <Link to={"https://g.page/r/CU-0DqYaPKvdEBE/review"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaGoogle size={16} />
            </Link>
            <Link to={"https://www.instagram.com/greenleaf.uk?igsh=MTY4MTc0ZWxvOHR1ZQ%3D%3D&utm_source=qr"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaInstagram size={16} />
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=100054622906779"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaFacebookF size={16} />
            </Link>
          </div>
        </div>

        {/* Actual form */}
        <form ref={form} className="w-full md:w-[50vw] p-5 md:p-10 flex flex-col gap-5 md:gap-16">
          <h1 className='text-2xl font-bold text-secondary md:hidden'>Contact From</h1>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-5 justify-between">
            <div>
              <p className="text-ash ">First  Name</p>
              <input
                {...register('fullName', { required: 'Full Name is required' })}
                className={`w-full bg-transparent border-b-2 ${errors.fullName ? 'border-red' : 'border-black'} outline-none `}
              />
              {errors.fullName && <p className="text-red">{errors.fullName.message}</p>}
            </div>

            <div>
              <p className="text-ash ">Last Name</p>
              <input
                {...register('lastName', { required: 'Last Name  is required' })}
                className={`w-full bg-transparent border-b-2 ${errors.lastName ? 'border-red' : 'border-black'} outline-none `}
              />
              {errors.lastName && <p className="text-red">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="flex flex-col  md:grid md:grid-cols-2 gap-5 justify-between">
            <div>
              <p className="text-ash ">Phone Number</p>
              <input
                {...register('phoneNumber', { required: 'Phone Number is required' })}
                className={`w-full bg-transparent border-b-2 ${errors.phoneNumber ? 'border-red' : 'border-black'} outline-none `}
              />
              {errors.phoneNumber && <p className="text-red">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <p className="text-ash ">Email Address</p>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: 'Enter a valid email address',
                  },
                })}
                className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red' : 'border-black'} outline-none `}
              />
              {errors.email && <p className="text-red">{errors.email.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-ash ">Message</p>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className={`w-full bg-transparent border-b-2 ${errors.message ? 'border-red' : 'border-black'} outline-none `}
            />
            {errors.message && <p className="text-red">{errors.message.message}</p>}
          </div>

          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="flex flex-row items-center gap-3">
              <input type="checkbox" {...register('acceptTerms', { required: 'You must accept the terms and conditions' })} className="h-4 w-4" />
              <p className="text-ash">Accept terms & conditions</p>
              {errors.acceptTerms && <p className="text-red">{errors.acceptTerms.message}</p>}
            </div>
            <div>
              <button type="submit" className="button">
                Send
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            {isModalOpen && (
              <div className={`w-full md:w-1/2 shadow-md p-5 rounded-md ${modalMessage === "Submission successful!" ? "bg-[#008000]" : "bg-red"} `}>
                <div className="flex flex-row items-center gap-3">
                  <span className="text-2xl text-white hover:cursor-pointer" onClick={closeModal}>
                    &times;
                  </span>
                  <p className="text-white">{modalMessage}</p>
                </div>
              </div>
            )}
          </div>

        </form>

      </section>

      {/* End of Contact Form */}

      <div className="pb-16">
        <Reservation />
      </div>
    </div>
  )
}

export default ContactPage