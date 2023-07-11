import Swiper from "swiper";

const openSliderButtons = document.querySelectorAll(".open-slider-elem");
const sliderContainer = document.querySelector(".hero__container-slider");
const slider = document.querySelector(".hero__slider");
openSliderButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		sliderContainer.classList.add("hero__container-slider-visible");
	});
});

const swiper = new Swiper(slider, {
	speed: 400,
	centeredSlides: true,
	slideToClickedSlide: true,
	spaceBetween: 40,
	breakpoints: {
		769: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 1,
		},
	},
});

slider.addEventListener("click", (e) => {
	e.stopPropagation();
});

sliderContainer.addEventListener("click", () => {
	sliderContainer.classList.remove("hero__container-slider-visible");
});

const closeSliderButton = document.getElementById("closeSliderButton");
closeSliderButton.addEventListener("click", () => {
	sliderContainer.classList.remove("hero__container-slider-visible");
});
