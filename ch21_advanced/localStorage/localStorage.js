// Load saved name when page loads
document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("username");
  if (savedName != undefined) {
    document.getElementById("message").textContent =
      "Welcome back, " + savedName + "!";
  }
});

// Save name
document.getElementById("saveBtn").addEventListener("click", function () {
  const name = document.getElementById("username").value;

  if (name.trim() === "") {
    alert("Please enter a name.");
    return;
  }

  localStorage.setItem("username", name);

  document.getElementById("message").textContent =
    "Name saved! Hello, " + name + "!";
});

// Clear name
document.getElementById("clearBtn").addEventListener("click", function () {
  localStorage.removeItem("username");
  document.getElementById("message").textContent = "Stored name cleared.";
});
