const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	navToggle.setAttribute('aria-expanded', String(isOpen));
	navToggle.querySelector('i').className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
});

navLinks?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		navToggle?.setAttribute('aria-expanded', 'false');
		const icon = navToggle?.querySelector('i');
		if (icon) icon.className = 'bi bi-list';
	});
});

const contactForm = document.querySelector('#contact-form');
const captchaQuestion = document.querySelector('#captcha-question');
const captchaAnswer = document.querySelector('#captcha-answer');
const captchaError = document.querySelector('#captcha-error');
const formStatus = document.querySelector('#form-status');
let captchaResult;

if (contactForm && window.location.protocol !== 'file:') {
	contactForm.action = 'https://formsubmit.co/balooni.aman1991@gmail.com';
}

const createCaptcha = () => {
	const firstNumber = Math.floor(Math.random() * 8) + 2;
	const secondNumber = Math.floor(Math.random() * 8) + 1;
	captchaResult = firstNumber + secondNumber;
	if (captchaQuestion) captchaQuestion.textContent = `${firstNumber} + ${secondNumber} =`;
};

createCaptcha();

contactForm?.addEventListener('submit', (event) => {
	if (Number(captchaAnswer?.value) !== captchaResult) {
		event.preventDefault();
		if (captchaError) captchaError.hidden = false;
		captchaAnswer?.focus();
		return;
	}

	if (captchaError) captchaError.hidden = true;
	if (window.location.protocol === 'file:') {
		event.preventDefault();
		const formData = new FormData(contactForm);
		const subject = encodeURIComponent(formData.get('_subject') || 'New portfolio enquiry');
		const body = encodeURIComponent([
			`Name: ${formData.get('name')}`,
			`Email: ${formData.get('email')}`,
			`Phone: ${formData.get('phone') || 'Not provided'}`,
			'',
			`Message:\n${formData.get('message')}`
		].join('\n'));
		if (formStatus) formStatus.textContent = 'Opening your email app...';
		window.location.href = `mailto:balooni.aman1991@gmail.com?subject=${subject}&body=${body}`;
		return;
	}

	if (formStatus) formStatus.textContent = 'Sending your message...';
});

captchaAnswer?.addEventListener('input', () => {
	if (captchaError) captchaError.hidden = true;
});

const caseStudyPaths = [
	'./case-studies/ingredilens.html',
	'./case-studies/life-bridge.html',
	'./case-studies/turismo-transports.html',
	'./case-studies/cke-restaurants.html',
	'./case-studies/credx.html',
	'./case-studies/life-at-zenesys.html'
];

document.querySelectorAll('.project-card').forEach((card, index) => {
	const link = document.createElement('a');
	link.className = card.className;
	link.href = caseStudyPaths[index];
	link.setAttribute('aria-label', `View case study: ${card.querySelector('h3')?.textContent}`);
	while (card.firstChild) link.appendChild(card.firstChild);
	card.replaceWith(link);
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		});
	}, { threshold: 0.12 });
	revealItems.forEach((item) => revealObserver.observe(item));
} else {
	revealItems.forEach((item) => item.classList.add('is-visible'));
}
