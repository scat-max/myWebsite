document.addEventListener("DOMContentLoaded", function () {
	function scrollToTarget(targetId) {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth"
			});
		}
	}

	const electricalWorkSec = document.getElementById("electrical-work");
	const electromecSec = document.getElementById("electromechanic-maintenance");
	const mechanicalSec = document.getElementById("mechanical-work");
	const supplySec = document.getElementById("material-supply");
	const concealRect = document.querySelector(".conceal-electrical");
	const concealRect1 = document.querySelector(".conceal-electromechanic");
	const concealRect2 = document.querySelector(".conceal-mechanical");
	const concealRect3 = document.querySelector(".conceal-supply");

	function handleScroll() {
		const rect = electricalWorkSec.getBoundingClientRect();
		const rect1 = electromecSec.getBoundingClientRect();
		const rect2 = mechanicalSec.getBoundingClientRect();
		const rect3 = supplySec.getBoundingClientRect();

		if (rect.top < window.innerHeight / 2 && !electricalWorkSec.classList.contains("animated")) {
			electricalWorkSec.classList.add("animated");
			animateConceal();
		}
		if (rect1.top < window.innerHeight / 2 && !electromecSec.classList.contains("animated")) {
			electromecSec.classList.add("animated");
			animateConceal1();
		}
		if (rect2.top < window.innerHeight / 2 && !mechanicalSec.classList.contains("animated")) {
			mechanicalSec.classList.add("animated");
			animateConceal2();
		}
		if (rect3.top < window.innerHeight / 2 && !supplySec.classList.contains("animated")) {
			supplySec.classList.add("animated");
			animateConceal3();
		}
	}
	function animateConceal() {
		concealRect.classList.add("show");
	}
	function animateConceal1() {
		concealRect1.classList.add("show");
	}
	function animateConceal2() {
		concealRect2.classList.add("show");
	}
	function animateConceal3() {
		console.log("Adding classes to concealRect3");
		concealRect3.classList.add("show");
	}
	window.addEventListener("scroll", handleScroll);
	window.addEventListener('touchmove', handleScroll);

	const homelink = document.getElementById("click-txt");
	homelink.addEventListener("click", function() {
		window.location.href = "Home.html";
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
});

window.addEventListener('load', function() {
	adjustImageHeight();
});

window.addEventListener('resize', function() {
	adjustImageHeight();
});

function adjustImageHeight() {
	const sections = document.querySelectorAll('.service-section');
	const screenWidth = window.innerWidth;

	sections.forEach(section => {
		const imgContainer = section.querySelector('.img-container');
		const textContainer = section.querySelector('.text-container');
		const img = imgContainer.querySelector('img');
		const contentContainer = section.querySelector('.content-container');
		
		if (screenWidth > 800) {
			const textHeight = textContainer.offsetHeight;
			let requiredHeight = textHeight;

			if (section.id === 'electrical-work') {
            	requiredHeight *= 1; 
        	}
			if (section.id === 'electromechanic-maintenance') {
           		requiredHeight *= 1.1; 
        	}
			if (section.id === 'mechanical-work') {
        	    requiredHeight *= 1.2; 
			}
			if (section.id === 'material-supply') {
        	    requiredHeight *= 1.4; 
        	}

			img.style.height = `${requiredHeight}px`;
        	imgContainer.style.height = `${requiredHeight}px`;

        	section.querySelector('.content-container').style.height = `${requiredHeight}px`;
			return;
		}
		
		if (screenWidth <= 800) {
			const imgWidth = img.offsetHeight; 
            const imgHeight = img.offsetWidth; 

            
            let requiredHeight = imgHeight; 

            switch (section.id) {
                case 'electrical-work':
                    requiredHeight *= 1;
                    break;
                case 'electromechanic-maintenance':
                    requiredHeight *= 1;
                    break;
                case 'mechanical-work':
                    requiredHeight *= 1;
                    break;
                case 'material-supply':
                    requiredHeight *= 1;
                    break;
                default:
                    break;
			}
			contentContainer.style.height = `${requiredHeight}px`;
    	}
	});
}
