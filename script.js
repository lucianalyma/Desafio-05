let artes = ["cinema", "teatro", "dança", "música", "pintura"];
console.log(artes);
artes.unshift ("Arquitetura");
console.log(artes);
artes.pop ();
console.log(artes);
artes.push ("literatura", "escultura");
console.log(artes);
artes.shift ();
console.log(artes);
let numbers = [333, 232, 7, 2,3, 514];
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers);

