document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu');
    
    mobileMenuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    let currentSlide = 0;
    const slideCount = slides.length;
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
      currentSlide = index;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      showSlide(currentSlide);
    }
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    // Auto-advance slides
    let slideInterval = setInterval(nextSlide, 5000);
  
    heroSlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
  
    heroSlider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentTestimonial = 0;
    const testimonialCount = testimonials.length;
  
    // Create dots
    testimonials.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showTestimonial(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('.dot');
  
    function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
      currentTestimonial = index;
    }
  
    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonialCount;
      showTestimonial(currentTestimonial);
    }
  
    // Auto-advance testimonials
    setInterval(nextTestimonial, 7000);
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        form.reset();
      });
    });
  });