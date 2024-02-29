document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

// Slider tesimonials
let index = 0;
document.getElementById("restart").setAttribute('disabled', '');
show_testimonial(index);

function show_testimonial(i) {
    index += i;

    let testimonials = document.getElementsByClassName("testimonial");

    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (index > testimonials.length - 1)
        index = 0;

    if (index < 0)
        index = testimonials.length - 1;

    testimonials[index].style.display = "block";
    dots[index].className += " active";
}

let myInterval = setInterval(startAni, 10000);

function startAni() {
    document.getElementById("restart").setAttribute('disabled', '');
    document.getElementById("stop").removeAttribute('disabled');
    document.getElementById("next").click();
}

function stopAni() {
    document.getElementById("stop").setAttribute('disabled', '');
    document.getElementById("restart").removeAttribute('disabled');
    clearInterval(myInterval);
}

function reStartAni() {
    location.reload();
}


emailjs.init("your_user_id");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = new FormData(e.target);

    // Send the email
    emailjs.sendForm("your_service_id", "your_template_id", formData).then(
        function (response) {
            console.log("Email sent successfully", response);
            // You can add code here to show a success message or redirect the user
        },
        function (error) {
            console.error("Email sending failed", error);
            // You can add code here to show an error message
        }
    );
});