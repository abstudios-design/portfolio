const caseNavToggle = document.querySelector('.case-study-nav .nav-toggle');
const caseMobileNav = document.querySelector('.case-nav-mobile');

caseNavToggle?.addEventListener('click', () => {
	const isOpen = caseMobileNav.classList.toggle('open');
	caseNavToggle.setAttribute('aria-expanded', String(isOpen));
	caseNavToggle.querySelector('i').className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
});

caseMobileNav?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		caseMobileNav.classList.remove('open');
		caseNavToggle?.setAttribute('aria-expanded', 'false');
		const icon = caseNavToggle?.querySelector('i');
		if (icon) icon.className = 'bi bi-list';
	});
});

document.querySelectorAll('.demo-button').forEach((button) => {
	button.addEventListener('click', () => button.classList.toggle('is-selected'));
});

const revealItems = document.querySelectorAll('.case-section, .case-band, .next-project');
if ('IntersectionObserver' in window) {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('case-visible');
			observer.unobserve(entry.target);
		});
	}, { threshold: 0.08 });
	revealItems.forEach((item) => revealObserver.observe(item));
} else {
	revealItems.forEach((item) => item.classList.add('case-visible'));
}
