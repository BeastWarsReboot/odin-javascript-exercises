const fibonacci = function(n) {
    n = parseInt(n);
    if(n < 1) return 'OOPS';
    else {
        let count = 1, n1 = 0, n2 = 1, fib = 1;
        while(count < n){
            fib = n1 + n2;
            n1 = n2;
            n2 = fib;
            count++;
        } return fib;
    }
};


// Do not edit below this line
module.exports = fibonacci;
