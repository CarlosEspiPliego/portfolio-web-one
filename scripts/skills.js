const showContent = (content) => {
    // alert(content);
    // Lista de todos los ids de sección
    var sections = ['lenguajes', 'frameworks', 'bases-datos', 'marcado', 'disenio', 'otros'];
    var buttons = ['btn__txt-lenguajes', 'btn__txt-frameworks', 'btn__txt-bases-datos', 'btn__txt-marcado', 'btn__txt-disenio', 'btn__txt-otros']

    // Ocultar todas las secciones
    sections.forEach(function (section, index) {
        document.getElementById(section).style.display = 'none';
        document.getElementById(buttons[index]).classList.remove('active__btn-skills');
    });

    // Mostrar la sección clickeada
    document.getElementById(content).style.display = 'grid';
    document.getElementById('btn__txt-' + content).classList.add('active__btn-skills');
}