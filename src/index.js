

module.exports = function getZerosCount(number, base) {
// your implementation
  
var prime_num = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
var p = [];
var a = [];
var base2 = base;
var next_prime = 0;
while (base2 > 1) {
    while (base2 % prime_num[next_prime] != 0) {
        next_prime++;
    }
    p.push (prime_num[next_prime]);
    var pow = 0;
    while (base2 % prime_num[next_prime] == 0) {
        pow++;
        base2 /= prime_num[next_prime];
    }
    a.push(pow);
}

var numbers = number;

for (var i = 0; i < p.length; ++i) {
    var c = 0;
    var number_for_devide = number;

    while (number_for_devide / p[i] > 0) {
        c += Math.floor(number_for_devide/p[i]);
        number_for_devide = Math.floor(number_for_devide/p[i]);
    }
    numbers = Math.floor(Math.min(numbers, c/a[i]));
}

return numbers;
};