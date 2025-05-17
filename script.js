let toggleMenu = document.getElementById("toggle-menu");
let navLinks = document.getElementById("nav-links");

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

let form = document.getElementById("contactForm");
let responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let number = document.getElementById("number").value;

  let userData = JSON.parse(localStorage.getItem("user-details")) ?? [];
  userData.push({
    name: name,
    email: email,
    message: message,
    number: number,
  });

  localStorage.setItem("user-details", JSON.stringify(userData));

  if (name && email && message && number) {
    responseMessage.style.color = "green";
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

    form.reset();
  } else {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Please fill all fields correctly.";
  }
});

function changecolor(color) {
  document.body.style.backgroundColor = "#000000";

  let txt = document.getElementsByClassName("color-switch");
  if (color == "#000000") {
    for (let elm of txt) {
      elm.style.color = "white";
    }
  }
}

function changecolor2(color) {
  document.body.style.backgroundColor = "#f9f9f9";

  let txt2 = document.getElementsByClassName("color-switch");
  if (color == "#f9f9f9") {
    for (let elm2 of txt2) {
      elm2.style.color = "black";
    }
  }
}

let mobileInput = document.getElementById("number");
let errorMsg = document.getElementById("error");

mobileInput.addEventListener("keyup", function (i) {
  let mobileValue = mobileInput.value;
  i.preventDefault();

  if (isNaN(mobileValue)) {
    errorMsg.innerText = "Only Numbers Allowed!";
    errorMsg.style.color = "red";

    mobileInput.reset();
  } else if (mobileValue.length != 10) {
    errorMsg.innerText = "Mobile Number must be 10 digits!";
    errorMsg.style.color = "red";
  } else {
    errorMsg.innerText = "Valid Mobile Number";
    errorMsg.style.color = "green";
  }
});

function timer() {
  var d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let session = "Am";

  if (hour >= 12) {
    session = "Pm";
  }

  hour = hour % 12;
  hour = hour ? hour : 12;

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = hour + " : " + min + " : " + sec + " : " + session;
  document.getElementById("clock").innerText = time;
  setTimeout(timer, 1000);
}

function sum(...add) {
  let flag = 0;

  for (let i = 0; i < add.length; i++) {
    flag = flag + add[i];
  }

  console.log(flag);
}

sum(9, 3, 5);

function showInfo({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

showInfo({ name: "mayank", age: 20 });

let arry1 = [1, 2, 3, 4];
let arry2 = [5, 6, 7, 8];

let join = [...arry1, ...arry2];
console.log(join);

let result = [56, 78, 90, 79, 55];
for (let x of result) {
  console.log(x);
}

let student = {
  name: "mayank",
  age: 20,
  address: "gurugram",
  district: {
    postoffice: "dhankot",
    tehisl: "Kadipur",
  },
};

let {
  name: firstname,
  age,
  address,
  district: { postoffice: p_office, tehisl },
} = student;
console.log(p_office);

let num = [23, 43, 2, 1];

let [one, two, three, four] = num;

console.log(one);

window.addEventListener("DOMContentLoaded", function () {
  console.log("dom tree created");
});

var a = "mayank";
let newtype = Number(a);

console.log(typeof newtype);

let paras = document.getElementsByTagName("p");

console.log(paras);

console.log(document.body.firstChild);
console.log(window.innerWidth);
console.log(navLinks.innerText);

console.log(innerHeight);

function sumof(...adding) {
  let ans = 0;

  for (let i = 0; i < adding.length; i++) {
    ans = ans + adding[i];
  }

  console.log(ans);
}

sumof(10, 20, 30);

function fibonacci(n) {}
