
document.addEventListener('DOMContentLoaded', function () {
    Validator({
        form: '#login__container',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#loginEmail'),
            Validator.minLength('#loginPassword', 6),
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
            let checkUser = listUsers.find((user) => {
                return user.email === data.loginEmail && user.password === data.loginPassword
            })
            console.log(checkUser)
            if (checkUser) {
                window.location.href = "../index.html";
                localStorage.setItem("checkLogin", checkUser.idUser);
                document.getElementById("loginEmail").value = "";
                document.getElementById("loginPassword").value = "";
               
                return;
            } else {
                alert("User email or password is wrong");
            }
        }
    });
});