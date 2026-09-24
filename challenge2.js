let fullName = "rajaa souini je vais";

function getInitials(fullName){
    let initial = fullName[0];

    for(let i = 0 ; i < fullName.length ; i++){
        if(fullName[i] === " "){
            initial += fullName[i+1];
        }
    }
    return initial.toUpperCase()
}
console.log(getInitials(fullName))

console.log(fullName[0])

