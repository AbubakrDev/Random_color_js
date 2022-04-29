let h1 = document.querySelector('.text-h1')
let btn = document.querySelector('.btn')

const colorRod = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    h1.innerHTML = "#" + randomColor;
  }                                                                                   
  
  btn.addEventListener("click", colorRod);
  colorRod();