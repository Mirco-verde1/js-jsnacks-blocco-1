var somma = 0;
var mediaNumber;
var inputNumber = prompt('Digita 10 numeri')
if (inputNumber.length < 10) {
  alert('Valore inesatto!')

}else {
  for (var i = 0; i < inputNumber.length; i++) {
  somma = parseInt(inputNumber[i]) + somma;

  }
}console.log(' la somma dei numeri è ' + somma );

mediaNumber = (somma / 10);
console.log('La tua media numeri è ' + (mediaNumber));
