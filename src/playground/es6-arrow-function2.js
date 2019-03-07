
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

const user = {
  name: 'Christyan',
  cities: ['Morelia', 'Guadalajara'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());