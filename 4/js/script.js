var invitati = ['mario' , 'mimmo' , 'gianni' , 'giacomo'];

var input = prompt('dimmi come ti chiami');


var flag = false;

for (var i = 0; i <invitati.length; i++) {
if (invitati[i] === input)
flag = true;}

if (flag) {
  console.log('Puoi entrare!')

}else {
  console.log('Non puoi entrare!')
}
