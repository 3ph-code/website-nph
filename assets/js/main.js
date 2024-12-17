/*=============== EMAIL JS ===============*/
(function(){
    emailjs.init("pNs3Wp4cX4MO37764"); // Replace with your public key
})();

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('Form submitted'); // Debugging line
        emailjs.sendForm('service_phi694n', 'template_yax3q0q', contactForm)
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            contactForm.reset();
        }, (error) => {
            console.error('Error sending email:', error); // Log the error
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
    }

    contactForm.addEventListener('submit', sendEmail);
});
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (window.scrollY >= 350) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

window.addEventListener('scroll', scrollUp);
document.getElementById('scroll-up').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor click behavior
    scrollToTop();
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',      // The direction from which the element will appear
    distance: '60px',   // The distance the element will move from its original position
    duration: 2500,     // The duration of the animation in milliseconds
    delay: 400,         // Delay before the animation starts
    // reset: true,      // Uncomment this line to allow the animation to repeat on scroll
});

sr.reveal(`.perfil`);
sr.reveal('.info', {
    origin: 'left',
    delay: 800
});

sr.reveal('.skills', {
    origin: 'left',
    delay: 1000
});
// Reveal for .abouts with specific options
sr.reveal('.about', {
    origin: 'right', // Corrected spelling
    delay: 1200
});

// Set a default interval for the following reveals
sr.reveal('.projects__card, .services__card, .experience__card', {
    interval: 100 // Corrected option name
});



