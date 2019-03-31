const validateNumber = input => {
    const reg = /^\d+$/;
    return reg.test(input);
};

export default validateNumber;