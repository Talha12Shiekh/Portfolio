var swiper = new Swiper(".mySwiper", {
    slidesPerView: window.innerWidth > 800 ? 2 : 1,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".upper_arrow",
      prevEl: ".lower_arrow",
    },
  });