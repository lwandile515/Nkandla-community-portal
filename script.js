
function createAccount() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const color = document.getElementById("color").value;

  if (!user || !pass) {
    alert("Sicela ugcwalise yonke imininingwane / Please fill all fields.");
    return;
  }

  const account = { password: pass, color: color };
  localStorage.setItem("user_" + user, JSON.stringify(account));
  alert("✅ Account created successfully!");
  window.location.href = "login.html";
}

function login() {
  const user = document.getElementById("loginUsername").value;
  const pass = document.getElementById("loginPassword").value;
  const color = document.getElementById("loginColor").value;

  const stored = JSON.parse(localStorage.getItem("user_" + user));
  if (!stored) {
    alert("❌ Account not found.");
    return;
  }

  if (stored.password === pass && stored.color === color) {
    localStorage.setItem("loggedInUser", user);
    alert("✅ Login successful!");
    window.location.href = "home.html";
  } else {
    alert("❌ Incorrect details.");
  }
}
