const name = 'Max';
const hasName = true;
const number = 42;
const object = {
  name: 'Ethan',
  number: 42,
  isAdmin: true,
  pets: ['jake', 'cookie', 'gracie']
}


function sayHello(name){
  if (name) {
    console.log('Hello ' + name);
  } else {
    console.log('Hello World!')
  }
}

sayHello('Ethan');
sayHello();

// TODO: make a function that takes two numbers, adds them together, and prints the result