

const logInFunction = () => {
   const userEmail = document.getElementById('inputEmail').value;
   const userPassword = document.getElementById('inputPassword').value;

   window.alert(userEmail + userPassword);
};
document.getElementById('btnLogIn').addEventListener('click', () => {
    logInFunction()
});
