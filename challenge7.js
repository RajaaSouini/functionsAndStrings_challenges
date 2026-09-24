function longestWord(paragraph){
    let table = paragraph.split(" ");
    let max = table[0];
    for(let i of table){
        if(i.length > max.length){
            max = i;
        }
    }
    return max
}
console.log(longestWord("The quick brown fox jumpsjjj over a lazy dog"))