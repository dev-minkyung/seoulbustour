/* Header */
const header = document.querySelector('.header')
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};


/* main-menu 토글버튼 */
const menuBtn = document.querySelector('.ic-main-menu');
const closeBtn = document.querySelector('.btn-close');
const mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function() {
  mainMenu.classList.add('active');
});
closeBtn.addEventListener('click', function() {
  mainMenu.classList.remove('active');
});


/* select */
const selectedAll = document.querySelectorAll('.selected');

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const optionsList = optionsContainer.querySelectorAll('.option');
  
  selected.addEventListener('click', function() {
    if (optionsContainer.classList.contains('active')) {
      optionsContainer.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-container.active');

      if (currentActive) {
        currentActive.classList.remove('active');
      }
      optionsContainer.classList.add('active');
    }
  });
  
  optionsList.forEach( o => {
    o.addEventListener('click', function() {
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
    });
  });
});


/* Select - 오늘 날짜 default 값으로 넣기 */
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = new Date().toISOString().slice(0, 10);


/* #seoul-sopt 탭메뉴 */
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContentEls = document.querySelectorAll('[data-tab-content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContentEls.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    target.classList.add('active');

    // 탭 버튼에 클래스 추가/제거
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
  });
});


/* #seoul-spot 슬라이드 */
new Swiper(".spot .swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 'auto',
  },
});

new Swiper(".notice .swiper", {
  direction: 'vertical',
  slidesPerView: 1,
  autoplay: true,
  loop: true
});

/* footer 올해 연도 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();