const container=document.querySelector(".container");
const inputs=document.querySelectorAll(".container input");
let lblwidth = document.getElementById("labelWidth");
let lblheight= document.getElementById("labelHeight");
let width = window.getComputedStyle(container).width;

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;
// console.log('dsdsd') window.getComputedStyle(container).width
console.log(inputs);
inputs.forEach((value) => {
  value.addEventListener('change',change);
});


lblwidth.textContent += ` ${deviceWidth}px`;
lblheight.textContent += ` ${deviceHeight}px`;



// ------------ FUNCTIONS -----------------------

function change(e){
  console.log('dsdsd');
  let w =parseInt(inputs[0].value);
  let h =parseInt(inputs[1].value);
  if(!isNaN(w)) container.style.width=`${w}px`;
  if(!isNaN(h)) container.style.height=`${h}px`;
  console.log(`${w} ${inputs[0].value}  ${h} ${typeof(inputs[1].value)}`);
  
}


