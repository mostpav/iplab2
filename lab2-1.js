// lab2-1.js

// Повертає true, якщо num є цілим числом.
function isInteger(num) {
    return Number.isInteger(num);
}

// Виводить прості числа на проміжку [a, b] у консоль.
function findPrimes(a, b) {
    const start = Math.ceil(Math.min(a, b));
    const end = Math.floor(Math.max(a, b));

    for (let n = Math.max(2, start); n <= end; n++) {
        let prime = true;

        for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
            if (n % divisor === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            console.log(n);
        }
    }
}
