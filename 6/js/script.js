var inputNumber = prompt('digita i tuoi numeri')
var n;
for (var i = 0; i < inputNumber.length; i++) {
  n = Math.pow(parseInt(inputNumber[i]), 3)
}
console.log('il tuo numero è  ' + n);
