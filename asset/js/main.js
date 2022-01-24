//filter
let $btns = $('.img-gallery .sortBtn .filter-btn');
$btns.click(function(e) {
    $('.img-gallery .sortBtn .filter-btn').removeClass('active');
    e.target.classList.add('active');
    let selector = $(e.target).attr('data-filter');
    $('.img-gallery .grid').isotope({
        filter: selector
    })
    return false;
})

//---------------------------Dark Mode Toggle---------------------------//

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

$(function() {
    let videoPopupPlayer = (function() {
        let init = function() {
            $('body').on('click', '.video-popup', playVideo);
        };

        let playVideo = function(e) {
            e.preventDefault();
            let url = $(this).attr('href');
            let videoType = '';
            let videoSrc = '';

            if (url.indexOf('youtube.com') !== -1 || url.indexOf('youtu.be') !== -1) {
                videoType = 'ytSrc';
                videoSrc = youtubeParser(url);
                console.log(videoType);
            } else if (url.indexOf('vimeo.com') !== -1) {
                videoType = "vimeoSrc";
                videoSrc = vimeoParser(url);
            } else {
                videoType = "iframeSrc";
                videoSrc = url;
            }
            BigPicture({
                el: this,
                [videoType]: videoSrc,
            });
        };


        let youtubeParser = function(url) {
            let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            let match = url.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        }

        let vimeoParser = function(url) {
            let regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
            let match = url.match(regExp);
            return match[5] ? match[5] : false;
        };

        return {
            init: init
        };
    })();

    videoPopupPlayer.init();
});
setTimeout(function() {
    var vara = new Vara(
        ".home__title",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json", [{
            text: "Creative Coder",
            y: 2,
            fromCurrentPosition: {
                y: true
            },
            duration: 5000,
        }, ], {
            strokeWidth: 2,
            color: "#FF4C60",
            fontSize: 32,
            textAlign: "center",
        }
    );
}, 1000);

/*******************Typing Animation************* */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["CREATIVE .", "FUN .", "a journey .", "LIFE ."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

//--------------------------------Skills Bar--------------------------------//

$('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
        animatedValue: 0
    }).animate({
        animatedValue: per
    }, {
        duration: 1000,
        step: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});


//----------------------------Smooth Scrolling------------------------------//

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
$('.counter1').counterUp();




//---------------------------------Blog slider---------------------------//


$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [650, 1],
        pagination: true,
        navigationText: true,
        autoPlay: true
    });
});
//------------------------------Testimonial slider---------------------------//

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: false,
        navigationText: ["", ""],
        slideSpeed: 1000,
        singleItem: true,
        transitionStyle: "fade",
        autoPlay: true
    });
});
//------------------------------Vertical slider---------------------------//
function animationFlow() {

    const TL = gsap.timeline({ repeat: -1 })

    TL
        .from('.vertical-slider p', { y: 55, autoAlpha: 0, duration: 1.25, stagger: 1.25 })
        .to('.vertical-slider p', { y: -55, autoAlpha: 0, duration: 1.25, stagger: 1.25 }, 1.25)

}
animationFlow();

//------------------------------Glooey Effect---------------------------//

const socialMedia = document.querySelector('.c-social-media');
const socialMediaBtn = document.querySelector('.js-share-btn');
const socialMediaBtnIcon = document.querySelector('.c-social-media__icon');
const socialMediaItems = [...document.querySelectorAll('.c-social-media__item')];

const socialMediaCounts = socialMediaItems.length;
const midCounts = socialMediaCounts / 2;
const socialMediaSpacing = 60;

const activateSocialMedia = () => {
    TweenMax.to(socialMediaBtn, 0.1, {
        scaleX: 1.2,
        scaleY: 0.6,
        ease: Quad.easeOut,
        onComplete: () => {
            TweenMax.to(socialMediaBtn, 0.8, {
                scale: 1,
                ease: Elastic.easeOut.config(1.1, 0.6),
            });

            TweenMax.to(socialMediaBtnIcon, 0.8, {
                scale: 1,
                ease: Elastic.easeOut.config(1.1, 0.6),
            })
        },
    });

    socialMediaItems.map((item, i) => {
        let pos = i - midCounts;
        if (pos >= 0) pos += 1;
        const dist = Math.abs(pos);

        TweenMax.to(item, 1.1 * dist, {
            x: pos * socialMediaSpacing,
            ease: Elastic.easeOut.config(1.01, 0.5),
        });

        TweenMax.to(item, 0.8, {
            delay: 0.1 * dist,
            ease: Elastic.easeOut.config(1.1, 0.6),
        });
    });
};

socialMediaBtn.addEventListener("click", activateSocialMedia);
// particlesJS.load('particles-js', 'particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 47,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff3b66"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#ff3b66"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://www.clipartsgram.com/image/27662442-nyan-cat-png-image.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ff3b66",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "top-left",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 10,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});




$(document).ready(function() {
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";

    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 1000;

    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".progress-wrap").addClass("active-progress");
        } else {
            jQuery(".progress-wrap").removeClass("active-progress");
        }
    });

    jQuery(".progress-wrap").on("click", function(event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });
});