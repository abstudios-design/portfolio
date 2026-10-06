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

const article = document.querySelector('.blog-article');
const toc = document.querySelector('#table-of-contents');
const sidebar = document.querySelector('.blog-sidebar-inner');
const headings = article ? [...article.querySelectorAll('h2, h3')] : [];

headings.forEach((heading, index) => {
	if (!heading.id) heading.id = `section-${index + 1}`;
	const item = document.createElement('li');
	if (heading.tagName === 'H3') item.className = 'toc-sub';
	const link = document.createElement('a');
	link.href = `#${heading.id}`;
	link.textContent = heading.textContent;
	item.appendChild(link);
	toc?.appendChild(item);
});

const tocLinks = toc ? [...toc.querySelectorAll('a')] : [];
const setActiveHeading = (id) => tocLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));

if ('IntersectionObserver' in window) {
	const headingObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) setActiveHeading(entry.target.id);
		});
	}, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
	headings.forEach((heading) => headingObserver.observe(heading));
}

const tocToggle = sidebar?.querySelector('.blog-toc-toggle');
tocToggle?.addEventListener('click', () => {
	const isOpen = sidebar.classList.toggle('is-open');
	tocToggle.setAttribute('aria-expanded', String(isOpen));
});
