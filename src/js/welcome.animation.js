import { gsap } from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const fadeFromBottom = (element, delay = 0) => {
    gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: delay,
        ease: "power2.out"
    })
}