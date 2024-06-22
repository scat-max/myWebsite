document.addEventListener("DOMContentLoaded", function () {
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
