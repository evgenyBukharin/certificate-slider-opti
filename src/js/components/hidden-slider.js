import Swiper from "swiper";

// создаем слайдер на странице в body
const body = document.querySelector("body");
const newBodyChild = document.createElement("div");
newBodyChild.classList = "hero__container-slider";

const newBodyChildInnerHtml = `
	<div class="swiper hero__slider">
		<div class="swiper-wrapper hero__wrapper">
		</div>
	</div>
	<button class="btn-reset hero__button-close" id="closeSliderButton">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns:svgjs="http://svgjs.com/svgjs"
			width="512"
			height="512"
			x="0"
			y="0"
			viewBox="0 0 512 512"
			style="enable-background: new 0 0 512 512"
			xml:space="preserve"
		>
			<g>
				<g data-name="02 User">
					<path
						d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
						fill="#000000"
						data-original="#000000"
					></path>
					<path
						d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
						fill="#000000"
						data-original="#000000"
					></path>
				</g>
			</g>
		</svg>
	</button>
`;

newBodyChild.innerHTML = newBodyChildInnerHtml;
body.insertAdjacentElement("beforeend", newBodyChild);

const slideImageHtml = `
	<img
		loading="lazy"
		src=""
		class="image hero__image-slider"
		width="482"
		height="678"
		alt="Сертификат большой"
	/>
`;

const sliderWrapper = document.querySelector(".hero__slider .hero__wrapper");
const imagesData = JSON.parse(document.getElementById("imgPath").innerHTML);
imagesData.forEach((el) => {
	const newSlide = document.createElement("div");
	newSlide.classList = "swiper-slide hero__slide";
	newSlide.innerHTML = slideImageHtml;
	newSlide.querySelector(".hero__image-slider").setAttribute("src", el);
	sliderWrapper.appendChild(newSlide);
});

// создаем слайдер и функционал его появления
const openSliderButtons = document.querySelectorAll(".open-slider-elem");
const sliderContainer = document.querySelector(".hero__container-slider");
const slider = document.querySelector(".hero__slider");
openSliderButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		sliderContainer.classList.add("hero__container-slider-visible");
		disableScroll();
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
	enableScroll();
});

const closeSliderButton = document.getElementById("closeSliderButton");
closeSliderButton.addEventListener("click", () => {
	sliderContainer.classList.remove("hero__container-slider-visible");
	enableScroll();
});

function disableScroll() {
	let prevWidth = body.offsetWidth;
	body.style.overflowY = "hidden";
	let newWidth = body.offsetWidth;
	body.style.paddingRight = `${newWidth - prevWidth}px`;
}

function enableScroll() {
	body.style.overflowY = "unset";
	body.style.paddingRight = "unset";
}
