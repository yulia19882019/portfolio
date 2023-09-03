const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

// Второй слайдер

const slider2 = document.querySelector('.slider2');
const prevButton2 = document.querySelector('.prev-button2');
const nextButton2 = document.querySelector('.next-button2');
const slides2 = Array.from(slider2.querySelectorAll('img'));
const slide2Count = slides2.length;
let slide2Index = 0;

// Устанавливаем обработчики событий для кнопок
prevButton2.addEventListener('click', showPreviousSlide2);
nextButton2.addEventListener('click', showNextSlide2);

// Функция для показа предыдущего слайда
function showPreviousSlide2() {
  slide2Index = (slide2Index - 1 + slide2Count) % slide2Count;
  updateSlider2();
}

// Функция для показа следующего слайда
function showNextSlide2() {
  slide2Index = (slide2Index + 1) % slide2Count;
  updateSlider2();
}

// Функция для обновления отображения слайдера
function updateSlider2() {
  slides2.forEach((slide2, index) => {
    if (index === slide2Index) {
      slide2.style.display = 'block';
    } else {
      slide2.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider2();