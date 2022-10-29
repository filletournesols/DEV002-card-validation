const validator = {
  maskify: function (inputValue) {
    //if (inputValue.length < 6) {return inputValue};
    const last4Characters = inputValue.substr(-4);
    //const firstCharacter = inputValue.substr(0,1);
    const maskingCharacters = inputValue.substr(0, inputValue.length - 4).replace(/\d|[a-zA-Z]/g, "#");
    return `${maskingCharacters}${last4Characters}`;
    //${firstCharacter}
  },

  // reemplaza 0-9: /\d/g
  // reemplaza letras: [a-zA-Z]

  isValid: function (inputValue){
    const number = (Array.from(inputValue.replace(/\s/g, "")));
    //document.getElementById("inputNumber").value
    console.log("number without spaces "+number);
    const reverseNumbers = number.reverse();
    console.log("reverse number "+reverseNumbers);
 
    const evenPosition = reverseNumbers.map((item, index) => {
       if((index + 1) % 2 === 0){
          let numberDouble = item * 2
          if(numberDouble > 9){
            const numberDoubleString = numberDouble-9
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
      return true
       //alert("Tarjeta válida")
    } else {
      return false
       //alert("Tarjeta inválida")
    }
  }
};

export default validator;
