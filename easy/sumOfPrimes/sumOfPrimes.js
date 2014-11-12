var sum = 0;
var count = 0;
var number = 2;

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

while(count < 1000) {
    if(isPrime(number)) {
        sum += number;
        count++;
    }
    
    number++;
}

console.log(sum);
