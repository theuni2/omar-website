import React from 'react'

export default function Competition() {
  return (
    <div>
        <section className="text-gray-800 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    {/* Left Text Section */}
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
      flex flex-col md:items-start md:text-left mb-16 md:mb-0 
      items-center text-center">

      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
        Join the Ultimate  
        <br className="hidden lg:inline-block" />
        Business Innovation Challenge
      </h1>

      <p className="mb-8 leading-relaxed text-gray-600">
        Step into a fast-paced arena where ideas turn into ventures.
        Compete with ambitious creators, pitch your startup vision,
        get expert feedback, and unlock real opportunities to grow.
        The stage is yours. Make it count.
      </p>

      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-600 border-0 py-3 px-7 
          focus:outline-none hover:bg-indigo-700 rounded-lg text-lg transition">
          Register Now
        </button>
        <a href='/competition'>
        <button className="ml-4 inline-flex text-indigo-600 bg-indigo-100 border-0 py-3 px-7 
          focus:outline-none hover:bg-indigo-200 rounded-lg text-lg transition">
          Learn More
        </button>
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded-xl shadow-md"
        alt="competition"
        src="/img/hero_pic.png"
      />
    </div>

  </div>
</section>

    </div>
  )
}
