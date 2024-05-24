document.addEventListener('DOMContentLoaded', () => {
    // Animación inicial para el banner
    const bannerImage = document.querySelector('.banner-image');
    if (bannerImage) {
        bannerImage.style.opacity = 0;
        bannerImage.style.transform = 'scale(0.8)';
        setTimeout(() => {
            bannerImage.style.transition = 'all 0.8s ease-in-out'; // Reduce el tiempo de transición
            bannerImage.style.opacity = 1;
            bannerImage.style.transform = 'scale(1)';
        }, 200);
    }

    // Función para manejar las animaciones de entrada
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.5s ease-in-out'; // Reduce el tiempo de transición
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    // Configuración del observer
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    // Seleccionar y observar los elementos de los proyectos
    const elementsToAnimate = document.querySelectorAll('.projects, .scroll-animate');
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(10px)'; // Reduce el desplazamiento inicial
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar las animaciones de entrada
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.5s ease-in-out';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    // Configuración del observer
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    // Seleccionar y observar los elementos de los proyectos
    const elementsToAnimate = document.querySelectorAll('.projects, .scroll-animate');
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(10px)';
        observer.observe(element);
    });

    // Variables y funciones del carrusel
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    const updateCarousel = () => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            dots[index].classList.toggle('active', index === currentSlideIndex);
        });
    };

    window.moveSlide = (direction) => {
        currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
        updateCarousel();
    };

    window.currentSlide = (index) => {
        currentSlideIndex = index - 1;
        updateCarousel();
    };

    updateCarousel();
});
