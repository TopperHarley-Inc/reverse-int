module.exports = function reverse (n) {
    let reversedNumber = '';
    const nLength = String(n).length;
    const nString = String(n);

    function counter () {
        let i = nLength;
        while (i > 0) {
        reversedNumber = reversedNumber + nString[i - 1];
        i = i - 1;
        }
    }

    if (n < 0) {
        counter();
        reversedNumber = reversedNumber.slice(0, reversedNumber.length - 1);
    }
    else {
        counter();
    }

    return reversedNumber;
}