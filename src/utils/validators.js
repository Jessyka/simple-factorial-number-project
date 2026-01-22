const isValidValue = value => {
    var pattern = /^\d+$/;
    return pattern.test(value);
}

export default isValidValue;