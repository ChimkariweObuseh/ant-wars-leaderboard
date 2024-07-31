// Include the Anime.js library in your HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

// Animate the entrance of bracket elements
anime({
    targets: '.bracket',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(200, {start: 500}),
    easing: 'easeOutQuad'
});

// Adding some hover animations to the brackets
document.querySelectorAll('.bracket').forEach(function(bracket) {
    bracket.addEventListener('mouseenter', function() {
        anime({
            targets: bracket,
            scale: 1.1,
            rotate: '5deg',
            backgroundColor: '#ffeb3b', // Change color on hover
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });

    bracket.addEventListener('mouseleave', function() {
        anime({
            targets: bracket,
            scale: 1.0,
            rotate: '0deg',
            backgroundColor: '', // Revert to original color
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });
});

// Append images to the brackets and add fade-in animation
let brackets = document.querySelectorAll('.bracket');
for (let i = 0; i < brackets.length; i++) {
    let image = document.createElement('img');
    image.src = 'IMG_5996-removebg-preview.png';
    image.height = '70';
    image.style.position = 'absolute';
    image.style.top = '20%';
    image.style.left = '40%';
    image.style.zIndex = '-1';
    image.style.opacity = '0';
    brackets[i].appendChild(image);

    // Fade-in animation for images
    anime({
        targets: image,
        opacity: [0, 0.1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: i * 200 // Stagger the image animations
    });

    // Pulsating effect for images
}

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: 100
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

const title = document.querySelector('.title');
title.innerHTML = title.textContent.replace(/./g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.letter',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.letter',
    translateY: [0, -50],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 5000,
    delay: (el, i) => 30 * i
  });