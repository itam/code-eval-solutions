var isPrime = function(n) {
    if(n < 2) {
        return false;
    }
    
    var isPrime = true;
    
    for(var i = 2; i <= Math.sqrt(n); i++) {
        if(!(n % i)) {
            isPrime = false;
        }
    }
    
    return isPrime;
};

var isPalindrome = function(n) {
    return n == n.toString().split('').reverse().join('');   
};

for(var i = 1000; i >= 0; i--) {
    if(isPrime(i) && isPalindrome(i)) {
        console.log(i);
        return;
    }
}
