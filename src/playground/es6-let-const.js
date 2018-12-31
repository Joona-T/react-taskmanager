var nameVar = 'Joona';
var nameVar = 'Juuma';

console.log('Namevar: ', nameVar)

let nameLet = "jen";
nameLet = "julie";
console.log('nameLet: ', nameLet);

const nameConst = 'Frank';
// nameConst = 'Gunther' <- laiton
console.log('nameConst: ', nameConst)

function getPetName() {
    const petName = 'Tuutti';
    return petName;
}

console.log(getPetName());

//BLOCK SCOPING

//var
var fullName = 'Pasi Viheraho';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log('Blockin ulkopuolella: ' + firstName);

//let 
if(fullName) {
    let ekaNimi = fullName.split(' ')[0];
    console.log(ekaNimi);
}

//Seuraava ei toimi:
// console.log('Blocking ulkopuolella: ' + ekaNimi); 