module.exports = (message) => {
    return /^\p{Extended_Pictographic}$/u.test(message);
};