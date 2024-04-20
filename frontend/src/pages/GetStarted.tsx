import React, { useState } from 'react'
import doceaselogo from '../assets/doceaselogo.png'
import p from '../assets/p.png'
import p1 from '../assets/p1.png'
import Login from './Login'
import RegisterModal from './SignUp'


const GetStarted = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <div className='bg-[#EADBFE]      h-screen'>
       <nav className='ml-4'>
       <img className='w-36' src={doceaselogo} alt="logo"  />

       </nav>
       <div className="flex justify-center items-center flex-col gap-y-8 ">
        <h1 className="text-4xl font-bold">
        Simplify Your Documents <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-purple-600 to-transparent">Magic</span> and Boost Your Productivity with DocsEase.com
        </h1>
        <div className="p-12 border-2 border-[#7843BB] rounded-xl flex gap-2 justify-center items-center ">
          <h2 className="text-3xl space-x-2">Create Stunning Documents in Seconds 
          </h2>
          
<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13_16)">
<path d="M25.7485 0C11.9415 0 0.748535 11.193 0.748535 25C0.748535 38.8078 11.9415 50 25.7485 50C39.5563 50 50.7485 38.8078 50.7485 25C50.7485 11.193 39.5563 0 25.7485 0ZM25.7485 46.9242C13.6868 46.9242 3.87354 37.0617 3.87354 24.9999C3.87354 12.9382 13.6868 3.1249 25.7485 3.1249C37.8103 3.1249 47.6235 12.9382 47.6235 24.9999C47.6235 37.0616 37.8103 46.9242 25.7485 46.9242ZM35.7259 15.8523L21.0579 30.6125L14.4524 24.007C13.8422 23.3969 12.8532 23.3969 12.2422 24.007C11.6321 24.6172 11.6321 25.6062 12.2422 26.2164L19.9758 33.9508C20.586 34.5602 21.575 34.5602 22.186 33.9508C22.2563 33.8805 22.3165 33.8039 22.3712 33.7242L37.9368 18.0625C38.5462 17.4523 38.5462 16.4632 37.9368 15.8523C37.3259 15.2422 36.3368 15.2422 35.7259 15.8523Z" fill="#4ECB71"/>
</g>
<defs>
<clipPath id="clip0_13_16">
<rect width="50" height="50" fill="white" transform="translate(0.748535)"/>
</clipPath>
</defs>
</svg>
        </div>

        <div className="p-12 border-2 border-[#7843BB] rounded-xl flex gap-2 justify-center items-center ">
          <h2 className="text-3xl space-x-2">Secure your Documents with Peace Mind
          </h2>
          
<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13_16)">
<path d="M25.7485 0C11.9415 0 0.748535 11.193 0.748535 25C0.748535 38.8078 11.9415 50 25.7485 50C39.5563 50 50.7485 38.8078 50.7485 25C50.7485 11.193 39.5563 0 25.7485 0ZM25.7485 46.9242C13.6868 46.9242 3.87354 37.0617 3.87354 24.9999C3.87354 12.9382 13.6868 3.1249 25.7485 3.1249C37.8103 3.1249 47.6235 12.9382 47.6235 24.9999C47.6235 37.0616 37.8103 46.9242 25.7485 46.9242ZM35.7259 15.8523L21.0579 30.6125L14.4524 24.007C13.8422 23.3969 12.8532 23.3969 12.2422 24.007C11.6321 24.6172 11.6321 25.6062 12.2422 26.2164L19.9758 33.9508C20.586 34.5602 21.575 34.5602 22.186 33.9508C22.2563 33.8805 22.3165 33.8039 22.3712 33.7242L37.9368 18.0625C38.5462 17.4523 38.5462 16.4632 37.9368 15.8523C37.3259 15.2422 36.3368 15.2422 35.7259 15.8523Z" fill="#4ECB71"/>
</g>
<defs>
<clipPath id="clip0_13_16">
<rect width="50" height="50" fill="white" transform="translate(0.748535)"/>
</clipPath>
</defs>
</svg>
        </div>

        <div className="p-12 border-2 border-[#7843BB] rounded-xl flex gap-2 justify-center items-center ">
          <h2 className="text-3xl space-x-2">Manage your Documents with fun games
          </h2>
          
<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13_16)">
<path d="M25.7485 0C11.9415 0 0.748535 11.193 0.748535 25C0.748535 38.8078 11.9415 50 25.7485 50C39.5563 50 50.7485 38.8078 50.7485 25C50.7485 11.193 39.5563 0 25.7485 0ZM25.7485 46.9242C13.6868 46.9242 3.87354 37.0617 3.87354 24.9999C3.87354 12.9382 13.6868 3.1249 25.7485 3.1249C37.8103 3.1249 47.6235 12.9382 47.6235 24.9999C47.6235 37.0616 37.8103 46.9242 25.7485 46.9242ZM35.7259 15.8523L21.0579 30.6125L14.4524 24.007C13.8422 23.3969 12.8532 23.3969 12.2422 24.007C11.6321 24.6172 11.6321 25.6062 12.2422 26.2164L19.9758 33.9508C20.586 34.5602 21.575 34.5602 22.186 33.9508C22.2563 33.8805 22.3165 33.8039 22.3712 33.7242L37.9368 18.0625C38.5462 17.4523 38.5462 16.4632 37.9368 15.8523C37.3259 15.2422 36.3368 15.2422 35.7259 15.8523Z" fill="#4ECB71"/>
</g>
<defs>
<clipPath id="clip0_13_16">
<rect width="50" height="50" fill="white" transform="translate(0.748535)"/>
</clipPath>
</defs>
</svg>
        </div>

        <img className="absolute     right-24 bottom-5 " src={p} alt="" />
        <img className="absolute     left-0 top-[20%] " src={p1} alt="" />



        <button  onClick={openModal} className="bg-gradient-to-t from-purple-700 via-purple-600 to-purple-800 p-6 text-white text-3xl font-bold rounded-xl">
          Get Started</button>

           {/* Render the modal conditionally */}
        {isModalOpen && <Login closeModal={closeModal} openRegisterModal={openRegisterModal} />}
        {isRegisterModalOpen && <RegisterModal closeModal={closeRegisterModal} openModal={openModal} />}

       </div>

       



       
        
       
      
    </div>
  )
}

export default GetStarted
