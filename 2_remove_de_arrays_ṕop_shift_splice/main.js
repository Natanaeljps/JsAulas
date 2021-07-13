// pop remove do fim do arrays
let arr = [1,2,3,4,5];
let remover = arr.pop();

console.log(arr);
console.log(remover);

//shift remove do inicio do arrays
let nomes = ["joão", "chico", "andré"];
let nome = nomes.shift();

console.log(nome);
console.log(nomes);

//splice remove pelo indice do elemento
let numbers = [1,2,3,4,5];

let number = numbers.splice(3,1);

console.log(number);
console.log(numbers);

let subNumber = numbers.splice(0,3);

console.log(subNumber);
console.log(numbers);