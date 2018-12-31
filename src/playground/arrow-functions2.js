
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
// ARGUMENT OBJECT - no longer bound with arrow functions.
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

//Toimii:
const add = function (a, b) {
    console.log(arguments); //Luettelee argumentit.
    return a + b;
}
console.log(add(55,1,1000));

//Ei toimi:
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(55,1,1000));

//ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ
// 'THIS' KEYWORD - no longer bound
//ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ

const user = {
    name: 'Viljonkka',
    cities: ['Muumilaakso', 'Yksinäiset vuoret'],

    //Alla olevaa objektin funktiota ei voi korvat nuolifunktiolla.
    printPlacesLived: function () {
        console.log(this.name); 
        console.log(this.cities);

        //Ei toimi:
        // this.cities.forEach(function(city)) {
        //     console.log(this.name + ' has lived in ' + city);
        // }

        //Toimii:
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    },

    //Lyhyempi funktion määritys:
    printPlaces() {
        this.cities.forEach((city) => {
            console.log(this.name + ' kotipaikka on ollut ' + city);
        });
    },

    printPlacesMap() {
        return this.cities.map((city) => this.name + ' ei enään koskaan käy paikoissa ' + city);
    }
};
user.printPlacesLived();
user.printPlaces();
console.log(user.printPlacesMap());

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//CHALENGE
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 15,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }

}
console.log(multiplier.multiply());