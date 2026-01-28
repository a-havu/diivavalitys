// ETUSIVUN SLIDESHOW

document.addEventListener("DOMContentLoaded", function() {
	const slideshows = document.querySelectorAll('.slideshow');

	slideshows.forEach(slideshow => {
	  const imagesContainer = slideshow.querySelector('.slideshow-kuvat');
	  const images = imagesContainer.querySelectorAll('.kuva');
	  const imageCount = images.length;
	  let currentIndex = 0;
  
	  images[currentIndex].classList.add('active');

	  function moveToNextImage() {
		images[currentIndex].classList.remove('active');
		currentIndex = (currentIndex + 1) % imageCount;
		images[currentIndex].classList.add('active');
	  }
  
	  setInterval(moveToNextImage, 7000); 
	});
  });
  

// HAMPPARIMENU
const hamburger = document.getElementById('hamburger-icon');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function () {
  navbar.classList.toggle('active');
});

document.addEventListener('click', function(event) {
	const navbar = document.getElementById('navbar');
	const hamburger = document.getElementById('hamburger-icon');
	if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
	  navbar.classList.remove('active');
	}
  });
  
// ARTISTI-SLIDESHOW
  let currentIndex = 0;

    function changeSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        slides[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

        slides[currentIndex].classList.add('active');
    }