const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const texts = ["Web Developer", "Web Designer", "Tutor", "Learner..."];

let textIndex = 0;
let charIndex = 0;

type = () => {
	if (charIndex <= texts[textIndex].length - 1) {
		if (cursor.classList.contains('blink')) {
			cursor.classList.remove('blink');
		}
		typedText.textContent += texts[textIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, 120);
	} else {
		if (!cursor.classList.contains('blink')) {
			cursor.classList.add('blink');
		}
		setTimeout(erase, 800);
	}
}

erase = () => {
	if (charIndex > 0) {
		if (cursor.classList.contains('blink')) {
			cursor.classList.remove('blink');
		}
		typedText.textContent = texts[textIndex].slice(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, 60);
	}
	else {
		if (!cursor.classList.contains('blink')) {
			cursor.classList.add('blink');
		}
		textIndex++;
		if (textIndex >= texts.length) {
			textIndex = 0;
		}
		setTimeout(type, 800);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(type, 1000);
})