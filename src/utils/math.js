const calculateFactorial = value => {
    if(value === 0)
        return 1;

    let factorial = 1, increment = 1;

    for (; increment <= value; increment++) {
        factorial = factorial * increment;
    }
    
    return factorial;
}

export default calculateFactorial;
