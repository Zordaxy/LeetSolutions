// 204. Count Primes
// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) {
        return 0;
    }
    return optimal(n);
    // return def(n);
};

const def = n => {
    let counter = 0;
    const isPrime = num => {
        let sqrt = Math.sqrt(num);
        for (j = 2; j <= sqrt; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            counter++
        }
    }
    return counter;
}

// Sieve of Eratosthenes
const optimal = n => {
    // treat all numbers as possibly prime
    let auxArr = new Array(n).fill(true);
    auxArr[0] = false;
    auxArr[1] = false;
    // if number is not removed before 2 -> sqrt check than it will not be removed.
    let sqrt = Math.sqrt(n);
        
    // remove all values with factor i
    for (let i = 2; i <= sqrt; i++) {
        if (auxArr[i]) {
            let num = i + i;
            while (num < n) {
                auxArr[num] = false;
                num +=i;
            }
        }
    }
    return auxArr.filter(x => x).length;
}