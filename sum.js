function sumTwoNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null
    }
    
    return a + b
}

module.exports = sumTwoNumbers;
