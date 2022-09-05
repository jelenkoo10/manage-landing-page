gsap.from(".intro-item", {duration: 1, y: -50, opacity: 0, stagger: 0.5})

if (window.innerWidth > 1100) {
    gsap.from(".header-illustration", {duration: 1, delay: 1.25, x: 200, opacity: 0})
    gsap.from(".reviews article", {duration: 2, x: -75, stagger: 0.5})
}