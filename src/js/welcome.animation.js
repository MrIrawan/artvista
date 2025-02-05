import { gsap } from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const timeLine = gsap.timeline();

timeLine.from('.home-item h1', {y: 20, opacity: 0, duration: 1})
        .from('.home-item h2', {y: 20, opacity: 0, duration: 1}, '+=0.2')
        .from('.home-cta a', {y: 20, opacity: 0, duration: 1}, '+=0.4')
        .from('.home-item:nth-child(2)', {y: 20, opacity: 0, duration: 1}, '+=0.6')


