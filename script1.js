var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    allNames= femaleNames.concat(maleNames),
    newName = ('Marian');
if (allNames.indexOf(newName) === -1) {
  console.log('Brak wpisanego imienia');
  var x= allNames.push('Marian');
}
console.log(newName);
