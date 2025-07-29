import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import BgDesktop from '../../assets/mackbookpro.avif';
import BgMobile from '../../assets/mobile.avif';

const HeroContentDesktop = () => (
  <div className="hidden sm:block relative z-5 text-left px-6 py-20 shadow-lg w-full max-w-2xl bg-black/50 backdrop-blur-sm" id='hero'>
    <h2 className="text-base md:text-lg font-light text-yellow-400 mb-2 tracking-wide">
      Web Developer...
    </h2>
    <h1 className="text-2xl   md:text-6xl font-bold text-white mb-2 uppercase  drop-shadow-md">
      Hi,I Am <span className="text-blue-600" style={{ fontFamily: 'system-ui' }}
>Tejas Deshmukh</span>
    </h1>
    <h4 className="text-lg md:text-3xl font-bold text-white mb-8">
      I Am{' '}
      <TypeAnimation
        sequence={[
          'a Developer...',
          2000,
          'a Designer...',
          2000,
          'a Coder...',
          2000,
          'a Creator...',
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-yellow-500 font-semibold"
        repeat={Infinity}
      />
    </h4>
    <p className="pb-4 text-xl text-white font-semibold">
      Specializing in React & Tailwind CSS, and Clean UI/UX
    </p>
    <button className="bg-yellow-500 tracking-widest text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
    Explore Work 
    </button>
  </div>
);

const HeroContentMobile = () => (
  <div className="block sm:hidden relative z-5 text-center px-4  py-16 w-full bg-black/50 ">
    <h1 className="text-3xl font-bold text-white mb-4">
      Hi, 👋 I'm <span className="text-blue-500 ">Tejas Deshmukh</span>
    </h1>
    <p className="text-white mb-4 uppercase">Frontend-Web Developer</p>
    <p className='text-xl text-white  font-bold'>I Am {''}</p>
    <TypeAnimation
      sequence={[
        'Building websites',
        2000,
        'Creating UI/UX',
        2000,
        'Writing clean code',
        2000,
      ]}
      wrapper="span"
      speed={50}
      className="text-yellow-400 font-semibold text-lg"
      repeat={Infinity}
    />
    <div className="mt-6">
      <button className="bg-yellow-600 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
        Explore Work
      </button>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full px-4 md:px-20 overflow-hidden flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source media="(min-width: 640px)" srcSet={BgDesktop} />
          <img
            src={BgMobile}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <HeroContentDesktop />
      <HeroContentMobile />
    </section>
  );
};

export default Hero;
