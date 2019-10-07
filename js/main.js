(function () {
  const teamsSlider = new Swiper('.teams', {
    slidesPerView: 10,
    slidesPerGroup: 5,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.teams__btn_next',
      prevEl: '.teams__btn_prev',
    },
    autoplay: {
      delay: 3000
    }
  })
}());