const hamMenu = document.querySelector('.ham-menu');


const offScreenMenu = document.querySelector('.offScreenMenu');


const listFocus = document.querySelector('li');
hamMenu.addEventListener('click',() => {
 hamMenu.classList.toggle('active');
 offScreenMenu.classList.toggle('active');

})
listFocus.addEventListener('click',()=>{
  listFocus.classList.toggle('active');
})

