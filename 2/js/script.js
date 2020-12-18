var firstElement = prompt('Inserisci la tua parola');
var secondElement = prompt('Inserisci la tua parola');


var first = firstElement.length;
var second = secondElement.length;

if (first > second) {
  console.log('la prima parola è piu lunga')

}else if( second < first){
  console.log('la prima parola è piu corta')
}else{
  console.log('sono uguali')
}
