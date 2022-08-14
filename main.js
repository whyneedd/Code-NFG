

var tl;

tl = gsap.timeline({ defauts: {ease: "power1.out"}});

tl.to(".logo a", { duration: .5, opacity: 1, y: "0%", stagger: .25,})
tl.to(".nav__link", { duration: .5, opacity: 1, y: "0%", stagger: .25,})
tl.to(".home__data", { duration: .5, opacity: 1, x: "0%", stagger: .25,})
tl.to(".home__img", { duration: .5, opacity: 1, x: "0%", stagger: .25,})
tl.to(".home__btn", { duration: .5, opacity: 1, y: "0%", stagger: .25,})