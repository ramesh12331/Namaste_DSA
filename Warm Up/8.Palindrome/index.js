function isPolindrom(n){
    if(n<0) return false;

    let rev=0;
    let original = n; // save original number
    while(n>0){
        let rem = n%10;
        rev = (rev*10) + rem;
        n = Math.floor(n/10);
    }
    if(rev === original){
        return true
    }else{
        return false
    }
}

let num = 121;

let result = isPolindrom(num);

console.log(result)