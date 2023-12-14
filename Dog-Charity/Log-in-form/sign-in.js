var email = document.getElementById("email");
var password = document.getElementById("password");
var SubmitBtn = document.getElementById("submitBtn");

const resetFields = () => {
  if (email.value != "" || password.value != "") {
    email.value = "";
    password.value = "";
  }
};

SubmitBtn.addEventListener("click", () => {
  if (email.value === "abc@gmail.com" || password.value === "123456") {
    resetFields();
    window.location.href = "../Main-app/main-app.html";
  } else {
    console.log("Fail");
  }
});
