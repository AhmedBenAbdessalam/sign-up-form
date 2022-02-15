const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");
pwdConfirm.addEventListener("focusout", () => {
  if (pwdConfirm.value !== pwd.value) {
    pwdConfirm.classList.add("pwd-wrong");
  } else {
    pwdConfirm.classList.remove("pwd-wrong");
  }
});

pwd.addEventListener("focusout", () => {
  if (pwdConfirm.value !== pwd.value) {
    pwdConfirm.classList.add("pwd-wrong");
  } else {
    pwdConfirm.classList.remove("pwd-wrong");
  }
});
