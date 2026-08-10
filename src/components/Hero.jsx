import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./NavBar";
import BottomBlur from "./BottomBlur";

import heroVideo from "../assets/video/bg-white-hexagon-video.mp4";
import myImage from "../assets/images/myImage.webp";

import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaAsterisk, FaPhone, FaEnvelope } from "react-icons/fa";

import "./Hero.css";

import skills from "./data/SkillsData";
import projects from './data/PortfolioData'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesHeadingRef = useRef(null);

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

          })



      });

      // services animation 
      const serviceCards = servicesRef.current.children;

      gsap.set(serviceCards, {
        opacity: 0,
        y: 120,
        rotate: 5,
        scale: 0.9,
      });

      gsap.to(serviceCards, {

        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",

        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
          invalidateOnRefresh: true,
        },

      });

      // services heading
      gsap.set(servicesHeadingRef.current, {
        opacity: 0,
        y: 200,
        scale: 0.95,
      });

      gsap.to(servicesHeadingRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: servicesHeadingRef.current,
          start: "top 80%",
          end: "top 45%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
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

        <div className=" absolute inset-0 bg-linear-to-t from-[#eaeaea] to-[#eaeaea75] " />
        {/* Hero Content */}

        <div className="  relative z-10  flex  flex-col items-center   justify-center h-full  " >
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
            rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white hover:border-0 transition-all duration-500 ">
              <FaLinkedin className="text-2xl" />
            </div>

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white hover:border-0 transition-all duration-500">
              <FaGithub className="text-2xl" />
            </div>

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white hover:border-0 transition-all duration-500">
              <FaInstagram className="text-2xl" />
            </div>

            <div className="social-icon flex justify-center items-center  w-12 h-12
            rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] 
            hover:text-white hover:border-0 transition-all duration-500">
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


      {/* services */}

      <section id="services"
        className=" w-full h-auto bg-[#eaeaea] flex flex-col  items-center lg:h-screen" >
        <h1 ref={servicesHeadingRef}
          className="font-gloria text-4xl pt-15 lg:pt-45 px-15 ">Our services for you</h1>

        <div ref={servicesRef} className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
        w-[90%] h-auto sm:w-[80%]
        lg:w-[80%] mt-15 mb-25 md:pmt-25">

          {/* cards */}
          <div ref={servicesRef} className="bg-white rounded-2xl flex flex-col px-10 py-10 -rotate-1
           h-auto shadow-lg ">
            <h1 className="font-clash text-3xl font-semibold text-[#333333]">01. Landing page</h1>
            <p className="pt-5 text-[#6d6d6d]">I create modern, responsive landing pages designed to capture attention,
              communicate your message clearly, and turn visitors into customers.</p>
          </div>

          <div ref={servicesRef} className="bg-white rounded-2xl flex flex-col rotate-1 px-10 py-10
           h-auto shadow-lg">
            <h1 className="font-clashlight text-3xl font-semibold text-[#333333]">02. Portfolio website</h1>
            <p className="pt-5 text-[#6d6d6d]">I build unique portfolio websites that showcase your work,
              skills, and personality through clean design, smooth interactions, and engaging user experiences.
            </p>
          </div>

          <div ref={servicesRef} className="bg-white rounded-2xl flex flex-col -rotate-1 px-10 py-10
           h-auto shadow-lg">
            <h1 className="font-clash text-3xl font-semibold text-[#333333]">03. E-commerce</h1>
            <p className="pt-5 text-[#6d6d6d]">I develop modern e-commerce websites with intuitive
              interfaces, product-focused layouts, and seamless experiences that make online shopping
              simple and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* skill section */}
      <section
        id="skill"
        className="  w-full  min-h-screen bg-[#eaeaea]  flex  flex-col  items-center  py-20   px-4  "  >

        {/* Heading */}

        <h1
          className="  font-gloria text-4xl sm:text-5xl text-[#333333]  mb-10  " >
          Skills
        </h1>
        {/* Skills Container */}

        <div
          className=" w-full  max-w-6xl bg-[#eaeaea]   rounded-2xl  px-6 py-10 sm:px-10  sm:py-12 md:px-14  md:py-14 grid  
        grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 gap-y-12  gap-x-6  " >

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <div
                key={skill.name}
                className=" flex flex-col items-center  justify-center  gap-3  group  cursor-pointer 
               " >

                {/* Icon */}

                <Icon
                  className="    text-5xl sm:text-6xl transition-all
                  duration-300  group-hover:-translate-y-2  group-hover:scale-110"
                  style={{ color: skill.color, }} />

                {/* Name */}
                <h2
                  className=" text-sm  sm:text-base  md:text-lg font-medium  text-[#333333] text-center">
                  {skill.name}
                </h2>

              </div>

            );

          })}

        </div>
      </section>
      {/* portfolio projects section  */}
      <section id="portfolio" className="w-full min-h-screen bg-[#eaeaea] px-5 py-20">
        <div className="max-w-6xl mx-auto">

          <h1 className="font-gloria text-4xl sm:text-5xl mb-12">
            Selected Work
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">

                <img src={project.image} alt={project.title} className="w-full h-72 object-fit" />

                <div className="p-6">

                  <p className="text-sm text-[#E27500] font-medium">
                    {project.category}
                  </p>

                  <h2 className="text-3xl font-clash font-semibold mt-2">
                    {project.title}
                  </h2>

                  <p className="text-[#6d6d6d] mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#eaeaea] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-5 py-2 bg-[#333333] text-white rounded-full">
                      Live Demo
                    </a>

                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-5 py-2 border border-[#333333] rounded-full">
                      GitHub
                    </a>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* contact section */}
      <section id="contact" className="w-full h-auto bg-[#eaeaea] flex flex-col justify-around items-center text-cente">
        <h1 className="font-gloria lg:text-2xl">/Contact information</h1>
        <h1 className="font-clash text-4xl font-semibold mt-6 lg:text-5xl">How can I help?</h1>
        <p className="text-[#6d6d6d] text-center font-clashligt">I would love to hear more about your project or company.</p>

        <div className=" w-[90%] h-auto mt-10 md:h-[55vh] lg:w-[80%] lg:h-[55vh]
            grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 mb-">

          <div className="">
            <form action="" className="flex flex-col pl-[5%] gap-4 ">

              <label className="font-general text-[#333333]">Your Full Name*</label>
              <input type="text" placeholder="Smith"
                className="w-[90%] h-10 rounded-md pl-2 bg-white shadow-md " />

              <label className="font-general text-[#333333]">Your E-mail*</label>
              <input type="email" placeholder="mail@gmail.com"
                className="w-[90%] h-10 rounded-md pl-2 bg-white shadow-md" />

              <label className="font-general text-[#333333]">More Info*</label>
              <textarea type="email" placeholder="What's this about?"
                className="resize-none w-[90%] h-30 rounded-md p-2 bg-white shadow-md " />

              <button type="submit"
                className="bg-[#e27500] w-[90%] h-10 rounded-md text-white shadow-md cursor-pointer
                  font-clash mb-5">Submit</button>

            </form>
          </div>
          <div className=" flex justify-center">
            <div className="contact-img relative w-80 h-107 rounded-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-[#00000082] to-transparent rounded-2xl p-6">
                <p className="text-[#eaeaea] font-general mt-60">If the work above fits what you need, send me a note. Share the goal, a link,
                  budget range, and when you want to start. I’ll reply with the next step.</p>
                <p className="text-[#eaeaea] font-gloria mt-4">Syamjith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end footer section */}
      <section className="w-full h-[50vh] flex flex-col justify-center bg-[#eaeaea]">
        <div class="w-full overflow-hidden whitespace-nowrap h-20">
          <div class="flex w-full animate-marquee text-4xl " >
            <span class="flex items-center gap-2 font-clash mx-4 font-bold text-[#333333]
            lg:text-6xl">
              <FaAsterisk /> Let's work together <FaAsterisk /> </span>
            <span class="flex items-center gap-2 font-clash mx-4 font-bold text-[#333333]
            lg:text-6xl">
              <FaAsterisk /> Let's work together <FaAsterisk /> </span>
            <span class="flex items-center gap-2 font-clash mx-4 font-bold text-[#333333]
            lg:text-6xl">
              <FaAsterisk /> Let's work together <FaAsterisk /> </span>
            <span class="flex items-center gap-2 font-clash mx-4 font-bold text-[#333333]
            lg:text-6xl">
              <FaAsterisk /> Let's work together <FaAsterisk /> </span>
            <span class="flex items-center gap-2 font-clash mx-4 font-bold text-[#333333]
            lg:text-6xl">
              <FaAsterisk /> Let's work together <FaAsterisk /> </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-8">
          <p className="flex items-center gap-2 font-semibold font-clash"><FaPhone />+91 9447572837</p>
          <p className="flex items-center gap-2 font-semibold font-clash"><FaEnvelope />syamjithLoq@mail.com</p>
        </div>
        <div className="flex justify-between mt-8 h-30 ">
          <p className="mx-5 font-medium font-general text-[13px]">2026</p>
          <p className="mx-5 font-medium font-general text-[13px]">All Rights Reserved</p>
        </div>
      </section>

      <NavBar />
      <BottomBlur/>

    </div>
  );
};

export default Hero;