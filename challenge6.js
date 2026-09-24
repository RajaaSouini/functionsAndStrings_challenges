function countCharacter(word , char){
    let count = 0;
    for(let i of word){
        if(i === char){
            count += 1;
        }
    }
    return count;
}
console.log(countCharacter("misssissippi", "s"))