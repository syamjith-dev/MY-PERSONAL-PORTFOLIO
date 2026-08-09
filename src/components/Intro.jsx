import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Intro = ({ onComplete }) => {

  const introRef = useRef(null);

  const helloLettersRef = useRef([]);
  const welcomeLettersRef = useRef([]);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
        },
      });

      // Initial state
      gsap.set(
        [
          ...helloLettersRef.current,
          ...welcomeLettersRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      // HELLO letters
      tl.to(helloLettersRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.12,
        ease: "power2.out",
      })

      // WELCOME letters
      .to(welcomeLettersRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.12,
        ease: "power2.out",
      }, "-=0.1")

      // Hold
      .to({}, {
        duration: 1,
      })

      // Exit intro
      .to(introRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });

    }, introRef);

    return () => ctx.revert();

  }, [onComplete]);


  const hello = "HELLO";
  const welcome = "WELCOME";


  return (

    <div
      ref={introRef}
      className="
        fixed
        inset-0
        z-9999
        bg-black
        text-white
        flex
        items-center
        justify-center
      "
    >

      <div className="text-center">

        {/* HELLO */}

        <h1
          className="
            text-5xl
            sm:text-7xl
            md:text-8xl
            font-bold
            tracking-tight
            flex
            justify-center
            font-gloria
          "
        >

          {hello.split("").map((letter, index) => (

            <span
              key={index}
              ref={(el) => {
                helloLettersRef.current[index] = el;
              }}
              className="inline-block"
            >
              {letter}
            </span>

          ))}

        </h1>


        {/* WELCOME */}

        <h2
          className="
            text-2xl
            sm:text-4xl
            md:text-5xl
            font-medium
            tracking-wide
            flex
            justify-center
            font-gloria
          "
        >

          {welcome.split("").map((letter, index) => (

            <span
              key={index}
              ref={(el) => {
                welcomeLettersRef.current[index] = el;
              }}
              className="inline-block"
            >
              {letter}
            </span>

          ))}

        </h2>

      </div>

    </div>
  );
};

export default Intro;