const wrapper = document.querySelectorAll('.wrapper');

wrapper.forEach(wrapper => {
  const button = wrapper.querySelector(".dropdown-open");
  const content = wrapper.querySelector(".dropdown-content");
  const dropdownSvgOpen = wrapper.querySelector(".dropdown-svg-open");
  const dropdownSvgClose = wrapper.querySelector(".dropdown-svg-close");


  button.addEventListener('click', ()=>{
    content.classList.toggle('active');
    content.style.pointerEvents = 'auto';
    dropdownSvgClose.classList.toggle('svg-close');
    dropdownSvgOpen.classList.toggle('svg-close')
  })
})

// const search = document.querySelectorAll('.container-search-text');
// search.forEach(search =>{
//   const searchIcon = search.querySelector('.search-text-icon');
  
//   searchIcon.addEventListener('click', ()=> {
    
//   })
// });

const headerIcon = document.querySelector('.header-icon');
const searchContainer = document.querySelector('.container-search-text');
const searchOpen = document.querySelector('.search-icon');
const headerLike = document.querySelector('.header_like-icon');
const headerBasket = document.querySelector('.header_basket-icon');

searchOpen.addEventListener('click', ()=>{
  searchOpen.style.display = 'none';
  headerLike.style.display = 'none';
  headerBasket.style.display = 'none';
  searchContainer.classList.remove('search-hidden');
  
});

const swiper = new Swiper('.categories_swiper', {
navigation: {
  nextEl: '.categories-next',
  prevEl: '.categories-prev',
},
slidesPerView: 4,
loop: true,
onlyInViewport: true,
grabCursor: true,
spaceBeetwen: 15,


breakpoints: {
  // mobile + tablet - 320-990
  240: {
    slidesPerView: 1,
    spaceBeetwen: 0
  },
  400: {
    slidesPerView: 2,
    spaceBeetwen: 0
  },
  650: {
    slidesPerView: 3,
    spaceBeetwen: 10,
  },
  // desktop >= 991
  991: {
    slidesPerView: 4,
    spaceBeetwen: 10,
  }
}
});




const navMobil = document.querySelectorAll('.footer-nav-mobil');

navMobil.forEach(nav => {
  const footerTitle = nav.querySelector(".footer-mobil__title");
  const footerContent = nav.querySelector('.footer-mobil__content');
  const svgOpen = nav.querySelector('.dropdown-svg-open');
  const svgClose = nav.querySelector('.svg-close');


  footerTitle.addEventListener('click', () => {
    footerContent.classList.toggle('delete');
    svgOpen.classList.toggle('svg-close');
    svgClose.classList.toggle('svg-close');
    footerTitle.classList.toggle('footer-title__border');
  });
});


const openMenu = document.querySelector('.open-menu');


openMenu.addEventListener('click', () => {
  const openMenuContainer = document.querySelector('.open-menu-container');
  const closeMenu = openMenuContainer.querySelector('.close-menu');

  openMenuContainer.classList.remove('delete');

  closeMenu.addEventListener('click', () => {
    openMenuContainer.classList.add('delete');
  })

})

const catalog = document.querySelectorAll('.catalog-main__product-container');

catalog.forEach(catalog =>{
const catalogOpen = catalog.querySelector('.catalog-mobil');
const catalogContent = catalog.querySelector('.catalog-mobil__content');
const svgOpen = catalog.querySelector('.dropdown-svg-open');
const svgClose = catalog.querySelector('.dropdown-svg-close');

catalogOpen.addEventListener('click', ()=>{
  catalogContent.classList.toggle('delete');
  svgOpen.classList.toggle('svg-close');
  svgClose.classList.toggle('svg-close');
})

})


const criteria = document.querySelectorAll('.criteria-mobil__container');

criteria.forEach(criteria =>{
  openContent = criteria.querySelector('.criteria-mobil');
  criteriaContent = criteria.querySelector('.criteria-mobil__content');
  const svgOpen = criteria.querySelector('.dropdown-svg-open');
  const svgClose = criteria.querySelector('.dropdown-svg-close');

  openContent.addEventListener('click', ()=>{
    criteriaContent.classList.toggle('delete');
    svgOpen.classList.toggle('svg-close');
    svgClose.classList.toggle('svg-close');
  });


})