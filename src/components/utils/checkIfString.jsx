const checkIfString = input => {
    const reg = /[^0-9]/;
    return reg.test(input);
}

export default checkIfString;