function generateUsername(firstName,lastName)
{
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}`

}


// console.log(generateUsername("Yassine", "Bahajou"));



function getInitials(fullname)
{
    let initials = ""

    let names = fullname.split(" ");

    for(let name of names)
    {
        initials +=name[0]
    }
    return initials
}

function getInitials_(fullname)
{
    let initials = fullname[0]

    for(let i=0;i<fullname.length;i++)
        if(fullname[i]===" ")
            initials +=fullname[i+1]

    return initials
}


// console.log(getInitials_("Med Yassine Bahajou"))

function getDomain(email)
{
    let index = email.indexOf("@")
    if(index === -1)
        return ""

    let domain = email.slice(index+1)

    return domain
}

function getDomain_(email)
{
    return email.split("@")[1]
}

function getDomain__(email)
{

    let index = 0;
    while (index < email.length && email[index]!="@")
        index++

    if(index === email.length)
        return ""

    let domain = ""

    for(let i=index+1;i<email.length;i++)
        domain += email[i]

    return domain


}

// console.log(getDomain__("youcode@safi.ma"))


function countVowels(str)
{
    let vowels = "aeiou";
    let count = 0;
    let lower_str = str.toLowerCase()

    for(let char of lower_str)
        if(vowels.includes(char))
            count ++

    return count

}

// console.log(countVowels_("JavAScript BOOtcamp"));

function countVowels_(str)
{
    let vowels = "aeiou";
    let count = 0;
    let lower_str = str.toLowerCase()

    for(let char of lower_str)
    {
        for(let vowel of vowels)
        {
            if(char === vowel) 
            {
                count++
                break
            }
        }
    }

    return count

}
// console.log(countVowels("YouCOde"));

function countWords(sentence)
{
    return sentence.split(" ").length
}

// console.log(countWords("Learning JavaScript is fun and rewarding"));


function countWords(sentence)
{
    let count = 1;
    for(let char of sentence.trim())
    {
        if(char === " ")count++
    }
    return count
}

// console.log(countWords("Learning JavaScript is fun and rewarding "));


function countCharacter(str, target)
{
    let count = 0;
    for(let char of str)
        if(char===target) count++

    return count
}

// console.log(countCharacter("mississippi", "p"));

function longestWord(sentence)
{
    let words = sentence.split(" ")
    console.log(words)
    let max_length = words[0].length
    let arr = []
    for(let word of words)
    {
        if(word.length === max_length){
            arr.push(word)
        }
        else if(word.length > max_length)
        {
            max_length = word.length
            arr = [word]
        }
            
    }
    return arr
}

// let max = longestWord("There quick brown fox jumps over a lazy dog")

// console.log(max, max.length);


function isPalindrome(str)
{
    let clean_str = str.replaceAll(" ","")
     let i=0,j=clean_str.length-1;

     while(i<j && clean_str[i]===clean_str[j])
     {
        i++;
        j--
     }

     if(i>=j) return true
     return false
}


console.log(isPalindrome("abba"));
console.log(isPalindrome("was it a car or a cat i saw"));