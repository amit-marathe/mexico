gsap.from("#name h1",{
    left: "45%",
    top: "40%", 
    duration: 1.4,
    delay: 2,
    scale: 5,
    ease: "none",
});

gsap.from("#name h1",{
    left: "45%",
    top: "60%", 
    opacity: 0,
    duration: 1,
    delay: 1,
    scale: 6,
    ease: "none",
});

gsap.from("#name h2",{
    y:-30,
    delay: 2,
    duration: 1.5,
    opacity: 0,
});

gsap.from("#nav",{
    y:-30,
    delay: 3.5,
    duration: 1.5,
    opacity: 0,
});

gsap.from("#icons",{
    y: -20,
    delay: 3.5,
    duration: 1.5,
    opacity: 0,
});

gsap.from("#center",{
    top: "60%",
    delay: 3.2,
    duration: 2,
    opacity: 0,
    // ease: "none",
});

gsap.to("#birds",{
    left: "140%",
    delay: .5,
    duration: 1.5,
    ease: "none",
});


gsap.from("#img img",{
    objectPosition: "center",
    delay: 1.1,
    duration: 1,
    scale: 2.5,    
    ease: "none",
});

gsap.to("#img img",{
    objectPosition: "center",
    delay: 3.2,
    duration: 2,
    scale: 2,
    ease: "none"
});
