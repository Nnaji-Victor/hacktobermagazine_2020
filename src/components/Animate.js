import gsap from "gsap";

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

export const AnimateMouseEnter = (type, el, domLetters) => {
    const bg = el.querySelector(".grid__item-bg");

    gsap.to(bg, {
        duration: 1,
        ease: "expo.out",
		scale: type === 'mouseenter' ? 1.15 : 1
    })

    Array.from(domLetters).forEach((letter, pos) => {
        gsap.to(letter, {
            duration: .2,
            ease: "ease.in",
            delay: pos * .1,
            y: type === 'mouseenter' ? '-50%' : '50%',
            opacity: 0,
            onComplete: () => {
                gsap.to(letter, {
                    duration: type === 'mouseenter' ? 0.6 : 1,
                    ease: type === 'mouseenter' ? "expo.out" : "elastic.out(1, 0.4)",
                    startAt: {y: type === 'mouseenter' ? '70%' : '-70%', opacity: 0},
                    y: '0%',
                    opacity: 1
                })
            }
        })
    })
}

