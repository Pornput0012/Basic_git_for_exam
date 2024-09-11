function sumTwoNumbers(a, b) {
    if(!a || !b || typeof(a) != "number" || typeof(b) != "number")
       { return null}
    return a + b
}

module.exports = sumTwoNumbers;
