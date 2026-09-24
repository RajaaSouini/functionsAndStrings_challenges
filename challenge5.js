let paragraph = "Learning JavaScript is fun and rewarding";

function countWords(paragraph){
    let count = 1 ;
    for(let i of paragraph){
        if(i === " "){
            count+= 1 ;
        }
    }
    return count;
}

console.log(countWords(paragraph));