
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})



function iniciarApp() {
    scrollNav();
}


function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView({ behavior: "smooth" });
        })
    })
}
