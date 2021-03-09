$(document).ready(function () {
  var WinHeight = $(".billboard").height() - 100;
  var BgColor = "rgba(255, 255, 255, .1)";
  var DarkBgColor = "rgba(238, 169, 89, .9)";

  $(window).scroll(function () {
    if ($(window).scrollTop() < WinHeight) {
      $("header").css("background-color", BgColor);
    } else {
      $("header").css("background-color", DarkBgColor);
    }
  });
});
function createAccount() {
  let form = document.getElementById("create-account");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-new", {
    method: "POST",
    body: JSON.stringify({
      fname: inputs[0].value,
      uname: inputs[1].value,
      passw: inputs[2].value,
      email: inputs[3].value,
    }),
    headers: {
      "Content-type": "application/json; charset= UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account has been created");
      console.log(json);
      form.reset();
    });
}

function login() {
  let loginForm = document.getElementById("login");
  let inputs = loginForm.getElementsByTagName("input");

  let uname = inputs[0].value;
  let passw = inputs[1].value;

  let users;
  fetch("http://127.0.0.1:5000/show-accounts/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      users = json;
      console.log(uname, passw, users);

      loggedIn = users.filter((user) => {
        return user.uname == uname && user.passw == passw;
      });
      alert("logged in success");
      console.log(json);
      loginForm.reset();
      //if (loggedIN.length >=1) {
      //    window.location.href ='./profile.html?userID=${loggedIN[0].id};'
      // }
    });
}
