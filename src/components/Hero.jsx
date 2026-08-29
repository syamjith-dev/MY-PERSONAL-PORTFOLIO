import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./NavBar";
import BottomBlur from "./BottomBlur";

// import heroVideo from "../assets/video/bg-white-hexagon-video.mp4";
import myImage from "../assets/images/myImage.webp";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaAsterisk,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import "./Hero.css";

import skills from "./data/SkillsData";
import projects from "./data/PortfolioData";
import FaqData from "./data/FaqData";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeId, setActiveId] = useState(null);

  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesHeadingRef = useRef(null);
  const faqRef = useRef(null);

  const handleFAQ = (id) => {
    setActiveId((currentId) => (currentId === id ? null : id));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /*
       * HERO → ABOUT IMAGE ANIMATION
       * Only enabled on desktop/tablet.
       */
      mm.add("(min-width: 640px)", () => {
        const image = heroImageRef.current;
        const aboutImage = aboutImageRef.current;

        if (!image || !aboutImage) return;

        const calculatePosition = () => {
          const start = image.getBoundingClientRect();
          const end = aboutImage.getBoundingClientRect();

          return {
            x:
              end.left +
              end.width / 2 -
              (start.left + start.width / 2),

            y:
              end.top +
              end.height / 2 -
              (start.top + start.height / 2),
          };
        };

        const { x, y } = calculatePosition();

        gsap.set(aboutTextRef.current, {
          opacity: 0,
          y: 300,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          image,
          {
            x,
            y,
            width: aboutImage.offsetWidth,
            height: aboutImage.offsetHeight,
            ease: "none",
          },
          0
        )
          .to(
            heroTextRef.current,
            {
              opacity: 0,
              y: -100,
              ease: "none",
            },
            0
          )
          .to(
            aboutTextRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.in",
            },
            0.3
          );

        return () => {
          tl.kill();
        };
      });

      /*
       * SERVICES
       */
      const serviceCards = servicesRef.current?.children;

      if (serviceCards?.length) {
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
      }

      /*
       * SERVICES HEADING
       */
      if (servicesHeadingRef.current) {
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
      }

      /*
       * FAQ
       */
      const faqItems = faqRef.current?.children;

      if (faqItems?.length) {
        gsap.from(faqItems, {
          opacity: 0,
          y: 100,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      return () => {
        mm.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ==================== HERO ==================== */}
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
          className="absolute inset-0 w-full h-screen  object-cover"
          poster="/images/portfolio-video-poster.webp"
        >
          <source src="/video/syamjith-portfolio-showreel.mp4" type="video/mp4" />
        </video>


        {/* Overlay */}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[#eaeaea] to-[#eaeaea90]"
        />

        {/* Hero Content */}

        <div className="relative z-10 flex flex-col items-center justify-center h-screen">
          <img
            ref={heroImageRef}
            src={myImage}
            alt="Syamjith - Freelance Web Developer"
            width="240"
            height="280"
            fetchPriority="high"
            decoding="async"
            className="hero-img hero-image w-60 h-70 object-cover rounded-2xl shadow-2xl"
          />

          <div ref={heroTextRef} className="flex flex-col items-center">
            <p
              className="text-4xl pt-4 font-bold sm:text-7xl sm:text-[#333333] sm:font-clash"
            >
              SYAMJITH
            </p>

            <h1
              id="hero-title"
              className="px-6 text-2xl pt-4 font-clash text-center"
            >
              Freelance Web Developer in Kannur, Kerala
            </h1>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}

      <section
        id="about"
        aria-labelledby="about-title"
        className="bg-[#eaeaea] flex w-full min-h-screen justify-center items-center gap-10"
      >
        {/* LEFT */}

        <div
          ref={aboutTextRef}
          className="w-[90%] md:w-[80%] lg:w-[40%]"
        >
          <p className="font-gloria pb-4">
            /About Me
          </p>

          <h2
            id="about-title"
            className="text-5xl font-general"
          >
            <span className="text-[#E27500]">
              Creative
            </span>{" "}
            by Nature. Built with Code.
          </h2>

          <p className="text-[#6d6d6d] font-clashlight pt-3">
            Web developer. Full stack developer.
          </p>

          <p className="text-[#6d6d6d] py-5 font-clashlight">
            I'm Syamjith, a freelance web developer based in Kannur, Kerala.
            I build modern, responsive websites and web applications for
            businesses, professionals and individuals.
          </p>

          <button
            type="button"
            aria-label="Copy email address"
            className="px-6 py-2 border-2 border-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-all duration-500"
          >
            Copy email
          </button>

          {/* Social Links */}

          <div className="flex gap-4 pt-5">
            <a
              href="" target="blank"
              aria-label="LinkedIn profile"
              className="social-icon flex justify-center items-center w-12 h-12 rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] hover:text-white hover:border-0 transition-all duration-500"
            >
              <FaLinkedin
                aria-hidden="true"
                className="text-2xl"
              />
            </a>

            <a
              href="https://github.com/syamjith-dev" target="blank"
              aria-label="GitHub profile"
              className="social-icon flex justify-center items-center w-12 h-12 rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] hover:text-white hover:border-0 transition-all duration-500"
            >
              <FaGithub
                aria-hidden="true"
                className="text-2xl"
              />
            </a>

            <a
              href="https://instagram.com/im_syam_jith" target="blank"
              aria-label="Instagram profile"
              className="social-icon flex justify-center items-center w-12 h-12 rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] hover:text-white hover:border-0 transition-all duration-500"
            >
              <FaInstagram
                aria-hidden="true"
                className="text-2xl"
              />
            </a>

            <a
              href="https://whatsapp.com/syamjith" target="blank"
              aria-label="WhatsApp"
              className="social-icon flex justify-center items-center w-12 h-12 rounded-2xl shadow-lg border-2 border-[#0000001d] hover:bg-[#E27500] hover:text-white hover:border-0 transition-all duration-500"
            >
              <FaWhatsapp
                aria-hidden="true"
                className="text-2xl"
              />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE TARGET */}

        <div className="hidden lg:flex">
          <div
            id="about-image"
            ref={aboutImageRef}
            className="w-80 h-100"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}

      <section
        id="services"
        aria-labelledby="services-title"
        className="w-full h-auto bg-[#eaeaea] flex flex-col items-center lg:h-screen"
      >
        <h2
          ref={servicesHeadingRef}
          id="services-title"
          className="font-gloria text-2xl pt-15 lg:pt-45 px-15 md:text-4xl"
        >
          Our services for you
        </h2>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] h-auto sm:w-[80%] lg:w-[80%] mt-15 mb-25 md:pmt-25"
        >
          {/* CARD 01 */}

          <article
            className="bg-white rounded-2xl flex flex-col px-10 py-10 -rotate-1 h-auto shadow-lg"
          >
            <h3 className="font-clash text-3xl font-semibold text-[#333333]">
              01. Landing page
            </h3>

            <p className="pt-5 text-[#6d6d6d]">
              I create modern, responsive landing pages designed to capture
              attention, communicate your message clearly, and turn visitors
              into customers.
            </p>
          </article>

          {/* CARD 02 */}

          <article
            className="bg-white rounded-2xl flex flex-col rotate-1 px-10 py-10 h-auto shadow-lg"
          >
            <h3 className="font-clashlight text-3xl font-semibold text-[#333333]">
              02. Portfolio website
            </h3>

            <p className="pt-5 text-[#6d6d6d]">
              I build unique portfolio websites that showcase your work,
              skills, and personality through clean design, smooth
              interactions, and engaging user experiences.
            </p>
          </article>

          {/* CARD 03 */}

          <article
            className="bg-white rounded-2xl flex flex-col -rotate-1 px-10 py-10 h-auto shadow-lg"
          >
            <h3 className="font-clash text-3xl font-semibold text-[#333333]">
              03. E-commerce
            </h3>

            <p className="pt-5 text-[#6d6d6d]">
              I develop modern e-commerce websites with intuitive interfaces,
              product-focused layouts, and seamless experiences that make
              online shopping simple and engaging.
            </p>
          </article>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}

      <section
        id="skill"
        aria-labelledby="skills-title"
        className="w-full min-h-screen bg-[#eaeaea] flex flex-col items-center py-20 px-4"
      >
        <h2
          id="skills-title"
          className="font-gloria text-4xl sm:text-3xl text-[#333333] mb-10"
        >
          Skills
        </h2>

        <ul
          className="w-full max-w-6xl bg-[#eaeaea] rounded-2xl px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <li
                key={skill.name}
                className="faq-item flex flex-col items-center justify-center gap-3 group cursor-pointer"
              >
                <Icon
                  aria-hidden="true"
                  className="text-5xl sm:text-6xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110"
                  style={{ color: skill.color }}
                />

                <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#333333] text-center">
                  {skill.name}
                </h3>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ==================== PORTFOLIO ==================== */}

      <section
        id="portfolio"
        aria-labelledby="portfolio-title"
        className="w-full min-h-screen bg-[#eaeaea] px-5 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="portfolio-title"
            className="font-gloria text-4xl sm:text-3xl mb-12"
          >
            /Selected Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width="1200"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <p className="text-sm text-[#E27500] font-medium">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-clash font-semibold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-[#6d6d6d] mt-3">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-[#eaeaea] rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="px-5 py-2 bg-[#333333] text-white rounded-full"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="px-5 py-2 border border-[#333333] rounded-full"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="w-full h-auto flex p-5 flex-col items-center bg-[#eaeaea]"
      >
        <p className="font-gloria">
          /Common questions and answers
        </p>

        <h2
          id="faq-title"
          className="font-clash text-4xl mt-5 font-semibold text-[#333333]"
        >
          Frequently Asked{" "}
          <span className="text-[#e27500]">
            Questions
          </span>
        </h2>

        <div
          ref={faqRef}
          className="w-full mt-5 lg:w-[80%]"
        >
          {FaqData.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <article
                key={faq.id}
                className="faqItems mt-4 py-3 px-6 border border-gray-400 rounded-2xl font-general shadow-md"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => handleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-5 text-left cursor-pointer"
                >
                  <h3 className="font-medium">
                    {faq.question}
                  </h3>

                  <span
                    aria-hidden="true"
                    className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                      }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-[#333333] leading-relaxed font-general">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="w-full h-auto bg-[#eaeaea] flex flex-col justify-around items-center text-center"
      >
        <h2 className="font-gloria lg:text-2xl mt-5">
          /Contact information
        </h2>

        <h3
          id="contact-title"
          className="font-clash text-4xl font-semibold mt-6 lg:text-5xl"
        >
          How can I help?
        </h3>

        <p className="text-[#6d6d6d] text-center font-clashlight">
          I would love to hear more about your project or company.
        </p>

        <div className="w-[90%] h-auto mt-10 md:h-[55vh] lg:w-[60%] lg:h-[50vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-">
          {/* FORM */}

          <div className="ml-2">
            <form
              action=""
              method="POST"
              className="flex flex-col"
            >
              <label
                htmlFor="full-name"
                className="font-general text-[#333333] text-left"
              >
                Your Full Name*
              </label>

              <input
                id="full-name"
                name="name"
                type="text"
                placeholder="Smith"
                autoComplete="name"
                required
                className="w-[96%] h-10 rounded-md pl-2 bg-white shadow-md mb-4"
              />

              <label
                htmlFor="email"
                className="font-general text-[#333333] text-left"
              >
                Your E-mail*
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="mail@gmail.com"
                autoComplete="email"
                required
                className="w-[96%] h-10 rounded-md pl-2 bg-white shadow-md mb-4"
              />

              <label
                htmlFor="message"
                className="font-general text-[#333333] text-left"
              >
                More Info*
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="What's this about?"
                required
                className="resize-none w-[96%] h-30 rounded-md p-2 bg-white shadow-md mb-4"
              />

              <button
                type="submit"
                className="bg-[#e27500] w-[96%] h-10 rounded-md text-white shadow-md cursor-pointer font-clash mb-5"
              >
                Submit
              </button>
            </form>
          </div>

          {/* CONTACT IMAGE */}

          <div className="flex justify-center">
            <div
              className="contact-img relative w-80 h-107 rounded-2xl"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-linear-to-t from-[#00000082] to-transparent rounded-2xl p-6">
                <p className="text-[#eaeaea] font-general mt-60">
                  If the work above fits what you need, send me a note.
                  Share the goal, a link, budget range, and when you want
                  to start. I’ll reply with the next step.
                </p>

                <p className="text-[#eaeaea] font-gloria mt-4">
                  Syamjith
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}

      <footer
        className="w-full h-[50vh] flex flex-col justify-center bg-[#eaeaea]"
      >
        <div className="w-full overflow-hidden whitespace-nowrap h-20">
          <div className="flex w-full animate-marquee text-4xl">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="flex items-center gap-2 font-clash mx-4 font-bold text-[#333333] lg:text-6xl"
                aria-hidden="true"
              >
                <FaAsterisk />
                Let's work together
                <FaAsterisk />
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-8">
          <p className="flex items-center gap-2 font-semibold font-clash">
            <FaPhone aria-hidden="true" />
            <span>+91 9447572837</span>
          </p>

          <p className="flex items-center gap-2 font-semibold font-clash">
            <FaEnvelope aria-hidden="true" />
            <span>syamjithLoq@mail.com</span>
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <p className="mx-5 font-medium font-general text-[13px]">
            2026
          </p>

          <p className="mx-5 font-medium font-general text-[13px]">
            All Rights Reserved
          </p>
        </div>
      </footer>

      <NavBar />
      <BottomBlur />
    </div>
  );
};

export default Hero;