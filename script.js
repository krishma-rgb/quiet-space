function checkPassword(correctPassword) {
  const entered = prompt("🗝️ enter the key");
  if (entered !== correctPassword) {
    alert("this space is private 🖤");
    window.location.href = "index.html";
  }
}
