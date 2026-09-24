let fullName = "rajaa souini je vais";

function getInitials(fullName){
    let premier = fullName[0];

    for(let i = 0 ; i < fullName.length ; i++){
        if(fullName[i] === " "){
            premier += fullName[i+1];
        }
    }
    return premier.toUpperCase()
}
console.log(getInitials(fullName))

console.log(fullName[0])

