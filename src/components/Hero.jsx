import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./NavBar";
import BottomBlur from "./BottomBlur";

import heroVideo from "../assets/bg-white-hexagon-video.mp4";
import myImage from "../assets/myImage.webp";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {

        const image = heroImageRef.current;
        const aboutImage = aboutImageRef.current;

        // Hero image position
        const start = image.getBoundingClientRect();

        // About image position
        const end = aboutImage.getBoundingClientRect();

        const x =
          end.left +
          end.width / 2 -
          (start.left + start.width / 2);

        const y =
          end.top +
          end.height / 2 -
          (start.top + start.height / 2);


        // Initial state of About text
        gsap.set(aboutTextRef.current, {
          opacity: 0,
          y: 300,
        });


        // Timeline
        const tl = gsap.timeline({

          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          }

        });


        // HERO IMAGE
        tl.to(image, {

          x: x,
          y: y,

          width: end.width,
          height: end.height,
          ease: "none",

        })


          // HERO TEXT FADE OUT
          .to(heroTextRef.current, {
            opacity: 0,
            y: -100,
            ease: "none",
          }, "<")


          // ABOUT TEXT FADE IN
          .to(aboutTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.in",

          });


      });

    }, containerRef);


    return () => ctx.revert();

  }, []);

  return (

    <div ref={containerRef}>

      {/* HERO */}

      <section id="home"
         ref={heroSectionRef}
        className="relative w-full h-screen bg-[#eaeaea]"
      >

        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-screen -top-40 object-cover"
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>

        {/* Overlay */}

        <div className=" absolute inset-0 bg-linear-to-t from-[#eaeaea] to-[#eaeaeaaa] " />
        {/* Hero Content */}

        <div  className="  relative z-10  flex  flex-col items-center   justify-center h-full  " >
          <img ref={heroImageRef}
            src={myImage}
            alt="portfolio-img" className=" hero-image  w-60 h-70  object-cover rounded-2xl " />

          <h1 ref={heroTextRef} className="  text-5xl pt-4 font-bold sm:text-7xl sm:text-[#333333] sm:font-clash " >
            SYAMJITH
          </h1>

          <p ref={heroTextRef} className="text-2xl pt-4 font-clash">
            Web developer
          </p>
        </div>
      </section>


      {/* ABOUT */}

      <section id="about" className="bg-[#eaeaea] flex w-full min-h-screen justify-center items-center gap-10" >
        {/* LEFT */}
        <div ref={aboutTextRef}
          className=" w-[90%] md:w-[80%] lg:w-[40%]">

          <p className="font-gloria pb-4">
            /About Me
          </p>

          <h1
            className=" text-5xl font-general">
            <span className="text-[#E27500]">
              Creative
            </span>{" "}
            by Nature. Built with Code.
          </h1>

          <p className="text-[#6d6d6d] font-clashlight pt-3">
            Web developer. Full stack developer.
          </p>

          <p
            className=" text-[#6d6d6d] py-5 font-clashlight ">
            I'm a passionate web developer who builds
            modern, responsive websites using HTML, CSS,
            and JavaScript. I'm currently expanding my
            skills in backend development with Node.js
            and creating dynamic user interfaces using
            React.
          </p>

          <button
            className=" px-6 py-2 border-2 border-[#333333] rounded-full hover:bg-[#333333] hover:text-white
            transition-all duration-500 " >
            Copy email
          </button>

          <div className="flex gap-4 pt-5">

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-lg shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white transition-all duration-500 ">
              <FaLinkedin className="text-2xl" />
            </div>

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-lg shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white transition-all duration-500">
              <FaGithub className="text-2xl" />
            </div>

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-lg shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white transition-all duration-500">
              <FaInstagram className="text-2xl" />
            </div>

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-lg shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white transition-all duration-500">
              <FaWhatsapp className="text-2xl" />
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="hidden lg:flex" >
          <div id="about-image" ref={aboutImageRef}
            className=" w-80 h-100"
          ></div>
        </div>
      </section>


      {/* SKILLS */}

      <section id="services"
        className=" w-full h-auto bg-[#eaeaea] flex flex-col  items-center lg:h-screen" >
          <h1 className="font-gloria text-4xl pt-15 lg:pt-45 px-15 ">Our services for you</h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
        w-[90%] h-auto sm:w-[80%]
        lg:w-[80%] mt-15 mb-25 md:pmt-25">

          <div className="bg-white rounded-2xl flex flex-col -rotate-1 px-10 py-10
           h-auto shadow-lg">
            <h1 className="font-clash text-3xl font-semibold text-[#333333]">01. Landing page</h1>
            <p className="pt-5 text-[#6d6d6d]">I create modern, responsive landing pages designed to capture attention, 
              communicate your message clearly, and turn visitors into customers.</p>
          </div>

          <div className="bg-white rounded-2xl flex flex-col rotate-1 px-10 py-10
           h-auto shadow-lg">
            <h1 className="font-clashlight text-3xl font-semibold text-[#333333]">02. Portfolio website</h1>
            <p className="pt-5 text-[#6d6d6d]">I build unique portfolio websites that showcase your work, 
              skills, and personality through clean design, smooth interactions, and engaging user experiences.
            </p>
          </div>

          <div className="bg-white rounded-2xl flex flex-col -rotate-1 px-10 py-10
           h-auto shadow-lg">
            <h1 className="font-clash text-3xl font-semibold text-[#333333]">03. E-commerce</h1>
            <p className="pt-5 text-[#6d6d6d]">I develop modern e-commerce websites with intuitive 
              interfaces, product-focused layouts, and seamless experiences that make online shopping 
              simple and engaging.
            </p>
           </div>
        </div>

      </section>


      <NavBar />
      <BottomBlur />

    </div>
  );
};

export default Hero;