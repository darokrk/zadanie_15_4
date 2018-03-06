//Zadanie pierwsze

const first = "Hello";
const second = "World!";
const helloWorld = `${first} ${second}`;
console.log(helloWorld);


//Zadanie drugie

const multiply = (a,b = 1) => a * b;

multiply(2, 5);
multiply(100);


//Zadanie trzecie

const average = (...args) => {
  let sum = 0;
  args.forEach(args => {
  		sum = sum + args;
  });
  return sum / args.length;
}

average(20,40,30,50);


//Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

(average(...grades));


//Zadanie piąte

const table = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, ,secondName] = table;