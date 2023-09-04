// const button=document.querySelectorAll('#button__active');
// let click=false;


// for (let i = 0; i < button.length; i++) {

//   button[i].addEventListener('click', () => {
//     // Desmarcar todos los button
//     for (let j = 0; j < button.length; j++) {
//       button[j].classList.remove('ball-score-activate');
    
//     }
//     // Marcar el botón clicado
    
//     button[i].classList.add('ball-score-activate');
    
//   });
// }
const thankyou=document.querySelector('#thank-you');
const card=document.querySelector(".card");
const formulario=document.querySelector(".formulario")


formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  const opcion=Object.fromEntries(new FormData(formulario).entries())

  if(opcion.opcion){
    console.log(`you selected ${opcion.opcion} out of 5`)
    const message=document.querySelector("#thank-you p")
    message.textContent=`you selected ${opcion.opcion} out of 5`
    card.style.display='none'
    thankyou.style.display='block'
  }
})