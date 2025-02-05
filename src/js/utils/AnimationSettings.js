import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fadeToDirection = (element, delay = 0, direction = 'y', value = 50) => {
    gsap.from(element, {
        opacity: 0,
        [direction]: value,
        duration: 1,
        delay: delay,
        ease: "power2.out"
    });
};

const triggerAnimation = (element, direction = 'y', value = 50, stack = 0, duration = 1) => {
    gsap.from(element, {
        opacity: 0,
        [direction]: value,
        duration: duration,
        ease: "power2.out",
        stagger: stack,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
    }
});

}

export { fadeToDirection, triggerAnimation };