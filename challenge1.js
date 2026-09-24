let firstName = "Rajaa";
let lastName = "Souini";

function generateUsername(firstName, lastName){
    let v = firstName + " " + lastName;
    return v.toLocaleLowerCase();
}

console.log(generateUsername(firstName,lastName));