let string = "kjnkzuhdaenvo";

function countVowels(string){
    let voyel = 'aeiuyo';
    let count = 0 ;
    for(let i of string){
        if (voyel.includes(i)){
            count += 1 ;
        }
    }
    return  count;
}
console.log(countVowels(string));