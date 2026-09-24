//check if a word is palidrom
//une expression qui se lit de la meme maniere de la gauche et du droite

function palidrom(word){
    if(word.length % 2 === 0){
        return "it 's not a palindrom";
    }else{
        for(i = 0 ; i< word.length/2 ; i++){
            if(word[i] !== word[word.length-1-i]){
                return "it 's not a palindrom";
            }else{ 
                return "it's polidorm"
            }
        }
    }
}
console.log(palidrom("homme"));
