var femaleNames = ['Grażyna', 'Basia', 'Lucyna', 'Jadwiga'];
var maleNames = ['Janusz', 'Mietek', 'Andrzej', 'Jarek'];
var arr= femaleNames.concat(maleNames);
var test= arr.splice(1, 0, 'Maria');
console.log(arr);
console.log(test);
