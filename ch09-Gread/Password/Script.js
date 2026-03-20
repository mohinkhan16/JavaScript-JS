<<<<<<< HEAD
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let currentpassword = "123456";   

    let oldpassword = document.getElementById("oldpassword").value;
    let newpassword = document.getElementById("newpassword").value;

    let status = document.getElementById("status");

    if (oldpassword.length < 6) {
        status.textContent = "password must be 6 letter";

    } else if (oldpassword !== currentpassword) {
        status.textContent = "old password is not matched with current password";

    } else if (newpassword === currentpassword) {
        status.textContent = "new password is same as old password you have to change";

    } else {
        currentpassword = newpassword;
        status.textContent = "password update";
    }
});
=======
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let currentpassword = "123456";   

    let oldpassword = document.getElementById("oldpassword").value;
    let newpassword = document.getElementById("newpassword").value;

    let status = document.getElementById("status");

    if (oldpassword.length < 6) {
        status.textContent = "password must be 6 letter";

    } else if (oldpassword !== currentpassword) {
        status.textContent = "old password is not matched with current password";

    } else if (newpassword === currentpassword) {
        status.textContent = "new password is same as old password you have to change";

    } else {
        currentpassword = newpassword;
        status.textContent = "password update";
    }
});
>>>>>>> ebcb54a8f2fc9f65ec674abe7f05616885dec8ff
