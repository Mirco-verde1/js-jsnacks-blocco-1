// var input = prompt('inserisci un numero di 4 cifre')
// var somma = 0;
//
// if (input.length < 4) {
//   alert('numero errato')
//
// }else {
//   for (var i = 0; i < 4; i++) {
//
//    somma += parseInt(input[i]) //corretto dopo correzione Ottavio
//   }
// }
// console.log('La tua somma è ' + somma);
//
//
//


var number = prompt('inserisci un numero')
var totale = 0;
if (number.length < 4) {
  alert('input numeri errato')
}else {
  for (var i = 0; i < 4; i++) {
    totale += parseInt(number[i])
  }
}console.log('la tua somma è ' + totale);
