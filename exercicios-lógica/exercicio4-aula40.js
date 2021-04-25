function verifyIfExistRepeatedNumbers(listOfNumbers) {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
    }
    return false;
}

//complexidade O(n²)