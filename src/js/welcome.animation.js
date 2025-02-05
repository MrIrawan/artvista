import { gsap } from 'gsap';
import { fadeToDirection, triggerAnimation } from "./utils/AnimationSettings";


fadeToDirection(
    '.home-item h1', .5, 'y', 40
);

fadeToDirection(
    '.home-item h2', 1, 'y', 30
)

fadeToDirection(
    '.home-cta a:nth-child(1)', 1.5, 'x', -30
)

fadeToDirection(
    '.home-cta a:nth-child(2)', 1.5, 'x', 30
)

fadeToDirection(
    '.home-item h3', 1.5, 'y', -30
)

fadeToDirection(
    '.home-item:nth-child(2)', 2, 'y', 30
)

triggerAnimation(
    '.about-item', 'y', 40, 0, .8
)

triggerAnimation(
    '.about-flex-item', 'x', -30, .5, .8
)

triggerAnimation(
    '.try-feature', 'y', 30, 0, 1
)

triggerAnimation(
    '.item-content', 'x', 30, .5, 1
)