const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', e => {
  e.target.previousElementSibling.classList.toggle('activo')
})
window.onload = function() {
  init();
  doSomethingElse();
};