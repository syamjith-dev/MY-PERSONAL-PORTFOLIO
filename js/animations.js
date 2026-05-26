
gsap.registerPlugin(ScrollTrigger);

/* =========================================
   PAGE LOAD ANIMATIONS
========================================= */

const tl = gsap.timeline();
/*=================
    nav and hero section
    ===================*/
gsap.from(".logo", {
    y: -200,
    opacity: 0,
    duration: .5,
    ease: "bounce"
});
gsap.from("li", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: .8,
    ease: "bounce",
    delay: 0.5
});
gsap.to(".hero", {
    opacity: 1,
    rotate: 360,
    scale: 1,
    duration: 1.5,
    ease: "bounce",
    delay: 1.5
});
gsap.from(".hero", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
     
})
gsap.from(".header-text h1", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: .8,
    ease: "bounce",
    delay: 2
});
gsap.from(".header-text p", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: .8,
    ease: "bounce",
    delay: 2.2,
});

gsap.from(".social-media  i", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: .4,
    delay: 2.5,
    ease: "bounce",
  
});
gsap.from(".cta-btn", {
    y: 200,
    opacity: 0,
    duration: 2,
    ease: "bounce"
});
const ctaBtn = document.querySelector(".cta-btn");

ctaBtn.addEventListener("mouseenter",()=>{

    gsap.to(ctaBtn,{

        scale: 1.08,
        y: -5,

        duration: 0.3,
        ease: "power3.out",

        boxShadow: "0px 15px 30px rgba(0, 85, 255, 0.76)"

    });

});

ctaBtn.addEventListener("mouseleave",()=>{

    gsap.to(ctaBtn,{

        scale: 1,
        y: 0,

        duration: 0.3,
        ease: "power3.out",

        boxShadow: "0px 0px 0px rgba(0,0,0,0)"

    });

});




/*================
     about-section 
     =================*/
gsap.from(".about-col-1", {

    x: -200,
    opacity: 0,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }

});
gsap.from(".about-col-2", {

    x: 200,
    opacity: 0,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }

});
gsap.from(".sub-tittle", {

    y: 100,
    opacity: 0,
    delay: .5,

    scrollTrigger: {
        trigger: ".sub-tittle",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }

});
gsap.from(".about-para", {

    x: 400,
    opacity: 0,
    yoyo: true,
    delay: 1,

    scrollTrigger: {
        trigger: ".about-para",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }

});
gsap.from(".tab-tittles", {

    x: 400,
    opacity: 0,
    ease: "bounce",
    yoyo: true,
    delay: 2,

    scrollTrigger: {
        trigger: ".tab-tittles",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }

});
/*=========
    services
    ==========*/

gsap.from(".sub-tittle-service", {
    y: -200,
    opacity: 0,
    duration: .5,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".sub-tittle-service",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".card",{
    x: 200,
    opacity: 0,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }

});
/*=================
     projects
     =================*/
gsap.from(".sub-tittle-projects", {
    y: -200,
    opacity: 0,
    duration: .5,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".sub-tittle-projects",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".work", {
    y: -200,
    opacity: 0,
    duration: .5,
    ease: "bounce",


    scrollTrigger: {
        trigger: ".work",
        start: "top 80%",
        
    }
});
/*=================
     contact
     =================*/
gsap.from(".contact-left", {
    y: -200,
    opacity: 0,
    duration: .5,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".contact-left",
        start: "top 50%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".contact-right", {
    x: 100,
    opacity: 0,
    duration: .5,
    ease: "bounce",

    scrollTrigger: {
        trigger: ".contact-right",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});

/* =========================================
   SCROLL PROGRESS BAR
========================================= */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.width = "0%";
progressBar.style.height = "4px";
progressBar.style.background = "#009dff";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";


    

});


