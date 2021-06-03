const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //anima la barra che dopo il click comapre
        nav.classList.toggle('nav-active');

        //anima i links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animazione
        burger.classList.toggle('toggle');

    });

}

navSlide();

function commenta(form) {
    var listaCommenti = document.getElementById("listaCommenti");
    if (form.nome.value != "" && form.contenuto.value != "") {
        listaCommenti.innerHTML += "<div><b>" + form.nome.value + "</b>: <i>" + form.contenuto.value + "</i></div><hr />";
    } else {
        alert("Compila tutti i campi nella sezione dei commenti!");
    }
    form.reset();
}
