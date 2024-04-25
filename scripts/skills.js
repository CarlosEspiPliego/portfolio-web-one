const activeSideBtn = (content) => {
    var sections = ['home__side-btn', 'sobre__side-btn', 'hobbies__side-btn', 'formacion__side-btn', 'projects__side-btn', 'skills__side-btn', 'contacto__side-btn'];
    
    // Ocultar todas las secciones
    sections.forEach(function (section) {
        document.getElementById(section).classList.remove('active__btn-sidebar');
    });

    document.getElementById( content ).classList.add('active__btn-sidebar');
}

// Detectar las secciones con el scroll
window.addEventListener('scroll', function () {
    var scroll = this.scrollY;
    var home = document.getElementById('home').offsetTop;
    var sobre = document.getElementById('sobre').offsetTop;
    var hobbies = document.getElementById('hobbies').offsetTop;
    var formacion = document.getElementById('formacion').offsetTop;
    var projects = document.getElementById('projects').offsetTop;
    var skills = document.getElementById('skills').offsetTop;
    var contacto = document.getElementById('contacto').offsetTop;

    if (scroll >= home && scroll < sobre) {
        activeSideBtn('home__side-btn');
    } else if (scroll >= sobre && scroll < hobbies) {
        activeSideBtn('sobre__side-btn');
    } else if (scroll >= hobbies && scroll < formacion) {
        activeSideBtn('hobbies__side-btn');
    } else if (scroll >= formacion && scroll < skills) {
        activeSideBtn('formacion__side-btn');
    } else if (scroll >= skills && scroll < projects ) {
        activeSideBtn('skills__side-btn');
    } else if (scroll >= projects && scroll < contacto) {
        activeSideBtn('projects__side-btn');
    } else if (scroll >= contacto) {
        activeSideBtn('contacto__side-btn');
    }
})