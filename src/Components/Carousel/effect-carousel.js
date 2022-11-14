 function CarouselSlider({ swiper, on }) {
  on('beforeInit', () => {
    if (swiper.params.effect !== 'carousel') return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);
    swiper.classNames.push(swiper.params.slideActiveClass);
  });
  on('progress', () => {
    if (swiper.params.effect !== 'carousel') return;
    const scaleStep = 0.1;
    const zIndexMax = swiper.slides.length;
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const slideProgress = swiper.slides[i].progress;
      const absProgress = Math.abs(slideProgress);
      let modify = 1;
      if (absProgress > 1) {
        modify = (absProgress - 1) * 0.3 + 1;
      }
      const opacityEls = slideEl.querySelectorAll(
        '.swiper-carousel-animate-opacity',
      );
      // console.log(modify, "modify");
      const translate = `${slideProgress * (modify - 1.3 ) * 30}%`;
      const scale = 1 - absProgress * scaleStep;
      const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
      slideEl.style.transform = `translateX(${translate}) scale(${scale})`;

      slideEl.style.zIndex = zIndex;
      if (absProgress > 2) {
        slideEl.style.opacity = 0;
      } else {
        slideEl.style.opacity = 1;
      }

      opacityEls.forEach((opacityEl) => {
        opacityEl.style.opacity = 1 - absProgress / 2;
      });
    }
  });

  on('setTransition', (s, duration) => {
    if (swiper.params.effect !== 'carousel') return;
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const opacityEls = slideEl.querySelectorAll(
        '.swiper-carousel-animate-opacity',
      );
      slideEl.style.transitionDuration = `${duration}ms`;
      opacityEls.forEach((opacityEl) => {
        opacityEl.style.transitionDuration = `${duration}ms`;
      });
    }
  });
}


export default CarouselSlider;