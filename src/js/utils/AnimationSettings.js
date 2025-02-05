import { gsap } from 'gsap';

const fadeToDirection = (element, delay = 0, direction = 'y', value = 50) => {
    gsap.from(element, {
        opacity: 0,
        [direction]: value,
        duration: 1,
        delay: delay,
        ease: "power2.out"
    });
};

export { fadeToDirection };