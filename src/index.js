import validator from './validator.js';

console.log(validator);

//se puede evitar repetir tanto const si, en vez de poner punto y coma, se usa una coma
//const card = document.querySelector("#card");

const cardForm = document.querySelector("#cardForm");

function handleForm(event) {
   event.preventDefault();
   validate()
} 
cardForm.addEventListener('submit', handleForm);

const cardNumber = document.querySelector("#inputNumber");
const cardName = document.querySelector("#inputName");
const textCardNumber = document.querySelector("#textNumber .number");
const textCardName = document.querySelector("#textName .name");
//const button = document.querySelector("#button");

//""-> para describir el consolo.log; + o coma para agregar lo que se quiere en el console.log
//console.log("inputtext"+cardNumber) 

cardNumber.addEventListener("keyup", (e) => {
   
   let inputValue = e.target.value;
   //cardForm.inputNumber.value = inputValue
   cardNumber.value = inputValue
   //eliminar espacios en blanco
   .replace(/\s/g, "")
   //eliminar letras
   .replace(/\D/g, "")
   //espacios cada 4 números
   .replace(/([0-9]{4})/g, "$1 ")
   //elimina el último espacio
   .trim();

   textCardNumber.textContent = inputValue;
   maskify(inputValue);
   console.log("maskify");

   if(inputValue == "") {
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


  // validación

   function validate(){
   const number = (Array.from(document.getElementById("inputNumber").value.replace(/\s/g, "")));
   console.log("number without spaces "+number);
   const reverseNumbers = number.reverse();
   console.log("reverse number "+reverseNumbers);

   const evenPosition = reverseNumbers.map((item, index) => {
      if((index + 1) % 2 === 0){
         let numberDouble = item * 2
         if(numberDouble > 9){
           const numberDoubleString = numberDouble-9
           //restar 9 a los números mayores de 9
           //sumar ambos números

           //const sumNumber = parseInt(numberDoubleString.charAt(0)) + parseInt(numberDoubleString.charAt(15))
           //return sumNumber
           return numberDoubleString
         } else {
            return numberDouble
         }
      } else {
            return item
         }
   })
   console.log("evenPosition "+evenPosition);

   let sum = 0;
   //evenPosition.map((item, index) => {
   //sum = sum + parseInt(evenPosition);
   //})


   for (var i = 0; i < evenPosition.length; i++) {
      sum = sum + parseInt(evenPosition[i]);
    }

   console.log("sum "+sum);
   console.log("mod "+sum % 10);

   if(sum % 10 === 0) {
      alert("Correcto")
   } else {
      alert("meh")
   }
 }
   
   function maskify(cardNumber) {
      console.log(cardNumber);
      
 }

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



//5325477020691868
//5332213098448506
//4289854871191825
//4550874629578877