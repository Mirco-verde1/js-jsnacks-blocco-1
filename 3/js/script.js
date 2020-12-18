// var first = prompt('inserisci un numero');
// var second = prompt('inserisci un numero');
// var tird = prompt('inserisci un numero');
// var fourth = prompt('inserisci un numero');
// var fifth = prompt('inserisci un numero');
//
//
//
// first = parseInt(first);
// second = parseInt(first);   //a questo si poteva trovare soluzione migliore
//  tird = parseInt(first);    //  --------------soluzione in basso------------
// fourth = parseInt(first);
// fifth = parseInt(first);
//
//
// var totNumeri = [];
// totNumeri.push(first)
// totNumeri.push(second)
// totNumeri.push(tird)
// totNumeri.push(fourth)
// totNumeri.push(fifth)
//
//
//
//
// var somma = 0;
//
// for (var i = 0; i < totNumeri.length; i++) {
//   totNumeri[i] += somma;
//
// }
// console.log(somma);

var somma = 0;
for (var i = 0; i < 5; i++) {
 var input = prompt('Inserisci un numero!')
 somma += parseInt(input);
}
console.log('la somma è ' + somma);
