
document.addEventListener("DOMContentLoaded", () => {


document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".shadow-hero");
    const background = document.querySelector(".shadow-hero-bg");


    hero.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        background.style.transform =
            `scale(1.08) translate(${x * 8}px, ${y * 8}px)`;
    });

    hero.addEventListener("mouseleave", () => {
        background.style.transform =
            "scale(1.05)";

    });


document.addEventListener("DOMContentLoaded", () => {
    const priceCards =
        document.querySelectorAll(".price-card");


    const servicesObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "service-visible"
                        );
                        servicesObserver.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.15
            }
        );


    priceCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform =
            "translateY(40px)";
        card.style.transition =
            `opacity .7s ease ${index * 0.1}s,
             transform .7s ease ${index * 0.1}s`;
        servicesObserver.observe(card);

    });


    const style =
        document.createElement("style");
    style.innerHTML = `
        .price-card.service-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(style);

    const bookingButtons =
        document.querySelectorAll(".price-button");

    bookingButtons.forEach(button => {
        button.addEventListener("click", () => {
            const service =
                button
                    .closest(".price-card")
                    .querySelector("h3")
                    .textContent;

            console.log(
                "Selected tattoo service:",
                service
            );
        });
    });


    priceCards.forEach(card => {
        card.addEventListener("mousemove", (event) => {
            if (window.innerWidth < 900) {
                return;
            }
            const rect =
                card.getBoundingClientRect();
            const x =
                event.clientX - rect.left;
            const y =
                event.clientY - rect.top;
            const centerX =
                rect.width / 2;
            const centerY =
                rect.height / 2;
            const rotateX =
                (y - centerY) / 35;
            const rotateY =
                (centerX - x) / 35;
            card.style.transform =
                `translateY(-8px)
                 perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "translateY(0)";
        });
    });
});



    document.querySelectorAll(
        '.shadow-nav a[href^="#"], .shadow-hero a[href^="#"]'
    ).forEach(link => {
        link.addEventListener("click", function(event) {
            const target =
                document.querySelector(this.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});


    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1500);

    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });



    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });


    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            nav.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    });



    const bookingForm = document.getElementById("bookingForm");
    const formMessage = document.getElementById("formMessage");


    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name =
            document.getElementById("name").value.trim();
        const email =
            document.getElementById("email").value.trim();
        const style =
            document.getElementById("style").value;
        const message =
            document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            style === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please complete all fields.";
            formMessage.style.color = "#d00000";
            return;
        }


        formMessage.textContent =
            `Thanks ${name}. Your tattoo request has been received.`;
        formMessage.style.color = "#aaa";

        bookingForm.reset();
    });


    const revealElements = document.querySelectorAll(
        ".intro, .gallery-item, .about-content, .service, .booking-form"
    );


    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(element);
    });



    const galleryItems =
        document.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("selected");
        });
    });



    const footerYear = document.querySelector(
        ".footer-bottom p"
    );
    if (footerYear) {
        footerYear.innerHTML =
            `© ${new Date().getFullYear()} SHADOW TATTOO STUDIO. ALL RIGHTS RESERVED.`;
    }
});