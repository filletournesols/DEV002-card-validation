import validator from './validator.js';

console.log(validator);

//se puede evitar repetir tanto const si, en vez de poner punto y coma, se usa una coma
//const card = document.querySelector("#card");

const cardNumber = document.querySelector("#inputNumber");
const cardName = document.querySelector("#inputName");
const textCardNumber = document.querySelector("#textNumber .number");
const textCardName = document.querySelector("#textName .name");
//const button = document.querySelector("#button");

const cardForm = document.querySelector("#cardForm");

function handleForm(event) {
   event.preventDefault();
   let inputValue = cardNumber.value
   let inputValueName = cardName.value
   const finalValidation = validator.isValid(inputValue);
   if (inputValue == ""){
      alert ("Debes colocar el número de tu tarjeta");
   } else if (inputValueName == ""){
      alert ("Debes colocar tu nombre")
   } else if(finalValidation){
      alert ("Tarjeta Válida");
   } else {
      alert ("Tarjeta inválida");
   }
} 
//cardForm.addEventListener('submit', handleForm);

//""-> para describir el consolo.log; + o coma para agregar lo que se quiere en el console.log
//console.log("inputtext"+cardNumber) 

cardNumber.addEventListener("keyup", (e) => {
   
   let inputValue = e.target.value;
   //cardForm.inputNumber.value = inputValue
   cardNumber.value = inputValue
   //eliminar espacios en blanco
   .replace(/\s/g, "")
   //eliminar letras
   //.replace(/\D/g, "")
   //espacios cada 4 números
   .replace(/([0-9]{4})/g, "$1 ")
   //elimina el último espacio
   .trim();
   
   validator.maskify(inputValue);
   console.log("maskify "+validator.maskify(inputValue));

   textCardNumber.textContent = validator.maskify(inputValue);

   if(validator.maskify(inputValue) == "") {
    textCardNumber.textContent = "0000 0000 0000 0000";
    //logo en la tarjeta
    //logoMarca.innerHTML = "";
   }

   // AGREGAR LOGO
     //if(inputValue[0] == 4){
     //logoMarca.innerHTML = "";
     //const image = document.createElement("img");
     //image.src = "imágenes/logos/visa.png";
     //logoMarca.appendChild(image);
     //} else if(inputValue[0] == 5){
     //logoMarca.innerHTML = "";
     //const image = document.createElement("img");
     //image.src = "imágenes/logos/mastercard.png";
     //logoMarca.appendChild(image);
     //} else if(inputValue[0] == 3){
     //logoMarca.innerHTML = "";
     //const image = document.createElement("img");
     //image.src = "imágenes/logos/american express.png";
     //logoMarca.appendChild(image);
     //} else if(inputValue[0] == 6){
     //logoMarca.innerHTML = "";
     //const image = document.createElement("img");
     //image.src = "imágenes/logos/discover.jpeg";
     //logoMarca.appendChild(image);
     //}

})

cardName.addEventListener("keyup", (e) => {
   let inputValue = e.target.value;
   //cardForm.inputNumber.value = inputValue
   cardName.value = inputValue
   //eliminar números
   .replace(/[0-9]/g, "");

   textCardName.textContent = inputValue;

   if(inputValue == "") {
    textCardName.textContent = "Enriqueta Marraqueta";
   }
});

cardForm.addEventListener("submit", handleForm);

//tarjetas válidas
//5325477020691868
//5332213098448506
//4289854871191825
//4550874629578877