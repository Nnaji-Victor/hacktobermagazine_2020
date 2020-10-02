import gsap from "gsap"
import { left } from "inquirer/lib/utils/readline";

export const AnimateLogo = (elem) => {
    gsap.fromTo(elem, {
        yPercent: -100,
        autoAlpha: 0,
    }, {
        yPercent: 0,
        autoAlpha: 1,
        ease: "power2.inOut",
        duration: 1.5,
    })
}

export const AnimateImages = (item, inner, image, title, subtitle) => {
    const tl = gsap.timeline();

    tl.set(image, {
        // xPercent: -100
      })
      .set(item, {
        // xPercent: 100
      })
      .set(title, {
        // yPercent: -100
      })
      .addLabel("imageStart")

     .fromTo(image, {
        xPercent: -100,
        autoAlpha: 0,
        transformOrigin: 'left',
    }, {
        autoAlpha: 1,
        xPercent: 0,
        ease: "expo.inOut",
        duration: 1.25,
        stagger: 0.05,

    }, "imageStart")
    .fromTo(inner, {
        xPercent: 100,
        autoAlpha: 0
    }, {
        xPercent: 0,
        ease: "expo.inOut",
        duration: 1.25,
        stagger: 0.05,
        autoAlpha: 1,
    }, "imageStart")
    .fromTo([title, subtitle], {
        yPercent: 100,
        autoAlpha: 0
    }, {
        duration: 1.5,
        yPercent: 0,
        ease: "expo.inOut",
        stagger: 0.05,
        autoAlpha: 1
    }, "imageStart")
    .fromTo(item, {autoAlpha: 0, scaleX: 0}, 
        { autoAlpha: 1, scaleX: 1, ease: "ease.in", duration: 0.5}, "imageStart+=0.5")
}