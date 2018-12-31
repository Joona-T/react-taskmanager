//Vanhaan tapaan:
const square = function (x) {
    return x * x;
}
//Nimetty funktio:
const square2 = function (x) {
    return x * x;
}

//Pitkä arrow funktio (muuttuja nimenä):
const squareArrow = (x) => {
    return x * x;
};
//Lyhyt arrow funktio:
const squareArrow2 = (x) => x*x;

console.log(square(8));
console.log(square2(9));
console.log(squareArrow(2));
console.log(squareArrow2(3));


//CHALLENGE:

const getFirstNameLong = (nimi) => {
    return nimi.split(' ')[0];
}
const getFirstName = (nimi) => nimi.split(' ')[0];
const getSecondName = (nimi) => nimi.split(' ')[1];

console.log(getFirstNameLong('Nuuska Muikkunen')); //Nuuska
console.log(getFirstName('Muumi Peikko')); //Muumi
console.log(getSecondName('Muumi Peikko')); //Peikko
