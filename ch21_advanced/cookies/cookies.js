// Set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Get cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return null;
}

// Delete cookie
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=0; path=/";
}

// Load cookie on page load
document.addEventListener("DOMContentLoaded", function () {
  let savedName = getCookie("username");
  if (savedName) {
    document.getElementById("message").textContent =
      "Welcome back, " + savedName + "!";
  }
});

// Save button
document.getElementById("saveBtn").addEventListener("click", function () {
  let name = document.getElementById("username").value;

  if (name.trim() === "") {
    alert("Please enter a name.");
    return;
  }

  setCookie("username", name, 7);

  document.getElementById("message").textContent =
    "Cookie saved! Hello, " + name + "!";
});

// Clear button
document.getElementById("clearBtn").addEventListener("click", function () {
  deleteCookie("username");
  document.getElementById("message").textContent = "Cookie cleared.";
});
