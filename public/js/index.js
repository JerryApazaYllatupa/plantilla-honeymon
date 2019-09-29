const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', e => {
  e.target.previousElementSibling.classList.toggle('activo')
})

addEventListener('scroll',()=>{
  if(scrollY <= 2){

    document.getElementById('header-principal').style.setProperty('--transparent', 'var(--transparent)' );
  }else{
    document.getElementById('header-principal').style.setProperty('--transparent', 'var(--black)' );
  }

})

// document.getElementById('accordion'),addEventListener('click',(e)=>{
//   var x=scrollX;
//   var y=scrollY;

//   // onscroll=()=>{scrollTo(x, y)};
// })


