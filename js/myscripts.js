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

// let output = document.getElementById('output');
// const formToReset = document.getElementById('contact-form');
// formToReset.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formToReset.reset();
//     output.innerHTML += "The form is resetted successfully!"
// });



// document
//     .querySelector("form")
//     .addEventListener("submit", handleSubmit);

// const submitSuccess = document.querySelector('.submit-success')
// const submitError = document.querySelector('.submit-error')

// const handleSubmit = (e) => {
//     e.preventDefault();
//     let myForm = document.getElementById("contact-form");
//     let formData = new FormData(myForm);
//     fetch("/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: new URLSearchParams(formData).toString(),
//         })

//         .then(() => {
//             submitSuccess.style.display = 'block';
//             submitError.style.display = null;
//         })
//         .catch((error) => {
//             submitError.style.display = 'block';
//             submitSuccess.style.display = null;
//         });
// };