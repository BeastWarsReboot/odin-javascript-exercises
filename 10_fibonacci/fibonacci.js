const fibonacci = function(n) {
    n = parseInt(n);
    if(n < 1) return 'OOPS';
    else {
        let count = 1;
        let n1 = 0, n2 = 1, fib;
        while(count < n){
            fib = n1 + n2;
            n1 = n2;
            n2 = fib;
            console.log(fib);
            count++;
        }

        return fib;
    }
    /*
    parseInt to make string a number if it isnt yet
    if n is less than 1, error message
    otherwise create var for count, first term, second term and fib number
    while count is less than n
        fib equals sum of first and second term
        term one is equal to term two
        term two is equal to fib
        increment counter
        when count is equal to n, exit
    return fib sequence number
    */

};


// Do not edit below this line
module.exports = fibonacci;
