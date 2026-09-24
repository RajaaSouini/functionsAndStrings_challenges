let email = "rajaasouini@gmail.com";

function getDomain(email){
    let res = email.split('@');
    return res[1];

}
console.log(getDomain(email));