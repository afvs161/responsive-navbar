const navToggle = document.querySelector('.nav-toggle'),
	links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
	links.classList.toggle('show-links')
})
