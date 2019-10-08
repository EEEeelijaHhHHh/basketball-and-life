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

(function () {
  const navBtn = document.querySelector('.nav-menu-hamburger');
  const navDropdown = document.querySelector('.nav-dropdown');
  const hoverItems = document.querySelectorAll('.hover');

  navBtn.addEventListener('click', () => {
    navDropdown.classList.toggle('nav-dropdown_active');
    navBtn.classList.toggle('nav-menu-hamburger_active');
    hoverItems.forEach(item => item.classList.toggle('hover_active'));
  })
}());