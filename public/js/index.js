
const activeMenuMovil = document.getElementById('hamburger')
activeMenuMovil.addEventListener('click', e => {
  e.target.previousElementSibling.classList.toggle('activo')
})

// Evento para cambiar el color del menú
addEventListener('scroll', () => {
  if (scrollY <= 2) {
    document.getElementById('header-principal').style.setProperty('--transparent', 'var(--transparent)');
  } else {
    document.getElementById('header-principal').style.setProperty('--transparent', 'var(--black)');
  }

})


// =========== Section accordion =========
var activeAccordion = document.getElementsByClassName("accordion__button");
var i;

for (i = 0; i < activeAccordion.length; i++) {
  activeAccordion[i].addEventListener("click", function () {

    this.classList.toggle("active");
    var accordionPanel = this.nextElementSibling;

    if (accordionPanel.style.display === "block") {
      accordionPanel.style.display = "none";
    } else {
      accordionPanel.style.display = "block";
    }
  });
}



