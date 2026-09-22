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
