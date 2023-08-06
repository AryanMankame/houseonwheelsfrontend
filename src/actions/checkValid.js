const checkEmail = (email) => {
    return email.includes('@gmail.com');
}
const checkPassword = (password) => {
    return password.length >= 6
}
export {checkEmail, checkPassword}