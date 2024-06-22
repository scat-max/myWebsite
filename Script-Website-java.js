document.addEventListener("DOMContentLoaded", function () {
	function scrollToTarget(targetId) {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth"
			});
		}
	}
	const motivationSection = document.getElementById("motivation-section");
	const servicesSection = document.getElementById("services-section");
	const aboutSection = document.getElementById("about-section");
	const images = document.querySelectorAll(".imagesbs img");
	const imgService = document.querySelectorAll(".servicesImg img");
	const txtAbout = document.querySelector(".container-about p.about-section");
	const imgAbout = document.querySelector(".container-about .image-about");

	function handleScroll() {
		const rect = motivationSection.getBoundingClientRect();
		const rect1 = servicesSection.getBoundingClientRect();
		const rect2 = aboutSection.getBoundingClientRect();
		if (rect.top < window.innerHeight / 2 && !motivationSection.classList.contains("animated")) {
			motivationSection.classList.add("animated");
			animateImages();
		}
		if (rect1.top < window.innerHeight / 2 && !servicesSection.classList.contains("animated")) {
			servicesSection.classList.add("animated");
			animateImages1();
		}
		if (rect2.top < window.innerHeight / 2 && !aboutSection.classList.contains("animated")) {
			aboutSection.classList.add("animated");
			animateTxt();
			animateImgAbout()
		}
	}

	function animateImages() {
		images.forEach((element, index) => {
			setTimeout(() => {
				element.classList.add("show");
			}, index * 800);
		});
	}
	function animateImages1() {
		imgService.forEach((element, index) => {
			setTimeout(() => {
				element.classList.add("show");
			});
		});
	}
	function animateTxt() {
		setTimeout(() => {
			txtAbout.classList.add("show");
		});
	}
	function animateImgAbout() {
		setTimeout(() => {
			imgAbout.classList.add("show");
		});
	}


	window.addEventListener("scroll", handleScroll);
	window.addEventListener('touchmove', handleScroll);

	const homelink = document.getElementById("click-txt");
	const aboutLink = document.getElementById("about-link");
	const contactLink = document.getElementById("contact-link");
	const motivationContactLink = document.getElementById("motivation-contact-link");

	homelink.addEventListener("click", function() {
		window.location.href = "Home.html";
	});

	
	aboutLink.addEventListener("click", function (event) {
		event.preventDefault();
		scrollToTarget("about-section");
	});


	contactLink.addEventListener("click", function (event) {
		event.preventDefault();
		scrollToTarget("contact-section");
	});

	motivationContactLink.addEventListener("click", function (event) {
		event.preventDefault();
		scrollToTarget("contact-section");
	});
	
	
	const animatedText = document.querySelector(".animation-text");
    const textContent = animatedText.textContent.trim();
    const characters = textContent.split("");

    animatedText.innerHTML = "";

    characters.forEach((character, index) => {
		const span = document.createElement("span");
		span.textContent = character;
		span.style.opacity = 0;
		animatedText.appendChild(span);
	
		setTimeout(() => {
			span.style.opacity = 1;
        }, (characters.length - index) * 25);
    });

	const slideshowContainer = document.querySelector(".slideshow-container");

    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".slide").length;

    function showSlide(index) {
        const transformValue = `translateX(-${index * 100}%)`;
        slideshowContainer.style.transform = transformValue;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
	setInterval(nextSlide, 3000);

});

