let pin = "";
localStorage.setItem("localPin", 1384);
let input = document.getElementById("pin-input");

let stats = false;
function addPin(number) {
  pin += number;
  input.value = pin;
}

function clearPin() {
  pin = pin.substring(0, pin.length - 1);
  input.value = pin;
}

function submit() {
  const pin = localStorage.getItem("pin");
  const currentPin = input.value;
  if (stats) {
    if (input.value === localStorage.getItem("localPin")) {
      alert("رمز ادمین تایید شد ");
      alert("رمز جدید خود را مجدد تنظیم کنید");
      localStorage.removeItem("pin");
      stats = false;
      input.value = "";
    }
  } else {
    if (+pin === +currentPin) {
      input.style.borderColor = "green";
      input.value = "";
      setTimeout(function () {
        window.location.href = "new.html";
      }, 2000);
    } else {
      input.style.borderColor = "red";
      input.value = "";
    }
  }
}

function createPin() {
  localStorage.setItem("pin", input.value);
  alert("حل چشاته");
}

function Super() {
  const pin = localStorage.getItem("pin");
  if (pin) {
    submit();
  } else createPin();
}

function newPass() {
  stats = true;

  alert("رمز ادمین را وارد کنید");
}
